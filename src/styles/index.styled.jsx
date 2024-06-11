import styled from 'styled-components';
import AppsPagination from '../@crema/components/AppsPagination';
import AppTableContainer from '../@crema/components/AppTableContainer';
import { rgba } from 'polished';

import { Avatar,Button, Card, Drawer,Form, Modal,Col,DatePicker } from 'antd';
import { Input, Layout } from 'antd';
const { Search } = Input;
import { InputNumber, Select, Tabs } from 'antd';
import AppCard from '../@crema/components/AppCard';
import AppScrollbar from '../@crema/components/AppsContainer/AppSidebar';
export const StyledScrumBoardDatePicker = styled(DatePicker)`
  position: relative;
  width: 100%;
  height:2rem
`;
export const StyledAppFooter = styled.div`
  padding: 8px 24px;
  border-top: 1px solid ${({ theme }) => theme.palette.borderColor};
`;

export const StyledMailTagView = styled.span`
  padding-left: 12px;
  transition: all 0.4s ease;

  [dir='rtl'] & {
    padding-left: 0;
    padding-right: 12px;
  }
`;


export const StyledMailTag = styled.span`
  font-size: 18px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    font-size: 20px;
  }

  & svg {
    display: block;
  }
`;
export const StyledMailListDesktop = styled.div`
  display: none;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    display: block;
  }
`;
export const StyledMailSearch = styled(Search)`
  position: relative;
  max-width: 165px;
  margin-left: 12px;
  margin-right: 12px;

  & .ant-input {
    padding: 8px 14px;
    height: 36px;
  }

  & .ant-input-search-button {
    height: 36px;
    width: 36px;
    box-shadow: none;

    & .anticon svg {
      display: block;
    }
  }
`;
export const StyledMailListContent = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    width: auto;
  }

  & .mail-list-time {
    font-size: ${({ theme }) => theme.font.size.sm};
    width: auto;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
      display: none;
    }
  }
`;
export const StyledMailListCheckbox = styled.span`
  padding-right: 10px;
  display: inline-block;

  [dir='rtl'] & {
    padding-right: 0;
    padding-left: 10px;
  }
`;
export const StyledMailListStarted = styled.span`
  padding-right: 10px;
  font-size: 20px;

  [dir='rtl'] & {
    padding-right: 0;
    padding-left: 10px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    display: inline-block;
  }
`;
export const StyledMailListAvatar = styled(Avatar)`
  margin-right: 14px;
  width: 36px;
  height: 36px;
  line-height: 36px;
  font-size: 18px;

  [dir='rtl'] & {
    margin-right: 0;
    margin-left: 14px;
  }
`;
export const StyledMailListTitle = styled.p`
  margin-bottom: 0;
  font-weight: ${({ theme }) => theme.font.weight.bold};
  color: ${({ theme }) => theme.palette.text.primary};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    width: 120px;
  }

  .mailRead & {
    font-weight: ${({ theme }) => theme.font.weight.regular};
  }
`;
export const StyledMailListTime = styled.span`
  padding-left: 8px;
  margin-left: auto;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  transition: all 0.4s ease;

  [dir='rtl'] & {
    padding-left: 0;
    padding-right: 8px;
  }
`;
export const StyledMailListDate = styled.span`
  padding-left: 8px;
  white-space: pre;

  [dir='rtl'] & {
    padding-left: 0;
    padding-right: 8px;
  }
`;
export const StyledMailListAction = styled.div`
  width: 100%;
  padding: 8px 0 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    width: calc(100% - 245px);
    padding: 0 0 0 16px;
    margin-left: auto;

    [dir='rtl'] & {
      padding-left: 0;
      padding-right: 16px;
      margin-left: 0;
      margin-right: auto;
    }
  }

  & .mail-list-time {
    display: none;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
      display: flex;
    }
  }
