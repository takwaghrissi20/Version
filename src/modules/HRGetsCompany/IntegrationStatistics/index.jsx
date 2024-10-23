import React from 'react';
import TaskSideBar from './TaskSideBar/index';
import TasksList from './TasksList';
import TaskDetail from './TaskDetail';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import AppsContainer from '../../../@crema/components/AppsContainer';
import CalendarContextProvider from '../../../modules/HRGetsCompany/apps/context/CalendarContextProvider';
import AppPageMeta from '../../../@crema/components/AppPageMeta';

const ToDo = () => {
  const { messages } = useIntl();
  const onGetMainComponent = () => {
  
  return <TasksList />;
  
  };

  return (
    <CalendarContextProvider>
      <AppsContainer
        title={messages['sidebar.dataDisplay.Integration Statistics']}
        sidebarContent={<TaskSideBar />}>
        <AppPageMeta title='Planification' />
        {onGetMainComponent()}
      </AppsContainer>
    </CalendarContextProvider>
  );
};

export default ToDo;

ToDo.propTypes = {
  match: PropTypes.object,
};
