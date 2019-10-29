import React, { useEffect } from "react";
import Proptypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";
import Helmet from "react-helmet";
import Tabs from "../../Components/Tabs";
import Slide from "react-reveal/Slide";

const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  padding: 50px;
`;
// just to give a blur to image not the whole screen
const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.imageUrl});
  background-position: center;
  background-size: cover;
  /*  filter blurs the backgroudn image */
  filter: blur(3px);
  opacity: 0.5;
  /* z-index important */
  z-index: 0;
`;

const Content = styled.div`
  /* if not position relative here, position absolute will continue and still be blur */
  position: relative;
  display: flex;
  /* because of backdrop position absolute up above, height becomes 0, so specify height */
  height: 100%;
  & > :first-child {
    width: 30%;
  }
`;

const Cover = styled.div`
  position: relative;
  height: 100%;
  /* width: 30%; */
  height: 100%;
  background-image: url(${props => props.imageUrl});
  background-position: center;
  background-size: cover;
  border-radius: 5px;
`;

const Data = styled.div`
  width: 70%;
  padding-left: 20px;
  ::-webkit-scrollbar {
    width: 20px; /* remove scrollbar space */
    background: rgba(0, 0, 0, 0.2);
  } /* optional: just make scrollbar invisible */
  ::-webkit-scrollbar-thumb {
    background: rgba(204, 204, 214, 0.4);
  }
  overflow-x: hidden;
  overflow-y: scroll;
`;
const Title = styled.h3`
  font-size: 32px;
  margin-bottom: 10px;
`;
const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0px;
`;
const Item = styled.span``;
const IMDB = styled.img`
  height: 30px;
  transform: translateY(10%);
`;
const Divider = styled.span`
  margin: 0 10px;
`;
const Overview = styled.p`
  width: 70%;
  font-size: 12px;
  opacity: 0.7;
  line-height: 1.5;
`;

const DetailPresenter = ({ result, loading, error }) => {
  useEffect(() => {
    console.log("rerendering");
  }, [result]);
  console.log(result);
  {
    return loading ? (
      <>
        <Helmet>
          <title>loading | Nomflix</title>
        </Helmet>
        <Loader></Loader>
      </>
    ) : (
      <Container>
        <Helmet>
          <title>
            {result.original_title
              ? result.original_title
              : result.original_name}{" "}
            | Nomflix
          </title>
        </Helmet>

        <Backdrop
          imageUrl={
            result.backdrop_path
              ? `https://image.tmdb.org/t/p/w200${result.backdrop_path}`
              : require("../../assets/default_backdrop.jpg")
          }
        ></Backdrop>

        <Content>
          <Slide top delay={200}>
            <Cover
              imageUrl={
                result.poster_path
                  ? `https://image.tmdb.org/t/p/original${result.poster_path}`
                  : require("../../assets/default_cover.jpg")
              }
            />
          </Slide>
          <Data>
            <Slide right delay={600}>
              <Title>
                {result.original_title
                  ? result.original_title
                  : result.original_name}
              </Title>
              <ItemContainer>
                <Item>
                  {result.release_date && result.release_date.substring(0, 4)}
                  {result.first_air_date &&
                    result.first_air_date.substring(0, 4)}
                </Item>
                <Divider>▪</Divider>
                <Item>
                  {result.runtime || result.episode_run_time
                    ? result.runtime || result.episode_run_time[0]
                    : 0}{" "}
                  minutes
                </Item>
                <Divider>▪</Divider>
                <Item>
                  {result.genres.map((genre, index) =>
                    index === result.genres.length - 1
                      ? genre.name
                      : `${genre.name} / `
                  )}
                </Item>
                {result.imdb_id && (
                  <>
                    <Divider>▪</Divider>
                    <a
                      href={`https://www.imdb.com/title/${result.imdb_id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <IMDB src={require("../../assets/imdb.png")}></IMDB>
                    </a>
                  </>
                )}
                <Divider>▪</Divider>
                <Item role="img" aria-label="rating">
                  ⭐{result.vote_average} / 10
                </Item>
              </ItemContainer>
            </Slide>
            <Slide right delay={1000}>
              <Overview>{result.overview}</Overview>
            </Slide>
            <Slide right delay={1400}>
              <Tabs
                videos={result.videos}
                companies={result.production_companies}
                countries={result.production_countries || result.origin_country}
                seasons={result.seasons}
                collection={result.belongs_to_collection}
              />
            </Slide>
          </Data>
        </Content>
      </Container>
    );
  }
};

DetailPresenter.propTypes = {
  result: Proptypes.object,
  loading: Proptypes.bool.isRequired,
  error: Proptypes.string
};

export default DetailPresenter;
