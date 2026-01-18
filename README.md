# 📝 DevLog

A modern, full-stack blogging platform built for web developers to share their knowledge, tutorials, and experiences with the developer community.

![Django](https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

---

## 📖 Overview

DevLog is a developer-focused blogging platform that enables users to create, manage, and share blog posts across various web development categories. The application features a clean, responsive UI and a robust REST API backend.

---

## ✨ Features

### 🔐 Authentication & Users
- Secure user registration and login with JWT token-based authentication
- Customizable user profiles with:
  - Profile picture upload
  - Bio and job title
  - Social media links (Facebook, YouTube, Instagram, X/Twitter)
- Protected routes for authenticated users

### 📰 Blog Management
- Create, read, update, and delete blog posts
- Rich content editor for writing posts
- Featured image upload for blog posts
- Auto-generated SEO-friendly URL slugs
- Draft and published post states
- Blog categories:
  - Frontend
  - Backend
  - Fullstack
  - Web3
  - Design

### 🎨 User Experience
- Clean, modern responsive design
- Paginated blog feed for better performance
- Individual blog detail pages
- User profile pages showcasing author info and posts
- 404 error handling

---

## 🛠️ Tech Stack

### Backend
| Technology | Purpose |
|------------|---------|
| **Django** | Web framework |
| **Django REST Framework** | RESTful API |
| **Simple JWT** | Token authentication |
| **SQLite** | Database |
| **Pillow** | Image processing |
| **CORS Headers** | Cross-origin requests |

### Frontend
| Technology | Purpose |
|------------|---------|
| **React** | UI library |
| **Vite** | Build tool & dev server |
| **Tailwind CSS** | Styling |
| **Axios** | HTTP client |
| **React Router** | Client-side routing |

---

## 📁 Project Structure

```
DevLog/
├── Backend/
│   ├── config/          # Django project settings
│   ├── devlog/          # Main app (models, views, serializers)
│   ├── media/           # Uploaded images
│   └── manage.py
│
└── Frontend/
    ├── src/
    │   ├── components/  # Reusable UI components
    │   ├── pages/       # Page components
    │   ├── services/    # API services
    │   └── ui_components/
    └── public/
```

---

## 🚀 Getting Started

### Prerequisites
- Python 3.10+
- Node.js 18+
- npm or yarn

### Backend Setup

```bash
# Navigate to backend directory
cd Backend

# Create and activate virtual environment
python -m venv env
env\Scripts\activate  # Windows
# source env/bin/activate  # macOS/Linux

# Install dependencies
pip install -r requirements.txt

# Run migrations
python manage.py migrate

# Create superuser (optional)
python manage.py createsuperuser

# Start development server
python manage.py runserver
```

The API will be available at `http://localhost:8000`

### Frontend Setup

```bash
# Navigate to frontend directory
cd Frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

---

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/register/` | Register new user |
| POST | `/api/token/` | Obtain JWT token |
| POST | `/api/token/refresh/` | Refresh JWT token |
| GET | `/api/blogs/` | List all blogs (paginated) |
| POST | `/api/blogs/create/` | Create new blog |
| GET | `/api/blogs/<slug>/` | Get blog details |
| PUT | `/api/user/update/` | Update user profile |
| GET | `/api/user/<username>/` | Get user info |

---

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).