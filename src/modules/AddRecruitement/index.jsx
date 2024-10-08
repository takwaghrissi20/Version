import React  from 'react';
import AppsContainer from "../../@crema/components/AppsContainer"
import { StyledBuyCellCard, StyledTabs } from '../../styles/index.styled';
import AppInfoView from '../../@crema/components/AppInfoView';
import RecruitementForemanBelow from './ForemanBelow';
import RecruitementBelow  from './Above Foreman';
import { useIntl } from 'react-intl';

const AddRecruitement = () => {
  const { messages } = useIntl();
  const items = [
    {
      label: 'Construction Team',
      key: '1',
      children: <RecruitementForemanBelow ></RecruitementForemanBelow>,
    }, // remember to pass the key prop
    {
      label: 'Management Team',
      key: '2',
      children: <RecruitementBelow ></RecruitementBelow>,
    },

  ];

  return (
     <div style={{marginBottom:"20px"}} >
          <StyledBuyCellCard style={{ paddingLeft: "10px"}} heightFull>
            <StyledTabs defaultActiveKey='1' items={items} />
          </StyledBuyCellCard>

        <AppInfoView />

    

</div >

    
  );
};

export default AddRecruitement;
