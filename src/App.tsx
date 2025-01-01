import React, { useEffect, useState } from 'react';
import { Code2 } from 'lucide-react';
import Cube3D from './components/Cube3D';
import MotivationalMessage from './components/MotivationalMessage';
import Rocket3D from './components/Rocket3D';
import FireworkEffect from './components/FireworkEffect';
import SpaceObjects from './components/SpaceObjects';
import ContactSection from './components/ContactSection';
import './styles/animations.css';

function App() {
  const [showTitle, setShowTitle] = useState(false);
  const [showRocket, setShowRocket] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowRocket(true), 1000);
    setTimeout(() => setShowTitle(true), 2000);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 text-white relative overflow-hidden">
      {/* Space Background */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center" />
      
      {/* Space Objects */}
      <SpaceObjects />
      
      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-4">
        {/* Logo */}
        <div className="float mb-8">
          <Code2 className="w-16 h-16 text-purple-300 mx-auto" />
        </div>
        
        {/* Rocket */}
        {showRocket && <Rocket3D />}
        
        {/* Title */}
        <div className={`text-center mb-12 ${showTitle ? 'title-reveal' : 'opacity-0'}`}>
          <h1 className="text-[12rem] font-bold leading-none glow bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-purple-100">
            2025
          </h1>
          <h2 className="text-6xl font-light mb-4 text-purple-200">
            HAPPY NEW YEAR
          </h2>
          <h3 className="text-3xl font-light text-purple-300">
            Code Your Future, Debug Your Limits
          </h3>
        </div>

        {/* 3D Elements */}
        <div className="flex justify-around w-full mb-12">
          <Cube3D />
          <FireworkEffect />
          <Cube3D />
        </div>

        {/* Motivational Message */}
        <div className="max-w-lg mx-auto mb-20">
          <MotivationalMessage />
        </div>
      </div>

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}

export default App;