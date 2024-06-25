import React from 'react';
import VisitorGraph from './VisitorGraph';
import { List } from 'antd';
import PropTypes from 'prop-types';
import Categories from './Categories';
import AppCard from '../../../../../@crema/components/AppCard';
import { useIntl } from 'react-intl';
import { StyledEarningGraphWrapper } from './index.styled';

export const TotalVisitor = ({ totalVisitors,totalTravels }) => {
  const { messages } = useIntl();

  const totalVisitorList = Object.keys(totalVisitors).map(location => ({
    name: location,
    value: totalVisitors[location],
    color: '#'+(Math.random()*0xFFFFFF<<0).toString(16) // Generating random colors
  }));

  console.log('TotalVisitor List:', totalVisitorList);

  return (
    <AppCard
      title={messages['dashboard.HystogramManpiwerTable']}
      extra={<a href='#'>{messages['common.viewAll']}</a>}
    >
      <StyledEarningGraphWrapper>
        <div className='earning-item earning-graph-item'>
          <VisitorGraph totalVisitors={totalVisitorList} totalTravels={totalTravels} />
        </div>
        <div className='earning-item'>
          <List>
            {totalVisitorList.map((category) => (
              <Categories category={category} key={category.name} />
            ))}
          </List>
        </div>
      </StyledEarningGraphWrapper>
    </AppCard>
  );
};

export default TotalVisitor;

TotalVisitor.defaultProps = {
  totalVisitors: [],
};

TotalVisitor.propTypes = {
  totalVisitors: PropTypes.array,
};
