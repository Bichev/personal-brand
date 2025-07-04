import { useState, useEffect } from 'react';
import { NAVIGATION_ITEMS } from '@/lib/constants';

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = NAVIGATION_ITEMS.map(item => item.href.substring(1));
      let currentSectionId = 'hero';

      // Use a reference point in the middle of the viewport
      const referencePoint = window.scrollY + window.innerHeight / 2;

      for (const id of sectionIds) {
        const element = document.getElementById(id);
        // Check if the top of the section has passed the reference point
        if (element && element.offsetTop <= referencePoint) {
          currentSectionId = id;
        }
      }
      
      setActiveSection(currentSectionId);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Set initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return activeSection;
} 