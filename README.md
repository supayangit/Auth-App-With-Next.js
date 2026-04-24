# 🔐 Next.js Authentication App

A modern authentication system built with **Next.js**, featuring secure user signup and login using **Better Auth** and **MongoDB**. The project demonstrates protected routes, session handling, and conditional navigation based on authentication state.

---

## 🚀 Tech Stack

* **Next.js (App Router)**
* **JavaScript**
* **Tailwind CSS**
* **HeroUI**
* **Better Auth**
* **MongoDB Atlas**

---

## ✨ Features

* User **Sign Up** with name, email, and password
* User **Sign In** with session handling
* Secure authentication using Better Auth
* MongoDB database integration
* Protected routes (e.g. dashboard)
* Automatic redirects based on authentication state
* Conditional UI rendering (navbar, pages, etc.)
* Full-page reload after login to ensure fresh session state

---

## 🔒 Route Protection

* Certain routes (e.g. `/dashboard`) are **restricted**
* If a user is **not logged in**, they are:

  * Redirected to the **sign-in page**
* Authenticated users can:

  * Access protected pages
  * Navigate freely across the app

---

## 🔄 Authentication Flow

### Sign Up

1. User submits name, email, and password
2. Account is created in MongoDB
3. User can proceed to sign in

### Sign In

1. User submits credentials
2. Better Auth validates and creates session
3. User is redirected to home/dashboard
4. Session persists across navigation

---

## 📁 Project Structure (Simplified)

```
src/
│
├── app/
│   ├── api/auth/[...all]/route.js   # Better Auth API handler
│   ├── auth/
│   │   ├── signin/page.jsx
│   │   └── signup/page.jsx
│   ├── dashboard/page.jsx          # Protected route
│   └── page.jsx                    # Home page
│
├── lib/
│   ├── auth.js                     # Better Auth server config
│   └── auth-client.js              # Client-side auth instance
```

---

## ⚙️ Environment Variables

Create a `.env.local` file:

```
BETTER_AUTH_MONGODB_URI=your_mongodb_connection_string
BETTER_AUTH_SECRET=your_secret_key
BETTER_AUTH_URL=http://localhost:3000
```

---

## 🛠️ Installation

```bash
npm install
```

---

## ▶️ Run the App

```bash
npm run dev
```

Visit:

```
http://localhost:3000
```

---

## 🧠 Key Concepts Used

* Client vs Server components in Next.js
* API route handling with Better Auth
* MongoDB connection and adapter usage
* Form handling and validation
* Authentication state management
* Conditional rendering and redirects

---

## 📌 Notes

* Authentication state is handled via Better Auth sessions
* Redirects are manually controlled for reliability in client components
* MongoDB Atlas is used as the cloud database
* UI built with HeroUI + Tailwind for clean design

---

## 📈 Future Improvements

* Add OAuth (Google, GitHub login)
* Email verification
* Password reset flow
* Role-based access control
* Improved dashboard functionality

---

## 📄 License

This project is for learning and development purposes. Created and tested by Supayan Chakma!! ;)
