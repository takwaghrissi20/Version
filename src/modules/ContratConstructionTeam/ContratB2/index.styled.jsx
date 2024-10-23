

import styled from 'styled-components';





export const StyledScrumBoardDetailTitle = styled.span`
  cursor: pointer;
  margin-right: 8px;
  color: ${({ theme }) => theme.palette.primary.main};

  [dir='rtl'] & {
    margin-right: 0;
    margin-left: 8px;
  }
`;

