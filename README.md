# 🎨 HobbyHub - Local Hobby Group Organizer (Client)

## 🌐 Live Site: [Click here](https://your-client-live-url.com)

## 🧠 About the Project

**HobbyHub** is a social platform that enables users to discover, join, and create hobby-based groups like book clubs, hiking crews, or art circles. It promotes community building around shared interests with secure login, dynamic group listings, and a fully responsive user interface.

## 🚀 Key Features

- 🔐 **Firebase Authentication** (Email/Password + Google/GitHub Sign-In)
- 🧑‍🤝‍🧑 **Group Creation & Management** for authenticated users
- 🔒 **Protected Routes** with route persistence after reload
- 🌗 **Dark/Light Mode Toggle**
- 🍭 **SweetAlert2** for all success/error notifications
- 🎞 **Lottie Animations** and **React Awesome Reveal**
- ⚡ **Responsive Design** optimized for mobile, tablet, and desktop
- ❗ **Custom 404 Page** & **Loading Spinner**
- 🌍 **Dynamic Routing** with route-aware rendering

## 🖥 Pages & Functionality

- **Home Page**
  - Hero banner with 3 animated, meaningful slides
  - Featured ongoing groups (initial limit: 6, with "View All" option)
  - Two informative static sections for enhanced UX

- **All Groups Page**
  - Displays all public groups in card format (data fetched from API)
  - “See More” button redirects to the Group Details page

- **Group Details Page**
  - Shows full group information
  - Includes "Join Group" button (changes to "Leave Group" if already joined)
  - Real-time member count updates in both UI and database

- **Create Group Page** (Protected)
  - Form with fields for name, category, max members, date, image, etc.
  - Auto-filled user name and email fields (read-only)

- **My Groups Page** (Protected)
  - Displays groups created by the logged-in user
  - Includes "Update" and "Delete" options with confirmation prompts

- **Update Group Page** (Protected)
  - Similar to Create page, with pre-filled fields
  - Optional modal-based UX for inline editing

- **Authentication**
  - Login/Register pages with real-time form validation
  - Password rules: at least one uppercase, one lowercase, minimum 6 characters
  - Uses toast/SweetAlert2 for feedback

- **Miscellaneous**
  - Custom **404 Not Found Page** for invalid routes
  - Smooth loading indicators and route transitions

## 🛠️ Technologies Used

- **React.js**
- **React Router**
- **Firebase (Auth)**
- **Tailwind CSS + DaisyUI**
- **SweetAlert2**
- **Framer Motion / Lottie / Awesome Reveal / Tooltip**
