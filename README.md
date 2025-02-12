# My Next.js Project

Welcome to my Next.js project! This project is designed using modern technologies and follows best practices to create a clean, maintainable, and scalable application. It uses **Next.js**, **TailwindCSS**, **React Query**, **DaisyUI**, **Zod**, and **Axios** to deliver high-quality user interfaces and efficient data management.

## 🚀 Features

- **Next.js**: The framework for building fast, scalable React applications with server-side rendering (SSR) and static site generation (SSG).
- **TailwindCSS**: A utility-first CSS framework for custom, responsive designs.
- **React Query**: A powerful data-fetching library for managing server state and caching.
- **DaisyUI**: A plugin for TailwindCSS providing reusable UI components.
- **Zod**: TypeScript-first schema validation for strong typing and runtime checks.
- **Axios**: A promise-based HTTP client for making API requests.

## 📂 Project Structure

The project follows the **app directory structure** introduced in Next.js. Each folder represents a page and is organized to promote modularity and maintainability.

### Key Directories and Their Purpose:

- **`app/`**: All application routes (pages) are stored here. Each folder represents a page in the application.
- **`components/`**: Contains reusable TSX components for building the UI. You’ll find all UI elements like buttons, inputs, etc., here.
- **`entities/`**: Holds the interfaces for API requests. These types define the structure of the data sent and received from the backend, ensuring type safety.
- **`hooks/`**: Stores React Query hooks for managing data fetching. These hooks abstract away the logic of fetching data and can be reused in multiple places.
- **`providers/`**: Contains the **React Query provider** setup. This is where the global state for React Query is managed.
- **`services/`**: Handles API interactions. The service layer uses Axios to fetch or post data from and to external APIs.
- **`utils/`**: Includes utility functions like **Zod schemas** for validation and **Axios instances** for configuring default settings (e.g., base URL, interceptors).

## 🧰 Getting Started

### Prerequisites

Before starting, ensure that you have the following installed:
- **Node.js** (v14 or higher)
- **npm** or **yarn**

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/your-project-name.git
   cd your-project-name
