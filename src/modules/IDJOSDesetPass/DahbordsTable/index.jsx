import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Table, Tooltip } from 'antd';
import AppAnimate from '../../../@crema/components/AppAnimate';
import { StyledAnChar, StyledOrderTable } from '../../../styles/index.styled';
import { IoAlert } from 'react-icons/io5'; // Import the icon
import moment from 'moment';
import { FiAlertOctagon } from "react-icons/fi";
import { MdLabelOutline } from "react-icons/md";
import EditTravel from "../../Model/TravelEdit";


const OrderTable = ({ orderData }) => {
  const [tableHeight, setTableHeight] = useState('auto');
  const [hoveredRow, setHoveredRow] = useState(null);
  const [isViewTravel, onViewTravel] = useState(false);
  const [findIdData, setFindIdData] = useState(null);
  const token = localStorage.getItem("token");

  //Find By Id
  const findId = async (code) => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/travel/getById?id=${code}&token=${token}`, {
        method: 'Get',
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      if (response.ok) {
        const responseData = await response.json();
        console.log("responseData ",responseData);
        setFindIdData(responseData);
     
   
  
      }
    } catch (error) {
      console.error("Erreur lors de la récupération du id eMPLOYEE:", error);
    }
  };
  const handleRowClick = (index) => {
    findId(index)
    onViewTravel(true)
   
   
  };
  const handleRowLeave = () => {
    setHoveredRow(null);
  };

  useEffect(() => {
    const updateTableHeight = () => {
      const pageHeight = window.innerHeight;
      const tableHeight = pageHeight * 0.6;
      setTableHeight(tableHeight);
    };

    window.addEventListener('resize', updateTableHeight);
    updateTableHeight();

    return () => {
      window.removeEventListener('resize', updateTableHeight);
    };
  }, []);
  const renderActions = (text, record, index)  => {
    const isRowHovered = hoveredRow === record;
    //onViewEmployee(true)
      
    return (
      <div onClick={() => findId(record?.getsId)}>
        {isRowHovered && (
      <Dropdown
      visible={true}
     
      overlay={() => (
        <div style={{ marginTop: "-2.5rem" }}>
          <AppIconButton
            title="View Information Employee"
            icon={<MdLabelOutline />} 
          />
        </div>
      )}
    >
      <Button type="link" />
    </Dropdown>
        )}
      </div>
    );
  };

  const columns = [
    {
      title: 'travvvel Id',
      dataIndex: 'idTravel',
      key: 'idTravel',
      width: 80,
    
    },
    {
      title: 'Gets Id',
      dataIndex: 'getsId',
      key: 'getsId',
      width: 80,
      render: (id) => <StyledAnChar>{id}</StyledAnChar>,
    },
    {
      title: 'Full Name',
      dataIndex: 'name',
      key: 'name',
      width: 80,
      ellipsis: true,
    },
    {
      title: 'Position',
      dataIndex: 'position',
      key: 'position',
      width: 200,
    },
    {
      title: 'Desert Pass',
      children: [
        {
          title: 'Id Jos',
          dataIndex: 'josId',
          key: 'josId',
          width: 180,
          render: (id) => <StyledAnChar>JT-{id}</StyledAnChar>,
        },
        {
          title: 'Expiry Date',
          dataIndex: 'desertPass_finish_date',
          key: 'desertPass_finish_date',
          width: 100,
          render: (date) => {
            const isExpired = date && new Date(date) < new Date();
            return (
              <Tooltip title={isExpired ? 'Desert Pass Expiry' : ''}>
                <span>{moment(date).format('YYYY-MM-DD')}</span>
              </Tooltip>
            );
          },
        },
      ],
    },
    {
      title: '',    
      key: 'alert',
      width: 200,
      render: (record) => {
        const isExpired = record.desertPass_finish_date && new Date(record.desertPass_finish_date) < new Date();
        return isExpired ? (
          <span >
            <FiAlertOctagon style={{ marginRight: 4 , color: 'red' }} />
                Renew Desert Pass ,Expiry Date At : <span style={{fontWeight:"bold",color:"#77021D"}}>{record.desertPass_finish_date}</span>
          </span>
        ) : '';
      },
    },
  ];
  const handleRowHover = (record) => {
    setHoveredRow(record);
  };
  const handleAddTravelClose = () => {
    setFindIdData(null);
    onViewTravel(false);
  };

  return (
    <AppAnimate animation='transition.slideUpIn' delay={200}>
      <StyledOrderTable
        data={orderData}
        columns={columns}
        scroll={{ x: 'auto', y: tableHeight }}
        onRow={(record, index) => ({        
          onClick: () => handleRowClick(record.idTravel),
          onMouseEnter: () => handleRowHover(record.idTravel),
          onMouseLeave: handleRowLeave,
        })}
        rowClassName={(record) => {
          const isExpired = record.desertPass_finish_date && new Date(record.desertPass_finish_date) < new Date();
          return isExpired ? 'row-red' : '';
        }}
      />
       {isViewTravel && (
            <EditTravel
            isViewTravel={isViewTravel}
            handleAddTravelClose={handleAddTravelClose}
            josId={findIdData?.josId
            }
            desertPassfinishdate={findIdData?.desertPass_finish_date}
            idTravel={findIdData?.idTravel}
            dateOfTravel={findIdData?.dateOfTravel}
            travelFromTo={findIdData?.travelFromTo}
            projName={findIdData?.projName}
         
            name={findIdData?.name}
            actualLocationFrom={findIdData?.actualLocationFrom}
            actualLocationTo={findIdData?.actualLocationTo}
            bookingStatusDesert={findIdData?.bookingStatusDesert}
            bookingStatusJoys={findIdData?.bookingStatusJoys}
            dateDemob={findIdData?.dateDemob}
            dateMob={findIdData?.dateMob}
            dateTravelDesert={findIdData?.dateTravelDesert}
            dateTravelJoys={findIdData?.dateTravelJoys}
            dayRest={findIdData?.dayRest}
            daySinceMob={findIdData?.daySinceMob}
            departureDateFromFiled={findIdData?.departureDateFromFiled}
            goBack={findIdData?.goBack}
            idendityCopy={findIdData?.idendityCopy}
            refTicket={findIdData?.refTicket}
            returnDateIfRound={findIdData?.returnDateIfRound}
            rich_DateToSite={findIdData?.rich_DateToSite}
            round={findIdData?.round}
            ticketRef={findIdData?.ticketRef}
            tripTypeDesert={findIdData?.tripTypeDesert}
            tripTypeJoys={findIdData?.tripTypeJoys}
            type={findIdData?.type}
            inputDate={findIdData?.inputDate}
            getsId={findIdData?.getsId}
            position={findIdData?.position}
            endDateMiss={findIdData?.endDateMiss}




             

              
            />
          )}
    </AppAnimate>
  );
};

OrderTable.defaultProps = {
  orderData: [],
};

OrderTable.propTypes = {
  orderData: PropTypes.array,
};

export default OrderTable;
