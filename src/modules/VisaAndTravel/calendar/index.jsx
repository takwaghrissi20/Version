import React from "react";

import AppComponentCard from "@crema/components/AppComponentCard";
import AppComponentHeader from "@crema/components/AppComponentHeader";
import InterviewCalendar from "./InterviewCalendar";
import AppRowContainer from "@crema/components/AppRowContainer";
import { Col } from "antd";

const Calendar = () => {
  return (
    <>
      <AppComponentHeader
        title="React Big Calendar"
     
      />

      <AppRowContainer>
        <Col xs={24}>
          <AppComponentCard
            title="Basic Calendar"
            component={InterviewCalendar}
         
          />
        </Col>
      
      </AppRowContainer>
    </>
  );
};

export default Calendar;
