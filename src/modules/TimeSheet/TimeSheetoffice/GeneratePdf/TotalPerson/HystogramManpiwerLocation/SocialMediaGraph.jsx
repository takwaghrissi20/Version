import React from 'react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts';
import PropTypes from 'prop-types';
import { StyledSocialMediaGraph } from './index.styled';

const SocialMediaGraph = ({ socialMediaData }) => {
  return (
    <StyledSocialMediaGraph>
      <ResponsiveContainer width='100%' height={240}>
        <BarChart
          barSize={30}
          data={socialMediaData}
          margin={{ top: 35, right: 0, left: 0, bottom: 35 }}
        >
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey="name" />
          <YAxis />
          <Bar dataKey='revenue'>
            {socialMediaData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </StyledSocialMediaGraph>
  );
};

export default SocialMediaGraph;

SocialMediaGraph.propTypes = {
  socialMediaData: PropTypes.array.isRequired,
};
