import React from "react";
import styled from "styled-components";

const CompaniesContainer = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: repeat(5, 80px);
  grid-gap: 10px;
`;

const CompanyContainer = styled.div`
  height: 100%;
  /* width: 100px; */
  display: flex;
  flex-direction: column;
`;

const CompanyImage = styled.div`
  border-radius: 100%;
  height: 80px;
  background-image: url(${props => props.img});
  background-size: cover;
  background-position: center;
  background-color: rgba(255, 255, 255, 0.1);
`;
const CompanyTitle = styled.span`
  display: inline-block;
  text-align: center;
  margin-top: 10px;
`;

const Companies = ({ companies }) => {
  return (
    <CompaniesContainer>
      {companies.map((company, i) => {
        return (
          <CompanyContainer key={i}>
            <CompanyImage
              img={
                company.logo_path
                  ? `https://image.tmdb.org/t/p/w300${company.logo_path}`
                  : require("../assets/default.png")
              }
            />
            <CompanyTitle>{company.name}</CompanyTitle>
          </CompanyContainer>
        );
      })}
    </CompaniesContainer>
  );
};
export default Companies;