`;
export const StyledMailListActionBtn = styled.div`
  display: flex;
  align-items: center;
  top: 50%;
  right: 0;
  opacity: 0;
  z-index: 1;
  position: absolute;
  transform: translateY(-50%);
  transition: all 0.4s ease;
  visibility: hidden;
  flex-direction: row;
  overflow: hidden;
  width: 0;

  [dir='rtl'] & {
    right: auto;
    left: 0;
  }
`;
//Test
export const StyledAppsHeader = styled.div`
  padding: 4px 24px;
  min-height: 56px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.palette.borderColor};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    min-height: 64px;
  }
`;

export const StyledAppSidebar = styled.div`
  height: 100%;
  display: none;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.palette.background.paper};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    width: 17.5rem;
    display: flex;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
    width: 17.5rem;
  }
`;

export const StyledAppSidebarDrawer = styled(Drawer)`
  & .ant-drawer-content-wrapper {
    width: 17.5rem !important;
  }

  & .ant-drawer-body {
    padding: 0;
  }
`;

export const StyledAppSidebarCard = styled(Card)`
  display: none;
  height: 100%;
  border: 0;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  & .ant-card-body {
    padding: 0;
    flex: 1;
    display: flex;
    flex-direction: column;
    height: 100%;
  }
`;

export const StyledAppWrap = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;
`;

export const StyledAppWrapHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
    margin-bottom: 20px;
  }

  & h2 {
    color: ${({ theme }) => theme.palette.text.primary};
    font-weight: ${({ theme }) => theme.font.weight.bold};
    font-size: ${({ theme }) => theme.font.size.lg};
    margin-bottom: 0;
  }
`;

export const StyledMenuBtn = styled(Button)`
  display: block;
  margin-right: 8px;
  padding: 0;
  background-color:#DB6A8F;
  box-shadow: none;
  border: 0 none;
  width: 35px;
  height: 35px;

  [dir='rtl'] & {
    margin-right: 0;
    margin-left: 8px;
  }

  &:hover,
  &:focus {
    background-color: #DB6A8F;
    color: ${({ theme }) => theme.palette.text.primary};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    display: none;
  }

  & .anticon {
    font-size: 20px;
  }
