import React, { useState, useEffect } from 'react';
import { momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import { StyledCalendar } from '../index.styled';

const localizer = momentLocalizer(moment);

const CalendarInterview = () => {
  const [interviews, setInterviews] = useState([]);
  useEffect(() => {
    const fetchGetAllInterview = async () => {
      try {

        const endPoint =
          process.env.NODE_ENV === "development"
            ? "https://dev-gateway.gets-company.com"
            : "";

        const url = `${endPoint}/api/v1/int/list`;
        const response = await fetch(url, { method: "GET" });

        if (response.ok) {
          const data = await response.json();
          const InterviewsAccepted = data.filter(interview => interview.notif === 3);

          setInterviews(InterviewsAccepted);

        }
      } catch (error) {
        console.error("Erreur lors de la récupération des entretiens:", error);

      }
    };
    fetchGetAllInterview();
  }, []);

  const events = interviews.map(interview => {
    const dateTimeString = `${interview.interviwDate} ${interview.time}`;
    const interviewDateTime = moment(dateTimeString, 'YYYY-MM-DD HH:mm:ss');

    // Extraire les composants de date de l'objet moment
    const year = interviewDateTime.year();
    const month = interviewDateTime.month();
    const day = interviewDateTime.date();
    const adjustedHour = interviewDateTime.hour() - 1;
 
    const title = `${interview.fullName} -  ${interview.department} -position :${interview.positionToBeFilled}`;
    return {
      title: title,
      start: new Date(year, month, day, adjustedHour, 0, 0),
      end: new Date(year, month, day, adjustedHour, 0, 0),
      desc: interview.departement,
      //allDay: true
    };
  });



  return (
    <StyledCalendar
      events={events}
      localizer={localizer}
      step={15}
      timeslots={8}
      defaultView='week'
      defaultDate={new Date()}
    // defaultDate={new Date()}
    />
  );
};

export default CalendarInterview;