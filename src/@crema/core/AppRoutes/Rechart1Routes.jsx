import React from 'react';
import ComposedChart from '../../../modules/VisaAndTravel/visa/Composed';
import Vacation from '../../../modules/Vacation/AddVacation'
import AllLeave from '../../../modules/Vacation/AlllLeave'
import ViewLeave from '../../../modules/Vacation/AlllLeave/AllLeaveTab/ViewLeave'
import MyLeaveHistory from '../../../modules/Vacation/HistoryLeave'
import DetailsLeave from '../../../modules/Vacation/HistoryLeave/DetailsLeave'
export const recharts1Configs = [
  {
    path: '/Hr/Vacation&Leave/Vacation',
    element: < Vacation />,
  },
  {
    path: '/Hr/Vacation&Leave/ALL_Leave',
    element: < AllLeave />,
  },
  {
    path: '/Hr/Vacation&Leave/View/:id',
    element: <ViewLeave />,
  },
  {
    path: '/Hr/Vacation&Leave/My_Leave_History',
    element: <MyLeaveHistory/>,
  },
  {
    path: '/Hr/Vacation&Leave/HistoryLeave/DetailsLeave/:id',
    element: <DetailsLeave/>,
  },

 
  {
    path: '/Hr/Vacation&Leave/JustifiedAbsence',
    element: <ComposedChart />,
  },
  {
    path: '/Hr/Vacation&Leave/MaternityPaternity',
    element: <ComposedChart />,
  },
  {
    path: '/Hr/Vacation&Leave/ReportedReports',
    element: <ComposedChart />,
  },
  {
    path: '/third-party1/recharts1/radar',
    element: <ComposedChart />,
  },
  {
    path: '/third-party1/recharts1/radial',
    element: <ComposedChart />,
  },
  {
    path: '/third-party1/recharts1/treemap',
    element: <ComposedChart />,
  },
  {
    path: '/third-party1/recharts1/scatter',
    element: <ComposedChart />,
  },
 
];
