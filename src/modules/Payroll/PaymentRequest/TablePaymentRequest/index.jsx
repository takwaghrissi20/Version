import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { StyledOrderTable } from '../../../../styles/index.styled';
import { MoreOutlined } from '@ant-design/icons';
import { Button, Dropdown, Checkbox, Modal, Table } from 'antd';
import styled from 'styled-components';

const OrderTable = ({ allemployee, loading }) => {
  console.log("allemployee",allemployee)
  const [findIdData, setFindIdData] = useState("");
  const [findIdCopyCategory, setFindIdCopyCategory] = useState("");
  const [findIdContratCategory, setFindIdContratCategory] = useState("");
  const [isViewContrat, onViewContrat] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);
  const [modalSelectedRows, setModalSelectedRows] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectAll, setSelectAll] = useState(false);

  useEffect(() => {
    if (selectAll) {
      setSelectedRows([...allemployee]);
    } else {
      setSelectedRows([]);
    }
  }, [selectAll, allemployee]);

  const handleCheckboxChange = (e, record) => {
    const { checked } = e.target;
    const newSelectedRows = checked ?
      [...selectedRows, record] :
      selectedRows.filter(row => row.id !== record.id);
    setSelectedRows(newSelectedRows);
  };

  const handleSelectAllChange = (e) => {
    setSelectAll(e.target.checked);
  };

  const handleAddContratOpen = (record) => {
    onViewContrat(true);
    setIsModalVisible(true);
    setModalSelectedRows([record]);
  };

  const handleEditContratOpen = () => {
    OnisEditContrat(true);
  };

  const handleEditContratClose = () => {
    OnisEditContrat(false);
  };

  const handleAddContartClose = () => {
    onViewContrat(false);
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const findId = async (code) => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/emp/getById?id=${code}`, {
        method: 'GET',
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const responseData = await response.json();
      setFindIdData(responseData);
      setFindIdCopyCategory(responseData?.contratctCopy);
      setFindIdContratCategory(responseData?.contractCategory);
    } catch (error) {
      console.error("Erreur lors de la récupération du jobcode:", error);
    }
  };

  const columns = [
  
    {
      title: 'Item',
      dataIndex: 'Item',
      key: 'Item',
    },
    {
      title: 'SUPPLIER',
      dataIndex: 'SUPPLIER',
      key: 'SUPPLIER',
    },
    {
      title: 'COST CENTER',
      dataIndex: 'COST CENTER',
      key: 'COST CENTER',
    },
    {
      title: 'DESCRIPTION',
      dataIndex: 'DESCRIPTION',
      key: 'DESCRIPTION',
    },
    {
      title: 'AMOUNT',
      dataIndex: 'AMOUNT',
      key: 'AMOUNT',
    },
  
    {
      title: 'Actions',
      dataIndex: 'actions',
      key: 'actions',
      className: 'customer-table-actions',
      render: (text, record) => {
        const items = [
          { key: 1, label: <span style={{ fontSize: 14 }}>View</span>, onClick: () => handleAddContratOpen(record) },
        ];
        return (
          <div onClick={() => findId(record?.id)}>
            <Dropdown menu={{ items }} trigger={['click']}>
              <Button type='circle' onClick={showModal}>
                <MoreOutlined />
              </Button>
            </Dropdown>
          </div>
        );
      },
    },
  ];

  // Colonnes spécifiques pour le tableau dans le modal
  const modalColumns = [
    {
      title: 'Gets Id',
      dataIndex: 'getsId',
      key: 'getsId',
    },
    {
      title: 'Full Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Rib Bank Account',
      dataIndex: 'rib',
      key: 'rib',
    },
    {
      title: 'Bank Name',
      dataIndex: 'bankName',
      key: 'bankName',
    },
    {
      title: 'Net Amount Office',
      dataIndex: 'netOfice',
      key: 'netOfice',
    },
    {
      title: 'Net Amount Site',
      dataIndex: 'netSite',
      key: 'netSite',
    },
  ];

  return (
    <>
      <StyledOrderTable
        hoverColor
        data={allemployee}
        loading={loading}
        columns={columns}
        scroll={{ x: 'auto', y: 250 }}
      />
      <Modal
        title="Selected Rows"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        width="80%"
      >
        <Table
          columns={modalColumns} // Utilisation des colonnes spécifiques pour le modal
          dataSource={modalSelectedRows}
          scroll={{ x: 'auto', y: 250 }}
        />
      </Modal>
    </>
  );
};

OrderTable.defaultProps = {
  allemployee: [],
};

OrderTable.propTypes = {
  allemployee: PropTypes.array,
  loading: PropTypes.bool,
};

export default OrderTable;
