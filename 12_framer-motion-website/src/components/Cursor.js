import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

export const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

     useEffect(() => {
           addEventListeners();
           return () => removeEventListeners();
       }, []);

     const addEventListeners = () => {
           document.addEventListener("mousemove", onMouseMove);
       };

     const removeEventListeners = () => {
           document.removeEventListener("mousemove", onMouseMove);
       };

     const onMouseMove = (e) => {
           setPosition({ x: e.clientX, y: e.clientY });
       };
  return (
    <>
     <Cursors style={{
 left: `${position.x}px`,
 top: `${position.y}px`
            }}/>
    </>
  )
}

export default Cursor

const Cursors = styled.div`
  width: 40px;
  height: 40px;
  border: 2px solid black;
  border-radius: 100%;
  position: fixed;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 9999;
  mix-blend-mode: difference;
`
