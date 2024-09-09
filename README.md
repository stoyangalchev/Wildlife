# 🦁 Wildlife Photography Backend API 🌿

Welcome to the **Wildlife Photography** platform – the backend API for managing user registrations, profiles, and wildlife photos. Users can upload their wildlife photos, vote on others' photos, and manage their content. 📸✨

---
## 🌍 Deployed ✅ -> [Click Here]()

## 📸Screenshot
![Screenshot](./Screenshot.png)

## 🚀 Getting Started

### 🛠️ Development Server

To start the server, simply run:

```bash
npm start
```

The server will run at `http://localhost:3000/` (or the port you specify in your `.env` file). Make sure to configure the environment variables in your `.env` file before starting the server.

---

## 📄 Pages

### 🏠 Home Page

Displays an introduction to the app, along with a few featured wildlife photos. 🌍🦅

### 🔐 Login Page

Allows users to log in with their existing accounts. 🔑

### 📝 Register Page

New users can create an account by providing a username, email, and password. Password hashing is handled by **bcrypt** for security. 🔒

### 👤 Profile Page

Once logged in, users can view their profile information, including their uploaded photos and the ability to edit or delete them. 🦌

### ➕ Add Photo Page

Logged-in users can upload their wildlife photos, including a title and description. All photos are stored in the database for future reference. 📸

### 🔍 Photo Details Page

Users can view the details of individual photos, including the ability to vote up or down. 🌿📊

### ✏️ Edit & Delete Photo

The photo owner can edit or delete their uploaded photos. This ensures that users have full control over their content. 🛠️❌

### 👍 Voting System

Users can vote up or down on each photo, helping the community highlight the best wildlife photography. 📈

---

## 💻 Installation

1. Clone the repository:

```bash
git clone https://github.com/stoyangalchev/Wildlife.git
```

2. Navigate to the project directory:

```bash
cd Wildlife
```

3. Install dependencies:

```bash
npm install
```

4. Set up your `.env` file with the following:

```
PORT=3000
DB_CONNECTION_STRING=your-mongodb-uri
AUTH_COOKIE_NAME=your-cookie-name
JWT_SECRET=your-secret-key
```

5. Start the server:

```
npm start
```

---

## 🔧 Available Scripts

In the project directory, you can run:

- `npm start` – Starts the backend server


---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express
- **Database:** MongoDB (Mongoose)
- **Authentication:** JSON Web Token (JWT)
- **Security:** Bcrypt for password hashing
- **Session Management:** Express-Session

---

## 🐛 Issues

If you encounter any issues, feel free to open a GitHub issue here: [Issues Page](https://github.com/stoyangalchev/Wildlife/issues). 🐞

## 📄 License

This project is licensed under the ISC License. See the [LICENSE](https://github.com/YourUsername/Wildlife-Photography-Backend/blob/main/LICENSE) file for details.

---

Feel free to modify the repository links, setup steps, and any details specific to your app!
