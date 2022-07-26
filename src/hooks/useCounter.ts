import gsap from 'gsap';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';

export const useCounter = ({ maxCount = 10 }) => {
  const [count, setCount] = useState(5);
  const elementToAnimate = useRef<any>(null);

  const timeline = useRef(gsap.timeline());

  const handleReset = () => {
    setCount(0);
  };

  const handleClick = () => {
    setCount(prev => Math.min(prev + 1, maxCount));
  };

  useLayoutEffect(() => {
    if (!elementToAnimate.current) return;

    timeline.current
      .to(elementToAnimate.current, {
        y: -10,
        duration: 1,
        opacity: 0.1,
        ease: 'power2.inOut',
        stagger: 0.5,
      })
      .to(elementToAnimate.current, {
        y: 0,
        duration: 1,
        opacity: 1,
        ease: 'bounce.out',
        stagger: 0.5,
      })
      .pause();
  }, []);

  useEffect(() => {
    // if (count < maxCount) return;
    timeline.current.play(0);
  }, [count]);

  return {
    count,
    handleClick,
    handleReset,
    elementToAnimate,
  };
};
