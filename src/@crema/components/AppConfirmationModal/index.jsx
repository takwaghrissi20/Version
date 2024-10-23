import React from 'react';
import { Modal } from 'antd';

import PropTypes from 'prop-types';
import { StyledParaText } from './index.styled';

const AppConfirmationModal = ({
  open,
  onDeny,
  onConfirm,
  paragraph,
  modalTitle,
}) => {
  return (
    <Modal
      title={modalTitle}
      open={open}
      onOk={onConfirm}
      onCancel={() => onDeny(false)}
    >
      <StyledParaText>{paragraph}</StyledParaText>
    </Modal>
  );
};


export default AppConfirmationModal;
