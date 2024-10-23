import React from "react";
import AppRowContainer from "@crema/components/AppRowContainer";
import { Col } from "antd";
import IntlMessages from "@crema/helpers/IntlMessages";
import { useGetDataApi } from "@crema/hooks/APIHooks";
import DateSelector from "./DatePicker";
import VisitorAnalysis from "./VisitorAnalysis";
import RecentActivity from "./RecentActivity";;
import Header from "./Header";
import Subscribe from "./Subscribe";
import Profile from "./Profile";
import Messages from "./Messages";
import TaskList from "./TaskList";
import Formats from "./Formats";
import AppPageMeta from "../../../@crema/components/AppPageMeta";

const Widgets = () => {
  const [{ apiData: widgetsData }] = useGetDataApi("/dashboard/widgets");

  return (
    <>
      <AppPageMeta title="Widgets" />
      {widgetsData ? (
        <>
          <h2 className="card-outer-title">
            <IntlMessages id="dashboard.widgets" />
          </h2>

          <AppRowContainer>
           
            <Col xs={24} lg={8} key={"d"}>
              <DateSelector />
            </Col>
            <Col xs={24} lg={8} key={"e"}>
              <VisitorAnalysis />
            </Col>
            <Col xs={24} lg={14} key={"l"}>
              <Header />
            </Col>
            <Col xs={24} lg={10} key={"m"}>
              <Subscribe />
            </Col>
            <Col xs={24} lg={8} key={"n"}>
              <Profile data={widgetsData.profile} />
            </Col>
            <Col xs={24} lg={8} key={"o"}>
              <Messages data={widgetsData.messages} />
            </Col>
            <Col xs={24} lg={8} key={"p"}>
              <TaskList data={widgetsData.taskList} />
            </Col>
          
            <Col xs={24} lg={8} key={"s"}>
              <AppRowContainer>
             
              </AppRowContainer>
            </Col>
          
            <Col xs={24} lg={8} key={"x"}>
              <Formats data={widgetsData.formatList} />
            </Col>
          
            <Col xs={24} lg={8} key={"h"}>
              <RecentActivity data={widgetsData.recentActivity} />
            </Col>
          </AppRowContainer>
        </>
      ) : null}
    </>
  );
};

export default Widgets;
