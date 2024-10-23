import React, { useState } from 'react';
import PropTypes from 'prop-types';
import EditTravel from './EditTravel';
import { StyledContactModal } from '../../../styles/index.styled';




const ModalView = ({
  isViewTravel,
  handleAddTravelClose,
  josId,
  desertPassfinishdate,
  idTravel,
  dateOfTravel,
  travelFromTo,
  projName,

  name,
  actualLocationFrom,
  actualLocationTo,
  bookingStatusDesert,
  bookingStatusJoys,
  dateDemob,
  dateMob,
  dateTravelDesert,
  dateTravelJoys,
  dayRest,
  daySinceMob,
  departureDateFromFiled,
  goBack,
  idendityCopy,
  refTicket,
  returnDateIfRound,
  rich_DateToSite,
  round,
  ticketRef,
  tripTypeDesert,
  tripTypeJoys,
  type,
  inputDate,
  getsId,
  position,
  endDateMiss,


}) => {



  return (

    <StyledContactModal
      width={1050}
      open={isViewTravel}
      onOk={isViewTravel}
      footer={false}
      onCancel={handleAddTravelClose}
      bodyStyle={{ height: "auto" }}
    >
      <EditTravel
        handleAddContactClose={handleAddTravelClose}
        josId={josId}
        desertPassfinishdate={desertPassfinishdate}
        idTravel={idTravel}
        dateOfTravel={dateOfTravel}
        travelFromTo={travelFromTo}
        projName={projName}

      name={name}
      actualLocationFrom={actualLocationFrom}
      actualLocationTo={actualLocationTo}
      bookingStatusDesert={bookingStatusDesert}
      bookingStatusJoys={bookingStatusJoys}
      dateDemob={dateDemob}
      dateMob={dateMob}
      dateTravelDesert={dateTravelDesert}
      dateTravelJoys={dateTravelJoys}
      dayRest={dayRest}
      daySinceMob={daySinceMob}
      departureDateFromFiled={departureDateFromFiled}
      goBack={goBack}
      idendityCopy={idendityCopy}
      refTicket={refTicket}
      returnDateIfRound={returnDateIfRound}
      rich_DateToSite={ rich_DateToSite}
      round={ round}
      ticketRef={  ticketRef}
      tripTypeDesert={tripTypeDesert}
      tripTypeJoys={tripTypeJoys}
      type={type}
      inputDate={inputDate}
      getsId={ getsId}
      position={position}
      endDateMiss={endDateMiss}
       

      />
    </StyledContactModal>
  );
};

export default ModalView;

ModalView.defaultProps = {

};

ModalView.propTypes = {
  isViewTravel: PropTypes.bool.isRequired,
  handleAddContactClose: PropTypes.func.isRequired,
  reCallAPI: PropTypes.func,
};
