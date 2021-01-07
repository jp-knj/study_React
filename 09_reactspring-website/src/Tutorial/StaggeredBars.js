import React from 'react';
import { useTrail, animated } from 'react-spring';

const colors = ['red', 'green', 'blue', 'orange', 'purple', 'yellow'];

const StaggeredBars = () => {
  const trailSprings = useTrail(colors.length, {
    from: { height: '0px' },
    to: { height: '80px' },
  });

  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', height: '500px' }}>
      {trailSprings.map((spring, index) => (
        <animated.div
          key={colors[index]}
          style={{
            ...spring,
            width: '20px',
            marginRight: '10px',
            transformOrigin: 'bottom',
            backgroundColor: colors[index],
          }}
        />
      ))}
    </div>
  );
};

export default StaggeredBars;
