import React, { useEffect, useState } from 'react';
import { Input, List } from 'antd';
import AppsContainer from "../../../../@crema/components/AppsContainer"
import OrderTable from '../DahbordsPassport Expired';
import {
  StyledOrderHeader,
  StyledOrderHeaderInputView,
  StyledOrderHeaderRight,
  StyledOrderHeaderPagination
} from '../../../../styles/index.styled';
import AppsHeader from '../../../../@crema/components/AppsContainer/AppsHeader';
import AppsContent from '../../../../@crema/components/AppsContainer/AppsContent';

import Pagination from '../../../../@crema/components/AppsPagination';
import clsx from 'clsx'; 
import ConfirmationModal from '../../../../@crema/components/AppConfirmationModal';
import { useNavigate } from "react-router-dom";

const PassportExpered = ({ passportExpered }) => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState('');
  const [filteredData, setFilteredData] = useState(passportExpered);


  const handleSearch = (value) => {
    setSearchValue(value);
    // Filtrer les données selon la valeur de recherche
    const filtered = passportExpered.filter(item =>
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
          passportExpered={filteredData}   
        />
      </AppsContent>
    </AppsContainer>
  );
};

export default PassportExpered;
