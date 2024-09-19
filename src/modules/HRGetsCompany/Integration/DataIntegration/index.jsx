import React, { useEffect, useState } from 'react';
import AppsContainer from '../../../../@crema/components/AppsContainer';
import { useIntl } from 'react-intl';
import AppsHeader from '../../../../@crema/components/AppsContainer/AppsHeader';
import AppsContent from '../../../../@crema/components/AppsContainer/AppsContent';
import AppInfoView from '../../../../@crema/components/AppInfoView';
import { Input } from 'antd';
import AppPageMeta from '../../../../@crema/components/AppPageMeta';
import {
  StyledOrderHeader,
  StyledOrderHeaderInputView,
  StyledOrderHeaderPagination,
  StyledOrderHeaderRight,

} from './index.styled';
import { useGetDataApi } from '../../../../@crema/hooks/APIHooks';
import OrderIntegration from './OrderIntegration';
import Pagination from '../../../../@crema/components/AppsPagination';

const DataIntegration = ({ int }) => {
  const { messages } = useIntl();
  const [page, setPage] = useState(1);
  const [search, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);

  const [{ loading }, { setQueryParams }] = useGetDataApi(int, {}, {}, false);

  const onPageChange = (page) => {
    setPage(page);
  };

  useEffect(() => {
    setQueryParams({ search, page });
  }, [search, page]);

  const onSearchOrder = (e) => {
    setSearchQuery(e.target.value);
    setPage(1);
  };

  // Filter data based on the search query
  const filteredData = int.filter((item) =>
    item.fullname.toLowerCase().includes(search.toLowerCase())
  );

  const startIndex = (page - 1) * pageSize;
  const paginatedData = filteredData.slice(startIndex, startIndex + pageSize);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <AppPageMeta title="Orders" />
      <AppsContainer type="bottom" fullView>
        <AppsHeader>
          <Input
            placeholder="Search by EMPLOYEE NAME"
            value={search}
            onChange={onSearchOrder}
            style={{ width: 200, marginRight: 20 }}
          />
        </AppsHeader>

        <AppsContent style={{ paddingTop: 10, paddingBottom: 10 }}>
          <OrderIntegration loading={loading} orderIntegration={paginatedData} />
        </AppsContent>

        <StyledOrderHeaderRight>
          <Pagination
            currentPage={page}
            totalPages={Math.ceil(filteredData.length / pageSize)}
            handlePageChange={onPageChange}
          />
          <div style={{ marginBottom: "3rem" }}></div>
        </StyledOrderHeaderRight>
      </AppsContainer>
      <AppInfoView />
    </>
  );
};

export default DataIntegration;

