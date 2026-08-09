# 🚨 Silent SOS Emergency Web App

Silent SOS is a web-based emergency alert system designed to help users quickly send an SOS alert during an emergency.

The application allows users to manage trusted emergency contacts, share their current location, activate an SOS alert, and view their previous emergency alerts through a simple dashboard.

---

## 📌 About the Project

During an emergency, a person may not always have enough time to make a phone call or explain their situation.

Silent SOS provides a simple interface where a user can activate an emergency alert with a single click.

The system records the user's location and identifies their saved emergency contacts. The user can also view the current alert status and maintain a history of previous alerts.

---

## 🎯 Objectives

- Provide a quick and simple SOS activation system.
- Record the user's current geographical location.
- Allow users to save trusted emergency contacts.
- Simulate the emergency notification process.
- Maintain a history of emergency alerts.
- Provide a dashboard for monitoring emergency activity.
- Protect user-specific data using authentication.

---

## ✨ Features

### 🚨 SOS Alert

- One-click SOS activation.
- Prevents multiple active SOS alerts.
- Records the user's latitude and longitude.
- Displays an SOS activation confirmation.
- Identifies saved emergency contacts.
- Allows the user to cancel an active SOS alert.

### 📍 Live Location

- Uses browser geolocation.
- Displays latitude and longitude.
- Shows whether the location is available.
- Provides a Google Maps link for the detected location.

### 📞 Emergency Contacts

Users can:

- Add emergency contacts.
- View saved contacts.
- Edit existing contacts.
- Delete contacts.

Each contact contains:

- Name
- Phone number
- Relationship

### 🚦 Alert Status

The dashboard displays the latest alert status:

- 🔴 Active
- ⚪ Cancelled
- ⚪ No Alerts

The status updates without requiring a page refresh.

### 📜 Alert History

Users can view previous SOS alerts including:

- Alert status
- Location coordinates
- Date and time

### 📊 Dashboard

The dashboard displays:

- Total alerts
- Total emergency contacts
- Current system status
- SOS control
- Current location
- Alert status
- Alert history
- Emergency contacts

### 🔐 Authentication

Users must log in to access their dashboard.

User-specific alerts and emergency contacts are protected using authentication middleware.

---

## 🛠️ Technologies Used

### Frontend

- React.js
- Vite
- JavaScript
- HTML
- CSS
- Bootstrap
- Axios
- React Router

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- CORS

### APIs / Browser Features

- Browser Geolocation API
- Google Maps URL integration

---

## 🏗️ Project Structure

```text
silent sos system/
│
├── frontend/
│   │
│   ├── src/
│   │   ├── components/
│   │   │   ├── SOSButton.jsx
│   │   │   ├── Location.jsx
│   │   │   ├── AlertStatus.jsx
│   │   │   ├── AlertHistory.jsx
│   │   │   └── EmergencyContacts.jsx
│   │   │
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   └── About.jsx
│   │   │
│   │   ├── services/
│   │   │   └── api.js
│   │   │
│   │   └── ...
│   │
│   └── package.json
│
├── backend/
│   │
│   ├── controllers/
│   │   ├── alertController.js
│   │   ├── authController.js
│   │   └── contactController.js
│   │
│   ├── models/
│   │   ├── Alert.js
│   │   ├── User.js
│   │   └── EmergencyContact.js
│   │
│   ├── routes/
│   │   ├── alertRoutes.js
│   │   ├── authRoutes.js
│   │   └── contactRoutes.js
│   │
│   ├── middleware/
│   │   └── authMiddleware.js
│   │
│   ├── config/
│   │   └── db.js
│   │
│   ├── server.js
│   └── package.json
│
└── README.md