import styled from 'styled-components';


export const StyledAppRowContainer = styled.div`
  & .ant-row {
    & > .ant-col {
    ;

      & .card-outer-title {
        font-size: ${({ theme }) => theme.font.size.lg};
      
        font-weight: ${({ theme }) => theme.font.weight.bold};
        color: ${({ theme }) => theme.palette.text.primary};
      }

      @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
        
      }

      .ant-form & {
        margin-bottom: 0;
      }
    }

    &.ant-form-item > .ant-col {
      margin-bottom: 0;
    }
  }
`;
