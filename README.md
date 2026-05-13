# CRM Web Application

> A modern, full-stack Customer Relationship Management platform built for scalability and real-world sales workflows.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-crm--web--ashy.vercel.app-blue?style=flat-square&logo=vercel)](https://crm-web-ashy.vercel.app/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![Firebase](https://img.shields.io/badge/Firebase-Firestore-FFCA28?style=flat-square&logo=firebase&logoColor=black)](https://firebase.google.com/)

---

## 🖥️ Live Demo

**[https://crm-web-ashy.vercel.app/](https://crm-web-ashy.vercel.app/)**

---

## 📸 Screenshots

> _Add screenshots by replacing the placeholders below._

| Dashboard | Contacts | Analytics |
|-----------|----------|-----------|
| ![Dashboard](./screenshots/dashboard.png) | ![Contacts](./screenshots/contacts.png) | ![Analytics](./screenshots/analytics.png) |

---

## ✨ Features

- **Contact Management** — Add, edit, delete, and search customer contacts with full detail views
- **Deal Tracking** — Track deals through customisable sales stages with status updates
- **Analytics Dashboard** — Visual charts and KPI summaries powered by Ant Design Plots
- **Authentication** — Secure sign-in and sign-up via Firebase Authentication
- **Real-time Data** — Live Firestore sync ensures data is always up to date across sessions
- **Server State Management** — Smart caching, background refetching, and loading states via TanStack Query
- **Fully Typed** — End-to-end TypeScript with strict mode for reliable, maintainable code
- **Responsive UI** — Mobile-friendly layout using Ant Design's grid system

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend Framework | [React 19](https://react.dev/) |
| Language | [TypeScript 5.9](https://www.typescriptlang.org/) (strict mode) |
| Build Tool | [Vite 7](https://vite.dev/) |
| UI Component Library | [Ant Design 6](https://ant.design/) |
| Data Fetching / Caching | [TanStack React Query v5](https://tanstack.com/query/latest) |
| Database | [Firebase Firestore](https://firebase.google.com/docs/firestore) |
| Auth | [Firebase Authentication](https://firebase.google.com/docs/auth) |
| Charts | [@ant-design/plots](https://charts.ant.design/) |
| Routing | [React Router v7](https://reactrouter.com/) |
| Linting | ESLint + typescript-eslint |
| Deployment | [Vercel](https://vercel.com/) |

---

## 🚀 Getting Started

### Prerequisites

- Node.js `v18+`
- A [Firebase](https://firebase.google.com/) project with Firestore and Authentication enabled

### 1. Clone the repository

```bash
git clone https://github.com/Vivek-Mehra298/crm-web.git
cd crm-web
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Copy the example env file and fill in your Firebase credentials:

```bash
cp .env.example .env
```

Open `.env` and add your values:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

### 4. Start the development server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### 5. Build for production

```bash
npm run build
```

---

## 📁 Project Structure

```
src/
├── components/       # Reusable UI components
├── pages/            # Route-level page components
├── hooks/            # Custom React hooks (React Query wrappers)
├── services/         # Firebase Firestore service functions
├── types/            # TypeScript interfaces and domain types
├── utils/            # Helper functions
└── main.tsx          # App entry point
```

---

## 🔑 Environment Variables

| Variable | Description |
|---|---|
| `VITE_FIREBASE_API_KEY` | Firebase project API key |
| `VITE_FIREBASE_AUTH_DOMAIN` | Firebase Auth domain |
| `VITE_FIREBASE_PROJECT_ID` | Firestore project ID |
| `VITE_FIREBASE_STORAGE_BUCKET` | Firebase Storage bucket |
| `VITE_FIREBASE_MESSAGING_SENDER_ID` | Messaging sender ID |
| `VITE_FIREBASE_APP_ID` | Firebase App ID |

> ⚠️ **Never commit your `.env` file.** It is already listed in `.gitignore`.

---

## 🗺️ Roadmap

- [ ] Role-based access control (Admin / Sales Rep / Manager)
- [ ] Kanban-style sales pipeline board with drag-and-drop
- [ ] CSV import and export for contacts
- [ ] AI-powered deal insights and next-action suggestions
- [ ] Activity timeline per contact
- [ ] Email integration

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome. Feel free to open an issue or submit a pull request.

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m "feat: add your feature"`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

## 👤 Author

**Vivek Mehra**
- GitHub: [@Vivek-Mehra298](https://github.com/Vivek-Mehra298)
- LinkedIn: [](# CRM Web Application

> A modern, full-stack Customer Relationship Management platform built for scalability and real-world sales workflows.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-crm--web--ashy.vercel.app-blue?style=flat-square&logo=vercel)](https://crm-web-ashy.vercel.app/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![Firebase](https://img.shields.io/badge/Firebase-Firestore-FFCA28?style=flat-square&logo=firebase&logoColor=black)](https://firebase.google.com/)

---

## 🖥️ Live Demo

**[https://crm-web-ashy.vercel.app/](https://crm-web-ashy.vercel.app/)**

---

## 📸 Screenshots

> _Add screenshots by replacing the placeholders below._

| Dashboard | Contacts | Analytics |
|-----------|----------|-----------|
| ![Dashboard](./screenshots/dashboard.png) | ![Contacts](./screenshots/contacts.png) | ![Analytics](./screenshots/analytics.png) |

---

## ✨ Features

- **Contact Management** — Add, edit, delete, and search customer contacts with full detail views
- **Deal Tracking** — Track deals through customisable sales stages with status updates
- **Analytics Dashboard** — Visual charts and KPI summaries powered by Ant Design Plots
- **Authentication** — Secure sign-in and sign-up via Firebase Authentication
- **Real-time Data** — Live Firestore sync ensures data is always up to date across sessions
- **Server State Management** — Smart caching, background refetching, and loading states via TanStack Query
- **Fully Typed** — End-to-end TypeScript with strict mode for reliable, maintainable code
- **Responsive UI** — Mobile-friendly layout using Ant Design's grid system

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend Framework | [React 19](https://react.dev/) |
| Language | [TypeScript 5.9](https://www.typescriptlang.org/) (strict mode) |
| Build Tool | [Vite 7](https://vite.dev/) |
| UI Component Library | [Ant Design 6](https://ant.design/) |
| Data Fetching / Caching | [TanStack React Query v5](https://tanstack.com/query/latest) |
| Database | [Firebase Firestore](https://firebase.google.com/docs/firestore) |
| Auth | [Firebase Authentication](https://firebase.google.com/docs/auth) |
| Charts | [@ant-design/plots](https://charts.ant.design/) |
| Routing | [React Router v7](https://reactrouter.com/) |
| Linting | ESLint + typescript-eslint |
| Deployment | [Vercel](https://vercel.com/) |

---

## 🚀 Getting Started

### Prerequisites

- Node.js `v18+`
- A [Firebase](https://firebase.google.com/) project with Firestore and Authentication enabled

### 1. Clone the repository

```bash
git clone https://github.com/Vivek-Mehra298/crm-web.git
cd crm-web
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Copy the example env file and fill in your Firebase credentials:

```bash
cp .env.example .env
```

Open `.env` and add your values:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

### 4. Start the development server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### 5. Build for production

```bash
npm run build
```

---

## 📁 Project Structure

```
src/
├── components/       # Reusable UI components
├── pages/            # Route-level page components
├── hooks/            # Custom React hooks (React Query wrappers)
├── services/         # Firebase Firestore service functions
├── types/            # TypeScript interfaces and domain types
├── utils/            # Helper functions
└── main.tsx          # App entry point
```

---

## 🔑 Environment Variables

| Variable | Description |
|---|---|
| `VITE_FIREBASE_API_KEY` | Firebase project API key |
| `VITE_FIREBASE_AUTH_DOMAIN` | Firebase Auth domain |
| `VITE_FIREBASE_PROJECT_ID` | Firestore project ID |
| `VITE_FIREBASE_STORAGE_BUCKET` | Firebase Storage bucket |
| `VITE_FIREBASE_MESSAGING_SENDER_ID` | Messaging sender ID |
| `VITE_FIREBASE_APP_ID` | Firebase App ID |

> ⚠️ **Never commit your `.env` file.** It is already listed in `.gitignore`.

---

## 🗺️ Roadmap

- [ ] Role-based access control (Admin / Sales Rep / Manager)
- [ ] Kanban-style sales pipeline board with drag-and-drop
- [ ] CSV import and export for contacts
- [ ] AI-powered deal insights and next-action suggestions
- [ ] Activity timeline per contact
- [ ] Email integration

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome. Feel free to open an issue or submit a pull request.

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m "feat: add your feature"`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

## 👤 Author

**Vivek Mehra**
- GitHub: [@Vivek-Mehra298](https://github.com/Vivek-Mehra298)
- LinkedIn: [linkedin.com/in/vivek-dehariya-4b3669263](https://www.linkedin.com/in/vivek-dehariya-4b3669263/)

---

## 📄 License

This project is open source and available under the [MIT License](./LICENSE).

)

---

## 📄 License

This project is open source and available under the [MIT License](./LICENSE).


