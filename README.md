# Finance Dashboard

A clean and interactive **finance dashboard UI** built using React.
This project simulates how users can track their financial activity, analyze spending, and gain insights — without requiring a backend.

---

## 🚀 Live Demo

[> (Finance-Dashboard)](https://vercel.com/taranakhannas-projects/finance-dashboard)

---

## 📌 Overview

This dashboard allows users to:

* View overall financial summary
* Analyze spending trends with charts
* Explore transactions with filtering & search
* Switch roles (Admin / Viewer)
* Get smart financial insights

Authentication and data are simulated using localStorage and mock datasets.

---

## ✨ Features

### Dashboard Overview

* Total Balance, Income, Expenses
* Balance trend (Line Chart)
* Spending breakdown (Pie Chart)

### Transactions

* View all transactions
* Search by category
* Filter by type (Income / Expense)
* Responsive table → card layout (mobile)

### 👤 Role-Based UI

* **Viewer** → Read-only access
* **Admin** → Can add/edit transactions (UI-level simulation)

### 📈 Insights

* Highest spending category
* Total income vs expense
* Savings calculation
* Smart financial messages

### 🔐 Authentication (Simulated)

* Demo login (User A, B, C)
* User-specific data
* Stored in localStorage

### 📱 Responsive Design

* Mobile-friendly layout
* Sidebar toggle on small screens

---

## 🛠️ Tech Stack

* **Frontend:** React (Vite)
* **Styling:** Tailwind CSS
* **Charts:** Recharts
* **Icons:** Lucide React
* **Routing:** React Router

---

## 📂 Project Structure

```
src/
│
├── components/
│   ├── dashboard/
│   ├── transactions/
│   ├── insights/
│   └── layout/
│
├── pages/
│   ├── Dashboard.jsx
│   └── Login.jsx
│
├── context/
├── data/
├── App.jsx
└── main.jsx
```

---

## ⚙️ Setup Instructions

```bash
# Clone the repository
git clone https://github.com/TaranaKhanna/Finance-Dashboard

# Install dependencies
npm install

# Run the app
npm run dev
```

---

## 🧠 Key Decisions & Approach

* **No backend used** → All data handled via mock datasets
* **User simulation** → localStorage used for authentication
* **Reusable components** → modular structure for scalability
* **Data-driven UI** → charts and insights derived from transactions

---

## ⚠️ Limitations

* No real authentication or backend
* Add/Edit transactions are simulated (frontend only)
* Data persistence limited to localStorage

---

## 🔥 Future Improvements

* Backend integration (Node.js / Firebase)
* Real authentication (JWT / OAuth)
* Advanced analytics (monthly trends, predictions)
* Export data (CSV/JSON)
* Dark/light theme toggle

---

## 🎯 What I Learned

* Building scalable UI architecture
* Managing state and data flow in React
* Creating data-driven visualizations
* Designing responsive dashboards
* Simulating real-world product behavior

---

## 👤 Author

**Tarana Khanna**

* GitHub: https://github.com/TaranaKhanna

---

## ⭐ Feedback

If you have any feedback or suggestions, feel free to reach out!
