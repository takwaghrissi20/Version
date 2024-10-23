import React from 'react';
import NumberInterview from './NumberInterview';
import NumberRecruitement from './NumberRecruitement';
import IntlMessages from '../../../../@crema/helpers/IntlMessages';
import AppRowContainer from '../../../../@crema/components/AppRowContainer';
import { Col } from 'antd';
import { purple, red } from '@ant-design/colors';


const StaticNumber = ({ user, totalNumberInterview, totalNumber, allrecruitementaboveItRecruitement }) => {
  console.log("totalNumber", allrecruitementaboveItRecruitement)
  console.log("user", user)
  const containsItAndManager = user.toLowerCase().includes('It') && user.toLowerCase().includes('Manager');
  const finalTotalNumber = containsItAndManager ? allrecruitementaboveItRecruitement : totalNumber;
  return (
    <>

      <AppRowContainer>
        <Col xs={24} sm={12}>
          <NumberRecruitement
            icon={'/assets/images/total-recruitement.png'}
            //bgColor={purple[4]}
            bgColor={'#C6D9F5'+'55'}
            totalNumber={finalTotalNumber}
            heading={<IntlMessages id='Total Recruitement' />}
          />
        </Col>

        <Col xs={24} sm={12}>
          <NumberInterview
            icon={'/assets/images/total-interview.png'}
            bgColor={'#C6D9F5' + '55'}
            totalNumberInterview={totalNumberInterview}
            heading={<IntlMessages id='Total Interviews' />}
          />
        </Col>
      </AppRowContainer>
    </>
  );
};

export default StaticNumber;