`;

export const StyledAppContainer = styled.div`
  display: flex;
  height: fit-content;
  

  .appMainFixedFooter & {
    height: calc(100vh - 184px) !important;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    height: calc(100vh - 161px);

    .appMainFixedFooter & {
      height: calc(100vh - 207px);
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    height: calc(100vh - 165px);

    .appMainFixedFooter & {
      height: calc(100vh - 211px);
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xl}px) {
    height: fit-content

    .appMainFixedFooter &,
    .appMainFooter & {
      height: calc(100vh - 199px);
    }
  }
`;

export const StyledMainContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    width: calc(100% - 17.5rem);
    padding-left: 32px;

    [dir='rtl'] & {
      padding-left: 0;
      padding-right: 32px;
    }
  }

  &.appsMainContentFull {
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
      width: 100%;
      padding-left: 0;

      [dir='rtl'] & {
        padding-right: 0;
      }
    }
  }
`;

export const StyledMainContentCard = styled(Card)`
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100%;

  & > .ant-card-body {
    padding: 0;
    flex: 1;
    display: flex;
    flex-direction: column;
    height: 100%;
  }
`;





/////////////////////////////////////////////////////////////////////////////

export const StyledMetricTitleLineView = styled.div`
  margin-bottom: 32px;
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
  display: flex;
  justify-content: flex-end; /* Aligns the pagination to the right */
  margin-top: 10px;

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
  overflow: 'auto';

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    display: none;
  }
`;
export const StyledOrderId = styled.span`
  text-decoration: underline;
  color: ${({ theme }) => theme.palette.primary.main};
`;


{/*AppRowContainer*/}
export const StyledAppRowContainer = styled.div`
  & .ant-row {
    & > .ant-col {
      margin-bottom: 16px;

      & .card-outer-title {
        font-size: ${({ theme }) => theme.font.size.lg};
        margin-bottom: 16px;
        font-weight: ${({ theme }) => theme.font.weight.bold};
        color: ${({ theme }) => theme.palette.text.primary};
      }

      @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
        margin-bottom: 32px;
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


{/*AppRowContainer*/}
{/*Styles Modal*/}

export const StyledContactModal = styled(Modal)`
  position: relative;
  
  



  & .ant-modal-body {
    padding: 0;
  



  }
`;


export const StyledContactForm = styled(Form)`
  position: relative;
  & .floating-label{    

  }

  & .form-field {
    width: 100%;
    margin-bottom: 16px;
    color:red;
    display: flex;

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
    width: 100%;
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
/////////////////////////////////////////////////////////////////////////
// export const StyledAppContentContainer = styled(AppScrollbar)`
//   display: flex;
//   flex-direction: column;
//   height: calc(100% - 56px) !important;

//   @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
//     height: calc(100% - 64px) !important;
//   }

//   &.fullView {
//     height: 100% !important;
//   }

//   & .scrum-absolute {
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;

//     [dir='rtl'] & {
//       left: auto;
//       right: 0;
//     }
//   }

//   & .react-trello-board {
//     height: 100%;
//     background-color: #DB6A8F !important;
//     & > div {
//       height: 100%;
//     }
//   }

//   & .scrum-row,
//   & .react-trello-board > div > .smooth-dnd-container.horizontal {
//     display: inline-flex;
//     min-width: 100%;
//     height: 100%;
//     margin-left: -10px;
//     margin-right: -10px;
//   }

//   & .scrum-col,
//   & .react-trello-board .smooth-dnd-container .react-trello-lane {
//     min-width: 280px;
//     max-width: 280px;
//     margin-left: 10px;
//     margin-right: 10px;
//     border-radius: ${({ theme }) => theme.cardRadius};
//     background-color: #DB6A8F};
//     height: 100% !important;
   

//     @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
//       min-width: 354px;
//       max-width: 354px;
//     }
//   }

//   &
//     .react-trello-board
//     .smooth-dnd-container
//     .react-trello-lane
//     > div:not(.scrum-board-list-header-card) {
//     align-self: normal;
//     overflow: hidden;
//     max-height: none;
//   }

//   & .scroll-scrum-item {
//     height: auto !important;
//   }

//   & .react-trello-board .smooth-dnd-container.vertical {
//     overflow-y: auto;
//     height: calc(100% - 72px);
//   }
// `;
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
export const StyledContainer = styled.div`
  position: relative;

  & .dropzone {
    margin-bottom: 8px;
    cursor: pointer;
  }
`;

export const StyledDialogDropzone = styled.div`
  margin-bottom: 8px;

  & p {
    margin-bottom: 8px;
  }
`;
export const StyledParaText = styled.p`
  color: ${({ theme }) => theme.palette.gray[600]};
`;
export const StyledEmbedResponsive = styled.div`
  position: relative;
  display: block;
  width: 100%;
  padding: 0;
  overflow: hidden;

  &:before {
    content: '';
    display: block;
    padding-top: 30%;
  }

  & embed,
  & iframe,
  & object,
  & video {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }
`;

export const StyledAppMediaModal = styled(Modal)`
  position: relative;
  min-height: 100vh;
  width: 100vw !important;
  max-width: 100%;
  margin: 0;
  top: 0;
  padding-bottom: 0;
  display: flex;
  flex-direction: column;


  & .ant-modal-content {
    background-color: #DB6A8F;
    border-radius: 0;
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  & .ant-modal-body {
    padding: 0;
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  & .ant-modal-close {
    color: white;
  }
`;

export const StyledMediaViewer = styled.div`
  position: relative;
  background-color: #DB6A8F;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const StyledMedialCarousel = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px;

  & .slick-track {
    display: flex;
    align-items: center;
  }

  & .slick-slide {
    text-align: center;
    position: relative;

    & img {
      width: auto !important;
      max-height: 96vh;
      height: auto !important;
    }

    & > * {
      position: relative;
      z-index: 9;
    }
  }

  & .slick-dots {
    bottom: 10px;
  }

  & .slick-dots li button:before,
  & .slick-dots li.slick-active button:before {
    background-color: #DB6A8F;
  }

  & .slick-next {
    right: 0;

    [dir='rtl'] & {
      right: auto;
      left: 0;
    }
  }

  & .slick-prev {
    left: 0;

    [dir='rtl'] & {
      left: auto;
      right: 0;
    }
  }
`;


{/*End Styles Modal*/}
{/**Style input Search*/}
export const StyledHeaderSearch = styled(Search)`
  position: relative;
  max-width: 140px;
  min-height: 36px;
  margin-left: auto;
  margin-right: 10px;

  [dir='rtl'] & {
    margin-left: 10px;
    margin-right: auto;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    margin-right: 20px;
    max-width: 165px;

    [dir='rtl'] & {
      margin-right: auto;
      margin-left: 20px;
    }
  }

  & .ant-input-wrapper {
    top: 50%;
    right: 0;
    z-index: 1;
    position: absolute;
    transform: translateY(-50%);

    [dir='rtl'] & {
      right: auto;
      left: 0;
    }
  }

  & .ant-input {
    padding: 8px 14px;
    height: 36px;
    transition: all 0.2s ease;
    width: 104px;

    &:focus {
      width: 135px;
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
      width: 129px;

      &:focus {
        width: 165px;
      }
    }
  }

  & .ant-input-search-button {
    height: 36px;
    width: 36px;
    box-shadow: none;

    & .anticon svg {
      display: block;
    }
  }

  &.ant-input-search-rtl
    > .ant-input-group
    > .ant-input-group-addon:last-child
    .ant-input-search-button {
    border-radius: ${({ theme }) => theme.sizes.borderRadius.base} 0 0
      ${({ theme }) => theme.sizes.borderRadius.base};
  }
`;
{/*Card */}
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
{/*End Card*/ }
{/*Style View Icone*/}
export const StyledViewer = styled.div`
  display: flex;

  & .icon-btn {
    height: 24px;
    max-width: 24px;
    min-width: 24px;
    border: 1px solid ${() => rgba('#f84e4e', 0.5)} !important;
    color: ${() => rgba('#f84e4e', 0.5)}!important;
    padding: 3px;
    font-size: 16px;
    &:not(:first-of-type) {
      margin-left: 8px;
    }
  }
  & .icon-btn-eye {
    border: solid 1px
      ${({ theme }) => rgba(theme.palette.primary.main, 0.5)}!important;
    color: ${({ theme }) => rgba(theme.palette.primary.main, 0.5)}!important;
  }
  &:hover {
    & .icon-btn {
      border: solid 1px #f84e4e;
      color: #f84e4e;
    }
    & .icon-btn-eye {
      border: solid 1px ${({ theme }) => theme.palette.primary.main}!important;
      color: ${({ theme }) => theme.palette.primary.main} !important;
    }
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
{/*StyledGeneralStats*/ }
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

export const AppViewStatic= styled.div`
  margin-right:1rem;
  margin-top:0.5rem
`;
export const StyledCoinsWrapper = styled.div`
  padding: 0 8px;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xs}px) {
    padding-bottom: 8px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    padding-bottom: 0;
  }
