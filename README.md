# 📞 PhoneBook Application

A modern React application built with Vite that allows users to manage their personal contacts with add, delete, and filter functionality. Features Redux Toolkit for state management and mockapi.io backend integration for persistent data storage.

---

## ✨ Features

## ➕ Add Contact

- Add new contacts with name and phone number
- Form validation with user-friendly error messages
- Automatic backend synchronization via POST request
- Clear visual feedback on successful submission

## 🗑️ Delete Contact

- Remove contacts with a single click
- Instant UI update with optimistic rendering
- DELETE request to backend for data consistency
- Confirmation dialog before deletion

## 🔍 Filter Contacts

- Real-time filtering by contact name
- Case-insensitive search functionality
- Memoized selector (selectFilteredContacts) for optimized performance
- Empty state handling with user-friendly message

## 🌐 Backend Integration

- Full CRUD operations with mockapi.io REST API
- HTTP requests handled via axios library
- Async operations managed with createAsyncThunk
- Proper error handling with try...catch and rejectWithValue

## 📊 Loading & Error States

- Visual loading indicator during API requests
- Error messages displayed for failed operations
- State properties: loading: boolean, error: string | null

## 🎨 Modern UI

- Clean, responsive design with CSS Modules
- Component-scoped styling for maintainability
- Accessible form elements and semantic HTML

---

## 🛠️ Technologies Used

- ⚛️ React
- ⚡ Vite (Build Tool)
- 🧰 Redux Toolkit (State Management)
- 🔄 createAsyncThunk (Async Operations)
- 🌐 axios (HTTP Client)
- 🎨 CSS Modules
- 🟨 JavaScript
- 📦 npm (Package Manager)

---

## 📁 Project Structure

    ├── src/
    │   ├── components/
    │   │   ├── Contact/
    │   │   │   ├── Contact.jsx
    │   │   │   └── Contact.module.css
    │   │   ├── ContactForm/
    │   │   │   ├── ContactForm.jsx
    │   │   │   └── ContactForm.module.css
    │   │   ├── ContactList/
    │   │   │   ├── ContactList.jsx
    │   │   │   └── ContactList.module.css
    │   │   ├── SearchBox/
    │   │   │   ├── SearchBox.jsx
    │   │   │   └── SearchBox.module.css
    ├── redux/
        ├── contactsOps.js
    │   ├── contactsSlice.js
    │   ├── filtersSlice.js
    │   └── store.js
    ├── App.jsx
    ├── App.module.css
    └── main.jsx

---

## 🧠 State Management

The application uses Redux Toolkit for predictable global state management with async thunk support:

## 📦 Contacts Slice (contactsSlice.js)

| Property | Type           | Description                                    |
| -------- | -------------- | ---------------------------------------------- |
| items    | Array<Contact> | Array of contact objects                       |
| loading  | boolean        | Indicates if an async operation is in progress |
| error    | string - null  | Error message from failed operations           |

---

## Async Thunks (contactsOps.js)

| Thunk         | HTTP Method | Description   |
| ------------- | ----------- | ------------- |
| fetchContacts | GET         | /contacts     |
| addContact    | POST        | /contacts     |
| deleteContact | DELETE      | /contacts/:id |

## 🔍 Filters Slice (filtersSlice.js)

| Property | Type   | Description                 |
| -------- | ------ | --------------------------- |
| name     | string | Current search filter value |

---

## 🚀 Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/goit-react-hw-07.git
```

### 2️⃣ Navigate to project directory

```bash
cd goit-react-hw-07
```

### 3️⃣ Install dependencies

```bash
npm install
```

### 4️⃣ Run development server

```bash
npm run dev
```

### 5️⃣ Open in browser

    http://localhost:5173

---

## 🌍 Live Demo

👉 ...

---

## 📌 Project Purpose

This project was developed as part of the GoIT React Homework #7 assignment.

🎯 Learning Objectives

- ✅ Implementing Redux Toolkit with createSlice and configureStore
- ✅ Managing async operations with createAsyncThunk
- ✅ Integrating axios for HTTP requests to REST API
- ✅ Handling loading and error states in Redux
- ✅ Using extraReducers for thunk action handling
- ✅ Implementing memoized selectors with createSelector for performance optimization
- ✅ Structuring components with CSS Modules for scoped styling
- ✅ Using useSelector and useDispatch hooks effectively
- ✅ Removing Redux Persist and implementing backend-based persistence
- ✅ Following clean code principles and Prettier formatting
- ✅ Organizing project with component-based folder structure

---

## Author

**Kerem Yıldırım**  
🚀 React Development Project - Redux Toolkit & Backend Integration 🚀

---
