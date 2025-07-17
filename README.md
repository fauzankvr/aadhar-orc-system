Aadhaar OCR System

A full-stack application for extracting key personal details (Name, Date of Birth, Gender, Aadhaar Number) from uploaded Aadhaar card images (front and back) using Tesseract.js for OCR. The system is user-friendly, deployment-ready, and built with a modern tech stack.
📌 Overview
The Aadhaar OCR System allows users to:

Upload front and back images of their Aadhaar card.
Automatically extract key details using Tesseract.js.
Display extracted data in a clean, structured UI.
Deploy seamlessly with Netlify (frontend) and Render (backend).

🚀 Live Demo

Frontend: inventora.netlify.app

🖥️ Tech Stack



Component
Technology



Frontend
React (Vite)


Backend
Node.js + Express


OCR Engine
Tesseract.js


Database
MongoDB (optional for storage)


Deployment
Netlify (Frontend), Render (Backend)


🔑 Features

✅ Upload Aadhaar Card: Upload front and back images securely.
✅ OCR Integration: Extract Name, DOB, Gender, and Aadhaar Number using Tesseract.js.
✅ Real-time Rendering: Display extracted data instantly in a clean UI.
✅ Deployment-Ready: Fully configured for Netlify and Render.
✅ Responsive Design: Works seamlessly on desktop and mobile.

🛠 Installation & Setup
Follow these steps to set up the project locally.
📋 Prerequisites
Ensure you have the following installed:

Node.js (LTS recommended)
Git
npm or Yarn
MongoDB (running locally or via cloud, e.g., MongoDB Atlas)

📥 Clone the Repository
git clone https://github.com/your-username/aadhaar-ocr-app.git
cd aadhaar-ocr-app

🚀 Running the Application
1️⃣ Start the Frontend
Navigate to the client directory and install dependencies:
cd client
npm install
npm run dev

The frontend will run at http://localhost:5173 (or the port specified by Vite).
2️⃣ Start the Backend
In a new terminal, navigate to the server directory and install dependencies:
cd server
npm install
npm start

The backend will run at http://localhost:5000 (or the port specified in your .env file).
⚠️ Important Notes

MongoDB: Ensure MongoDB is running locally or configure a cloud instance (e.g., MongoDB Atlas). Update the MONGODB_URI in your .env file.
Environment Variables: Create a .env file in the server directory with:MONGODB_URI=your_mongodb_connection_string
PORT=5000

For the frontend, configure the API URL in client/vite.config.js or client/package.json if using a proxy.
Proxy Setup: If you encounter CORS issues, ensure the backend URL is correctly set in the frontend's proxy configuration.

📂 Project Structure
aadhaar-ocr-app/
├── client/                 # React frontend (Vite)
│   ├── src/                # React components, pages, and assets
│   └── vite.config.js      # Vite configuration
├── server/                 # Node.js + Express backend
│   ├── routes/             # API routes
│   ├── controllers/        # Business logic
│   └── config/             # Database and environment setup
└── README.md               # Project documentation

🌐 Deployment
Frontend (Netlify)

Push the client directory to a GitHub repository.
Connect the repository to Netlify.
Set the build command to npm run build and the publish directory to dist.

Backend (Render)

Push the server directory to a GitHub repository.
Connect the repository to Render.
Configure the environment variables (e.g., MONGODB_URI, PORT) in Render's dashboard.
Set the start command to npm start.

🛡️ Security Considerations

Image Handling: Ensure uploaded images are processed securely and not stored unnecessarily.
Aadhaar Number: Mask or encrypt sensitive data to comply with privacy regulations.
CORS: Properly configure CORS in the backend to allow requests only from trusted origins.

🤝 Contributing
Contributions are welcome! Please follow these steps:

Fork the repository.
Create a new branch (git checkout -b feature/your-feature).
Commit your changes (git commit -m 'Add your feature').
Push to the branch (git push origin feature/your-feature).
Open a Pull Request.

📜 License
This project is licensed under the MIT License.
📧 Contact
For questions or feedback, reach out to your-email@example.com.