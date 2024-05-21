import React,{useState} from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import IntlMessages from '../../../../@crema/helpers/IntlMessages';
import {
  StyledTotalBalanceCard,
  StyledTotalBalanceFooter,
  StyledTotalBalanceHeader,
  StyledTotalBalanceMiddlePara,
  StyledTotalBalanceTitle,
  StyledTotalBalanceTitleSm,
  StyledTotalContentBalanceView,
} from './index.styled';
import AppConfirmationModal from '../../../../@crema/components/AppConfirmationModal';
import View from '../../../Model/LastRequestorView'

const LastRequestor = ({ lastRecruitement }) => {

  const [isviewLastRequestor, setIsviewLastRequestor] = useState(false);
  const handleAddRecruitementClose = () => {
    setIsviewLastRequestor(false);
  };
  return (
    <div >
    
      <StyledTotalBalanceCard>
        <StyledTotalBalanceHeader>
          <div className='ant-column'>
            <StyledTotalBalanceTitleSm>
              <p >Last Requestor Name:<span style={{color:"rgb(41, 151, 255)",fontWeight:"700",fontSize:"20px"}}>{lastRecruitement?.requestName}</span></p>
            </StyledTotalBalanceTitleSm>
   
           
          </div>
          <StyledTotalContentBalanceView>
          
            <Button 
              onClick={() => setIsviewLastRequestor(true)}
            
               type='primary' className='btn'>
              <IntlMessages id='dashboard.InfoLastRequestor' />
            </Button>
          </StyledTotalContentBalanceView>
        </StyledTotalBalanceHeader>
        {/* <StyledTotalBalanceTitleSm>
          <span>Job Code N°: <span style={{color:"rgb(41, 151, 255)",fontWeight:"700",fontSize:"20px"}}>{lastRecruitement?.jobCode}</span></span>
          
  
          </StyledTotalBalanceTitleSm> */}
        {isviewLastRequestor && (
            <View
              isviewLastRequestor={isviewLastRequestor}
              handleAddContactClose={handleAddRecruitementClose}            
             jobCode={lastRecruitement?.jobCode}
             requestName={lastRecruitement?.requestName}
             idemp={lastRecruitement?.idemp}
             position={lastRecruitement?.position}
             projectName={lastRecruitement?.projectName}
             projRef={lastRecruitement?.projRef}           
              nbExperience={lastRecruitement?.nbExperience}
              desiredDate={lastRecruitement?.desiredDate}


              
            />
          )}
      
        {/* {isDeleteDialogOpen ? (
        <AppConfirmationModal
          open={isDeleteDialogOpen}
          okText='Yes'
          cancelText='No'
        
        
        />
      ) : null} */}
        
    
      </StyledTotalBalanceCard>
    </div>
  );
};

export default LastRequestor;

