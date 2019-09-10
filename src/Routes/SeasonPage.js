import React, { useState, useEffect } from "react";
import { tvApi } from "../api";
import Helmet from "react-helmet";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Loader from "../Components/Loader";

const Container = styled.div`
  position: relative;
  height: calc(100vh - 50px);
  width: 100vw;
  padding: 50px;
`;
const BackDrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.bgUrl});
  background-size: cover;
  background-position: center center;
  filter: blur(3px);
  opacity: 0.5;
  z-index: 0;
`;
const Content = styled.div`
  z-index: 1;
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  overflow: hidden;
`;
const Cover = styled.div`
  width: 30%;
  height: 100%;
  background-image: url(${props => props.bgUrl});
  background-size: cover;
  background-position: center center;
  border-radius: 10px;
`;

const Data = styled.div`
  ::-webkit-scrollbar {
    width: 20px;
    background: rgba(0, 0, 0, 0.2);
  }
  ::-webkit-scrollbar-thumb {
    background: rgba(204, 204, 214, 0.4);
  }
  overflow-y: scroll;
  width: 70%;
  height: 100%;
  padding-left: 2rem;
`;

const Title = styled.h3`
  font-size: 25px;
  margin-bottom: 2rem;
`;
const OverView = styled.p`
  font-size: 1.4rem;
  line-height: 1.5;
  width: 90%;
  opacity: 0.7;
  margin-bottom: 4rem;
`;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  height: 100%;
`;
const SubContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  margin-bottom: 20px;
`;

const SubPoster = styled.div`
  background-image: url(${props => props.bgUrl});
  background-size: cover;
  background-position: center center;
  border-radius: 5px;
  height: 15vw;
  width: 30%;
`;

const SubInfo = styled.div`
  width: 70%;
  padding: 0 20px;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const Subtitle = styled.span`
  font-size: 15px;
  font-weight: 300;
  margin-bottom: 20px;
`;
const SubOverView = styled.div`
  margin-top: 10px;
  font-size: 12px;
  line-height: 1.5;
  opacity: 0.7;
  width: 70%;
`;
const Year = styled.span`
  font-size: 12px;
  font-weight: 300;
`;
const Divider = styled.span`
  margin: 0 10px;
`;

const SeasonPage = ({
  match: {
    params: { id, seasonNumber }
  },
  history: { push }
}) => {
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const parsedId = parseInt(id);
    const parsedSeasonNumber = parseInt(seasonNumber);
    if (isNaN(parsedId) || isNaN(parsedSeasonNumber)) {
      push("/");
    }
    try {
      const { data: result } = await tvApi.seasonDetail(
        parsedId,
        parsedSeasonNumber
      );
      setResult(result);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError("Can't load the collection detail");
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(result);
  return loading ? (
    <>
      <Helmet>
        <title>Loading | Nomflix</title>
      </Helmet>
      <Loader />
    </>
  ) : error ? (
    <div>{error}</div>
  ) : (
    <>
      <Helmet>
        <title>Season | Nomflix</title>
      </Helmet>
      <Container>
        <BackDrop
          bgUrl={
            result.poster_path
              ? `https://image.tmdb.org/t/p/original${result.poster_path}`
              : require("../assets/default_backdrop.jpg")
          }
        />
        <Content>
          <Cover
            bgUrl={
              result.poster_path
                ? `https://image.tmdb.org/t/p/original${result.poster_path}`
                : require("../assets/default_cover.jpg")
            }
          />
          <Data>
            <Title>{result.name}</Title>
            <OverView>{result.overview}</OverView>
            <ItemContainer>
              {result.episodes &&
                result.episodes.length > 0 &&
                result.episodes.map((episode, index) => (
                  <SubContainer key={index}>
                    <SubPoster
                      bgUrl={
                        episode.still_path
                          ? `https://image.tmdb.org/t/p/original${episode.still_path}`
                          : require("../assets/default_cover.jpg")
                      }
                    />

                    <SubInfo>
                      <Subtitle>
                        {episode.episode_number}. {episode.name}
                      </Subtitle>
                      <Divider>•</Divider>
                      <Year>{episode.air_date}</Year>
                      <SubOverView>
                        {episode.overview.length > 350
                          ? `${episode.overview.substr(0, 350)}...`
                          : episode.overview}
                      </SubOverView>
                    </SubInfo>
                  </SubContainer>
                ))}
            </ItemContainer>
          </Data>
        </Content>
      </Container>
    </>
  );
};
export default SeasonPage;
