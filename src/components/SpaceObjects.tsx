import React from 'react';
import { Star, Moon, Sun } from 'lucide-react';

const SpaceObjects = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Stars */}
      {[...Array(20)].map((_, i) => (
        <Star 
          key={i}
          className={`absolute text-yellow-200 twinkle-${i % 3}`}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            transform: `scale(${0.5 + Math.random()})`,
          }}
        />
      ))}
      
      {/* Moon */}
      <div className="absolute top-10 right-20 float-slow">
        <Moon className="w-16 h-16 text-gray-200" />
      </div>
      
      {/* Sun */}
      <div className="absolute bottom-20 left-20 rotate-slow">
        <Sun className="w-24 h-24 text-yellow-500 opacity-50" />
      </div>
    </div>
  );
};

export default SpaceObjects;