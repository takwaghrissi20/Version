import styled from 'styled-components';
import { Form } from 'antd';

export const StyledSecondaryText = styled.p`
  margin-top: 8px;
  color: ${({ theme }) => theme.palette.text.secondary};
`;

export const StyledSecondaryText1 = styled.p`
  margin-top: 4px;
  color: ${({ theme }) => theme.palette.text.secondary};
`;

export const StyledShadowWrapper = styled.div`
  border: 1px solid #eaecf0;
  padding: 24px;
  border-radius: 12px;
  box-shadow:
    0px 1px 3px rgba(16, 24, 40, 0.1),
    0px 1px 2px rgba(16, 24, 40, 0.06);
`;

export const StyledFormWrapper = styled.div`
  .ant-select,
  .ant-input-number,
  .ant-input-number-group-wrapper {
    width: 100%;
  }

  .notification {
    margin-left: 10px;
  }

  .ant-card,
  .mb-20,
  .ant-select {
    margin-bottom: 20px;
  }
`;
export const StyledTodoDetailDatePicker = styled(Form.Item)`
  margin-left: 0;
  width:"100%;
  min-width:"300px"

  [dir='rtl'] & {
    margin-right: 0;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    margin-left: 20px;

    [dir='rtl'] & {
      margin-left: 0;
      margin-right: 20px;
    }
  }
`;
export const StyledSelectRow = styled.div`
  display: flex;
  align-items: center;
`;
export const StyledTodoSelectName = styled.span`
  width: calc(100% - 60px);
`;
export const StyledInput = styled.div`
  position: relative;

  & label {
    margin-bottom: 10px;
  }
`;
export const StyledSignLink = styled.span`
  color: ${({ theme }) => theme.palette.primary.main};
  font-size: ${({ theme }) => theme.font.size.base};
  cursor: pointer;
  margin-bottom: 16px;
  text-align: right;
  display: block;

  [dir='rtl'] & {
    text-align: left;
  }
`;