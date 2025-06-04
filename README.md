# 🏕️ Wild Oasis – Cabin Reservation App

Welcome to **Wild Oasis**, a modern web application for exploring, booking, and managing your stay at our cozy wilderness cabins.

This app is built using **React**, **Next.js**, **Supabase**, and **NextAuth.js**, and is deployed with **Vercel**.

---

## 🌍 Demo

🔗 **Live Demo**:

---

## 🚀 Tech Stack

- **Frontend**: React, Next.js
- **Backend**: Supabase (Database + Auth + API)
- **Authentication**: NextAuth.js (email/password)
- **State Management**: React Context API
- **Styling**: Tailwind CSS
- **Deployment**: Vercel

---

## ✨ Features

### 🔍 General Info

- **About Page** – Learn all about the Wild Oasis Hotel, our values, and what makes us special.

### 🛏️ Cabins

- Browse a list of all available cabins
- View detailed information for each cabin
- See currently booked dates
- Filter cabins by maximum guest capacity

### 📅 Reservations

- Reserve a cabin for a selected date range
- View both **past** and **upcoming** reservations
- Update or cancel existing reservations

### 🔐 Authentication

- **Sign Up / Log In** with secure email/password via NextAuth.js
- Each guest receives a profile in the database upon sign-up
- Guests must be logged in to make or manage reservations

### 👤 Guest Profiles

- Guests can view and update their profile data
- Store key information to streamline the check-in process

---

## 🛠️ Installation & Setup (for Developers)

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/wild-oasis.git
   cd wild-oasis
   ```
2. **Install dependencies**
   ```bash
    npm install
   ```
3. **Environment variables**

   ```
   NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
   SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
   NEXTAUTH_SECRET=your-secret
   NEXTAUTH_URL=http://localhost:3000
   ```

4. **Run the development server**

   ```bash
   npm run dev
   ```

5. **Visit the app**

   ```bash
   http://localhost:3000
   ```
