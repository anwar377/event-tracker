# Mini Event Tracker - Frontend

This is the **frontend** of the Mini Event Tracker web application, built using **React**. Users can log in, create events, view their upcoming/past events, and optionally share events publicly.

---

## Table of Contents

- [Demo](#demo)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Project Structure](#project-structure)
- [Setup & Installation](#setup--installation)
- [Usage](#usage)
- [Trade-offs / Notes](#trade-offs--notes)
- [Future Improvements](#future-improvements)

---

## Demo

*(Optional: Add your deployed frontend URL here)*

---

## Tech Stack

- **React**: For building a responsive, component-based UI.  
- **React Router v6**: For client-side routing.  
- **Axios**: For API requests to the backend.  
- **Context API**: For authentication state management.  
- **CSS-in-JS (inline styles)**: For React Native-like, responsive styling.  
- **Optional**: Can be extended with Redux Toolkit for global state management.

**Why these choices?**

- **React**: Lightweight, widely used, and perfect for SPA.  
- **Context API**: Simple and sufficient for managing auth state without adding Redux complexity.  
- **Inline styles**: Keeps styles modular and consistent across components, mobile-first and easy to maintain.

---

## Features

- User authentication (Login & Signup)  
- Create events (title, date/time, location, description, optional public link)  
- View events filtered by **Upcoming** / **Past**  
- Responsive, mobile-first layout  
- Centered card design for all pages  
- Optional public share link for events

---

## Project Structure