`;
export const StyledAnChar = styled.span`
  color: ${({ theme }) => theme.palette.primary.main};
  border-bottom: 1px solid ${({ theme }) => theme.palette.primary.main};
  display: inline-block;
  padding:15px
`;

export const StyledBadgeRoot = styled.span`
  padding: 3px 10px;
  border-radius: 4px;
  display: inline-block;
`;

export const StyledOrderTable = styled(AppTableContainer)`
& .ant-table-wrapper {

  text-align: center;
  border-radius: 8px 8px 0 0;
  border-collapse: separate;
  border-spacing: 0;



}
  & .ant-table-thead > tr > th {
    font-size: 11px;  
    text-align:left;
    font-weight: ${({ theme }) => theme.font.weight.bold};
    line-height: 1.5;
   

    }

  }

  & .ant-table-tbody > tr > td {
    font-size: 11px;
    text-align:left;
    line-height: 1.5;
    min-width:57px;
    max-width:70px
   


 
  }
`;

export const StyledAction = styled.div`
  display: flex;

  & .icon-btn {
    height: 24px;
    max-width: 24px;
    min-width: 24px;
    border: 1px solid ${() => rgba('#f84e4e', 0.5)} !important;
    color: ${() => rgba('#f84e4e', 0.5)}!important;
    padding: 3px;
    font-size: 16px;
    &:not(:first-of-type) {
      margin-left: 8px;
    }
  }
  & .icon-btn-eye {
    border: solid 1px
      ${({ theme }) => rgba(theme.palette.primary.main, 0.5)}!important;
    color: ${({ theme }) => rgba(theme.palette.primary.main, 0.5)}!important;
  }
  &:hover {
    & .icon-btn {
      border: solid 1px #f84e4e;
      color: #f84e4e;
    }
    & .icon-btn-eye {
      border: solid 1px ${({ theme }) => theme.palette.primary.main}!important;
      color: ${({ theme }) => theme.palette.primary.main} !important;
    }
  }
