import React from 'react';
import { Steps } from 'antd';

const description = 'This is a description.';
const App = () => (
  <Steps
    current={1}
    items={[
      {
        title: 'Finished',
        description,
      },
      {
        title: 'In Progresssgggg',
        description,
        subTitle: 'Left 00:00:08',
      },
      {
        title: 'Waiting',
        description,
      },
    ]}
  />
);
export default App;
