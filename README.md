# Mini Event Tracker - Full Stack

A **full-stack web application** that allows users to create, manage, and share events. Built as a **48-hour challenge**, this project demonstrates a complete MERN stack implementation.

---

## Table of Contents

- [Demo](#demo)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Project Structure](#project-structure)
- [Setup & Installation](#setup--installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Trade-offs / Notes](#trade-offs--notes)
- [Future Improvements](#future-improvements)
- [Author](#author)

---

## Demo

*(Optional: Add deployed frontend/backend URLs)*

---

## Tech Stack

**Frontend**

- React (SPA, functional components)
- React Router v6 (client-side routing)
- Axios (API requests)
- Context API (authentication state)
- CSS-in-JS / Inline styles (React Native–like styling)

**Backend**

- Node.js + Express (REST API)
- MongoDB + Mongoose (NoSQL database)
- JWT (authentication)
- bcryptjs (password hashing)
- cors (CORS handling)
- dotenv (environment variable management)

**Why this stack?**

- **React**: Fast SPA, component-based, easy state management with Context API  
- **Node.js + Express**: Lightweight REST API framework, perfect for SPAs  
- **MongoDB**: Flexible schema for events; easy filtering and public sharing  
- **JWT**: Stateless authentication compatible with SPA frontend

---

## Features

- **User Authentication**: Signup & login with JWT  
- **Event Management**: Create, view, and filter events (upcoming/past)  
- **Public Event Sharing**: Optional shareable event link  
- **Responsive Design**: Mobile-first, centered card layout for all pages  
- **Clean UI**: Consistent styling with React Native-like inline styles

---

## Project Structure

