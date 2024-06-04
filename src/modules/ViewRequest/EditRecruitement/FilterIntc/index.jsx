import AppCard from '../../../../@crema/components/AppCard';
import React,{useState,useEffect} from 'react';
import { Col, DatePicker, Form, InputNumber, Select, Switch } from 'antd';
import AppRowContainer from '../../../../@crema/components/AppRowContainer';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import { StyledFormWrapper } from '../index.styled';

const { Option } = Select;
const FilterItemConstructionStaff = ({listInterview ,intCode, setInterviewCode,findIdInterview}) => {

  const handleInterviewCode = (value) => {
    console.log("value",value)
    setInterviewCode(value);
  };


  return (
    <AppCard title='Filter Interview Sheet Code'>
      <StyledFormWrapper layout='vertical'>
        <AppRowContainer gutter={{ xs: 16, sm: 16, md: 20 }}>
          <Col xs={24}>
            <Form.Item label='MANAGEMENT STAFF'>          
              <Select
                placeholder='Status'
                value={intCode} 
                onChange={handleInterviewCode}>
  
                  {listInterview.map((status,index) => (
              
                  <Option key={index} value={status.interviewCod}>
                    CIS-{status.interviewCode} 
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
    

        </AppRowContainer>
      </StyledFormWrapper>
    </AppCard>
  );
};

export default FilterItemConstructionStaff;

FilterItemConstructionStaff.propTypes = {
  listInterview: PropTypes.object.isRequired,

};
