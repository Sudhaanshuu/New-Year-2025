import React from 'react';
import { Sparkles } from 'lucide-react';

const messages = [
  "Debug yesterday's code, deploy tomorrow's dreams! 🚀",
  "New year, new frameworks to master! 💪",
  "Keep pushing those pixels, they'll push back with success! ✨",
  "Your code is your legacy - make it count! 💻",
  "2025: Time to refactor your limits! 🎯"
];

const MotivationalMessage = () => {
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  
  return (
    <div className="text-center p-6 bg-purple-900/20 backdrop-blur-md rounded-xl border border-purple-300/30 shadow-xl">
      <Sparkles className="w-8 h-8 text-purple-400 mx-auto mb-4" />
      <p className="text-xl text-purple-100 font-light">{randomMessage}</p>
    </div>
  );
};

export default MotivationalMessage;