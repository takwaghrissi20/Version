import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledScrumBoardCard,
  StyledScrumBoardCardText,
  StyledScrumBoardAddCardIcon,
} from './index.styled';
import { MdAdd } from 'react-icons/md';

const BoardItem = ({ board, onEditButtonClick, onViewBoardDetail }) => {
  return (
    <>
    
    <StyledScrumBoardCard
      key={board.id}
      onClick={() => onViewBoardDetail(board)}
    >
       <StyledScrumBoardAddCardIcon>
        <MdAdd onClick={() => onEditButtonClick(board)}  />
      </StyledScrumBoardAddCardIcon>
    
      <StyledScrumBoardCardText>Management Staff</StyledScrumBoardCardText>
      <span onClick={(event) => event.stopPropagation()} />
    </StyledScrumBoardCard>
    </>
  
  );
};

export default BoardItem;

BoardItem.propTypes = {
  board: PropTypes.object.isRequired,
  onEditButtonClick: PropTypes.func.isRequired,
  onViewBoardDetail: PropTypes.func,
};
