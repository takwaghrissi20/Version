import React from 'react';
import { Col, Row, Card } from 'antd';
import { AppstoreOutlined, CheckCircleOutlined, HourglassOutlined, CloseCircleOutlined } from '@ant-design/icons';

const Cards = ({leaveData}) => {
  
  const cardStyle = {
    border: '1px solid #e8e8e8',
    borderRadius: '10px',
    textAlign: 'center',
    backgroundColor: 'white',
  };

  return (
    <div style={{ borderRadius: '20px', marginTop: '0.5rem', padding: '20px' }}>
      <Row gutter={[16, 16]} justify="center"> 
        <Col xs={24} sm={12} lg={6}>
          <Card style={cardStyle}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <AppstoreOutlined style={{ fontSize: '1.5rem', color: '#1890ff', marginRight: '1rem' }} />
              <div>
                <h3 style={{ margin: 0 }}>All Leaves</h3>
                <h2>{leaveData.allLeaves}</h2>
              </div>
            </div>
          </Card>
        </Col>

        <Col xs={24} sm={12} lg={6}>
          <Card style={cardStyle}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <CheckCircleOutlined style={{ fontSize: '2rem', color: '#52c41a', marginRight: '1rem' }} />
              <div>
                <h3 style={{ margin: 0 }}>Approved</h3>
                <h2>{leaveData.approved}</h2>
              </div>
            </div>
          </Card>
        </Col>

        <Col xs={24} sm={12} lg={6}>
          <Card style={cardStyle}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <HourglassOutlined style={{ fontSize: '2rem', color: '#faad14', marginRight: '1rem' }} />
              <div>
                <h3 style={{ margin: 0 }}>Pending</h3>
                <h2>{leaveData.pending}</h2>
              </div>
            </div>
          </Card>
        </Col>

        <Col xs={24} sm={12} lg={6}>
          <Card style={cardStyle}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <CloseCircleOutlined style={{ fontSize: '2rem', color: '#f5222d', marginRight: '1rem' }} />
              <div>
                <h3 style={{ margin: 0 }}>Rejected</h3>
                <h2>{leaveData.rejected}</h2>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Cards;
