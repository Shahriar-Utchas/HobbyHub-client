# 🎨 HobbyHub - Local Hobby Group Organizer (Client)

[![Live Site](https://img.shields.io/badge/Live_Site-Click_Here-00bcd4?style=for-the-badge)](https://hobbyhub-by-utchas.vercel.app)

## 📖 About the Project

**HobbyHub** is a platform where people can discover and join local hobby-based groups (e.g., book clubs, hiking crews, painting circles) or create their own. It encourages social engagement through shared interests, helping people build communities around their passions.

## 🚀 Features

- 🔐 **Authentication**
  - Firebase login with Email/Password
  - OAuth Sign-in (Google & GitHub)
- 🧑‍🤝‍🧑 **Group Creation & Management** for registered users
- 🔒 **Protected Routes** with persistent login state
- 🌙 **Dark/Light Theme Toggle**
- ⚡ **Responsive UI** for desktop, tablet, and mobile
- 🧁 **SweetAlert2** for elegant notifications
- 🎞️ **Lottie Animations** & **React Awesome Reveal**
- 🧭 **Dynamic Routing** and custom 404 page

---

## 📄 Pages Overview

- **Home Page** – Highlights groups and features
- **Login/Register** – Firebase auth system
- **Dashboard** – User-specific actions like create/edit/delete groups
- **Group Details** – Dynamic route with details, member list, and CTA to join
- **404 Page** – Custom error page with animation
- **Loading Spinner** – Global fallback UI

## 📁 Project Folder Structure
```
HobbyHub-client-side/
├── public/         # Static assets (e.g., logos, icons)
├── src/            # Main source code
│   ├── components/ # Reusable UI components
│   ├── context/    # React Context for global state (e.g., Auth)
│   ├── layout/     # Shared layout components
│   ├── pages/      # Route-based page components
│   ├── routes/     # Route configuration
│   ├── Firebase/   # Firebase config
│   ├── Provider/   # Auth provider for context API
│   └── main.jsx    # Application entry point
├── .env            # Environment variables
├── package.json    # Dependencies and scripts
└── README.md       # Project documentation

```
## 🛠 Tech Stack

| Tech            | Description                       |
|-----------------|-----------------------------------|
| React 19        | Frontend framework                |
| Firebase        | Auth and backend support          |
| React Router v7 | Declarative routing               |
| Tailwind CSS    | Utility-first CSS framework       |
| DaisyUI         | Tailwind component library        |
| Vite            | Next-gen front-end tool           |
| AOS             | Animate on scroll library         |
| Lottie          | JSON-based animations             |
| Framer Motion   | Smooth UI transitions             |
| SweetAlert2     | Stylish alert and confirm popups  |

---

## 🧩 How to Install & Run Locally

Follow these steps to run the project on your local machine:

### 1. Clone the Repository

```sh
git clone git@github.com:Shahriar-Utchas/HobbyHub-client-side.git
```
2. Go to the project folder ```cd HobbyHub-client-side```
3. Install Project Dependencies
```sh
npm install
```
4. Set Up Firebase Environment Variables : Create a .env file in the root directory and add:
```sh
VITE_API_KEY=your_firebase_api_key
VITE_AUTH_DOMAIN=your_auth_domain
VITE_PROJECT_ID=your_project_id
VITE_STORAGE_BUCKET=your_storage_bucket
VITE_MESSAGING_SENDER_ID=your_messaging_id
VITE_APP_ID=your_app_id
```
5. Start the development server ```npm run dev```
6. Open your browser and visit: http://localhost:5173

## 🔗 Server-Side Repository

To see the backend/server-side of this project, visit:  [**HobbyHub Server-Side Repository**](https://github.com/Shahriar-Utchas/HobbyHub-server-side)

## Contact
For any inquiries, reach out via [LinkedIn](https://www.linkedin.com/in/shahriar-utchas) or check out the [Portfolio Website](https://shahriar-utchas.vercel.app/).
