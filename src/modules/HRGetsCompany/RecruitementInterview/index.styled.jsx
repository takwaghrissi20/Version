import styled from 'styled-components';
import AppCard from '../../../@crema/components/AppCard';
import { InputNumber, Select, Tabs } from 'antd';
import AppTableContainer from '../../../@crema/components/AppTableContainer';
import { Avatar } from 'antd';


export const StyledGeneralStats = styled.div`
display: flex;
align-items: center;
`;

export const StyledGeneralStatsAvatar = styled(Avatar)`
  min-width: 46px;
  height: 46px;
  width: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  margin-right: 16px;
  font-size: 18px;

  [dir='rtl'] & {
    margin-right: 0;
    margin-left: 16px;
  }

  & svg {
    display: block;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    font-size: 20px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
    font-size: 24px;
  }
`;


export const StyledFlexSuccessContainer = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.palette.success.main};
  justify-content: flex-end;
`;

export const StyledToggleContainer = styled.div`
  position: relative;
  @media only screen and (min-width: 1200px) and (max-width: 1579px) {
    display: none;
  }
`;


export const StyledFlexContainer = styled.div`
  display: flex;
  align-items: center;

  h5 {
    margin-bottom: 0 !important;
  }
`;

export const StyledFlexWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
`;

export const StyledIconWrapper = styled.span`
  margin-right: 12px;
  height: 46px;
  width: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`;

export const StyledDurationWrapper = styled.div`
  margin-top: 8px;
  color: ${({ theme }) => theme.palette.text.secondary};

  span {
    font-size: ${({ theme }) => theme.font.size.sm};
  }
`;

export const StyledItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xs}px) {
    width: calc(100% - 62px);
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    width: calc(100% - 70px);
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xl}px) {
    width: calc(100% - 76px);
  }
`;

export const StyledTitleWrapper = styled.p`
  color: ${({ theme }) => theme.palette.text.secondary};
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 0;
  
`;
export const StyledTitleWrapperRecruitement = styled.p`
  color: ${({ theme }) => theme.palette.text.secondary};
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 0;
  border-right: 1px solid ${({ theme }) => theme.palette.text.secondary};
  padding-right:2px;
  padding-left:2px
`;


export const StyledTag = styled.span`
  border-radius: 30px;
  padding: 4px 12px;
  font-size: 12;
  display: inline-block;
  min-width: 75px;
  text-align: center;
  font-weight: ${({ theme }) => theme.font.weight.medium};

  @media only screen and (max-width: 1580px) and (min-width: 1200px) {
    display: none;
  }
`;
{/*Style Tabulation*/ }
export const StyledFlex = styled.div`
  display: flex;
  align-items: center;
`;
export const StyledBuyCellCard = styled(AppCard)`
  position: relative;

  & .ant-card-body {
    padding: 0;
  }
 
  &:first-child {

    
  }
  & .ant-tabs-tab {
    font-size: ${({ theme }) => theme.font.size.lg};
    text-transform: capitalize;
    padding-top: 4px;
    padding-bottom: 12px;
    margin-left: 8px;
    margin-right: 8px;*

    padding-right:20px;
    font-weight: ${({ theme }) => theme.font.weight.bold};

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
      margin-left: 20px;
      margin-right: 20px;
    }
  }

  & .ant-card-actions {
    border-top: 0 none;
    background-color: transparent;

    & li {
      padding-left: 20px;
      padding-right: 20px;
      padding-bottom: 16px;
      text-align: left;
      margin: 0;

      [dir='rtl'] & {
        text-align: right;
      }

      & a {
        color: ${({ theme }) => theme.palette.secondary.main} !important;
      }
    }
  }
`;

export const StyledTabForm = styled.form`
  position: relative;

  & .form-field {
    margin-bottom: 12px;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
      margin-bottom: 20px;
    }
  }
`;

export const StyledTabFormRightText = styled.div`
  margin: 8px;
  text-align: right;
  color: ${({ theme }) => theme.palette.gray[400]};
  text-transform: uppercase;

  [dir='rtl'] & {
    text-align: left;
  }
`;

export const StyledSecondaryText = styled.span`
  margin-left: 12px;
  color: ${({ theme }) => theme.palette.text.secondary};
`;

export const StyledTabWrapper = styled.div`
  padding: 16px 20px;
`;

export const StyledTabs = styled(Tabs)`

  .ant-tabs-nav {
    margin-bottom: 0;
  }
  .ant-tabs-nav-list {
  
    margin-top: 20px;
  
    border-radius: ${({ theme }) => theme.cardRadius};
    color: ${({ theme }) => theme.palette.text.secondary};

    & .ant-tabs-tab {
      padding-top: 12px;
      padding-bottom: 12px;
      padding-left:20px;
      padding-right:20px;
      text-align: center;
      margin: 0;
      border-bottom: 1px solid ${({ theme }) => theme.palette.borderColor};

     
      & .ant-tabs-tab-btn {
      
        font-weight: ${({ theme }) => theme.font.weight.regular};
      }
    }
  }
`;

export const StyledCurrencyWrapper = styled.div`
  padding: 8px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.palette.borderColor};

  &.active {
    
    .label {
      color: ${({ theme }) => theme.palette.primary.main};
    }
  }
  .label {
    color: ${({ theme }) => theme.palette.text.secondary};
    margin-bottom: 8px;
  }
`;

export const StyledInput = styled(InputNumber)`
  width: 100%;
  .ant-input-number-group-addon {
    border: none;
  }
`;

export const StyledSelect = styled(Select)`
  width: 100%;
  .ant-select-selector {
    height: 60px !important;
    padding: 15px 10px !important;
    border: 1px solid ${({ theme }) => theme.palette.borderColor};
  }
`;
{/*Style Taleau */}
export const StyledRecentPatientUserInfo = styled.div`
  display: flex;
  align-items: center;

  & .ant-avatar {
    width: 40px;
    height: 40px;
    margin-right: 14px;

    [dir='rtl'] & {
      margin-right: 0;
      margin-left: 14px;
    }
  }
`;

export const StyledRecentPatientUserInfoContent = styled.div`
  flex: 1;

  & h3 {
    margin-bottom: 0;
    font-weight: ${({ theme }) => theme.font.weight.medium};
    font-size: 13px;
  }
`;

export const StyledRecentPatientBadge = styled.span`
  padding: 3px 10px;
  border-radius: 4px;
  display: inline-block;
`;

export const StyledRecentPatientTable = styled(AppTableContainer)`
  & .ant-table-thead > tr > th {
    font-size: 13px;
    padding: 8px;
    font-weight: ${({ theme }) => theme.font.weight.bold};
    background-color: transparent;

    &:first-child {
      padding-left: 20px;

      [dir='rtl'] & {
        padding-left: 0;
        padding-right: 20px;
      }
    }

    &:last-child {
      padding-right: 20px;
      text-align: right;

      [dir='rtl'] & {
        padding-right: 0;
        padding-left: 20px;
        text-align: left;
      }
    }
  }

  & .ant-table-tbody > tr > td {
    font-size: 13px;
    padding: 8px;

    &:first-child {
      padding-left: 20px;

      [dir='rtl'] & {
        padding-left: 0;
        padding-right: 20px;
      }
    }

    &:last-child {
      padding-right: 20px;
      text-align: right;

      [dir='rtl'] & {
        padding-right: 0;
        padding-left: 20px;
        text-align: left;
      }
    }
  }

  & .cr-dropdown-link {
    display: inline-flex;
  }
`;
