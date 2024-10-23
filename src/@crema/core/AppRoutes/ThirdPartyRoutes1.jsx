import React from 'react';
import { recharts1Configs } from './Rechart1Routes';
import ColorPicker from '../../../modules/VisaAndTravel/reactColor';
import ReactNotificationEx from '../../../modules/VisaAndTravel/reactNotification';
import ReactDropzone from '../../../modules/VisaAndTravel/reactDropzone';
import ReactPlayer from '../../../modules/VisaAndTravel/reactPlayer';
import Calendar from '../../../modules/VisaAndTravel/calendar';
import ReactSlick from '../../../modules/VisaAndTravel/reactSlick';
import Timeline from '../../../modules/VisaAndTravel/timeLine';
import ReactBeautifulDnd from '../../../modules/VisaAndTravel/reactBeautifulDnd';

export const thirdParty1Configs = [
  ...recharts1Configs,
  {
    path: '/third-party1/react-color',
    element: <ColorPicker />,
  },
  {
    path: '/third-party1/calendar',
    element: <Calendar />,
  },

  {
    path: '/third-party1/react-color',
    element: <ColorPicker />,
  },

  {
    path: '/third-party1/react-notification',
    element: <ReactNotificationEx />,
  },
  {
    path: '/third-party1/react-dropzone',
    element: <ReactDropzone />,
  },
  {
    path: '/third-party1/react-dnd',
    element: <ReactBeautifulDnd />,
  },
  {
    path: '/third-party1/react-player',
    element: <ReactPlayer />,
  },
  {
    path: '/third-party1/calendar',
    element: <Calendar />,
  },
  {
    path: '/third-party1/slider',
    element: <ReactSlick />,
  },
  


  {
    path: '/third-party1/time-line',
    element: <Timeline />,
  },
];
