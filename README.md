# Sofine Juice Center

A modern, responsive, premium web landing page for a fresh juice and beverages brand. Built with React.js, Vite, Tailwind CSS, and Framer Motion.

## 🌟 Features
- **Mobile-first Design**: Fully responsive across all device sizes.
- **Premium Aesthetics**: Vibrant brand colors and tailored fonts (Inter & Outfit).
- **Animations**: Smooth micro-interactions and scroll animations powered by Framer Motion.
- **SEO Optimized**: Meta tags and structured data included for high visibility.
- **CI/CD Pipeline**: GitHub Actions workflow included for automated deployment to GitHub Pages.

## 🚀 Quick Start

### Prerequisites
Make sure you have Node.js (v18+) installed.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/sofine.git
   cd sofine
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

## 🏗️ Project Structure
- `/src/components` - Reusable UI sections
- `/src/admin` - Protected Admin Dashboard
- `/backend` - Node.js + Express API and SQLite Database
- `/.github/workflows/deploy.yml` - CI/CD pipeline for GitHub Pages
- `render.yaml` - Blueprint for automated Render backend deployment

## 🚀 Deployment Guide (Production)

This project uses a separated frontend (React) and backend (Node.js) architecture.

### Step 1: Deploy Backend to Render
1. Push this entire repository to your GitHub account.
2. Sign up at [Render.com](https://render.com) and click **"New Blueprint Instance"**.
3. Connect your GitHub repository.
4. Render will automatically read the `render.yaml` file, provision a Node service, install dependencies, and start your backend securely.
5. Once deployment is complete, copy the assigned **Render URL** (e.g., `https://sofine-api.onrender.com`).

### Step 2: Deploy Frontend to GitHub Pages
Since the frontend relies on Vite Environment Variables to find the new backend URL, you must add it to GitHub Secrets:
1. Go to your GitHub Repository -> **Settings** -> **Secrets and variables** -> **Actions** -> **New repository secret**.
2. Name the secret **`VITE_API_URL`**.
3. Paste the assigned Render URL as the value.
4. Go to the **Actions** tab in GitHub and manually run the `Deploy React App to GitHub Pages` workflow.
5. Your public website and admin dashboard are now fully live and connected to your cloud backend!

## 🛠️ Built With
- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide React](https://lucide.dev/) (Icons)
