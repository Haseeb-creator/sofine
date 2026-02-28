import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Lazy load all main public sections
const Hero = lazy(() => import('./components/Hero'));
const About = lazy(() => import('./components/About'));
const History = lazy(() => import('./components/History'));
const Features = lazy(() => import('./components/Features'));
const Menu = lazy(() => import('./components/Menu'));
const Gallery = lazy(() => import('./components/Gallery'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const Contact = lazy(() => import('./components/Contact'));

// Lazy load admin sections
const AdminLogin = lazy(() => import('./admin/AdminLogin'));
const AdminDashboard = lazy(() => import('./admin/AdminDashboard'));

// A sleek fallback loader for suspense
const PageLoader = () => (
  <div className="min-h-[50vh] flex items-center justify-center bg-brand-bg">
    <div className="w-12 h-12 rounded-full border-4 border-brand-orange/20 border-t-brand-orange animate-spin"></div>
  </div>
);

// Public facing website components
const PublicLayout = () => (
  <>
    <Navbar />
    <main>
      <Suspense fallback={<PageLoader />}>
        <Hero />
        <About />
        <History />
        <Features />
        <Menu />
        <Gallery />
        <Testimonials />
        <Contact />
      </Suspense>
    </main>
    <Footer />
  </>
);

function App() {
  return (
    <Router basename="/sofine/">
      <div className="min-h-screen bg-brand-bg relative overflow-hidden font-sans text-brand-dark">
        <Routes>
          <Route path="/" element={<PublicLayout />} />
          <Route path="/admin" element={
            <Suspense fallback={<PageLoader />}>
              <AdminLogin />
            </Suspense>
          } />
          <Route path="/admin/dashboard" element={
            <Suspense fallback={<PageLoader />}>
              <AdminDashboard />
            </Suspense>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
