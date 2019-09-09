import React from "react";
import styled from "styled-components";

const SeasonsContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const SeasonContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  margin-bottom: 10px;
`;
const SeasonPoster = styled.div`
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: 50% 15%;
  height: 20vw;
  flex: 30%;
`;
const SeasonMeta = styled.div`
  flex: 70%;
  padding-left: 20px;
`;
const SeasonTitleBox = styled.div`
  margin-bottom: 15px;
`;
const SeasonOverView = styled.div`
  width: 70%;
  opacity: 0.7;
  line-height: 1.7;
`;
const Divider = styled.span`
  margin: 0 10px;
`;
const SeasonNumber = styled.span``;
const AirDate = styled.span``;
const EpisodeCount = styled.span``;

const Seasons = ({ seasons }) => {
  return (
    <SeasonsContainer>
      {seasons.map(season => (
        <SeasonContainer key={season.id}>
          <SeasonPoster
            src={
              season.poster_path
                ? `https://image.tmdb.org/t/p/original${season.poster_path}`
                : require("../assets/default_cover.jpg")
            }
          />
          <SeasonMeta>
            <SeasonTitleBox>
              <SeasonNumber>{season.name}</SeasonNumber>
              <Divider>▪</Divider>
              <AirDate>{season.air_date || "Unknown date"}</AirDate>
              <Divider>▪</Divider>
              <EpisodeCount>{season.episode_count} episodes</EpisodeCount>
            </SeasonTitleBox>
            <SeasonOverView>
              {!season.overview && "No Overview"}
              {season.overview && season.overview.length > 250
                ? `${season.overview.substr(0, 350)}...`
                : season.overview}
            </SeasonOverView>
          </SeasonMeta>
        </SeasonContainer>
      ))}
    </SeasonsContainer>
  );
};
export default Seasons;
