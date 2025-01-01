import React, { useEffect, useState } from 'react';

const Rocket3D = () => {
  const [launched, setLaunched] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLaunched(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`relative ${launched ? 'rocket-launch' : ''}`}>
      <div className="rocket-body">
        <div className="w-20 h-40 bg-gradient-to-b from-purple-400 to-purple-600 rounded-t-full relative">
          {/* Rocket Window */}
          <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-cyan-300 rounded-full border-4 border-purple-300"></div>
          
          {/* Rocket Fins */}
          <div className="absolute bottom-0 -left-4 w-4 h-12 bg-purple-500 skew-x-[30deg]"></div>
          <div className="absolute bottom-0 -right-4 w-4 h-12 bg-purple-500 skew-x-[-30deg]"></div>
          
          {/* Rocket Flames */}
          <div className="rocket-flames">
            <div className="flame flame-red"></div>
            <div className="flame flame-orange"></div>
            <div className="flame flame-yellow"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rocket3D;