import React, { useState, useRef } from 'react'
import { useTrail, animated, useSpring, useChain, config } from 'react-spring';

const colors = ['red', 'green', 'blue', 'orange', 'purple', 'yellow'];

export const TranslateStaggeredBars = () => {
  const [expanded, setExpanded] = useState(false);

  const springRef = useRef();
  const spring = useSpring({
    from: { transform: `translateX(80px)` },
    to: { transform: `translateX(0px)` },
    ref: springRef,
    config: config.stiff,
    reverse: expanded,
  });

  const trailRef = useRef();
  const trailSprings = useTrail(colors.length, {
    from: { height: '5px' },
    to: { height: '80px' },
    ref: trailRef,
    reverse: !expanded,
  });

  useChain(expanded ? [springRef, trailRef] : [trailRef, springRef]);

  return (
    <div style={{ height: '500px' }}>
      <animated.div
        style={{
          ...spring,
          height: '100px',
          display: 'inline-flex',
          alignItems: 'flex-end',
          marginBottom: '15px',
        }}
      >
        {trailSprings.map((trailSpring, index) => (
          <animated.div
            key={colors[index]}
            style={{
              ...trailSpring,
              width: '20px',
              marginRight: '10px',
              transformOrigin: 'bottom',
              backgroundColor: colors[index],
            }}
          />
        ))}
      </animated.div>
      <div>
        <button
          type="button"
          onClick={() => {
            setExpanded(prevState => !prevState);
          }}
        >
          Click to Animate
        </button>
      </div>
    </div>
  );
};

export default TranslateStaggeredBars;
