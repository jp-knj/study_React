import React, { useState, useEffect } from 'react';

function MouseTracker() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // .addEventListener() sets up an active listener...
    window.addEventListener("mousemove", handleMouseMove);

    /* ...So when we navigate away from this page, it needs to be
       removed to stop listening. Otherwise, it will try to set
       state in a component that doesn't exist (causing an error)

     We unsubscribe any subscriptions / listeners w/ this 'cleanup function')
     */
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  function handleMouseMove(event) {
    setMousePosition({
      x: event.pageX,
      y: event.pageY
    });
  }

  return (
    <div>
      <h1>The current mouse position is:</h1>
      <p>
        X: {mousePosition.x}, Y: {mousePosition.y}
      </p>
    </div>
  );
}

export default MouseTracker;
