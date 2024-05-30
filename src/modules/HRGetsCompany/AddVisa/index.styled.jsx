import styled from 'styled-components';
import { Form ,DatePicker,Avatar, Button,  Modal } from 'antd';
import AppScrollbar from '../../../@crema/components/AppScrollbar';
import AppTableContainer from '../../../@crema/components/AppTableContainer';
export const StyledScrumBoardDatePicker = styled(DatePicker)`
  position: relative;
  width: 100%;
  height:2rem
`;
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



export const StyledContactModal = styled(Modal)`
  position: relative;

  & .ant-modal-body {
    padding: 0;
  }
`;
export const StyledTravelTable = styled(AppTableContainer)`
  & .ant-table-thead > tr > th {
    border-bottom: 0 none;
    font-size: 13px;
    padding: 8px;
    font-weight: ${({ theme }) => theme.font.weight.bold};
    background-color: transparent;
    color: ${({ theme }) => theme.palette.text.primary};

    &:first-child {
   

      [dir='rtl'] & {
       
      }
    }

    &:last-child {
   

      [dir='rtl'] & {
     
      }
    }
  }

  & .ant-table-tbody > tr > td {
    border-bottom: 0 none;
    
    font-size: 13px;
    padding: 6px 8px;

    &:first-child {
      padding-left: 20px;

      [dir='rtl'] & {
        padding-left: 0;
        padding-right: 20px;
       
      }
    }

    &:last-child {
      padding-right: 20px;

      [dir='rtl'] & {
        padding-right: 0;
        padding-left: 20px;
        background: #708090;
      }
    }
  }
`;

export const StyledContactForm = styled(Form)`
  position: relative;
  & .floating-label{
    
    
  }

  & .form-field {
    width: 100%;
    margin-bottom: 16px;
   

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
      margin-bottom: 24px;
    }
  }

  & .ant-picker {
    width: 100%;
  
  }

`;
export const StyledContactFormContentField = styled.div`
  position: relative;

  .floating-label {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 12px;
    background: #708090;
    color: white;
    padding: 0 8px;
    border-radius: 12px;
    font-size: 14px;
    font-family: arial, sans-serif;
    font-weight: 400;
    pointer-events: none;
    z-index: 1;
  }

  .form-field {
    width: 100%;
    margin-bottom: 16px;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
      margin-bottom: 24px;
    }
  }

  .ant-picker {
    width: 100%;,
   
  }
`;

export const StyledContactFormHeader = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.palette.borderColor};

  & .dropzone {
    margin-bottom: 0;

    &:focus {
      outline: 0;
    }
  }
`;

export const StyledContactFormAvatar = styled(Avatar)`
  width: 55px;
  height: 55px;
  margin-bottom: 8px;
  cursor: pointer;
  background:"red"
`;
export const StyledContactFormHeaderTitle = styled.h4`
  font-weight: ${({ theme }) => theme.font.weight. EXTRA_BOLD};
`;

export const StyledContactModalScrollbar = styled(AppScrollbar)`
  height: 400px;
`;
export const StyledContactFormContent = styled.div`
  position: relative;
`;
export const StyledContactFormContentItem = styled.div`
  padding: 20px;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    padding-left: 32px;
    padding-right: 32px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
    padding-left: 40px;
    padding-right: 40px;
  }

  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.palette.borderColor};
  }
`;

export const StyledContactFormItemTitle = styled.h6`
  font-size: ${({ theme }) => theme.font.size.lg};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  margin-bottom: 16px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
    margin-bottom: 24px;
  }
`;



export const StyledContactFormFooter = styled.div`
  padding: 16px 32px;
  border-top: 1px solid ${({ theme }) => theme.palette.borderColor};
  border-radius: 0 0 ${({ theme }) => theme.sizes.borderRadius.base}
    ${({ theme }) => theme.sizes.borderRadius.base};
  text-align: right;

  [dir='rtl'] & {
    text-align: left;
  }

  & .ant-btn {
    min-width: 100px;

    &:not(:first-child) {
      margin-left: 10px;

      [dir='rtl'] & {
        margin-left: 0;
        margin-right: 10px;
      }
    }
  }
`;

export const StyledContactFormBtn = styled(Button)`
  padding: 0 32px;
  height: 36px;
`;
