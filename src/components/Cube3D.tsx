import React from 'react';

const Cube3D = () => {
  return (
    <div className="w-32 h-32 relative rotate3d perspective-1000 transform-style-3d">
      <div className="absolute w-full h-full bg-purple-600/20 backdrop-blur-sm border border-purple-300/30 transform -translate-z-16"></div>
      <div className="absolute w-full h-full bg-purple-600/20 backdrop-blur-sm border border-purple-300/30 transform translate-z-16"></div>
      <div className="absolute w-full h-full bg-purple-600/20 backdrop-blur-sm border border-purple-300/30 transform rotate-y-90 translate-z-16"></div>
      <div className="absolute w-full h-full bg-purple-600/20 backdrop-blur-sm border border-purple-300/30 transform -rotate-y-90 translate-z-16"></div>
      <div className="absolute w-full h-full bg-purple-600/20 backdrop-blur-sm border border-purple-300/30 transform rotate-x-90 translate-z-16"></div>
      <div className="absolute w-full h-full bg-purple-600/20 backdrop-blur-sm border border-purple-300/30 transform -rotate-x-90 translate-z-16"></div>
    </div>
  );
};

export default Cube3D;