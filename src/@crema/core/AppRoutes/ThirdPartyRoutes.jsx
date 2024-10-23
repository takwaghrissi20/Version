import React from 'react';
import { rechartsConfigs } from './RechartRoutes';
import ColorPicker from '../../../modules/VisaAndTravel/reactColor';
import ReactNotificationEx from '../../../modules/VisaAndTravel/reactNotification';
import ReactDropzone from '../../../modules/VisaAndTravel/reactDropzone';
import ReactPlayer from '../../../modules/VisaAndTravel/reactPlayer';
import Calendar from '../../../modules/VisaAndTravel/calendar';
import ReactSlick from '../../../modules/VisaAndTravel/reactSlick';
import Timeline from '../../../modules/VisaAndTravel/timeLine';



import ReactBeautifulDnd from '../../../modules/VisaAndTravel/reactBeautifulDnd';

export const thirdPartyConfigs = [
  ...rechartsConfigs,
  {
    path: '/third-party/react-color',
    element: <ColorPicker />,
  },
  {
    path: '/third-party/calendar',
    element: <Calendar />,
  },

  {
    path: '/third-party/react-color',
    element: <ColorPicker />,
  },

  {
    path: '/third-party/react-notification',
    element: <ReactNotificationEx />,
  },
  {
    path: '/third-party/react-dropzone',
    element: <ReactDropzone />,
  },
  {
    path: '/third-party/react-dnd',
    element: <ReactBeautifulDnd />,
  },
  {
    path: '/third-party/react-player',
    element: <ReactPlayer />,
  },
  {
    path: '/third-party/calendar',
    element: <Calendar />,
  },
  {
    path: '/third-party/slider',
    element: <ReactSlick />,
  },


  {
    path: '/third-party/time-line',
    element: <Timeline />,
  },
];
