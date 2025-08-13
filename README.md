# 🔐 Security Educational Platform

This project consists of a **client** and a **server** folder.

- The **client** is a frontend app built with npm, running on `localhost:5173`.
- The **server** is a backend API, running on `localhost:8000`, handling login with JWT authentication.

---

## 🚀 How to Run

### 🔧 Prerequisites

- Node.js ≥ 18
- MongoDB (local or cloud)

---

### ▶️ Backend Setup

1. Navigate to the `server` folder:
   ```bash
   cd server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file with the following variables (see example below).
4. Start the backend server:
   ```bash
   npm run dev
   ```
5. The backend will run on:
   ```
   http://localhost:8000
   ```

---

### 💻 Frontend Setup

1. Navigate to the `client` folder:
   ```bash
   cd client
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the frontend development server:
   ```bash
   npm run dev
   ```
4. The client will run on:
   ```
   http://localhost:5173
   ```

---

## 🔐 Environment Variables

### Backend `.env` example

```env
PORT=8000
MONGO_URL=your-mongodb-connection-string
CORS_ORIGIN=http://localhost:5173
JWT_SECRET=your-generated-jwt-secret
```

- **PORT**: The port your backend listens on (default 8000).
- **MONGO_URL**: MongoDB connection string.
- **CORS_ORIGIN**: URL allowed for CORS requests, typically your frontend URL.
- **JWT_SECRET**: Secret key for signing JWT tokens.

---

### Generating your JWT_SECRET

Run this command in your terminal to generate a secure secret:

```bash
openssl rand -base64 48
```

Copy the output string and paste it as the value of `JWT_SECRET` in your `.env` file.

---

## 🛠️ Tech Stack Overview

| Layer    | Tech                             |
| -------- | -------------------------------- |
| Frontend | React / Vite (npm)               |
| Backend  | Node.js + Express                |
| Database | MongoDB                          |
| Auth     | JWT (JSON Web Tokens)            |
| CORS     | Configured to allow frontend URL |

---

## 📝 Notes

- Make sure MongoDB is running locally or accessible if using a cloud service like Atlas.
- The backend uses JWT-based authentication to secure routes.
- The frontend interacts with the backend API at `http://localhost:8000`.
