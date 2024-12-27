
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Jump to the top of the page without a scroll animation
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // This component just ensures the page is at the top on route changes
};

export default ScrollToTop;
