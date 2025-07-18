import express, { Request, Response } from 'express';
import cors from 'cors';
import orcRouter from './presentation/routes/orc.route';
import { connectDB } from './infrastructure/mongoose';
import { config } from './config/env';

// Initialize the Express application
const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//  Proper CORS Configuration
app.use(
  cors({
    origin: ["http://localhost:5173", "https://aadharocrsystem.netlify.app"],
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Define your routes here
app.use("/api", orcRouter)


const PORT = config.port;

connectDB()
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((error) => {
    console.error("Database connection failed:", error);
    process.exit(1);
  });

export default app