'use client';

import { useEffect, useRef } from 'react';

const lerp = (start, end, amount) => start + (end - start) * amount;

export default function SplashCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const animationFrame = useRef(null);
  const isPressed = useRef(false);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const onMove = (event) => {
      target.current.x = event.clientX;
      target.current.y = event.clientY;
      dot.style.opacity = '1';
      ring.style.opacity = '1';
    };

    const onLeave = () => {
      dot.style.opacity = '0';
      ring.style.opacity = '0';
    };

    const onDown = () => {
      isPressed.current = true;
      ring.style.transform = `translate3d(${current.current.x - 20}px, ${current.current.y - 20}px, 0) scale(0.84)`;
      dot.style.transform = `translate3d(${current.current.x - 6}px, ${current.current.y - 6}px, 0) scale(0.76)`;
    };

    const onUp = () => {
      isPressed.current = false;
    };

    const update = () => {
      current.current.x = lerp(current.current.x, target.current.x, 0.15);
      current.current.y = lerp(current.current.y, target.current.y, 0.15);

      const ringScale = isPressed.current ? 0.84 : 1;
      const dotScale = isPressed.current ? 0.76 : 1;

      ring.style.transform = `translate3d(${current.current.x - 20}px, ${current.current.y - 20}px, 0) scale(${ringScale})`;
      dot.style.transform = `translate3d(${current.current.x - 6}px, ${current.current.y - 6}px, 0) scale(${dotScale})`;

      animationFrame.current = requestAnimationFrame(update);
    };

    current.current.x = window.innerWidth / 2;
    current.current.y = window.innerHeight / 2;
    target.current.x = current.current.x;
    target.current.y = current.current.y;

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseenter', onMove);
    window.addEventListener('mouseleave', onLeave);
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);

    animationFrame.current = requestAnimationFrame(update);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseenter', onMove);
      window.removeEventListener('mouseleave', onLeave);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
      if (animationFrame.current) cancelAnimationFrame(animationFrame.current);
    };
  }, []);

  return (
    <>
      <div
        ref={ringRef}
        className="fixed left-0 top-0 z-[9999] h-10 w-10 rounded-full border border-white/20 bg-white/5 shadow-[0_0_35px_rgba(245,158,11,0.18)] pointer-events-none opacity-0 transition-opacity duration-200 ease-out"
        style={{ backdropFilter: 'blur(8px)' }}
      />
      <div
        ref={dotRef}
        className="fixed left-0 top-0 z-[9999] h-3 w-3 rounded-full bg-white shadow-[0_0_18px_rgba(255,255,255,0.9)] pointer-events-none opacity-0 transition-opacity duration-200 ease-out"
      />
    </>
  );
}
