import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button, Input, Select, Table, Row, Col, DatePicker, Popconfirm,notification } from 'antd';
import AppAnimate from '../../../../../@crema/components/AppAnimate';
import { StyledAnChar, StyledOrderTable, StyledScrumBoardDatePicker } from '../../../../../styles/index.styled';
import { AiFillEdit } from "react-icons/ai";
import { MdCancel } from "react-icons/md";
import { CiSaveUp1 } from "react-icons/ci";
import moment from 'moment';

const OrderTable = ({ dataemployeesVisa, fetchEmployees }) => {
  const [editingRow, setEditingRow] = useState(null);
  const [editingData, setEditingData] = useState({});
  const [backgroundColor, setBackgroundColor] = useState('transparent');

  const { Option } = Select;

  const startEdit = (record) => {
    setBackgroundColor('#ECF8F6');
    setEditingRow(record.id);
    setEditingData({ ...record });
  };

  const handleChange = (key, value) => {
    setEditingData({ ...editingData, [key]: value });
  };

  const handleChangeDate = (date, dateString) => {
    setEditingData({ ...editingData, dateVisa: dateString });
  };

  const handleChangeDateVisaCable = (date, dateString) => {
    setEditingData({ ...editingData, vCabledate: dateString });
  };

  const handleChangeDatepassportSubmitdate = (date, dateString) => {
    setEditingData({ ...editingData, passportSubmitdate: dateString });
  };

  const handleChangeDatefinishDateVisa = (date, dateString) => {
    setEditingData({ ...editingData, finishDateVisa: dateString });
  };
  const openNotification = () => {
    notification.open({
      message: 'Success',
      description: 'Save Visa Employees',
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
        fontsize: '30px',
        lineheight: '150%',
        marginbottom: 0,
        margintop: 0,
        maxwidth: 'calc(100% - 15px)',
        position: 'relative',
      },
      placement: 'topRight',
      color: '#FFFFFF !important',
    });
  };

  const openNotificationError = () => {
    notification.open({
      message: 'Error',
      description: 'Error Save Visa Employees',
      style: {
        backgroundColor: '#dc3545',
        border: '1px solid #dc3545',
        color: '#FFFFFF !important',
        borderRadius: '3px',
        boxShadow: '1px 3px 4px rgba(0, 0, 0, 0.2)',
        cursor: 'pointer',
        display: 'flex',
        height: "102px",
        width: "500px",
        borderLeft: '8px solid #bd1120',
        fontsize: '30px',
        lineheight: '150%',
        marginbottom: 0,
        margintop: 0,
        maxwidth: 'calc(100% - 15px)',
        position: 'relative',
      },
      placement: 'topRight',
      color: '#FFFFFF !important',
    });
  };
  const saveEdit2 = async (id) => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/visa/update?id=${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editingData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const responseData = await response.json();
      // Update your data here
      setEditingRow(null);
      setEditingData({});
      setBackgroundColor('transparent');
      openNotification('bottomRight')

    } catch (error) {
      console.error("Erreur lors de la récupération du Id :", error);
      openNotificationError('bottomRight')
    }
  };

  const cancelEdit = () => {
    setEditingRow(null);
    setEditingData({});
    setBackgroundColor('transparent');
  };

  const VisaRequest = [{ type: 'Yes' }, { type: 'No' }];
  const vCableReceive = [{ type: 'Yes' }, { type: 'No' }];
  const PASSPORTSUBMITTED = [{ type: 'Yes' }, { type: 'No' }];
  const visaReady = [{ type: 'Yes' }, { type: 'No' }];
  const finalVisaReceive = [{ type: 'FINAL RECEIVED' }, { type: 'Not FINAL RECEIVED' }];

  const columns = [
    {
      title: (
        <div style={{ background: 'transparent', color: 'black', fontWeight: 'bold', fontSize: '10px' }}></div>
      ),
      children: [
        {
          title: 'APP #',
          dataIndex: 'idVisa',
          key: 'idVisa',
          width: '10%',
          render: (text) => <StyledAnChar>V-{text}</StyledAnChar>,
        },
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          width: '10%',
        },
        {
          title: 'Position',
          dataIndex: 'position',
          key: 'position',
          width: '15%',
        },
        {
          title: 'PASSPORT',
          dataIndex: 'passportnumber',
          key: 'passportnumber',
          width: '10%',
        },
        {
          title: 'COUNTRY',
          dataIndex: 'destination',
          key: 'destination',
          width: '10%',
          render: (text, record) => (
            editingRow === record.id ? (
              <Input

                value={editingRow === record.id ? editingData?.destination : text}
                onChange={(e) => handleChange('destination', e.target.value)}
              />

            ) : (
              text
            )
          ),
        },
        {
          title: 'Project Name',
          dataIndex: 'projName',
          key: 'projName',
          width: '15%',
        },
      ],
    },
    {
      title: (
        <div
          style={{
            background: '#B6D8F2',
            color: 'black',
            fontWeight: 'bold',
            paddingTop: '3px',
            paddingBottom: '3px',
            fontSize: '14px',
          }}
        >
          Request For Visa Country Of Origin
        </div>
      ),
      children: [
        {
          title: 'Send',
          dataIndex: 'requestSendVisa',
          key: 'requestSendVisa',
          width: '15%',
          render: (text, record) => (
            editingRow === record.id ? (
              <Select
                placeholder="Visa Send"
                value={editingData.requestSendVisa || 'No'}
                onChange={(value) => handleChange('requestSendVisa', value)} >
                {VisaRequest.map((p) => (
                  <Option className="input-center" key={p.type} value={p.type}>
                    {p.type}
                  </Option>
                ))}
              </Select>

            ) : (
              text || 'No'
            )
          ),
        },
        {
          title: 'Date',
          dataIndex: 'dateVisa',
          key: 'dateVisa',
          width: '15%',
          render: (text, record) => (
            editingRow === record.id ? (
              <div className="table-cell-center">

                <DatePicker
                  placeholder='YYYY-MM-DD'
                  value={editingData.dateVisa ? moment(editingData.dateVisa, 'YYYY-MM-DD') : null}
                  onChange={(date, dateString) => handleChangeDate(date, dateString)}
                />


{/* 
                <DatePicker
                  className='InputDate'
                  value={editingData.dateVisa ? moment(editingData.dateVisa) : null}
                  onChange={(date, dateString) => handleChangeDate('dateVisa', dateString)}
                /> */}
              </div>
            ) : (
              text
            )
          ),
        },
      ],
    },
    {
      title: (
        <div
          style={{
            background: '#B6D8F2',
            color: 'black',
            fontWeight: 'bold',
            paddingTop: '5px',
            paddingBottom: '5px',
            fontSize: '14px',
          }}
        >
          Visa Cable
        </div>
      ),
      children: [
        {
          title: 'Visa Cable ',
          dataIndex: 'vCableReceive',
          key: 'vCableReceive',
          width: '15%',
          render: (text, record) => (
            editingRow === record.id ? (
              <div className="table-cell-center">
                <Select
                  placeholder="Select Request For Visa Cable"
                  value={editingData.vCableReceive || 'No'}
                  onChange={(value) => handleChange('vCableReceive', value)}
                >
                  {vCableReceive.map((p) => (
                    <Option className="input-center" key={p.type} value={p.type}>
                      {p.type}
                    </Option>
                  ))}
                </Select>
              </div>
            ) : (
              text || 'No'
            )
          ),
        },
        {
          title: 'Date Visa Cable',
          dataIndex: 'vCabledate',
          key: 'vCabledate',
          width: '25%',
          render: (text, record) => (
            editingRow === record.id ? (
              <div className="table-cell-center">
                <DatePicker
                  className='InputDate'
                  value={editingData.vCabledate ? moment(editingData.vCabledate) : null}
                  onChange={(date, dateString) => handleChangeDateVisaCable('vCabledate', dateString)}
                />
              </div>
            ) : (
              text
            )
          ),
        },
      ],
    },
    {
      title: (
        <div
          style={{
            background: '#B6D8F2',
            color: 'black',
            fontWeight: 'bold',
            paddingTop: '5px',
            paddingBottom: '5px',
            fontSize: '14px',
          }}
        >
          Passport Submitted To Embassy
        </div>
      ),
      children: [
        {
          title: 'Passport Submit',
          dataIndex: 'passportSubmit',
          key: 'passportSubmit',
          width: '25%',
          render: (text, record) => (
            editingRow === record.id ? (
              <div className="table-cell-center">
                <Select
                  value={editingData.passportSubmit || 'No'}
                  onChange={(value) => handleChange('passportSubmit', value)}
                >
                  {PASSPORTSUBMITTED.map((p) => (
                    <Option className="input-center" key={p.type} value={p.type}>
                      {p.type}
                    </Option>
                  ))}
                </Select>
              </div>
            ) : (
              text || 'No'
            )
          ),
        },
        {
          title: 'Date Passport Submit',
          dataIndex: 'passportSubmitdate',
          key: 'passportSubmitdate',
          width: '25%',
          render: (text, record) => (
            editingRow === record.id ? (
              <div className="table-cell-center">
                <DatePicker
                  className='InputDate'
                  value={editingData.passportSubmitdate ? moment(editingData.passportSubmitdate) : null}
                  onChange={(date, dateString) => handleChangeDatepassportSubmitdate('passportSubmitdate', dateString)}
                />
              </div>
            ) : (
              text
            )
          ),
        },
      ],
    },
    {
      title: (
        <div
          style={{
            background: '#B6D8F2',
            color: 'black',
            fontWeight: 'bold',
            paddingTop: '5px',
            paddingBottom: '5px',
            fontSize: '14px',
          }}
        >
          Finaly Visa Received
        </div>
      ),
      children: [
        {
          title: 'Visa Ready',
          dataIndex: 'visaReady',
          key: 'visaReady',
          width: '25%',
          render: (text, record) => (
            editingRow === record.id ? (

              <Select
                placeholder="visaReady"
                value={editingData.visaReady || 'No'}
                onChange={(value) => handleChange('visaReady', value)}
              >
                {visaReady.map((p) => (
                  <Option key={p.type} value={p.type}>
                    {p.type}
                  </Option>
                ))}
              </Select>

            ) : (
              text || 'No'
            )
          ),
        },
        {
          title: 'FINISH DATE',
          dataIndex: 'finishDateVisa',
          key: 'finishDateVisa',
          width: '25%',
          render: (text, record) => (
            editingRow === record.id ? (

              <DatePicker
                className='InputDate'
                value={editingData.finishDateVisa ? moment(editingData.finishDateVisa) : null}
                onChange={(date, dateString) => handleChangeDatefinishDateVisa('finishDateVisa', dateString)}
              />

            ) : (
              text
            )
          ),
        },
      ],
    },
    {
      title: (
        <div
          style={{
            background: 'transparent',
            color: 'black',
            fontWeight: 'bold',
            paddingTop: '5px',
            paddingBottom: '5px',
            fontSize: '12px',
          }}
        ></div>
      ),
      children: [
        {
          title: 'Actions',
          dataIndex: 'actions',
          key: 'actions',
          render: (text, record) => (
            editingRow === record.id ? (
              <Row gutter={16}>
                <Col xs={24} sm={8}>
                  <CiSaveUp1 className="iconeEditSave" onClick={() => saveEdit2(record.idVisa)}>
                    Save
                  </CiSaveUp1>
                </Col>
                <div className='Separateur'></div>
                <Col xs={24} sm={8}>
                  <Popconfirm title='Sure to cancel?' onConfirm={cancelEdit}>
                    <MdCancel className="iconeEdit"></MdCancel>

                  </Popconfirm>

                </Col>
              </Row>
            ) : (
              <AiFillEdit onClick={() => startEdit(record)} className="iconeEdit" />
            )
          ),
        },
      ],
    },
  ];

  const [tableHeight, setTableHeight] = useState('auto');
  useEffect(() => {
    fetchEmployees();
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
  }, [dataemployeesVisa]);

  return (
    <AppAnimate animation="transition.slideUpIn" delay={200}>
      <StyledOrderTable
        hoverColor
        data={dataemployeesVisa}
        columns={columns}
        scroll={{ x: 'auto', y: tableHeight }}
        className="order-table"
        rowKey="id"
        rowClassName={(record) => (record.id === editingRow ? 'editing-row' : '')}
      />
    </AppAnimate>
  );
};

OrderTable.defaultProps = {
  dataemployeesVisa: [],
};

OrderTable.propTypes = {
  dataemployeesVisa: PropTypes.array,
};

export default OrderTable;
