import React, { useState, useEffect } from 'react';
import AppsContent from '../../../../@crema/components/AppsContainer/AppsContent';
import TaskCalender from './TaskCalendar';

import {
  useCalendarActionsContext,
 
} from '../../apps/context/CalendarContextProvider';

const TasksList = () => {

  const { reCallAPI } = useCalendarActionsContext();

  const [filterText, onSetFilterText] = useState('');
  const [integration, setIntegration] = useState([]);
  useEffect(() => {
    const fetchDataIntegration = async () => {
      try {
        const endPoint =
          process.env.NODE_ENV === "development"
            ? "https://dev-gateway.gets-company.com"
            : "";

        const response = await fetch("https://dev-gateway.gets-company.com/api/v1/integration/list", {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          },
        });

        if (!response.ok) {
          throw new Error('La requête a échoué avec le code ' + response.status);
        }

        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
          throw new TypeError("La réponse n'est pas au format JSON");
        }

        const responseData = await response.json();
        setIntegration(responseData)


      } catch (error) {
        console.error("Erreur lors de la récupération des données:", error);
      }
    };

    fetchDataIntegration();
  }, []);

  const onGetFilteredItems = () => {
    if (filterText === '') {
      return integration;
    } else {
      return integration.filter((task) =>
        task?.fullname?.toUpperCase().includes(filterText.toUpperCase()),
      );
    }
  };

  const list = onGetFilteredItems();

  return (

    <AppsContent fullView>
      <TaskCalender
        reCallAPI={reCallAPI}
        taskList={list}
        onSetFilterText={onSetFilterText}
        integration={integration}
      />
      {/*Calendar all*/}
    </AppsContent>
  );
};

export default TasksList;
