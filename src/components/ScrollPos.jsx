import { useEffect, useState } from 'react';

export function useScrollPositionRelativeTo(ref) {
  const [relativeY, setRelativeY] = useState(0);

  useEffect(() => {
    function handleScroll() {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const scrollTop = window.scrollY || window.pageYOffset;
        const offsetTop = rect.top + scrollTop;
        setRelativeY(scrollTop - offsetTop);
      }
    }

    handleScroll(); // inicial
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [ref]);

  return relativeY;
}