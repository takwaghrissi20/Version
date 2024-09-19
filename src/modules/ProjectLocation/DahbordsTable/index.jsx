import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button, Dropdown,Tooltip,Spin  } from 'antd';
import AppAnimate from '../../../@crema/components/AppAnimate';
import { StyledAnChar, StyledOrderTable } from '../../../styles/index.styled';
import { useNavigate } from 'react-router-dom';
import { MoreOutlined } from '@ant-design/icons';
import { useLocation } from 'react-router-dom';
import { TbPoint } from "react-icons/tb";
import UpdateProject from "../../Model/UpdateProject"
import jsPDF from 'jspdf';
const OrderTable = ({ orderData,user,project }) => {
  console.log("allproj",orderData)
  const location = useLocation();
  const [findIdData, setFindIdData] = useState("");
  const [id, setId] = useState("");
  const [getsid, setGetsid] = useState("");
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [loading, setLoading] = useState(true); 
  const [isIdproject, onIsIdproject] = useState(false);
  const  handleProjetClose= (code) => {
    onIsIdproject(false);
   };
 
 
  // Find By Id
  const findId = async (code) => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/proj/getById?id=${code}&token=${token}`, {
        method: 'GET',
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const responseData = await response.json();
      setId(responseData?.idProject);
      setFindIdData(responseData);
     
    } catch (error) {
      console.error("Erreur lors de la récupération du id Mission:", error);
    }
  };



  const handleViewProject = () => {
 
  }
  
  const handleUpdateProject = () => {
    onIsIdproject(true)
  }

  const items = [
    { 
      key: 1, 
      label: <span style={{ fontSize: 14 }}>View</span>, 
      onClick: handleViewProject
     
    },
    { 
      key: 2, 
      label: <span style={{ fontSize: 14 }}>Edit</span>, 
      onClick:  handleUpdateProject
     
     
    }
  ] 


  const columns = [
    {
      title: 'PROJECT NAME',
      dataIndex: 'projName',
      key: 'projName',
      ellipsis: {
        showTitle: false,
      },
      render: (Project) => (
        <Tooltip placement='topLeft' title={Project}>
          {Project}
        </Tooltip>
      ),
    },
    {
      title: 'PROJECT REFERENCE',
      dataIndex: 'projRef',
      key: 'projRef',
      ellipsis: {
        showTitle: false,
      },
      render: (Project) => (
        <Tooltip placement='topLeft' title={Project}>
          {Project}
        </Tooltip>
      ),
    },
    {
      title: 'CONTRACT REF',
      dataIndex: 'cotractRef',
      key: 'cotractRef',
      ellipsis: {
        showTitle: false,
      },
      render: (Project) => (
        <Tooltip placement='topLeft' title={Project}>
          {Project}
        </Tooltip>
      ),
    },
    {
      title: 'SITE LOCATION OF THE PROJECT',
      dataIndex: 'locations',
      key: 'locations',
      ellipsis: {
        showTitle: false,
      },
      render: (locations) => (
        <Tooltip 
          placement='topLeft' 
          title={locations.map(location => location.lieu).join(', ')}>
          <div>
            {locations.map((location, index) => (
              <div key={index} style={{ color: 'black',
           
               paddingTop:"0.3rem",paddingBottom:"0.3rem"}}
               
               >
               <TbPoint style={{color:"#2997ff"}} ></TbPoint> {location.lieu}
              </div>
            ))}
          </div>
        </Tooltip>
      ),
    },
    
    {
      title: 'COUNTRY',
      dataIndex: 'country',
      key: 'country',
      ellipsis: {
        showTitle: false,
      },
      render: (country) => (
        <Tooltip placement='topLeft' title={country}>
          {country}
        </Tooltip>
      ),
    },
    {
      title: 'OWNER NAME',
      dataIndex: 'partener',
      key: 'partener',
      ellipsis: {
        showTitle: false,
      },
      render: (partener) => (
        <Tooltip placement='topLeft' title={partener}>
          {partener}
        </Tooltip>
      ),
    },
    {
      title: 'PARTNER NAME',
      dataIndex: 'partenername',
      key: 'partenername',
      ellipsis: {
        showTitle: false,
      },
      render: (partenername) => (
        <Tooltip placement='topLeft' title={partenername}>
          {partenername}
        </Tooltip>
      ),
    },
    // {
    //   title: 'Actions',
    //   dataIndex: 'actions',
    //   key: 'actions',
    //   width: 80,
    //   fixed: 'right',
    //   className: 'customer-table-actions',
    //   render: (text, record) => (
    //     <div onClick={() => findId(record?.idProject)}>
    //       <Dropdown menu={{ items }} trigger={['click']}>
    //         <Button type='circle'>
    //           <MoreOutlined />
    //         </Button>
    //       </Dropdown>
    //       {isIdproject && (
    //           <UpdateProject
    //             isIdproject={isIdproject}
    //             handleProjetClose={handleProjetClose}
    //             findIdData={findIdData}
    //             projName={findIdData?.findIdData}



    //           />
    //         )}
    //     </div>
    //   ),
    // },
  ];
  

  const [tableHeight, setTableHeight] = useState('auto');

  useEffect(() => {
    const updateTableHeight = () => {
      const pageHeight = window.innerHeight;
      const tableHeight = pageHeight * 0.7;
      setTableHeight(tableHeight);
    };

    window.addEventListener('resize', updateTableHeight);
    updateTableHeight();

    return () => {
      window.removeEventListener('resize', updateTableHeight);
    };
  }, [id]);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);


  return (
    <>
    {user?.includes("Leader")?
    <>
        {loading ? (
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <Spin size="large" tip="Loading..." />
      </div>
    ) : (
      <AppAnimate animation='transition.slideUpIn' delay={200}>
        <StyledOrderTable
          hoverColor
          data={project}
          columns={columns}
          scroll={{ x: 'auto', y: tableHeight }}
          bordered
        />
      </AppAnimate>
    )}
    
    </>:
    
    
    <>
        {loading ? (
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <Spin size="large" tip="Loading..." />
      </div>
    ) : (
      <AppAnimate animation='transition.slideUpIn' delay={200}>
        <StyledOrderTable
          hoverColor
          data={orderData}
          columns={columns}
          scroll={{ x: 'auto', y: tableHeight }}
          bordered
        />
      </AppAnimate>
    )}
    </>

    
    
    
    
    
    }

  </>
   );
};



export default OrderTable;
