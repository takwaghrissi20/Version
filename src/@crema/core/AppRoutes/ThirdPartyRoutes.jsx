import React from 'react';
import { rechartsConfigs } from './RechartRoutes';
import ColorPicker from '../../../modules/thirdParty/reactColor';
import ReactNotificationEx from '../../../modules/thirdParty/reactNotification';
import ReactDropzone from '../../../modules/thirdParty/reactDropzone';
import ReactPlayer from '../../../modules/thirdParty/reactPlayer';
import Calendar from '../../../modules/thirdParty/calendar';
import ReactSlick from '../../../modules/thirdParty/reactSlick';
import Timeline from '../../../modules/thirdParty/timeLine';



import ReactBeautifulDnd from '../../../modules/thirdParty/reactBeautifulDnd';

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
