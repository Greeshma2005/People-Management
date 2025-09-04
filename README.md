# 🗂️ People Management Application (MEAN Stack)

This is a full-stack **People Management** application built using the **MEAN stack** (**MongoDB, Express, Angular 8, Node.js**). It allows you to manage people with full **CRUD operations**, including adding, editing, viewing, and deleting records.

---

## 🌟 Features

### Backend (Node.js + Express + MongoDB)
- **CRUD Operations** for `Person` model:
  - **GET** `/person` – Retrieve all people
  - **GET** `/person/:id` – Retrieve a single person by ID
  - **POST** `/person` – Add a new person
  - **PUT** `/person/:id` – Update a person by ID
  - **DELETE** `/person/:id` – Delete a person by ID
  - **DELETE** `/person` – Delete multiple people at once
- 🌐 **CORS enabled** for frontend integration
- 📦 **JSON request parsing**
- 🔒 MongoDB Atlas connection
- ⚡ Lightweight, simple, and extendable

### Frontend (Angular 8)
- **Dashboard view** with cards for:
  - Viewing all people
  - Adding a new person
  - Editing a person
  - Deleting a person
- **Reactive forms** with validation for adding/editing a person
- **Responsive design** using Bootstrap 5
- **Dynamic routing** for editing specific persons and handling dashboard/list views
- **Alerts and confirmations** for user actions
- **Gender badges** and styled tables for clear visualization

---

## 🛠️ Installation

### 1. Clone the backend repository

```bash
git clone https://github.com/Greeshma2005/People-Management.git
cd People-Management
```

---

### 2. Backend Setup
```bash
cd backend
npm install
```

### Create a .env file in the backend folder
```bash
MONGODB_URI=your_mongodb_connection_string
PORT=3000
```

### Start the backend server
```bash
npm run dev
```

---

### 3.Frontend Setup
```bash
cd ../frontend
npm install
```

### Run the Angular App
```bash
ng serve
```

---

### ⚡Usage
- Navigate to Dashboard to access all actions
- View People: See all people in a table
- Add Person: Fill the form and submit
- Edit Person: Update details via dashboard or list
- Delete Person: Remove one or multiple records safely
