# CDRM Web Application

A modern web application built with **Next.js (App Router)** featuring authentication, content pages, and form handling.  
The project uses **Firebase Authentication** (Email/Password & Google Sign-In) and **MongoDB** for data storage, with a responsive UI powered by **Tailwind CSS + DaisyUI**.

---

## 🚀 Features

- ✅ Next.js 14 (App Router)
- 🔐 Authentication with Firebase
  - Email & Password
  - Google Sign-In
  - Auto account creation on first login
- 🧭 Single login page (no separate registration page)
- 🧑 Profile-aware Navbar (Login / Avatar / Logout)
- 📝 Contact form with MongoDB storage
- 📰 Blog system (JSON-based, extendable to DB)
- 📱 Fully responsive (mobile-friendly)
- 🎨 Tailwind CSS + DaisyUI UI components

---

## 🛠 Tech Stack

- **Frontend:** Next.js, React, TypeScript
- **Styling:** Tailwind CSS, DaisyUI
- **Authentication:** Firebase Auth
- **Database:** MongoDB (Atlas)
- **Forms:** React Hook Form
- **Hosting (Dev):** GitHub Codespaces

---

## 🔐 Environment Variables

Create a `.env.local` file in the `cdrm` directory with:

```bash
MONGODB_URI=your_mongodb_connection_string
MONGODB_DB=mydatabase
```

---

## 📁 Project Structure
