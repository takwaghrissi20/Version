import AppCard from '../../../../@crema/components/AppCard';
import { Button,Form,DatePicker } from 'antd';
import styled from 'styled-components';

export const StyledScrumBoardDatePicker = styled(DatePicker)`
  position: relative;
  width: 100%;
  height:2rem
`;

export const StyledScrumBoardAddListCard = styled(AppCard)`
  width: 280px;
  margin: 4px 0 8px 8px;

  [dir='rtl'] & {
    margin-left: 0;
    margin-right: 8px;
  }

  & .ant-card-body {
    padding: 16px 24px;
  }
`;

export const StyledScrumBoardAddList = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledScrumBoardAddIcon = styled.span`
  cursor: pointer;
  background-color: ${({ theme }) => theme.palette.gray[100]};
  border: solid dashed ${({ theme }) => theme.palette.borderColor};
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.sizes.borderRadius.circle};

  & svg {
    color: ${({ theme }) => theme.palette.text.disabled};
    font-weight: ${({ theme }) => theme.font.weight.light};
    font-size: 24px;
  }
`;

export const StyledScrumBoardAddText = styled.p`
  margin-left: 14px;
  font-weight: ${({ theme }) => theme.font.weight.medium};
  font-size: 15px;
  margin-bottom: 0;

  [dir='rtl'] & {
    margin-left: 0;
    margin-right: 14px;
  }
`;

export const StyledScrumBoardDetailTitle = styled.span`
  cursor: pointer;
  margin-right: 8px;
  color: ${({ theme }) => theme.palette.primary.main};

  [dir='rtl'] & {
    margin-right: 0;
    margin-left: 8px;
  }
`;

export const StyledScrumBoardAddClose = styled.span`
  margin-left: 10px;

  [dir='rtl'] & {
    margin-left: 0;
    margin-right: 10px;
  }
`;

export const StyledScrumBoardAddListFormFilled = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const StyledScrumBoardAddListBtn = styled(Button)`
  padding-left: 24px;
  padding-right: 24px;
  margin-top: 12px;
`;
export const StyledOrderHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;

export const StyledOrderHeaderInputView = styled.div`
  max-width: 120px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    max-width: 150px;
  }
`;
export const StyledOrderHeaderRight = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 10px;

  [dir='rtl'] & {
    padding-left: 0;
    padding-right: 10px;
  }
`;
export const StyledFormWrapper = styled(Form)`
  .ant-select,
  .ant-input-number {
    width: 100%;
  }

  .notification {
    margin-left: 10px;
  }
`;

export const StyledListingStatus = styled.div`
  padding: 3px 5px;
  border-radius: 4px;
  text-align: center;
`;

export const StyledTitle5 = styled.h5`
  color: ${({ theme }) => theme.palette.text.primary};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  margin-bottom: 0;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xs}px) {
    margin-bottom: 8px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    margin-bottom: 16px;
  }
`;

{/*Forms ADD Employees*/}
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

export const StyledFormAddWrapper = styled.div`
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
