import React from 'react';
import { Dropdown } from 'antd';
import { FiMoreVertical } from 'react-icons/fi';

const options = ['View', 'Update','Delete'];
const AppMenu = () => {
  const items = options.map((option, index) => {
    return { key: index, label: <a href='#/'>{option}</a> };
  });

  return (
    <Dropdown menu={{ items }} trigger={['click']}>
      <a
        className='ant-dropdown-link cr-dropdown-link'
        onClick={(e) => e.preventDefault()}
      >
        <FiMoreVertical />
      </a>
    </Dropdown>
  );
};

export default AppMenu;
