import  { useState } from 'react';
import { momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import PropTypes from 'prop-types';
import { StyledCalendar } from './Calendar.style';
import { useNavigate, useParams } from 'react-router-dom';
import './calendar.css';
import CustomToolbar from './CustomToolbar';
import TaskItem from './TaskItem';
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';
import AppsHeader from '@crema/components/AppsContainer/AppsHeader';

const DragAndDropCalendar = withDragAndDrop(StyledCalendar);


const localizer = momentLocalizer(moment);

const TaskCalender = ({taskList,onUpdateTask, onSetFilterText,integration }) => {
  const navigate = useNavigate();
  const { folder, label } = useParams();
  const [selectedDate, setSelectedDate] = useState(null);

  const onSelectDate = ({ start }) => {
    console.log('start: ', start);
    setSelectedDate(start);
  };

  const onOpenAddTask = (data) => {
    console.log('selectedDate', selectedDate);
  };
  const resizeEvent = ({ event, start, end }) => {
    onUpdateTask({ ...event, startDate: start, endDate: end });
    console.log('resizeEvent: ', event, start, end);
  };


  const moveEvent = ({ event, start, end }) => {
    onUpdateTask({ ...event, startDate: start, endDate: end });
  };

  const getEvents = () => {
    if (integration?.length > 0) {
      // Traitement des événements d'intégration
      const integrationEvents = integration?.map((event) => ({
        title: event.fullname,
        start: new Date(event.integrationDate),
        end: new Date(event.integrationDate),
      }));
      return [...integrationEvents]; // Retourne les événements d'intégration
    } else {
      return []; // Retourne une liste vide s'il n'y a pas d'intégration
    }
  };
  const events = integration.map(integration => {
    const dateTimeString = `${integration.toD}`;
    const integrationDateTime = moment(dateTimeString, 'YYYY-MM-DD HH:mm:ss');
    console.log("integrationDateTime", integrationDateTime)

    // Extraire les composants de date de l'objet moment
    const year = integrationDateTime.year();
    const month = integrationDateTime.month();
    const day = integrationDateTime.date();
    const adjustedHour = integrationDateTime.hour()+1;
    const title = `${integration.fullname} -  idNumber :${integration.idNumb} -position :${integration.position}`;

    return {
      title: title,
      start: new Date(year, month, day, adjustedHour, 0, 0),
      end: new Date(year, month, day, adjustedHour, 0, 0),
     
      //allDay: true
    };
  });

  return (
    <>
    {/* <StyledCalendar
      events={events}
      localizer={localizer}
      step={15}
      timeslots={8}
      defaultView='week'
      defaultDate={new Date()}
    // defaultDate={new Date()}
    /> */}
    <DragAndDropCalendar
      localizer={localizer}
      // events={getEvents()}
      events={events}
      themeVariant='dark'
      views={['month', 'agenda']}
      tooltipAccessor={null}
      showMultiDayTimes
      resizable
      onEventResize={resizeEvent}
      onEventDrop={moveEvent}
      onSelectEvent={onOpenAddTask}
      components={{
        toolbar: (props) => (
          <AppsHeader>
            <CustomToolbar onSetFilterText={onSetFilterText} {...props} />
          </AppsHeader>
        ),
        event: (item) => <TaskItem key={item.key} item={item.event} />,
      }}
      popup
      selectable
      onSelectSlot={onSelectDate}
      defaultView='month'
    />
    </>
  );
};
export default TaskCalender;
TaskCalender.propTypes = {
  integrationEvents: PropTypes.any,
  onUpdateTask: PropTypes.func,
  onSetFilterText: PropTypes.func,
};
