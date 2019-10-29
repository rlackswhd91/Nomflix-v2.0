import React from "react";
import Proptypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import Loader from "../../Components/Loader";
import Message from "../../Components/Message";
import Poster from "../../Components/Poster";
import Helmet from "react-helmet";
import Reveal from "react-reveal/Reveal";

const Container = styled.div`
  padding: 20px 20px;
`;

const HomePresenter = ({ nowPlaying, popular, upcoming, loading, error }) => (
  <>
    <Helmet>
      {/* should be in title element */}
      <title>Movies | Nomflix</title>
    </Helmet>
    {loading ? (
      <Loader />
    ) : (
      <Container>
        {upcoming && upcoming.length > 0 && (
          <Reveal>
            <Section title="Upcoming">
              {upcoming.map(movie => (
                <Poster
                  key={movie.id}
                  id={movie.id}
                  title={movie.title}
                  rating={movie.vote_average}
                  imageUrl={movie.poster_path}
                  year={movie.release_date.substring(0, 4)}
                  isMovie
                />
              ))}
            </Section>
          </Reveal>
        )}
        {nowPlaying && nowPlaying.length > 0 && (
          <Reveal fraction={0.3}>
            <Section title="Now Playing">
              {nowPlaying.map(movie => (
                <Poster
                  key={movie.id}
                  id={movie.id}
                  title={movie.title}
                  rating={movie.vote_average}
                  imageUrl={movie.poster_path}
                  year={movie.release_date.substring(0, 4)}
                  isMovie
                />
              ))}
            </Section>
          </Reveal>
        )}
        {popular && popular.length > 0 && (
          <Reveal fraction={0.3}>
            <Section title="popular">
              {popular.map(movie => (
                <Poster
                  key={movie.id}
                  id={movie.id}
                  title={movie.title}
                  rating={movie.vote_average}
                  imageUrl={movie.poster_path}
                  year={movie.release_date.substring(0, 4)}
                  isMovie
                />
              ))}
            </Section>
          </Reveal>
        )}
        {error && <Message text={error}></Message>}
      </Container>
    )}
  </>
);
HomePresenter.propTypes = {
  nowPlaying: Proptypes.array,
  popular: Proptypes.array,
  upcoming: Proptypes.array,
  loading: Proptypes.bool.isRequired,
  error: Proptypes.string
};
export default HomePresenter;
