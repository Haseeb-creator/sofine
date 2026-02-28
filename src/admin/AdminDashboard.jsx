import { API_URL } from "../config";

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { LogOut, LayoutDashboard, Utensils, Settings, Trash2, Save, X, Plus } from 'lucide-react';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('menu');
  const [menuItems, setMenuItems] = useState([]);
  
  // Default values from the public website
  const defaultHero = {
    title: 'Freshness in \nEvery Sip.',
    subtitle: 'Revitalize your body with our premium selection of organic juices, crafted daily from the finest locally-sourced fruits.',
    backgroundImage: 'https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg?auto=compress&cs=tinysrgb&w=1920'
  };
  const defaultAbout = {
    title: 'Pure Goodness in Every Drop.',
    content1: 'Welcome to Sofine Juice Center, where passion for health meets the love for extraordinary taste. We believe that what you put into your body matters, which is why we’re obsessed with freshness, hygiene, and uncompromising quality.',
    content2: 'Every beverage we craft is a testament to our commitment to nature. From locally sourced, farm-fresh fruits to our rigorous hygiene protocols, we ensure that every sip you take is packed with vital nutrients and incredible flavor. No artificial additives, no refined sugars—just pure, unadulterated goodness.'
  };
  const defaultSettings = {
    email: 'hello@sofinejuice.com',
    phone: '+1 (555) 123-4567',
    footerText: 'Freshness in Every Sip. Premium juices, smoothies, and shakes made with 100% real ingredients.'
  };
  const defaultGallery = {
    images: [
      "https://images.pexels.com/photos/1251175/pexels-photo-1251175.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/4051082/pexels-photo-4051082.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1337825/pexels-photo-1337825.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/616836/pexels-photo-616836.jpeg?auto=compress&cs=tinysrgb&w=800"
    ]
  };
  const defaultJourney = {
    title: 'Roots of Sofine',
    subtitle: 'From a simple idea to a beloved community brand, explore the timeline of our growth, driven by an unwavering commitment to health and taste.',
    milestones: [
      { year: "2015", title: "The Humble Beginning", description: "Started as a small cart in the local market by two health enthusiasts who couldn't find a genuinely fresh juice without added sugar in the city." },
      { year: "2017", title: "Opening the First Store", description: "Driven by overwhelming community love, Sofine Juice Center opened its first physical outlet, introducing signature smoothies and hygiene standards." },
      { year: "2020", title: "Community Connection", description: "During challenging times, we launched immune-boosting detox blends and initiated local farm partnerships to sustain pure ingredient sourcing." },
      { year: "2024", title: "Expanding the Vision", description: "Now serving across multiple locations with a loyal following, continually innovating our menu while staying true to our core of 100% natural, hygienic preparation." }
    ]
  };

  // Section States
  const [heroData, setHeroData] = useState(defaultHero);
  const [aboutData, setAboutData] = useState(defaultAbout);
  const [settingsData, setSettingsData] = useState(defaultSettings);
  const [galleryData, setGalleryData] = useState(defaultGallery);
  const [journeyData, setJourneyData] = useState(defaultJourney);
  
  // UI States
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  // Modal States
  const [showModal, setShowModal] = useState(false);
  const [modalMode, setModalMode] = useState('add'); // 'add' or 'edit'
  const [currentItem, setCurrentItem] = useState({ name: '', category: 'Fresh Juices', price: '', description: '', image: '' });

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      navigate('/admin');
    } else {
      fetchData();
    }
  }, [navigate, activeTab]);

  const fetchData = async () => {
    setLoading(true);
    try {
      if (activeTab === 'menu') {
        const res = await axios.get(`${API_URL}/api/menu`);
        setMenuItems(res.data);
      } else if (activeTab === 'hero') {
        const res = await axios.get(`${API_URL}/api/content/hero`);
        if (res.data && Object.keys(res.data).length > 0) setHeroData(prev => ({...prev, ...res.data}));
      } else if (activeTab === 'about') {
        const res = await axios.get(`${API_URL}/api/content/about`);
        if (res.data && Object.keys(res.data).length > 0) setAboutData(prev => ({...prev, ...res.data}));
      } else if (activeTab === 'settings') {
        const res = await axios.get(`${API_URL}/api/content/settings`);
        if (res.data && Object.keys(res.data).length > 0) setSettingsData(prev => ({...prev, ...res.data}));
      } else if (activeTab === 'gallery') {
        const res = await axios.get(`${API_URL}/api/content/gallery`);
        if (res.data && res.data.images && res.data.images.length > 0) setGalleryData(res.data);
      } else if (activeTab === 'journey') {
        const res = await axios.get(`${API_URL}/api/content/journey`);
        if (res.data && res.data.milestones && res.data.milestones.length > 0) setJourneyData(res.data);
      }
    } catch (err) {
      console.log("Section might be empty or error fetching. Handled gracefully.");
    } finally {
      setLoading(false);
    }
  };

  const saveContent = async (section, payload) => {
    setSaving(true);
    try {
      const token = localStorage.getItem('adminToken');
      await axios.post(`${API_URL}/api/content/${section}`, payload, {
        headers: { Authorization: `Bearer ${token}` }
      });
      alert('Content saved successfully!');
    } catch (err) {
      alert("Failed to save content");
    } finally {
      setSaving(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminUser');
    navigate('/admin');
  };

  const handleDelete = async (id) => {
    if(!window.confirm("Delete this menu item?")) return;
    try {
      const token = localStorage.getItem('adminToken');
      await axios.delete(`${API_URL}/api/menu/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      fetchData();
    } catch (err) {
      alert("Failed to delete");
    }
  };

  const openAddModal = () => {
    setModalMode('add');
    setCurrentItem({ name: '', category: 'Fresh Juices', price: '', description: '', image: '' });
    setShowModal(true);
  };

  const openEditModal = (item) => {
    setModalMode('edit');
    setCurrentItem(item);
    setShowModal(true);
  };

  const handleSaveMenu = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      const token = localStorage.getItem('adminToken');
      const config = { headers: { Authorization: `Bearer ${token}` } };
      
      if (modalMode === 'add') {
        await axios.post(`${API_URL}/api/menu`, currentItem, config);
      } else {
        await axios.put(`${API_URL}/api/menu/${currentItem.id}`, currentItem, config);
      }
      
      setShowModal(false);
      fetchData();
    } catch (err) {
      alert("Failed to save menu item");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <div className="w-64 bg-brand-dark text-white p-6 flex flex-col fixed h-full z-10">
        <div className="mb-10">
          <span className="font-display font-bold text-2xl text-white">Sofine <span className="text-brand-orange">Admin</span></span>
        </div>
        <nav className="flex-1 flex flex-col gap-2">
          <button onClick={() => setActiveTab('menu')} className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium w-full text-left transition-colors ${activeTab === 'menu' ? 'bg-white/10 text-brand-orange' : 'hover:bg-white/5 text-gray-300'}`}>
            <Utensils size={20} /> Menu Manager
          </button>
          <button onClick={() => setActiveTab('hero')} className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium w-full text-left transition-colors ${activeTab === 'hero' ? 'bg-white/10 text-brand-orange' : 'hover:bg-white/5 text-gray-300'}`}>
            <LayoutDashboard size={20} /> Hero Section
          </button>
          <button onClick={() => setActiveTab('about')} className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium w-full text-left transition-colors ${activeTab === 'about' ? 'bg-white/10 text-brand-orange' : 'hover:bg-white/5 text-gray-300'}`}>
            <LayoutDashboard size={20} /> About Section
          </button>
          <button onClick={() => setActiveTab('gallery')} className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium w-full text-left transition-colors ${activeTab === 'gallery' ? 'bg-white/10 text-brand-orange' : 'hover:bg-white/5 text-gray-300'}`}>
            <LayoutDashboard size={20} /> Gallery Section
          </button>
          <button onClick={() => setActiveTab('journey')} className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium w-full text-left transition-colors ${activeTab === 'journey' ? 'bg-white/10 text-brand-orange' : 'hover:bg-white/5 text-gray-300'}`}>
            <LayoutDashboard size={20} /> Journey Section
          </button>
           <button onClick={() => setActiveTab('settings')} className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium w-full text-left transition-colors ${activeTab === 'settings' ? 'bg-white/10 text-brand-orange' : 'hover:bg-white/5 text-gray-300'}`}>
            <Settings size={20} /> Settings
          </button>
        </nav>
        <button onClick={handleLogout} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mt-auto py-4">
          <LogOut size={20} /> Sign Out
        </button>
      </div>

      <div className="ml-64 flex-1 p-10 relative">
        {activeTab === 'menu' && (
          <>
            <div className="flex justify-between items-end mb-10 border-b border-gray-200 pb-6">
              <div>
                <h1 className="text-3xl font-display font-bold text-brand-dark mb-2">Menu Manager</h1>
                <p className="text-gray-500">Add, edit or remove items from your public menu.</p>
              </div>
              <button onClick={openAddModal} className="bg-brand-green hover:bg-brand-darkGreen text-white px-6 py-3 rounded-xl font-bold shadow-md transition-all flex items-center gap-2">
                <Plus size={18} /> Add Item
              </button>
            </div>
            {loading ? <div className="text-center py-20">Loading...</div> : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {menuItems.map(item => (
                  <div key={item.id} className="bg-white rounded-2xl p-5 shadow-soft border border-gray-100 flex gap-4">
                    <img src={item.image || "https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg?auto=compress&cs=tinysrgb&w=150"} alt={item.name} className="w-24 h-24 object-cover rounded-xl" />
                    <div className="flex-1">
                      <span className="text-xs font-bold text-brand-orange uppercase">{item.category}</span>
                      <h3 className="font-bold text-brand-dark leading-tight mt-1">{item.name}</h3>
                      <p className="text-brand-green font-semibold mt-1">{item.price}</p>
                      <div className="mt-3 flex gap-2">
                        <button onClick={() => openEditModal(item)} className="text-xs font-semibold px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-600 transition-colors">Edit</button>
                        <button onClick={() => handleDelete(item.id)} className="text-xs p-1.5 text-red-500 hover:bg-red-50 rounded-lg transition-colors"><Trash2 size={16} /></button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            {/* Modal */}
            {showModal && (
              <div className="fixed inset-0 bg-black/50 z-50 flex justify-center items-center p-4">
                <div className="bg-white rounded-3xl p-8 max-w-lg w-full shadow-2xl relative">
                  <button onClick={() => setShowModal(false)} className="absolute top-6 right-6 text-gray-400 hover:text-gray-600">
                    <X size={24} />
                  </button>
                  <h2 className="text-2xl font-bold text-brand-dark mb-6">
                    {modalMode === 'add' ? 'Add New Item' : 'Edit Menu Item'}
                  </h2>
                  <form onSubmit={handleSaveMenu} className="flex flex-col gap-4">
                    <div>
                      <label className="text-sm font-semibold text-gray-700 block mb-1">Name</label>
                      <input required type="text" value={currentItem.name} onChange={e => setCurrentItem({...currentItem, name: e.target.value})} className="w-full px-4 py-2 border border-gray-200 rounded-xl" />
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-1">
                        <label className="text-sm font-semibold text-gray-700 block mb-1">Category</label>
                        <select value={currentItem.category} onChange={e => setCurrentItem({...currentItem, category: e.target.value})} className="w-full px-4 py-2 border border-gray-200 rounded-xl">
                          <option value="Fresh Juices">Fresh Juices</option>
                          <option value="Milkshakes">Milkshakes</option>
                          <option value="Smoothies">Smoothies</option>
                          <option value="Seasonal Specials">Seasonal Specials</option>
                        </select>
                      </div>
                      <div className="flex-1">
                        <label className="text-sm font-semibold text-gray-700 block mb-1">Price (e.g. ₹99)</label>
                        <input required type="text" value={currentItem.price} onChange={e => setCurrentItem({...currentItem, price: e.target.value})} className="w-full px-4 py-2 border border-gray-200 rounded-xl" />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-semibold text-gray-700 block mb-1">Image URL</label>
                      <input type="text" placeholder="https://images.pexels.com/..." value={currentItem.image || ''} onChange={e => setCurrentItem({...currentItem, image: e.target.value})} className="w-full px-4 py-2 border border-gray-200 rounded-xl" />
                    </div>
                    <div>
                      <label className="text-sm font-semibold text-gray-700 block mb-1">Description</label>
                      <textarea value={currentItem.description || ''} onChange={e => setCurrentItem({...currentItem, description: e.target.value})} className="w-full px-4 py-2 border border-gray-200 rounded-xl h-24" />
                    </div>
                    <button disabled={saving} type="submit" className="w-full bg-brand-orange hover:bg-brand-darkOrange text-white font-bold py-3 rounded-xl mt-4">
                      {saving ? 'Saving...' : 'Save Item'}
                    </button>
                  </form>
                </div>
              </div>
            )}
          </>
        )}

        {/* ... hero and about sections ... */}
        {activeTab === 'hero' && (
          <div className="max-w-2xl bg-white p-8 rounded-3xl shadow-soft border border-gray-100">
            <h1 className="text-2xl font-display font-bold text-brand-dark mb-6">Edit Hero Section</h1>
            <div className="flex flex-col gap-4">
              <div>
                <label className="text-sm font-semibold text-gray-700">Display Title</label>
                <input type="text" value={heroData.title || ''} onChange={e => setHeroData({...heroData, title: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-gray-200 mt-1" placeholder="Freshness in Every Sip." />
              </div>
              <div>
                <label className="text-sm font-semibold text-gray-700">Subtitle</label>
                <textarea value={heroData.subtitle || ''} onChange={e => setHeroData({...heroData, subtitle: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-gray-200 mt-1 h-32" placeholder="Revitalize your body with our premium selection..." />
              </div>
              <div>
                <label className="text-sm font-semibold text-gray-700">Background Image URL</label>
                <input type="text" value={heroData.backgroundImage || ''} onChange={e => setHeroData({...heroData, backgroundImage: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-gray-200 mt-1" placeholder="https://images.pexels.com/..." />
              </div>
              <button disabled={saving} onClick={() => saveContent('hero', heroData)} className="bg-brand-orange hover:bg-brand-darkOrange text-white font-bold py-3 rounded-xl shadow-md transition-all flex justify-center items-center gap-2 mt-4">
                <Save size={18} /> {saving ? 'Saving...' : 'Save Changes'}
              </button>
            </div>
          </div>
        )}

        {activeTab === 'about' && (
          <div className="max-w-2xl bg-white p-8 rounded-3xl shadow-soft border border-gray-100">
            <h1 className="text-2xl font-display font-bold text-brand-dark mb-6">Edit About Section</h1>
            <div className="flex flex-col gap-4">
              <div>
                <label className="text-sm font-semibold text-gray-700">Header Title</label>
                <input type="text" value={aboutData.title || ''} onChange={e => setAboutData({...aboutData, title: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-gray-200 mt-1" placeholder="Pure Goodness in Every Drop." />
              </div>
              <div>
                <label className="text-sm font-semibold text-gray-700">Paragraph 1</label>
                <textarea value={aboutData.content1 || ''} onChange={e => setAboutData({...aboutData, content1: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-gray-200 mt-1 h-32" />
              </div>
              <div>
                <label className="text-sm font-semibold text-gray-700">Paragraph 2</label>
                <textarea value={aboutData.content2 || ''} onChange={e => setAboutData({...aboutData, content2: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-gray-200 mt-1 h-32" />
              </div>
              <button disabled={saving} onClick={() => saveContent('about', aboutData)} className="bg-brand-orange hover:bg-brand-darkOrange text-white font-bold py-3 rounded-xl shadow-md transition-all flex justify-center items-center gap-2 mt-4">
                <Save size={18} /> {saving ? 'Saving...' : 'Save Changes'}
              </button>
            </div>
          </div>
        )}

        {activeTab === 'settings' && (
          <div className="max-w-2xl bg-white p-8 rounded-3xl shadow-soft border border-gray-100">
            <h1 className="text-2xl font-display font-bold text-brand-dark mb-6">Global Site Settings</h1>
            <div className="flex flex-col gap-4">
              <div>
                <label className="text-sm font-semibold text-gray-700">Contact Email</label>
                <input type="email" value={settingsData.email || ''} onChange={e => setSettingsData({...settingsData, email: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-gray-200 mt-1" placeholder="hello@sofine.com" />
              </div>
              <div>
                <label className="text-sm font-semibold text-gray-700">Phone Number</label>
                <input type="text" value={settingsData.phone || ''} onChange={e => setSettingsData({...settingsData, phone: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-gray-200 mt-1" placeholder="+91 98765 43210" />
              </div>
               <div>
                <label className="text-sm font-semibold text-gray-700">Footer Tagline</label>
                <textarea value={settingsData.footerText || ''} onChange={e => setSettingsData({...settingsData, footerText: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-gray-200 mt-1 h-24" placeholder="Crafting the finest natural juices since 2015." />
              </div>
              <button disabled={saving} onClick={() => saveContent('settings', settingsData)} className="bg-brand-orange hover:bg-brand-darkOrange text-white font-bold py-3 rounded-xl shadow-md transition-all flex justify-center items-center gap-2 mt-4">
                <Save size={18} /> {saving ? 'Saving...' : 'Save Settings'}
              </button>
            </div>
          </div>
        )}

        {activeTab === 'gallery' && (
          <div className="max-w-2xl bg-white p-8 rounded-3xl shadow-soft border border-gray-100">
            <h1 className="text-2xl font-display font-bold text-brand-dark mb-6">Edit Gallery Images</h1>
            <p className="text-gray-500 mb-6">Provide 6 image URLs to display in the public gallery section.</p>
            <div className="flex flex-col gap-4">
              {[0, 1, 2, 3, 4, 5].map((index) => (
                <div key={index}>
                  <label className="text-sm font-semibold text-gray-700">Image {index + 1} URL</label>
                  <input 
                    type="text" 
                    value={galleryData.images[index] || ''} 
                    onChange={e => {
                      const newImages = [...galleryData.images];
                      newImages[index] = e.target.value;
                      setGalleryData({...galleryData, images: newImages});
                    }} 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 mt-1" 
                    placeholder="https://images.pexels.com/..." 
                  />
                </div>
              ))}
              <button disabled={saving} onClick={() => saveContent('gallery', galleryData)} className="bg-brand-orange hover:bg-brand-darkOrange text-white font-bold py-3 rounded-xl shadow-md transition-all flex justify-center items-center gap-2 mt-4">
                <Save size={18} /> {saving ? 'Saving...' : 'Save Gallery'}
              </button>
            </div>
          </div>
        )}

        {activeTab === 'journey' && (
          <div className="max-w-4xl bg-white p-8 rounded-3xl shadow-soft border border-gray-100">
            <h1 className="text-2xl font-display font-bold text-brand-dark mb-6">Edit Journey Section</h1>
            <div className="flex flex-col gap-4">
              <div>
                <label className="text-sm font-semibold text-gray-700">Section Title</label>
                <input type="text" value={journeyData.title || ''} onChange={e => setJourneyData({...journeyData, title: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-gray-200 mt-1" />
              </div>
              <div>
                <label className="text-sm font-semibold text-gray-700">Section Subtitle</label>
                <textarea value={journeyData.subtitle || ''} onChange={e => setJourneyData({...journeyData, subtitle: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-gray-200 mt-1 h-24" />
              </div>
              
              <h2 className="text-xl font-bold mt-4 text-brand-dark">Milestones</h2>
              {journeyData.milestones.map((milestone, index) => (
                <div key={index} className="p-4 border border-gray-200 rounded-xl flex flex-col gap-3">
                  <div className="flex gap-4">
                    <div className="w-1/4">
                      <label className="text-xs font-semibold text-gray-700">Year</label>
                      <input type="text" value={milestone.year} onChange={e => {
                        const newM = [...journeyData.milestones];
                        newM[index].year = e.target.value;
                        setJourneyData({...journeyData, milestones: newM});
                      }} className="w-full px-3 py-2 rounded-lg border border-gray-200 mt-1" />
                    </div>
                    <div className="w-3/4">
                      <label className="text-xs font-semibold text-gray-700">Title</label>
                      <input type="text" value={milestone.title} onChange={e => {
                        const newM = [...journeyData.milestones];
                        newM[index].title = e.target.value;
                        setJourneyData({...journeyData, milestones: newM});
                      }} className="w-full px-3 py-2 rounded-lg border border-gray-200 mt-1" />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-700">Description</label>
                    <textarea value={milestone.description} onChange={e => {
                        const newM = [...journeyData.milestones];
                        newM[index].description = e.target.value;
                        setJourneyData({...journeyData, milestones: newM});
                    }} className="w-full px-3 py-2 rounded-lg border border-gray-200 mt-1 h-20" />
                  </div>
                </div>
              ))}

              <button disabled={saving} onClick={() => saveContent('journey', journeyData)} className="bg-brand-orange hover:bg-brand-darkOrange text-white font-bold py-3 rounded-xl shadow-md transition-all flex justify-center items-center gap-2 mt-4">
                <Save size={18} /> {saving ? 'Saving...' : 'Save Journey'}
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default AdminDashboard;
