import React from 'react';
import { Button } from 'antd';
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

const Pagination = ({ currentPage, totalPages, handlePageChange }) => {
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxDisplayedPages = 5;

    if (totalPages <= maxDisplayedPages) {
      for (let i = 0; i < totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      pageNumbers.push(0); // always show the first page

      if (currentPage > 2) {
        pageNumbers.push('...'); // ellipsis
      }

      // show pages around the current page
      const startPage = Math.max(1, currentPage - 1);
      const endPage = Math.min(totalPages - 1, currentPage + 1);

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }

      if (currentPage < totalPages - 3) {
        pageNumbers.push('...'); // ellipsis
      }

      pageNumbers.push(totalPages - 1); // always show the last page
    }

    return pageNumbers;
  };

  return (
    <div>
      <Button
        type="primary"
        disabled={currentPage === 0}
        onClick={() => handlePageChange(currentPage - 1)}
        className='btnPagination'
      >
        <GrFormPrevious />
      </Button>
      {getPageNumbers().map((page, index) => (
        <Button
          key={index}
          type={currentPage === page ? "primary" : "default"}
          onClick={() => {
            if (page !== '...') {
              handlePageChange(page);
            }
          }}
          className='NumberPagination'
        >
          {page === '...' ? '...' : page + 1}
        </Button>
      ))}
      <Button
        type="primary"
        disabled={currentPage === totalPages - 1}
        onClick={() => handlePageChange(currentPage + 1)}
        className='btnPagination'
      >
        <MdNavigateNext />
      </Button>
    </div>
  );
};

export default Pagination;
