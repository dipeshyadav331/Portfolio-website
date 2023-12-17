import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Index = ({ children }) => {
  const magnetic = useRef(null);

  useEffect(() => {
    const xTo = gsap.quickTo(magnetic.current, 'x', { duration: 1, ease: 'elastic.out(1, 0.3)' });
    const yTo = gsap.quickTo(magnetic.current, 'y', { duration: 1, ease: 'elastic.out(1, 0.3)' });

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { height, width, left, top } = magnetic.current.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      xTo(x * 0.35);
      yTo(y * 0.35);
    };

    const handleMouseLeave = () => {
      xTo(0);
      yTo(0);
    };

    const element = magnetic.current;

    if (element) {
      element.addEventListener('mousemove', handleMouseMove);
      element.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      // Clean up event listeners when component unmounts
      if (element) {
        element.removeEventListener('mousemove', handleMouseMove);
        element.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  // Ensure the ref is attached to the child component
  const childWithRef = React.cloneElement(children, { ref: magnetic });

  return childWithRef;
};

export default Index;
