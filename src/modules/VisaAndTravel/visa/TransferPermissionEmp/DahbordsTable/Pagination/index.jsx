import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrevClick = () => {
    if (currentPage > 0) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages - 1) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePageClick = (page) => {
    onPageChange(page);
  };

  return (
    <div>
      <button onClick={handlePrevClick} disabled={currentPage === 0}>Prev</button>
      {[...Array(totalPages).keys()].map((page) => (
        <button key={page} onClick={() => handlePageClick(page)}>{page}</button>
      ))}
      <button onClick={handleNextClick} disabled={currentPage === totalPages - 1}>Next</button>
    </div>
  );
};

export default Pagination;