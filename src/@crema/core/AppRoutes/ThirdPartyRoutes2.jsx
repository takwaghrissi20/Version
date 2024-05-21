import React from 'react';
import { recharts2Configs } from './Rechart2Routes';
import ReactNotificationEx from '../../../modules/thirdParty/reactNotification';
import ReactDropzone from '../../../modules/thirdParty/reactDropzone';
import ReactPlayer from '../../../modules/thirdParty/reactPlayer';
import Calendar from '../../../modules/thirdParty/calendar';
import ReactSlick from '../../../modules/thirdParty/reactSlick';
import Timeline from '../../../modules/thirdParty/timeLine';
import ReactBeautifulDnd from '../../../modules/thirdParty/reactBeautifulDnd';

export const thirdParty2Configs = [
  ...recharts2Configs,

  {
    path: '/third-party2/calendar',
    element: <Calendar />,
  },
 

  {
    path: '/third-party2/react-notification',
    element: <ReactNotificationEx />,
  },
  {
    path: '/third-party2/react-dropzone',
    element: <ReactDropzone />,
  },
  {
    path: '/third-party2/react-dnd',
    element: <ReactBeautifulDnd />,
  },
  {
    path: '/third-party2/react-player',
    element: <ReactPlayer />,
  },
  {
    path: '/third-party2/calendar',
    element: <Calendar />,
  },
  {
    path: '/third-party2/slider',
    element: <ReactSlick />,
  },


  {
    path: '/third-party2/time-line',
    element: <Timeline />,
  },
];
