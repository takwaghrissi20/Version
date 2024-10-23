import React from 'react';
import { MdAdd } from 'react-icons/md';
import IntlMessages from '@crema/helpers/IntlMessages';

import {
  StyledScrumBoardCard,
  StyledScrumBoardCardText,
  StyledScrumBoardAddCardIcon,
} from '../BoardList/index.styled';
import { Col } from 'antd';

const AddBoardButton = ({board,  onViewBoardDetail}) => {
  return (
     <Col xs={24} lg={6}>
<StyledScrumBoardCard
      onClick={() => onViewBoardDetail(board)}
    >
       <StyledScrumBoardAddCardIcon>
        <MdAdd />
      </StyledScrumBoardAddCardIcon>
      
      <StyledScrumBoardCardText>Construction Team</StyledScrumBoardCardText>
     
    </StyledScrumBoardCard>

{/* 

     <StyledScrumBoardAddcard

      onClick={() => onViewBoardDetail(board)}
    >
      <StyledScrumBoardAddCardIcon>
        <MdAdd />
      </StyledScrumBoardAddCardIcon>
      <StyledScrumBoardAddCardText>
        <IntlMessages id='Add Employeees :Construction Teamrrr' />
      </StyledScrumBoardAddCardText>
    </StyledScrumBoardAddcard> */}
    
    </Col>
   
  );
};

export default AddBoardButton;

