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
      label: 'Recruitement Foreman & Below',
      key: '1',
      children: <RecruitementForemanBelow ></RecruitementForemanBelow>,
    }, // remember to pass the key prop
    {
      label: 'Recruitement Above Foreman',
      key: '2',
      children: <RecruitementBelow ></RecruitementBelow>,
    },


  ];

  return (

    <>

      <AppsContainer
        title={messages['sidebar.app.AddRecruitement']}
        cardStyle={{ backgroundColor: 'transparent', boxShadow: 'none' }}
        fullView>


        <AppsContainer
          title={messages['sidebar.app.AddRecruitement']}
          type='bottom'
          fullView>
          <StyledBuyCellCard style={{ paddingLeft: "10px" }} heightFull>
            <StyledTabs defaultActiveKey='1' items={items} />
          </StyledBuyCellCard>
        </AppsContainer>

        <AppInfoView />

      </AppsContainer>



    </>
  );
};

export default AddRecruitement;
