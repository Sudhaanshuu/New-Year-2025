import React from 'react';

const FireworkEffect = () => {
  return (
    <div className="firework-container">
      {[...Array(5)].map((_, i) => (
        <div key={i} className={`firework firework-${i + 1}`}>
          {[...Array(20)].map((_, j) => (
            <div key={j} className="particle"></div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default FireworkEffect;