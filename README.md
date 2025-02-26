# 🍕 **Pizza Order App**

## 📌 **Overview**

This project is a fully functional **pizza ordering application** built with React. It features:

- **🚀 React Router Integration** - Smooth navigation between pages.
- **📝 Interactive Order Form** - Select pizza size, choose toppings, and submit orders.
- **✅ Form Validation** - Ensures correct input using Yup.
- **🔗 API Communication** - Sends order data to the backend.
- **🧪 Automated Testing** - Uses Jest and React Testing Library.

---

## 📂 **Project Structure**

```plaintext
frontend/
│── components/
│   ├── App.js       # Main application with routing
│   ├── Home.js      # Landing page with navigation
│   ├── Form.js      # Order form with validation
│── index.js         # Application entry point
│── styles.css       # Global styles
│── tests/
│   ├── mvpA.test.js # Unit tests for components
│   ├── mvpB.test.js # Integration tests
backend/
│── server.js        # API endpoint for processing orders
│── database/        # Mock database for storing orders
```

---

## ⚙️ **Setup Instructions**

### 1️⃣ Clone the repository
```sh
git clone <repo-url>
cd <project-folder>
```

### 2️⃣ Install dependencies
```sh
npm install
```

### 3️⃣ Run the development server
```sh
npm run dev
```

### 4️⃣ Run tests
```sh
npm test
```

### 5️⃣ Access the application

Open [**http://localhost:3003**](http://localhost:3003) in your browser.

---

## 🔗 **API Endpoint**

- **URL**: `[POST] http://localhost:9009/api/order`
- **Example Payload**:
  ```json
  {
    "fullName": "Jane Doe",
    "size": "L",
    "toppings": ["1", "2", "3"]
  }
  ```
- **Validation Rules**:
  - `fullName`: Required, 3-20 characters (excluding whitespace padding).
  - `size`: Required, must be "S", "M", or "L".
  - `toppings`: Optional, can only include valid topping IDs (1-5).

---

## 🛠 **Development Notes**

- **🛤 Routing** - Implemented in `App.js` with `BrowserRouter` (routes for Home `/` and Order `/order`).
- **📝 Form Submission** - Handled in `Form.js`, with input fields mapped to API requirements.
- **🧪 Testing** - Ensures application stability and compliance with expected behavior.

---

## 🤝 **How to Contribute**

1. **Fork** the repository and create a **new branch**.
2. Implement your **feature or bug fix**.
3. Ensure **tests pass** before submitting.
4. Create a **pull request** with a detailed description of your changes.

---

> **This project demonstrates fundamental React skills in a real-world application scenario, making it an excellent showcase for frontend development expertise. 🚀**

