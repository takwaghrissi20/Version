import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { StyledOrderTable } from '../../../../../styles/index.styled';
import { useNavigate } from 'react-router-dom';
import UpdatePassportExpired from "../../../../Model/UpdatePassportExpired";

const AllVisaExpired = ({ passportExpired, token }) => {
  const navigate = useNavigate();
  const [hoveredRow, setHoveredRow] = useState(null);
  const [tableHeight, setTableHeight] = useState('auto');
  const [isPassportExpired, setIsPassportExpired] = useState(false);
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
      console.log("gggggg",responseData)
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
    setIsPassportExpired(true);
  };

  const handleAddEmployeeClose = () => {
    setIsPassportExpired(false);
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
      title: 'Date Passport Finish',
      dataIndex: 'passport_finish_date',
      key: 'passport_finish_date',
      ellipsis: {
        showTitle: false,
      },
      render: (finishDatePassport) =>
        finishDatePassport ? new Date(finishDatePassport).toLocaleDateString() : "",
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
          data={passportExpired} // Data appears after loading ends
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
      {isPassportExpired && (
        <UpdatePassportExpired
          passportExpired={passportExpired}
          handleAddContactClose={handleAddEmployeeClose}
          dateemp={dateemp}
          token={token}
          isPassportExpired={isPassportExpired}
        />
      )}
    </>
  );
};

export default AllVisaExpired;
