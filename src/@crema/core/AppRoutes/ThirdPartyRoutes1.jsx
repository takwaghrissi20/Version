import React from 'react';
import { recharts1Configs } from './Rechart1Routes';
import ColorPicker from '../../../modules/thirdParty/reactColor';
import ReactNotificationEx from '../../../modules/thirdParty/reactNotification';
import ReactDropzone from '../../../modules/thirdParty/reactDropzone';
import ReactPlayer from '../../../modules/thirdParty/reactPlayer';
import Calendar from '../../../modules/thirdParty/calendar';
import ReactSlick from '../../../modules/thirdParty/reactSlick';
import Timeline from '../../../modules/thirdParty/timeLine';
import ReactBeautifulDnd from '../../../modules/thirdParty/reactBeautifulDnd';

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
