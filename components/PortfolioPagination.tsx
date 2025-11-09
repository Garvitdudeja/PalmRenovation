'use client';

import { useRouter } from 'next/navigation';

interface PortfolioPaginationProps {
  currentPage: number;
  totalPages: number;
}

const PortfolioPagination = ({ currentPage, totalPages }: PortfolioPaginationProps) => {
  const router = useRouter();

  const handlePageClick = (page: number, e: React.MouseEvent) => {
    e.preventDefault();
    
    // Navigate without default scroll behavior
    const url = page === 1 ? '/portfolio' : `/portfolio?page=${page}`;
    router.push(url, { scroll: false });
    
    // Scroll to portfolio grid after navigation
    // Increased timeout to ensure DOM is updated
    setTimeout(() => {
      const portfolioGrid = document.getElementById('portfolio-grid');
      if (portfolioGrid) {
        portfolioGrid.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 150);
  };

  if (totalPages <= 1) return null;

  return (
    <div className="mt-12 flex justify-center items-center space-x-2">
      {currentPage > 1 && (
        <button
          onClick={(e) => handlePageClick(currentPage - 1, e)}
          className="px-4 py-2 bg-gray-200 text-charcoal-gray rounded-lg hover:bg-gray-300 transition font-semibold"
        >
          Previous
        </button>
      )}
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={(e) => handlePageClick(page, e)}
          className={`px-4 py-2 rounded-lg transition font-semibold ${
            currentPage === page
              ? 'bg-ocean-teal text-white hover:bg-ocean-teal-700'
              : 'bg-gray-200 text-charcoal-gray hover:bg-gray-300'
          }`}
        >
          {page}
        </button>
      ))}
      {currentPage < totalPages && (
        <button
          onClick={(e) => handlePageClick(currentPage + 1, e)}
          className="px-4 py-2 bg-gray-200 text-charcoal-gray rounded-lg hover:bg-gray-300 transition font-semibold"
        >
          Next
        </button>
      )}
    </div>
  );
};

export default PortfolioPagination;

