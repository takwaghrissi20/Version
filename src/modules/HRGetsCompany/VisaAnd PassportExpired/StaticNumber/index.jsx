import React from 'react';
import PassportExpired from './NumberPassportExpired';
import NumberVisaWillBeExpired from './NumberVisaWillBeExpired';
import NumberContratExpired from './NumberContratExpired';

import IntlMessages from '../../../../@crema/helpers/IntlMessages';
import AppRowContainer from '../../../../@crema/components/AppRowContainer';
import { Col } from 'antd';
import { purple, red } from '@ant-design/colors';


const StaticNumber = ({ user, 
  visaExpired,passportExpired,
  contratExpired

}) => {
  
  return (
    <>

      <AppRowContainer>
        <Col xs={24} sm={8}>
          <NumberVisaWillBeExpired 
            icon={'/assets/images/Visa.png'}
            //bgColor={purple[4]}
            bgColor={'#C6D9F5'+'55'}
            totalNumber={ visaExpired?.length}
            heading={<IntlMessages id='# Visa will be Expired' />}
          />
        </Col>

        <Col xs={24} sm={8}>
          <PassportExpired
            icon={'/assets/images/Passports.jfif'}
            bgColor={'#C6D9F5' + '55'}
            PassportExpired={passportExpired?.length}
            heading={<IntlMessages id='# Passports will be Expired ' />}
          />
        </Col>
        <Col xs={24} sm={8}>
          <NumberContratExpired
            icon={'/assets/images/contart.png'}
            bgColor={'#C6D9F5' + '55'}
            PassportExpired={ contratExpired?.length}
            heading={<IntlMessages id='# Contrat will be Expired ' />}
          />
        </Col>
      </AppRowContainer>
    </>
  );
};

export default StaticNumber;

