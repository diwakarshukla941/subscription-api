# 📌 Subscription Tracking API  

A Node.js + Express backend API for **subscription tracking and reminders**, with authentication, rate limiting, email notifications, and workflow automation.  

---

## 🚀 Features  

- User authentication (JWT-based)  
- Subscription management (CRUD + renewal tracking)  
- Email reminders using **Nodemailer**  
- Rate-limiting & bot detection with **Arcjet**  
- Workflow automation with **QStash**  
- MongoDB database integration  

---

## ⚙️ Tech Stack  

- **Node.js** + **Express.js**  
- **MongoDB (Mongoose)**  
- **JWT Authentication**  
- **Arcjet** for rate limiting  
- **Nodemailer** for email reminders  
- **QStash** for workflow scheduling  

---

## 📂 Project Setup  

### 1️⃣ Clone Repository  
```bash
git clone <your-repo-url>
cd <project-folder>
```

### 2️⃣ Install Dependencies  
```bash
npm install
```

### 3️⃣ Setup Environment Variables  
Create a `.env` file in the root folder and add the following keys:  

```env
# PORT
PORT=5500
SERVER_URL="http://localhost:5500"

# Database
DB_URI="your_mongodb_uri"
NODE_ENV=development

# JWT Authentication
JWT_SECRET="your_jwt_secret"
JWT_EXPIRES_IN="1d"

# ARCJET API Key (Get from: https://arcjet.com)
ARCJET_KEY="your_arcjet_api_key"
ARCJET_ENV="development"

# QStash (Local Dev Example)
QSTASH_URL=http://127.0.0.1:8080
QSTASH_TOKEN="your_qstash_token"

# Nodemailer (Generate App Password from Google Account Security → App Passwords)
EMAIL_PASSWORD="your_google_app_password"
```

---

## 🔑 Getting Credentials  

- **MongoDB URI** → Get from [MongoDB Atlas](https://www.mongodb.com/atlas/database)  
- **JWT Secret** → Generate any random secure string  
- **Arcjet Key** → Create an account on [Arcjet](https://arcjet.com)  
- **QStash Token** → Use default for local dev or generate from QStash docs  
- **Email Password** → Use **App Password** from Google (not your Gmail password)  
  - Go to [Google App Passwords](https://myaccount.google.com/apppasswords)  
  - Create a new app → Copy generated password → Use in `EMAIL_PASSWORD`  

---

## ▶️ Run the Project  

```bash
npm run dev
```

Server will start at:  
👉 [http://localhost:5500](http://localhost:5500)  

---

## 📡 API Endpoints  

### 🌍 Base URL:  
```
http://localhost:5500/api/v1
```

---

### 🔑 Auth Routes  
| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/auth/sign-up` | Register new user |
| `POST` | `/auth/sign-in` | Login user & get token |

---

### 👤 User Routes  
| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/users` | Get all users |
| `GET` | `/users/:id` | Get user by ID (protected) |
| `POST` | `/users` | Create new user |
---

### 💳 Subscription Routes  
| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/subscriptions` | Create subscription (protected) |
| `GET` | `/subscriptions/user/:id` | Get subscriptions of a user (protected) |
---

### 🔄 Workflow Routes  
| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/workflows/subscription/reminder` | Trigger subscription reminder workflow |

---

### 🏠 Root Endpoint  
| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/` | Welcome message |

---

## ✅ Next Steps  
- Add automated tests  
- Deploy on **Render / Vercel / AWS**  
- Setup CI/CD pipeline  

---

✨ **Now you can always revisit this README to quickly set up your project again.**  