`;


export const StyledUserPages = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-top:10rem;

  & > div {
    flex: 1;
  }
`;

export const StyledUserContainer = styled.div`
  padding-bottom: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
    padding-top: 32px;
    padding-bottom: 32px;
  }
`;

export const StyledUserCard = styled(Card)`
  max-width: 480px;
  width: 100%;
  text-align: center;
  overflow: hidden;
  box-shadow:
    0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);

  & .ant-card-body {
    padding: 24px;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
      padding: 32px;
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
      padding: 48px 64px;
    }
  }

  & .ant-row > .ant-col {
    margin-bottom: 0;
  }
`;

export const StyledUserCardLgSpace = styled(StyledUserCard)`
  & .ant-card-body {
    padding: 32px;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
      padding: 48px;
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
      padding: 48px 64px;
    }
  }
`;

export const StyledUserCardHeader = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
    margin-bottom: 32px;
  }

  & h3 {
    margin-bottom: 0;
    font-weight: ${({ theme }) => theme.font.weight.medium};
    font-size: 20px;
  }
`;

export const StyledUserCardLogo = styled.div`
  margin-right: 8px;

  [dir="rtl"] & {
    margin-right: 0;
    margin-left: 8px;
  }

  & img {
    height: 24px;
  }
`;

export const StyledUserCardPara = styled.div`
  margin-bottom: 24px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
    margin-bottom: 48px;
  }
`;

export const StyledUserForm = styled(Form)`
  text-align: left;
  margin-bottom: 12px;

  [dir="rtl"] & {
    text-align: right;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
    margin-bottom: 20px;
  }

  & .form-field {
    margin-bottom: 20px;
  }
`;

export const StyledUserFormBtn = styled(Button)`
  width: 100%;
`;

export const StyledUserFieldAction = styled(Form.Item)`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  width: 100%;

  & .ant-form-item-row {
    width: 100%;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    flex-direction: row;
    align-items: center;
    margin-bottom: 26px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
    margin-bottom: 32px;
  }

  & .ant-form-item-control-input {
    min-height: 10px;
  }

  & .ant-form-item-control-input-content {
    display: flex;
    flex-direction: column;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
      flex-direction: row;
      align-items: center;
    }
  }
`;

export const StyledUserFieldActionRow = styled(StyledUserFieldAction)`
  & .ant-form-item-control-input-content {
    flex-direction: row;
    align-items: center;
  }

  & .user-field-action-link {
    padding-top: 2px;
  }
