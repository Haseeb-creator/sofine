import { API_URL } from "../config";

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Lock } from 'lucide-react';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      // In development, the backend runs on 5001. We assume they run concurrently.
      const res = await axios.post(`${API_URL}/api/auth/login`, { username, password });
      
      // Save token and user details
      localStorage.setItem('adminToken', res.data.token);
      localStorage.setItem('adminUser', JSON.stringify(res.data));
      
      // Redirect to dashboard
      navigate('/admin/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Invalid credentials or server down.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-bg px-4">
      <div className="bg-white p-8 rounded-3xl shadow-soft w-full max-w-md border border-gray-100">
        
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-brand-orange/10 rounded-full flex items-center justify-center">
            <Lock className="text-brand-orange" size={32} />
          </div>
        </div>
        
        <h2 className="text-3xl font-display font-bold text-center text-brand-dark mb-2">Admin Panel</h2>
        <p className="text-gray-500 text-center mb-8">Sign in to manage your website content</p>

        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-100 text-red-600 rounded-xl text-sm text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-700">Username</label>
            <input 
              type="text" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-orange/50 transition-all"
            />
          </div>

          <div className="flex flex-col gap-2 mb-2">
            <label className="text-sm font-semibold text-gray-700">Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-orange/50 transition-all"
            />
          </div>

          <button 
            type="submit"
            disabled={loading}
            className="w-full bg-brand-dark hover:bg-black text-white py-4 rounded-xl font-bold transition-all disabled:opacity-70 flex justify-center items-center h-14"
          >
            {loading ? (
              <div className="w-6 h-6 rounded-full border-2 border-white/20 border-t-white animate-spin" />
            ) : "Sign In"}
          </button>
        </form>
        
        <div className="mt-8 text-center">
          <a href="/" className="text-brand-orange hover:text-brand-darkOrange text-sm font-medium">
            &larr; Back to Public Website
          </a>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
