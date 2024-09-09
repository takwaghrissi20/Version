import { Badge, Dropdown, Space, Table } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import React,{useState} from 'react';
import { StyledAnChar } from '../../../../../styles/index.styled';

const items = [
  { key: 1, label: 'Action 1' },
  { key: 2, label: 'Action 2' },
];

function NestedTable({ dataemployeesVisa }) {
  const [expandedData, setExpandedData] = useState();

  const expandedRowRender = () => {
    const columns = [
      { title: 'Fetness Certificate', dataIndex: 'resultFitness', key: 'resultFitness' },
      { title: 'Hepatitie', dataIndex: 'Hepatitie', key: 'Hepatitie' },
      {
        title: 'IDZ/HIV',
        dataIndex: 'hepatitResult',
        key: 'hepatitResult',
      },

      {
        title: 'Visa Requested',
        dataIndex: 'vCabledate',
        key: 'vCabledate',
      },
      {
        title: 'Visa Cable Received ',
        dataIndex: ' visaReady',
        key: ' visaReady'
      },
      {
        title: 'Passport Submitted',
        dataIndex: 'visaReady',
        key: 'visaReady',

      },
    ];


    return <Table columns={columns} dataSource={expandedData} pagination={false} />;
  };

  const columns = [
    {
      title: 'APPLICATION NUMBER',
      dataIndex: 'idVisa',
      key: 'idVisa',
      render: (id) => <StyledAnChar>V-{id}</StyledAnChar>,
    },
    { title: 'Full Name', dataIndex: 'name', key: 'name' },
    { title: 'Position', dataIndex: 'position', key: 'position' },
    { title: 'Passport Number', dataIndex: 'passportnumber', key: 'passportnumber' },
    { title: 'COUNTRY', dataIndex: 'destination', key: 'destination' },
    { title: 'Projet', dataIndex: 'projName', key: 'projName' },
    { title: 'Visa Ready ', dataIndex: 'finishDateVisa', key: 'finishDateVisa', },
    {
      title: 'Visa Finish Date ',
      dataIndex: 'finishDateVisa',
      key: 'finishDateVisa'
    },

  ];
  const token = localStorage.getItem("token");
  const findId = async (code) => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/emp/getById?id=${code}&token=${token}`, {
        method: 'Get',
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      if (response.ok) {
        const responseData = await response.json();

        //setFindIdData(responseData); 
        setExpandedData(responseData?.vaccins)

        //setProjects(projects)
        //onEditVisa(true)
      }
    } catch (error) {
      console.error("Erreur lors de la récupération du id EMPLOYEE:", error);
    }
  }
    return (
      <Table      
        className="components-table-demo-nested"
        columns={columns}
      
        expandable={{
          expandedRowRender,
          onExpand: (expanded, record) => {
            if (expanded) {
              findId(record.idVisa);
            }
          },
        }}
        dataSource={dataemployeesVisa}
      />
    );
  }

  const VisaSammary = ({ dataemployeesVisa }) => {
    return <NestedTable dataemployeesVisa={dataemployeesVisa} />;
  };

  export default VisaSammary;