`;

export const StyledUserFieldActionLink = styled.span`
  color: ${({ theme }) => theme.palette.primary.main};
  font-size: ${({ theme }) => theme.font.size.base};
  cursor: pointer;

  &.ml-auto {
    margin-top: 8px;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
      margin-left: auto;
      margin-top: 0;

      [dir="rtl"] & {
        margin-left: 0;
        margin-right: auto;
      }
    }
  }
`;

export const StyledUserCardFooter = styled.div`
  color: ${({ theme }) => theme.palette.gray[700]};
  font-size: ${({ theme }) => theme.font.size.base};
`;

export const StyledUserCardFooterLink = styled.span`
  margin-left: 8px;
  color: ${({ theme }) => theme.palette.primary.main};
  cursor: pointer;
  display: inline-block;

  [dir="rtl"] & {
    margin-left: 0;
    margin-right: 8px;
  }
`;

export const StyledUserCardFooterAction = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
    margin-bottom: 16px;
  }

  & > span {
    color: ${({ theme }) => theme.palette.gray[600]};
    font-size: ${({ theme }) => theme.font.size.base};
    margin-right: 16px;

    [dir="rtl"] & {
      margin-right: 0;
      margin-left: 16px;
    }
  }
`;

export const StyledUserSocialLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    justify-content: flex-start;
  }

  & button {
    background-color: transparent;
    box-shadow: none;
    border: 0 none;
    padding: 5px;
    border-radius: ${({ theme }) => theme.sizes.borderRadius.circle};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    min-width: 36px;
    height: 36px;

    &:hover {
      background-color: ${({ theme }) => rgba(theme.palette.tooltipBg, 0.04)};
    }

    &:focus {
      background-color: ${({ theme }) => rgba(theme.palette.tooltipBg, 0.15)};
    }

    &:after {
      box-shadow: none;
    }

    & .anticon {
      font-size: ${({ theme }) => theme.font.size.base};
      display: block;

      @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
        font-size: ${({ theme }) => theme.font.size.lg};
      }

      & svg {
        display: block;
      }
    }
  }
`;

export const StyledUserCardForPass = styled(StyledUserCard)`
  max-width: 900px;
  & .ant-card-body {
    padding: 0;

    & > .ant-row {
      margin: 0 !important;
    }

    & > .ant-row > .ant-col {
      padding: 0 !important;
    }
  }

  & .user-styled-img {
    padding-right: 0;
    height: 100%;
    object-fit: cover;

    [dir="rtl"] & {
      padding-left: 0;
    }
  }
`;

export const StyledUserStyledImg = styled.div`
  height: 400px;
  width: 80%;
  margin-top:3rem;
  display: inline-block;
  object-fit: contain;

  & img {
    fill: ${({ theme }) => theme.palette.primary.main};
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    padding-right: 40px;

    [dir="rtl"] & {
      padding-right: 0;
      padding-left: 40px;
    }
  }

  &.mln {
    margin-left: -32px;

    [dir="rtl"] & {
      margin-left: 0;
      margin-right: -32px;
    }
  }
`;

export const StyledUserStyledForPass = styled.div`
  padding: 32px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    padding: 48px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
    padding: 48px 64px;
  }
`;

export const StyledUserCardLg = styled(StyledUserCard)`
  max-width: 900px;
`;

export const StyledUserStyledResetImgCol = styled(Col)`
  text-align: center;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    align-self: center;
  }
`;

export const StyledUserStyledImgAuto = styled(StyledUserStyledImg)`
  height: auto;
`;

export const StyledUserCardUnlock = styled(StyledUserCardLg)`
  & .ant-card-body {
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
      padding: 48px;
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
      padding-left: 32px;
      padding-right: 64px;

      [dir="rtl"] & {
        padding-left: 64px;
        padding-right: 32px;
      }
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
      padding-left: 80px;
      padding-right: 80px;
    }
  }

  & .user-styled-img {
    padding-right: 0;

    & svg {
      fill: ${({ theme }) => theme.palette.primary.main};
    }

    [dir="rtl"] & {
      padding-left: 0;
    }
  }
`;

