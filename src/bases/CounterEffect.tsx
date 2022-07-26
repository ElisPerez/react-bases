import { gsap } from 'gsap';
import { useEffect, useRef, useState } from 'react';

const MAXIMUM_COUNT = 10;

export const CounterEffect = () => {
  const [count, setCount] = useState(5);
  const counterElement = useRef<HTMLHeadingElement>(null);

  const handleReset = () => {
    setCount(5);
  };

  const handleClick = () => {
    setCount(prev => Math.min(prev + 1, MAXIMUM_COUNT));
  };

  useEffect(() => {
    if (count < MAXIMUM_COUNT) return;
    console.log('%cMaximum count reached!', 'color: red; background: yellow;');

    const timeline = gsap.timeline();

    timeline
      .to(counterElement.current, {
        y: -10,
        duration: 1,
        opacity: 0.1,
        ease: 'power2.inOut',
        stagger: 0.5,
      })
      .to(counterElement.current, {
        y: 0,
        duration: 1,
        opacity: 1,
        ease: 'bounce.out',
        stagger: 0.5,
      });
  }, [count]);

  return (
    <div>
      <h2>CounterEffect:</h2>
      <h3 ref={counterElement}>{count}</h3>
      <button onClick={handleClick}>+1</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};
