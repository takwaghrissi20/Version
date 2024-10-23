import { useState } from "react";
import { useNavigate } from "react-router-dom";
import IntlMessages from "../../../../../@crema/helpers/IntlMessages";
import AppInfoView from "../../../../../@crema/components/AppInfoView";
import { Col } from "antd";
import {
  StyledScrumBoardContainer,
  StyledScrumBoardHeader,
  StyledScrumBoardWrap,
} from "./index.styled"
import BoardItem from "./BoardItem";
import {
  useScrumActionsContext,
  useScrumContext,
} from "../../../apps/context/ScrumContextProvider";
import AddBoardButton from "./AddBoardButton";
const BoardList = () => {
  const navigate = useNavigate();

  const { boardList } = useScrumContext();
  const { setData } = useScrumActionsContext();


  const onViewManagementStaff = () => {

    navigate(`/HRGetsCompany/AddEmployees/AddEmployeesManagementStaff`);
  };
  const onViewConstructionTeam = () => {
 
    navigate(`/HRGetsCompany/AddEmployees/ConstructionStaff`);
  };

  return (
    <>
      <StyledScrumBoardWrap>
        <StyledScrumBoardHeader>
          <h1 style={{fontStyle: 'italic',textDecoration: "underline #2997ff"}}>
            <IntlMessages id="Add Employees" />
          </h1>
          <p></p>
        </StyledScrumBoardHeader>
        <StyledScrumBoardContainer>
          {boardList && boardList.length > 0
            ? boardList.map((board) => {
                return (
                  <Col xs={24} sm={12} md={8} lg={6} key={board.id}>
                    <BoardItem
                      board={board}
                      onViewBoardDetail={onViewManagementStaff}
                    />
                  </Col>
                );
              })
            : null}
             <AddBoardButton 
            onViewBoardDetail={onViewConstructionTeam}
            
            />     
        
      </StyledScrumBoardContainer>
      </StyledScrumBoardWrap>

      <AppInfoView />
    </>
  );
};

export default BoardList;
