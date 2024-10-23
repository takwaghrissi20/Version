import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { StyledOrderTable } from '../../../../../styles/index.styled';
import { useNavigate } from 'react-router-dom';
import UpdateContratExpired from "../../../../Model/UpdateContratExpired";

const AllVisaExpired = ({ contratExpired, token }) => {
  const navigate = useNavigate();
  const [hoveredRow, setHoveredRow] = useState(null);
  const [tableHeight, setTableHeight] = useState('auto');
  const [isContartExpired, setIsContartExpired] = useState(false);
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
      setLoading(false); 
    }, 2000); 
    return () => clearTimeout(timer);
  }, []);

  const handleRowClick = (index) => {
    findId(index);
    setIsContartExpired(true);
  };

  const handleAddEmployeeClose = () => {
    setIsContartExpired(false);
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
      title: 'Date Join ',
      dataIndex: 'joinDate',
      key: 'joinDate',
      ellipsis: {
        showTitle: false,
      },
      render: (finishDate) =>
        finishDate ? new Date(finishDate).toLocaleDateString() : "",
    },
    {
      title: 'Date Contrat Finish',
      dataIndex: 'finishDate',
      key: 'finishDate',
      ellipsis: {
        showTitle: false,
      },
      render: (finishDate) =>
        finishDate ? new Date(finishDate).toLocaleDateString() : "",
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
          data={contratExpired} // Data appears after loading ends
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
      {isContartExpired&& (
        <UpdateContratExpired
        contratExpired={contratExpired}
          handleAddContactClose={handleAddEmployeeClose}
          dateemp={dateemp}
          token={token}
          isContartExpired={isContartExpired}
        />
      )}
    </>
  );
};

export default AllVisaExpired;
