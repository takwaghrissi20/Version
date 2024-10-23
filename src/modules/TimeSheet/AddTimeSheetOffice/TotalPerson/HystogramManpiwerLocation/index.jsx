import React from 'react';
import SocialMediaGraph from './SocialMediaGraph';
import PropTypes from 'prop-types';
import AppCard from '../../../../../@crema/components/AppCard';
import { useIntl } from 'react-intl';
import {
  StyledSocialMediaAdvertise,
  StyledSocialMediaAdvertiseItem,
  StyledSocialMediaAdvName,
  StyledSocialMediaAdvValue,
} from './index.styled';

const HystogramManpiwerLocation  = (props) => {
  const { totalVisitors, totalTravels } = props;
  const { messages } = useIntl();

  const socialMediaData = Object.keys(totalVisitors).map((location, index) => ({
    name: location,
    revenue: totalVisitors[location],
    color: `hsl(${index * 50}, 70%, 50%)`, // Génère une couleur distincte pour chaque location
  }));

  return (
    <AppCard title={messages['dashboard.HystogramManpiwerLocation']}>
      <SocialMediaGraph socialMediaData={socialMediaData} />
      <StyledSocialMediaAdvertise>
        {socialMediaData.map((item) => {
          return (
            <StyledSocialMediaAdvertiseItem key={item.name}>
              <h4 style={{ color: item.color }}>{item.revenue}</h4>
              <StyledSocialMediaAdvName>{item.name}</StyledSocialMediaAdvName>
            </StyledSocialMediaAdvertiseItem>
          );
        })}
      </StyledSocialMediaAdvertise>
    </AppCard>
  );
};

export default HystogramManpiwerLocation 

HystogramManpiwerLocation .propTypes = {
  totalVisitors: PropTypes.object.isRequired,
  totalTravels: PropTypes.number.isRequired,
};
