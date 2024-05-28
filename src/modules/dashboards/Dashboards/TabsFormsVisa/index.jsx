import React, { useEffect, useState } from 'react';
import { Input, List } from 'antd';
import AppsContainer from "../../../../@crema/components/AppsContainer"
import OrderTable from '../DahbordsVisaExperedTable';
import {
  StyledOrderHeader,
  StyledOrderHeaderInputView,
  StyledOrderHeaderRight,
  StyledOrderHeaderPagination
} from '../../../../styles/index.styled';
import AppsHeader from '../../../../@crema/components/AppsContainer/AppsHeader';
import AppsContent from '../../../../@crema/components/AppsContainer/AppsContent';
import { useNavigate } from "react-router-dom";

const VisaExpered = ({ expiredVisaData }) => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState('');
  const [filteredData, setFilteredData] = useState(expiredVisaData);


  const handleSearch = (value) => {
    setSearchValue(value);
    // Filtrer les données selon la valeur de recherche
    const filtered = expiredVisaData.filter(item =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredData(filtered);

  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <AppsContainer type='bottom' fullView>
      <AppsHeader>
        <StyledOrderHeader>
          
          <div style={{ marginRight: 20, boxShadow: "none !important" }}>
            <Input.Search
              placeholder='Search Here By Employees Name'
              type="text"
              onSearch={handleSearch}
            />
          </div>
          <StyledOrderHeaderRight>
         
          </StyledOrderHeaderRight>
        </StyledOrderHeader>
      </AppsHeader>
      <AppsContent
        style={{
          paddingTop: 10,
          paddingBottom: 10,
        }}>
        <OrderTable 
          expiredVisaData={filteredData}   
        />
      </AppsContent>
    </AppsContainer>
  );
};

export default VisaExpered;
