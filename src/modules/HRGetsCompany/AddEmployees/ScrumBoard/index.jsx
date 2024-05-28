"use client";
import React, { useState, useEffect } from 'react';
import { Col } from 'antd';
import AppPageMeta from '../../../../@crema/components/AppPageMeta';
import AppInfoView from '../../../../@crema/components/AppInfoView';
import { useIntl } from 'react-intl';
import AppsContainer from "../../../../@crema/components/AppsContainer"

import TabsFormsManagementStaff from '../../AddEmployeesManagementStaff';
import TabsFormsConstructionTeam from '../../AddEmployeesConstructionStaff';
import { StyledBuyCellCard, StyledTabs } from '../../../../styles/index.styled';

const AddEmployeesInformation = () => {
  const { messages } = useIntl();

  const items = [
    {
      label: 'Management Staff ',
      key: '1',
      children: <TabsFormsManagementStaff />,
    },
    {
      label: 'Construction Staff ',
      key: '2',
      children: <TabsFormsConstructionTeam />,
    },
  
  ];

   
  
  return (
    <AppsContainer
      title={messages['sidebar.app.addEmployess']}
      cardStyle={{ backgroundColor: 'transparent', boxShadow: 'none',height: "fit-content" }}
      fullView
    >
     
       <StyledBuyCellCard   style={{ paddingLeft: "10px",boxShadow: "none",height: "fit-content" }} heightFull>
      <StyledTabs style={{boxShadow:"none"}} defaultActiveKey='1' items={items} />
    </StyledBuyCellCard>
   
      <AppInfoView />
    </AppsContainer>
  );
};

export default AddEmployeesInformation;
