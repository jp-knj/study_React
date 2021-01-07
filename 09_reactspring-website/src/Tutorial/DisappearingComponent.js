import React, { useState } from 'react'
import { useTransition, animated } from 'react-spring'

export const DisappearingComponent = () => {
  const [isDisplay, setIsDisplay] = useState(true);
  const transitions = useTransition(isDisplay, null, {
    from: { transform: `translateX(50px)`, opacity: 0 },
    enter: { transform: `translateX(0px)`, opacity: 1 },
    leave: { transform: `translateX(50px)`, opacity: 0 },
  });

  return (
    <>
      <div style={{ width: '50px', height: '20px' }}>
        {transitions.map(
          ({ item, key, props }) =>
            item && (
              <animated.div key={key} style={{ ...props, display: 'inline-block' }}>
                Kenji
              </animated.div>
            )
        )}
      </div>
      <button
        onClick={() => {
          setIsDisplay(prevState => !prevState);
        }}
      >
        click
      </button>
    </>
  );
};

export default DisappearingComponent;
