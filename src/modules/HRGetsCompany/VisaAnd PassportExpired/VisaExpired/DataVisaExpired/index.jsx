import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { StyledOrderTable } from '../../../../../styles/index.styled';
import { useNavigate } from 'react-router-dom';
import UpdateVisaExpired from "../../../../Model/UpdateVisaExpired";

const AllVisaExpired = ({ visaExpired, token }) => {
  const navigate = useNavigate();
  const [hoveredRow, setHoveredRow] = useState(null);
  const [tableHeight, setTableHeight] = useState('auto');
  const [isVisaExpired, setIsVisaExpired] = useState(false);
  const [dateemp, setDataemp] = useState("");
  const [loading, setLoading] = useState(true); // Loading state

  const findId = async (code) => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/emp/getById?id=${code}&token=${token}`, {
        method: 'GET',
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const responseData = await response.json();
      setDataemp(responseData);
    } catch (error) {
      console.error("Erreur lors de la récupération du id eMPLOYEE:", error);
    }
  };

  const handleRowHover = (record) => {
    setHoveredRow(record);
  };

  const handleRowLeave = () => {
    setHoveredRow(null);
  };

  useEffect(() => {
    const updateTableHeight = () => {
      const pageHeight = window.innerHeight;
      const tableHeight = pageHeight * 0.18;
      setTableHeight(tableHeight);
    };

    window.addEventListener('resize', updateTableHeight);
    updateTableHeight();

    return () => {
      window.removeEventListener('resize', updateTableHeight);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Stop loading after 2 seconds
    }, 2000); // 2 seconds delay
    return () => clearTimeout(timer);
  }, []);

  const handleRowClick = (index) => {
    findId(index);
    setIsVisaExpired(true);
  };

  const handleAddEmployeeClose = () => {
    setIsVisaExpired(false);
  };

  const columns = [
    {
      title: 'GETS ID',
      dataIndex: 'getsId',
      key: 'getsId',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Position',
      dataIndex: 'position',
      key: 'position',
    },
    {
      title: 'Date Visa Finish',
      dataIndex: 'finishDateVisa',
      key: 'finishDateVisa',
      ellipsis: {
        showTitle: false,
      },
      render: (finishDateVisa) =>
        finishDateVisa ? new Date(finishDateVisa).toLocaleDateString() : "",
    },
  ];

  return (
    <>
      {loading ? (
        <div className="loading-container">
          <div className="ball red"></div>
          <div className="ball yellow"></div>
        </div>
      ) : (
        <StyledOrderTable
          hoverColor
          data={visaExpired} // Data appears after loading ends
          columns={columns}
          scroll={{ x: 'auto', y: tableHeight }}
          border
          onRow={(record, index) => ({
            onClick: () => handleRowClick(record.getsId),
            onMouseEnter: () => handleRowHover(record.getsId),
            onMouseLeave: handleRowLeave,
          })}
        />
      )}
      {isVisaExpired && (
        <UpdateVisaExpired
          isVisaExpired={isVisaExpired}
          handleAddContactClose={handleAddEmployeeClose}
          visaExpired={visaExpired}
          dateemp={dateemp}
          token={token}
        />
      )}
    </>
  );
};

export default AllVisaExpired;
