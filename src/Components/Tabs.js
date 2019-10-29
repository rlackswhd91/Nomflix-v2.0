import React, { useState, memo } from "react";
import styled from "styled-components";
import Seasons from "./Seasons";
import Countries from "./Countries";
import Companies from "./Companies";
import Videos from "./Videos";
import Collection from "./Collection";

const TabContainer = styled.div`
  /* height: 100%; */
  margin-top: 40px;
`;
const TabList = styled.div`
  display: flex;
`;
const TabItem = styled.button`
  color: ${props => (props.active ? "white" : " rgba(255, 255, 255, 0.5)")};
  outline: none;
  display: inline-block;
  border: 1px solid
    ${props => (props.active ? "orange" : " rgba(255, 255, 255, 0.2)")};
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  padding: 15px 30px;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  background: ${props =>
    props.active ? "rgba(250, 152, 58, 0.3)" : "transparent"};
  &:active {
    border: 1px solid orange;
  }
`;
const TabContent = styled.div`
  padding: 20px 0px;
  height: 100%;
`;

const Tabs = ({ videos, companies, countries, seasons, collection }) => {
  const [currentTab, setCurrentTab] = useState("videos");
  const handleClick = tab => setCurrentTab(tab);
  return (
    <TabContainer>
      <TabList>
        <TabItem
          onClick={() => handleClick("videos")}
          active={currentTab === "videos"}
        >
          Videos
        </TabItem>
        {seasons && (
          <TabItem
            onClick={() => handleClick("seasons")}
            active={currentTab === "seasons"}
          >
            Seasons
          </TabItem>
        )}
        {collection && (
          <TabItem
            onClick={() => handleClick("collection")}
            active={currentTab === "collection"}
          >
            Collection
          </TabItem>
        )}
        <TabItem
          onClick={() => handleClick("companies")}
          active={currentTab === "companies"}
        >
          Productions
        </TabItem>
        <TabItem
          onClick={() => handleClick("countries")}
          active={currentTab === "countries"}
        >
          Countries
        </TabItem>
      </TabList>

      <TabContent>
        {currentTab === "videos" && <Videos videos={videos}></Videos>}
        {currentTab === "companies" && (
          <Companies companies={companies}></Companies>
        )}
        {currentTab === "countries" && (
          <Countries countries={countries}></Countries>
        )}
        {currentTab === "seasons" && <Seasons seasons={seasons}></Seasons>}
        {currentTab === "collection" && (
          <Collection collection={collection}></Collection>
        )}
      </TabContent>
    </TabContainer>
  );
};

export default Tabs;
