import React, { useState } from 'react';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { useIntl } from 'react-intl';
import { Col } from 'antd';
import AppRowContainer from '../../../../@crema/components/AppRowContainer';
import AppsContainer from "../../../../@crema/components/AppsContainer"
import {
  StyledCoinsWrapper,

} from "../../../../styles/index.styled";
import { Select } from "antd";
import AppCard from '../../../../@crema/components/AppCard';
import StatsDirCardStatics from './StatsDirCardStatics';

const InfoDataHrRecruitement = ({ listInerview, staticsDataaccepted }) => {

  const [selectedMonth, setSelectedMonth] = useState('thisMonth');
  const { messages } = useIntl();
  // Filtrer les données d'interview en fonction de la date
  const filteredData = staticsDataaccepted.filter(data => {
    const interviewDate = new Date(data.interviwDate);
    const currentMonth = new Date().getMonth();
    const interviewMonth = interviewDate.getMonth();
    return selectedMonth === 'thisMonth' ? interviewMonth === currentMonth : interviewMonth === currentMonth - 1;
  });
console.log("filteredData ",filteredData )
  // Mettre à jour les données du graphique en fonction de la sélection de l'utilisateur
  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };

  return (
    <>
   
    <AppsContainer
      title={messages['sidebar.app.InterviewStatistics']}
      cardStyle={{ backgroundColor: 'transparent', boxShadow: 'none' }}
      fullView
      >
    
      <AppRowContainer ease={'easeInSine'}>
         {listInerview?.map((data) => (
          <Col key={data.id} xs={24} sm={12} lg={6}>
            <StatsDirCardStatics
            data={data} />
          </Col>
        ))}
  
        <Col xs={24} md={16} lg={24} xl={24} style={{marginTop:"3rem"}}>
          
          {/*Trainf Style*/}
          <AppCard title={
            <StyledCoinsWrapper>
              <Select value={selectedMonth} onChange={handleMonthChange} >
                <option value="thisMonth">{messages['dashboard.thisMonth']}</option>
                <option value="lastMonth">{messages['dashboard.lastMonth']}</option>
              </Select>
              <ResponsiveContainer 
                 title={messages['sidebar.app.InterviewStatistics']}
              
                 width='100%' height={200} style={{ marginTop: '100px' }}>
                <BarChart
                title={messages['sidebar.app.InterviewStatistics']}               
                data={filteredData}>
                  <XAxis dataKey='interviwDate' />
                  <YAxis />
                  <CartesianGrid strokeDasharray='3 3' />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey='totalInterv' fill='#8884d8' />
                </BarChart>
              </ResponsiveContainer>
            </StyledCoinsWrapper>


          } className='no-card-space-ltr-rtl'>


          </AppCard>


        </Col>

      </AppRowContainer>

    </AppsContainer>
    </>
  );

};

export default InfoDataHrRecruitement;
