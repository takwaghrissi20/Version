import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button, Input, Select, Table, Row, Col, DatePicker, Popconfirm, notification, Space } from 'antd';
import AppAnimate from '../../../@crema/components/AppAnimate';
import { StyledAnChar, StyledOrderTable, StyledScrumBoardDatePicker } from '../../../styles/index.styled';
import { AiFillEdit } from "react-icons/ai";
import { MdCancel } from "react-icons/md";
import { CiSaveUp1 } from "react-icons/ci";
import moment from 'moment';

const OrderTable = ({ orderData,fetchDemobilization }) => {
  const [editingRow, setEditingRow] = useState(null);
  const [editingData, setEditingData] = useState({});
  const [backgroundColor, setBackgroundColor] = useState('transparent');
  const { Option } = Select;

  const startEdit = (record) => {
    setBackgroundColor('#ECF8F6');
    setEditingRow(record.idMd);
    setEditingData({ ...record });
  };

  const handleChange = (key, value) => {
    setEditingData({ ...editingData, [key]: value });
  };

  const handleChangeDate = (date, dateString) => {
    setEditingData({ ...editingData, dateVisa: dateString });
  };

  const handleChangeDateReach = (date, dateString) => {
    setEditingData({ ...editingData, richDateToSite: dateString });
  };

  const handleChangeDateMob = (date, dateString) => {
    setEditingData({ ...editingData, dateMob: dateString });
  };

  const openNotification = () => {
    notification.open({
      message: 'Success',
      description: 'Success Update',
      style: {
        backgroundColor: '#28a745',
        border: '1px solid #28a745',
        color: '#FFFFFF !important',
        borderRadius: '3px',
        boxShadow: '1px 3px 4px rgba(0, 0, 0, 0.2)',
        cursor: 'pointer',
        display: 'flex',
        height: "102px",
        width: "500px",
        borderLeft: '8px solid #1f8838',
        fontSize: '30px',
        lineHeight: '150%',
        marginBottom: 0,
        marginTop: 0,
        maxWidth: 'calc(100% - 15px)',
        position: 'relative',
      },
      placement: 'topRight',
      color: '#FFFFFF !important',
    });
  };

  const openNotificationError = () => {
    notification.open({
      message: 'Error',
      description: 'Error Update',
      style: {
        backgroundColor: 'red',
        border: '1px solid #dc3545',
        color: '#FFFFFF !important',
        borderRadius: '3px',
        boxShadow: '1px 3px 4px rgba(0, 0, 0, 0.2)',
        cursor: 'pointer',
        display: 'flex',
        height: "102px",
        width: "500px",
        borderLeft: '8px solid #bd1120',
        fontSize: '30px',
        lineHeight: '150%',
        marginBottom: 0,
        marginTop: 0,
        maxWidth: 'calc(100% - 15px)',
        position: 'relative',
      },
      placement: 'topRight',
      color: '#FFFFFF !important',
    });
  };

  const saveEdit2 = async (id) => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/mobDemob/update?id=${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editingData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const responseData = await response.text();
      setEditingRow(null);
      setEditingData({});
      setBackgroundColor('transparent');
      openNotification();
      console.log("responseData", responseData);

    } catch (error) {
      console.error("Erreur lors de la récupération du Id :", error);
      openNotificationError();
    }
  };

  const cancelEdit = () => {
    setEditingRow(null);
    setEditingData({});
    setBackgroundColor('transparent');
  };

  const columns = [
  

    {
      title: 'Gets Id',
      dataIndex: 'getsId',
      key: 'getsId',
      width: '10%',
    },
    {
      title: 'Jos Id',
      dataIndex: 'joysId',
      key: 'joysId',
      render: (id) => <StyledAnChar>JT-{id}</StyledAnChar>,
      width: '15%',
      render: (text, record) => (
        editingRow === record.idMd ? (
          <Input
          type='number'
            value={editingData?.joysId}
            onChange={(e) => handleChange('joysId', e.target.value)}
          />
        ) : (
          text
        )
      ),
    },
    {
      title: 'Full Name',
      dataIndex: 'name',
      key: 'name',
      width: '15%',
    },
    {
      title: 'Position',
      dataIndex: 'position',
      key: 'position',
      width: '10%',
    },
    {
      title: 'Date Reach To Site',
      dataIndex: 'richDateToSite',
      key: 'richDateToSite',
      width: '15%',
      render: (text, record) => (
        editingRow === record.idMd ? (
          <div className="table-cell-center">
            <DatePicker
              placeholder='YYYY-MM-DD'
              value={editingData.richDateToSite ? moment(editingData.richDateToSite, 'YYYY-MM-DD') : null}
              onChange={handleChangeDateReach}
            />
          </div>
        ) : (
          text
        )
      ),
    },
    {
      title: 'Date Demobilization From Site',
      dataIndex: 'dateMob',
      key: 'dateMob',
      width: '15%',
      render: (text, record) => (
        editingRow === record.idMd ? (
          <div className="table-cell-center">
            <DatePicker
              placeholder='YYYY-MM-DD'
              value={editingData.dateMob ? moment(editingData.dateMob, 'YYYY-MM-DD') : null}
              onChange={handleChangeDateMob}
            />
          </div>
        ) : (
          text
        )
      ),
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      key: 'actions',
      render: (text, record) => (
        editingRow === record.idMd ? (
          <Row gutter={16}>
            <Col xs={24} sm={8}>
              <CiSaveUp1 className="iconeEditSave" onClick={() => saveEdit2(record.idMd)}>
                Save
              </CiSaveUp1>
            </Col>
            <div className='Separateur'></div>
            <Col xs={24} sm={8}>
              <Popconfirm title='Sure to cancel?' onConfirm={cancelEdit}>
                <MdCancel className="iconeEdit" />
              </Popconfirm>
            </Col>
          </Row>
        ) : (
          <AiFillEdit onClick={() => startEdit(record)} className="iconeEdit" />
        )
      ),
    },
  ];

  const [tableHeight, setTableHeight] = useState('auto');
  useEffect(() => {
    fetchDemobilization()
    const updateTableHeight = () => {
      const pageHeight = window.innerHeight;
      const tableHeight = pageHeight ;
      setTableHeight(tableHeight);
    };

    window.addEventListener('resize', updateTableHeight);
    updateTableHeight();
    return () => {
      window.removeEventListener('resize', updateTableHeight);
    };
  }, [orderData]);



  return (
    <AppAnimate animation="transition.slideUpIn" delay={200}>
      <Space direction='vertical' style={{ width: '100%' }}>
        <Table
          hoverColor
          columns={columns}
          dataSource={orderData}
          bordered
          size='middle'
          scroll={{ x: 'auto', y: tableHeight}}
        />
      </Space>
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
