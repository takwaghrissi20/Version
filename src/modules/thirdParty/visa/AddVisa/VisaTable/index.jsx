import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button, Input, Select, Table, Row, Col, DatePicker } from 'antd';
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
      alert("Success Update Visa " + responseData.idVisa);
    } catch (error) {
      console.error("Erreur lors de la récupération du Id :", error);
      alert('Erreur lors de la mise à jour du visa');
    }
  };

  const cancelEdit = () => {
    setEditingRow(null);
    setEditingData({});
    setBackgroundColor('transparent');
  };

  const VisaRequest = [{ type: 'SENT' }, { type: 'Not SENT' }];
  const vCableReceive = [{ type: 'RECEIVED' }, { type: 'Not RECEIVED' }];
  const PASSPORTSUBMITTED = [{ type: 'SUBMITTED' }, { type: 'Not SUBMITTED' }];
  const visaReady = [{ type: 'ready' }, { type: 'Not ready' }];
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
          render: (text) => <StyledAnChar>V-{text}</StyledAnChar>,
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
          title: 'PASSPORT',
          dataIndex: 'passportnumber',
          key: 'passportnumber',
        },
        {
          title: 'COUNTRY',
          dataIndex: 'destination',
          key: 'destination',
          render: (text, record) => (
            editingRow === record.id ? (
              <Input
               style={{height:"25px",width:"90px",fontSize:"10px"}}
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
            fontSize: '10px',
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
          render: (text, record) => (
            editingRow === record.id ? (
              <Select
                placeholder="Visa Send"
                value={editingData.requestSendVisa || 'Not SENT'}
                style={{height:"25px",width:"90px",fontSize:"10px"}}
                onChange={(value) => handleChange('requestSendVisa', value)}
                
              >
                {VisaRequest.map((p) => (
                  <Option  style={{fontSize:"10px"}} key={p.type} value={p.type}>
                    {p.type}
                  </Option>
                ))}
              </Select>
            ) : (
              text || 'Not SENT'
            )
          ),
        },
        {
          title: 'Date',
          dataIndex: 'dateVisa',
          key: 'dateVisa',
          render: (text, record) => (
            editingRow === record.id ? (
              <DatePicker
              style={{height:"25px",width:"90px",fontSize:"10px"}}
                value={editingData.dateVisa ? moment(editingData.dateVisa) : null}
                onChange={(date, dateString) => handleChangeDate('dateVisa', dateString)}
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
            background: '#B6D8F2',
            color: 'black',
            fontWeight: 'bold',
            paddingTop: '5px',
            paddingBottom: '5px',
            fontSize: '10px',
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
          render: (text, record) => (
            editingRow === record.id ? (
              <Select
              style={{height:"25px",width:"90px",fontSize:"10px"}}
                placeholder="Select Request For Visa Cable"
                value={editingData.vCableReceive || 'Not RECEIVED'}
                onChange={(value) => handleChange('vCableReceive', value)}
            
              >
                {vCableReceive.map((p) => (
                  <Option style={{fontSize:"10px"}} key={p.type} value={p.type}>
                    {p.type}
                  </Option>
                ))}
              </Select>
            ) : (
              text || 'Not RECEIVED'
            )
          ),
        },
        {
          title: 'Date Visa Cable',
          dataIndex: 'vCabledate',
          key: 'vCabledate',
          render: (text, record) => (
            editingRow === record.id ? (
              <DatePicker
              style={{height:"25px",width:"90px",fontSize:"10px" }}
                value={editingData.vCabledate ? moment(editingData.vCabledate) : null}
                onChange={(date, dateString) => handleChangeDateVisaCable('vCabledate', dateString)}
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
            background: '#B6D8F2',
            color: 'black',
            fontWeight: 'bold',
            paddingTop: '5px',
            paddingBottom: '5px',
            fontSize: '10px',
          }}
        >
          Passport Submitted To Embassy
        </div>
      ),
      children: [
        {
          title: 'Passport Submit To Embassy',
          dataIndex: 'passportSubmit',
          key: 'passportSubmit',
          render: (text, record) => (
            editingRow === record.id ? (
              <Select
              style={{height:"25px",width:"90px",fontSize:"10px"}}
                value={editingData.passportSubmit || 'Not SUBMITTED'}
                onChange={(value) => handleChange('passportSubmit', value)}
              >
                {PASSPORTSUBMITTED.map((p) => (
                  <Option style={{fontSize:"10px"}} key={p.type} value={p.type}>
                    {p.type}
                  </Option>
                ))}
              </Select>
            ) : (
              text || 'Not SUBMITTED'
            )
          ),
        },
        {
          title: 'Date Passport Submit To Embassy',
          dataIndex: 'passportSubmitdate',
          key: 'passportSubmitdate',
          render: (text, record) => (
            editingRow === record.id ? (
              <DatePicker
              style={{height:"25px",width:"90px",fontSize:"10px"}}
                value={editingData.passportSubmitdate ? moment(editingData.passportSubmitdate) : null}
                onChange={(date, dateString) => handleChangeDatepassportSubmitdate('passportSubmitdate', dateString)}
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
            background: '#B6D8F2',
            color: 'black',
            fontWeight: 'bold',
            paddingTop: '5px',
            paddingBottom: '5px',
            fontSize: '10px',
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
          render: (text, record) => (
            editingRow === record.id ? (
              <Select
              style={{height:"25px",width:"90px",fontSize:"10px"}}
                placeholder="visaReady"
                value={editingData.visaReady || 'Not ready'}
                onChange={(value) => handleChange('visaReady', value)}
              >
                {visaReady.map((p) => (
                  <Option  style={{fontSize:"10px"}}key={p.type} value={p.type}>
                    {p.type}
                  </Option>
                ))}
              </Select>
            ) : (
              text || 'Not ready'
            )
          ),
        },
        {
          title: 'FINISH DATE',
          dataIndex: 'finishDateVisa',
          key: 'finishDateVisa',
          render: (text, record) => (
            editingRow === record.id ? (
              <DatePicker
              style={{height:"25px",width:"90px",fontSize:"10px"}}
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
                <Col xs={24} sm={12}>
                  <CiSaveUp1 className="iconeEditSave" onClick={() => saveEdit2(record.idVisa)}>
                    Save
                  </CiSaveUp1>
                </Col>
                <Col xs={24} sm={12}>
                  <MdCancel className="iconeEdit" onClick={cancelEdit}>
                    Cancel
                  </MdCancel>
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
