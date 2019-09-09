import React from "react";
import styled from "styled-components";

const CountriesContainer = styled.div``;
const CountryTitle = styled.span`
  opacity: 0.7;
  font-size: 12px;
`;
const Countries = ({ countries }) => {
  return (
    <CountriesContainer>
      Made In :{" "}
      {countries.map((country, i) => {
        return (
          <CountryTitle key={i}>
            {i === countries.length - 1
              ? country.name || country
              : `${country.name},${" "}` || `${country},${" "}`}
          </CountryTitle>
        );
      })}
    </CountriesContainer>
  );
};
export default Countries;
