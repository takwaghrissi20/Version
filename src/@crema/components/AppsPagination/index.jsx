import React from 'react';
import { Button } from 'antd';
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

const Pagination = ({ currentPage, totalPages, handlePageChange }) => {
  return (
    <div>

      <Button
        type="primary"
        disabled={currentPage === 0}
        onClick={() => handlePageChange(currentPage - 1)}
        className='btnPagination'

      >
        <GrFormPrevious ></GrFormPrevious>
        </Button>
          {Array.from({ length: totalPages }, (_, i) => (
            <Button
              key={i}
              type={currentPage === i ? "primary" : "default"}
              onClick={() => handlePageChange(i)}
              className='NumberPagination'

            >
              {i + 1}
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
