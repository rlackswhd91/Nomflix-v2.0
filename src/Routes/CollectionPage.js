import React, { useState, useEffect } from "react";
import { collectionApi } from "../api";
import Helmet from "react-helmet";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Loader from "../Components/Loader";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";

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
  overflow: hidden;
  z-index: 1;
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  & > :first-child {
    width: 30%;
  }
`;
const Cover = styled.div`
  /* width: 30%; */
  height: 100%;
  background-image: url(${props => props.bgUrl});
  background-size: cover;
  background-position: center center;
  border-radius: 10px;
`;

const Data = styled.div`
  ::-webkit-scrollbar {
    width: 20px; /* remove scrollbar space */
    background: rgba(
      0,
      0,
      0,
      0.2
    ); /* optional: just make scrollbar invisible */
  }
  ::-webkit-scrollbar-thumb {
    background: rgba(204, 204, 214, 0.4);
  }

  overflow-x: hidden;
  overflow-y: scroll;
  width: 70%;
  height: 100%;
  padding-left: 2rem;
`;

const Title = styled.h3`
  font-size: 25px;
  margin-bottom: 20px;
`;
const OverView = styled.p`
  line-height: 1.5;
  width: 70%;
  opacity: 0.7;
  margin-bottom: 40px;
`;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  height: 100%;
`;

const SubPoster = styled.div`
  background-image: url(${props => props.bgUrl});
  background-size: cover;
  background-position: center center;
  border-radius: 5px;
  height: 15vw;
  width: 30%;
  transition: all 0.3s ease-in-out;
  backface-visibility: hidden;
`;

const SubContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  &:hover ${SubPoster} {
    transform: scale(1.05);
  }
`;
const SLink = styled(Link)`
  display: block;
  /* height: 100%; dont do this */
  width: 100%;
  margin-bottom: 20px;
`;

const SubInfo = styled.div`
  width: 70%;
  padding-left: 20px;
`;
const Subtitle = styled.span`
  font-size: 15px;
  font-weight: 300;
`;
const SubOverView = styled.p`
  margin-top: 10px;
  font-size: 12px;
  line-height: 1.5;
  opacity: 0.7;
  width: 70%;
`;
const Year = styled.span`
  font-size: 12px;
`;

const Divider = styled.span`
  margin: 0 10px;
`;

const CollectionPage = ({
  match: {
    params: { id }
  },
  history: { push }
}) => {
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const parsedId = parseInt(id);
    if (isNaN(parsedId)) {
      push("/");
    }
    try {
      const { data: result } = await collectionApi.collectionDetail(id);
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
    <>{error}</>
  ) : (
    <>
      <Helmet>
        <title>Collection | Nomflix</title>
      </Helmet>
      <Container>
        <BackDrop
          bgUrl={
            result.backdrop_path
              ? `https://image.tmdb.org/t/p/original${result.backdrop_path}`
              : require("../assets/default_backdrop.jpg")
          }
        />
        <Content>
          <Slide top delay={200}>
            <Cover
              bgUrl={
                result.poster_path
                  ? `https://image.tmdb.org/t/p/original${result.poster_path}`
                  : require("../assets/default_cover.jpg")
              }
            ></Cover>
          </Slide>

          <Data>
            <Slide right delay={400}>
              <Title>{result.name}</Title>
            </Slide>
            <Slide right delay={800}>
              <OverView>{result.overview}</OverView>
            </Slide>

            <Fade delay={1200}>
              <ItemContainer>
                {result.parts &&
                  result.parts.length > 0 &&
                  result.parts.map((part, index) => (
                    <SLink to={`/movie/${part.id}`} key={part.id}>
                      <SubContainer>
                        <SubPoster
                          bgUrl={
                            part.poster_path
                              ? `https://image.tmdb.org/t/p/original${part.poster_path}`
                              : require("../assets/default_cover.jpg")
                          }
                        ></SubPoster>
                        <SubInfo>
                          <Subtitle>{part.title}</Subtitle>
                          <Divider>•</Divider>
                          <Year>
                            {part.release_date
                              ? part.release_date.substr(0, 4)
                              : "Unknown"}
                          </Year>
                          <SubOverView>
                            {part.overview.length > 250
                              ? `${part.overview &&
                                  part.overview.substr(0, 250)}...`
                              : part.overview}
                          </SubOverView>
                        </SubInfo>
                      </SubContainer>
                    </SLink>
                  ))}
              </ItemContainer>
            </Fade>
          </Data>
        </Content>
      </Container>
    </>
  );
};
export default CollectionPage;
