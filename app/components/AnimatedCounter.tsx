'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  delay?: number;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ 
  end, 
  duration = 2,
  suffix = '',
  delay = 0
}) => {
  const [count, setCount] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(counterRef, { once: true, amount: 0.3 });
  const frameRate = 1000 / 60; // 60fps
  const totalFrames = Math.round(duration * 60);

  // Format the number with commas
  const formatNumber = (num: number) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  // Handle client-side mounting
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isInView && isMounted) {
      let startTimestamp: number | null = null;
      let frame = 0;
      
      // Add delay before starting animation
      const timer = setTimeout(() => {
        const step = (timestamp: number) => {
          if (!startTimestamp) startTimestamp = timestamp;
          
          const progress = timestamp - startTimestamp;
          frame = Math.floor(progress / frameRate);
          
          if (frame <= totalFrames) {
            const currentCount = Math.round(easeOutQuad(frame / totalFrames) * end);
            setCount(currentCount);
            requestAnimationFrame(step);
          } else {
            setCount(end);
          }
        };
        
        requestAnimationFrame(step);
      }, delay);
      
      return () => clearTimeout(timer);
    }
  }, [isInView, isMounted, end, totalFrames, delay, frameRate]);
  
  // Easing function for smoother animation
  const easeOutQuad = (t: number): number => {
    return t * (2 - t);
  };

  // For server-side rendering, always show 0
  if (!isMounted) {
    return (
      <div className="font-bold text-4xl md:text-5xl text-white">
        0{suffix}
      </div>
    );
  }

  return (
    <motion.div
      ref={counterRef}
      className="font-bold text-4xl md:text-5xl text-white"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: delay / 1000 }}
    >
      {formatNumber(count)}{suffix}
    </motion.div>
  );
};

export default AnimatedCounter; 