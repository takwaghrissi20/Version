import React from 'react';
import AddNewTask from '../AddNewTask';
import IntlMessages from '../../../../@crema/helpers/IntlMessages';
import AppsSideBarFolderItem from '../../../../@crema/components/AppsSideBarFolderItem';
import AppList from '../../../../@crema/components/AppList';
import ListEmptyResult from '../../../../@crema/components/AppList/ListEmptyResult';
import SidebarPlaceholder from '../../../../@crema/components/AppSkeleton/SidebarListSkeleton';
import {
  useCalendarActionsContext,
  useCalendarContext,
} from '../../apps/context/CalendarContextProvider';
import {
  StyledPlusOutlined,
  StyledTodoScrollbar,
  StyledTodoSidebarContent,
  StyledTodoSidebarHeader,
  StyledTodoSidebarList,
  StyledTodoSidebarTitle,
} from './index.styled';
import { Button } from 'antd';

const TaskSideBar = () => {
  const {  folderList } =
    useCalendarContext();
  const { setFilterData } = useCalendarActionsContext();

  const [isAddTaskOpen, setAddTaskOpen] = React.useState(false);

  const onOpenAddTask = () => {
    setAddTaskOpen(true);
  };

  const onCloseAddTask = () => {
    setAddTaskOpen(false);
  };

  return (
    <>
      <StyledTodoSidebarHeader>
        <Button
          ghost
          type='primary'
          icon={<StyledPlusOutlined style={{ marginRight: 8 }} />}
          onClick={onOpenAddTask}
        >
          <IntlMessages id='Add Integration' />
        </Button>
      </StyledTodoSidebarHeader>
      <StyledTodoScrollbar>
        <StyledTodoSidebarContent>
          <StyledTodoSidebarList itemLayout='horizontal'>
            <AppList
              data={folderList}
              ListEmptyComponent={
                <ListEmptyResult
                  loading={true}
                  placeholder={<SidebarPlaceholder />}
                />
              }
              renderItem={(item) => (
                <AppsSideBarFolderItem
                  item={item}
                  path={`/Hr/Integration/`}
                />
              )}
            />
          </StyledTodoSidebarList>
       
        
        </StyledTodoSidebarContent>
      </StyledTodoScrollbar>
      <AddNewTask
        isAddTaskOpen={isAddTaskOpen}
        onCloseAddTask={onCloseAddTask}
      />
    </>
  );
};

export default TaskSideBar;
