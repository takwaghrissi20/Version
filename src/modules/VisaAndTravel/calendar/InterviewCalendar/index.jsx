import React, { useState, useEffect } from 'react';
import { momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import { StyledCalendar } from '../index.styled';

const localizer = momentLocalizer(moment);

const CalendarInterview = () => {
  const userEmail = localStorage.getItem("email");
  const [idgets, setIdgets] = useState("");
  const [interviews, setInterviews] = useState([]);
  const [interviewsConstruction, setInterviewsConstruction] = useState([]);

  const fetchProjectEmail = async () => {
    try {
      const url = `https://dev-gateway.gets-company.com/api/v1/emp/getProjectByMail?mail=${userEmail}`;
      const response = await fetch(url, { method: "GET" });
      if (response.ok) {
        const data = await response.json();
        setIdgets(data?.[0]?.getsId);
      } else {
        console.error("Erreur lors de la récupération du email:", response.status);
      }
    } catch (error) {
      console.error("Erreur lors de la récupération du email:", error);
    }
  };

  const fetchGetAllInterview = async () => {
    if (!idgets) return; // Ensure idgets is set before fetching interviews

    try {
      const endPoint =
        process.env.NODE_ENV === "development"
          ? "https://dev-gateway.gets-company.com"
          : "";
      const url = `${endPoint}/api/v1/int/list`;
      const response = await fetch(url, { method: "GET" });

      if (response.ok) {
        const data = await response.json();
      
        const InterviewsAccepted = data.filter(interview => {
          return interview.notif === 0 && interview.idNumb === idgets;
        });
        setInterviews(InterviewsAccepted);

        // Fetch Interview Construction
        const urlConstruction = `${endPoint}/api/v1/intc/list`;
        const responseConstruction = await fetch(urlConstruction, { method: "GET" });
  
        if (responseConstruction.ok) {
          const dataConstruction = await responseConstruction.json();       
          const InterviewsConstructionAccepted = dataConstruction.filter(interview => {
            return interview.notif === 0 && interview.idNumb === idgets;
          });
          setInterviewsConstruction(InterviewsConstructionAccepted);
        }

      }
    } catch (error) {
      console.error("Erreur lors de la récupération des entretiens:", error);
    }
  };

  useEffect(() => {
    fetchProjectEmail();
  }, []);

  useEffect(() => {
    fetchGetAllInterview();
  }, [idgets]); // Fetch interviews whenever idgets changes

  // Create events for standard interviews
  const events = interviews.map(interview => {
    const dateTimeString = `${interview.interviwDate} ${interview.time}`;
    const interviewDateTime = moment(dateTimeString, 'YYYY-MM-DD HH:mm:ss');

    const year = interviewDateTime.year();
    const month = interviewDateTime.month();
    const day = interviewDateTime.date();
    const adjustedHour = interviewDateTime.hour() - 1;

    const title = `${interview.fullName} -  ${interview.department} - position: ${interview.positionToBeFilled}`;
    return {
      title: title,
      start: new Date(year, month, day, adjustedHour, 0, 0),
      end: new Date(year, month, day, adjustedHour + 1, 0, 0), // Adjust end time as needed
      desc: interview.departement,
    };
  });

  // Create events for construction interviews
  const constructionEvents = interviewsConstruction.map(interview => {
    const dateTimeString = `${interview.interviwDate} ${interview.time}`;
    const interviewDateTime = moment(dateTimeString, 'YYYY-MM-DD HH:mm:ss');

    const year = interviewDateTime.year();
    const month = interviewDateTime.month();
    const day = interviewDateTime.date();
    const adjustedHour = interviewDateTime.hour() - 1;

    const title = `${interview.fullName} -  ${interview.department} - position: ${interview.positionToBeFilled} (Construction)`;
    return {
      title: title,
      start: new Date(year, month, day, adjustedHour, 0, 0),
      end: new Date(year, month, day, adjustedHour + 1, 0, 0), // Adjust end time as needed
      desc: interview.departement,
    };
  });

  // Combine both events arrays
  const allEvents = [...events, ...constructionEvents];

  return (
    <StyledCalendar
      events={allEvents}
      localizer={localizer}
      step={15}
      timeslots={8}
      defaultView='week'
      defaultDate={new Date()}
    />
  );
};

export default CalendarInterview;
