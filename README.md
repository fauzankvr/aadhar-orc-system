# 📄 Aadhaar OCR Application

![Node.js](https://img.shields.io/badge/Node.js-339933?logo=nodedotjs&logoColor=white&style=flat-square)
![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black&style=flat-square)
![Tesseract.js](https://img.shields.io/badge/Tesseract.js-4B0082?logo=javascript&logoColor=white&style=flat-square)
![Netlify](https://img.shields.io/badge/Netlify-00C7B7?logo=netlify&logoColor=white&style=flat-square)
![Render](https://img.shields.io/badge/Render-46E3B7?logo=render&logoColor=white&style=flat-square)

A full-stack application that enables users to upload front and back images of their Aadhaar card, extract key details (Name, Date of Birth, Gender, Aadhaar Number) using Tesseract.js for OCR, and display them in a clean, structured format.

## 📌 Description

The Aadhaar OCR Application provides a seamless way to:
- Upload Aadhaar card images (front and back).
- Extract personal details using Tesseract.js OCR.
- Render extracted data in real-time on a user-friendly interface.
- Deploy effortlessly with Netlify (frontend) and Render (backend).

## 🚀 Live Demo

- **Frontend**: [aadharocrsystem.netlify.app](https://aadharocrsystem.netlify.app)

## 🖥️ Tech Stack

| Component       | Technology            |
|-----------------|-----------------------|
| **Frontend**    | React (Vite)          |
| **Backend**     | Node.js + Express     |
| **OCR Engine**  | Tesseract.js          |
| **Database**    | MongoDB (optional)    |
| **Deployment**  | Netlify (Frontend), Render (Backend) |

## 🔑 Features

- ✅ **Image Upload**: Securely upload front and back Aadhaar card images.
- ✅ **OCR Integration**: Extract Name, DOB, Gender, and Aadhaar Number using Tesseract.js.
- ✅ **Real-time UI**: Display extracted data instantly in a structured format.
- ✅ **Responsive Design**: Optimized for both desktop and mobile devices.
- ✅ **Deployment-Ready**: Configured for Netlify and Render.

## 🛠 Installation & Setup (Local Development)

Follow these steps to run the MERN application locally.

### 📋 Prerequisites

Ensure the following are installed:
- [Node.js](https://nodejs.org/) (LTS version recommended)
- [Git](https://git-scm.com/)
- [MongoDB](https://www.mongodb.com/) (running locally or via MongoDB Atlas)
- npm or Yarn

### 📥 Clone the Repository

```bash
git clone https://github.com/your-username/aadhaar-ocr-app.git
cd aadhaar-ocr-app
```

### 🚀 Running the Application (MERN Setup)

#### 1️⃣ Install Dependencies

For both frontend and backend, install dependencies:

```bash
# Frontend
cd client
npm install

# Backend (in a new terminal)
cd server
npm install
```

#### 2️⃣ Start the Frontend

```bash
cd client
npm run start
```

The frontend will open at `http://localhost:3000` (or the port specified by Vite/React).

#### 3️⃣ Start the Backend

In a new terminal:

```bash
cd server
npm start
```

The backend will run at `http://localhost:5000` (or the port specified in your `.env` file).

### ⚠️ Important Notes

- **MongoDB**: Ensure MongoDB is running locally or configured via a cloud service (e.g., MongoDB Atlas). Set the `MONGODB_URI` in the `server/.env` file:

  ```env
  MONGODB_URI=your_mongodb_connection_string
  PORT=5000
  ```

- **Proxy Setup**: If using a proxy, configure the backend URL in `client/package.json` or `client/vite.config.js` to avoid CORS issues, e.g.:

  ```json
  "proxy": "http://localhost:5000"
  ```

- **Tesseract.js**: Ensure Tesseract.js dependencies are correctly installed in the backend (`npm install tesseract.js`).

- **Troubleshooting**: Check terminal logs for errors if the app doesn’t start. Verify MongoDB is running and environment variables are set.

## 📂 Project Structure

```
aadhaar-ocr-app/
├── client/                 # React frontend (Vite)
│   ├── src/                # Components, pages, and assets
│   └── vite.config.js      # Vite configuration
├── server/                 # Node.js + Express backend
│   ├── routes/             # API routes
│   ├── controllers/        # Business logic
│   └── config/             # Database and environment setup
└── README.md               # Project documentation
```

## 🌐 Deployment

### Frontend (Netlify)

1. Push the `client` directory to a GitHub repository.
2. Connect the repository to Netlify.
3. Set the build command to `npm run build` and the publish directory to `dist`.

### Backend (Render)

1. Push the `server` directory to a GitHub repository.
2. Connect the repository to Render.
3. Configure environment variables (`MONGODB_URI`, `PORT`) in Render’s dashboard.
4. Set the start command to `npm start`.

## 🛡️ Security Considerations

- **Image Handling**: Process images securely and avoid storing sensitive data unnecessarily.
- **Aadhaar Number**: Mask or encrypt Aadhaar numbers to comply with privacy regulations.
- **CORS**: Configure CORS in the backend to allow requests only from trusted origins (e.g., your Netlify domains).

## 🤝 Contributing

We welcome contributions! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add your feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a Pull Request.

