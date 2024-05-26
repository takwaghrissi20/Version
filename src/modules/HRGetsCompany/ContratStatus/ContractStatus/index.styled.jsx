import AppsPagination from '../../../../@crema/components/AppsPagination';
import AppTableContainer from '../../../../@crema/components/AppTableContainer';
import styled from 'styled-components';

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

export const StyledOrderHeaderPagination = styled(AppsPagination)`
  display: none;
  padding-left: 12px;
  padding-right: 2px;

  [dir='rtl'] & {
    padding-left: 2px;
    padding-right: 12px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    display: block;
  }
`;

export const StyledOrderFooterPagination = styled(AppsPagination)`
  display: block;
  padding: 10px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    display: none;
  }
`;

export const StyledOrderId = styled.span`
  text-decoration: underline;
  color: ${({ theme }) => theme.palette.primary.main};
`;

export const StyledOrderTable = styled(AppTableContainer)`
  & .ant-table-thead > tr > th {
    font-size: 11px;
   
    text-align: center;
    font-weight: ${({ theme }) => theme.font.weight.bold};
    background-color: transparent;
    line-height: 1.5;

   

      [dir='rtl'] & {
        padding-left: 0;
        
      }
    }

    &:last-child {
      
      text-align: center;

      [dir='rtl'] & {
    
        
        text-align: center;
      }
    }
  }

  & .ant-table-tbody > tr > td {
    font-size: 13px;
    text-align: center;
    line-height: 1.5;

    &:first-child {
      text-align: center;

      [dir='rtl'] & {
        padding-left: 0;
        text-align: center;
      }
    }

    &:last-child {
      padding-right: 20px;
      text-align: center;

      [dir='rtl'] & {
        padding-right: 0;
        padding-left: 20px;
      }
    }
  }
`;
