'use client';

import { useEffect, useRef } from 'react';
import { useSearchParams, usePathname } from 'next/navigation';

const PortfolioScrollHandler = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const page = searchParams.get('page');
  const prevPageRef = useRef<string | null>(null);
  const isInitialMount = useRef(true);

  useEffect(() => {
    // Skip scroll on initial mount
    if (isInitialMount.current) {
      isInitialMount.current = false;
      prevPageRef.current = page;
      return;
    }

    // Only scroll if page parameter has changed
    if (prevPageRef.current !== page) {
      prevPageRef.current = page;
      
      // Small delay to ensure page content is rendered after navigation
      setTimeout(() => {
        const portfolioGrid = document.getElementById('portfolio-grid');
        if (portfolioGrid) {
          portfolioGrid.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, [page, pathname]);

  return null;
};

export default PortfolioScrollHandler;

