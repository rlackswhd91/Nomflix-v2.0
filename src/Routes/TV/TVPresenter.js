import React from "react";
import Proptypes from "prop-types";
import styled from "styled-components";
import Section from "../../Components/Section";
import Loader from "../../Components/Loader";
import Message from "../../Components/Message";
import Poster from "../../Components/Poster";
import Helmet from "react-helmet";

const Container = styled.div`
  padding: 20px 20px;
`;
const TVPresenter = ({ topRated, popular, airingToday, loading, error }) => (
  <>
    <Helmet>
      {/* should be in title element */}
      <title>TV Shows | Nomflix</title>
    </Helmet>
    {loading ? (
      <Loader />
    ) : (
      <Container>
        {topRated && topRated.length > 0 && (
          <Section title="Top Rated">
            {topRated.map(show => (
              <Poster
                key={show.id}
                id={show.id}
                title={show.name}
                rating={show.vote_average}
                imageUrl={show.poster_path}
                year={show.first_air_date.substring(0, 4)}
                isMovie={false}
              />
            ))}
          </Section>
        )}
        {airingToday && airingToday.length > 0 && (
          <Section title="Airing Today">
            {airingToday.map(show => (
              <Poster
                key={show.id}
                id={show.id}
                title={show.name}
                rating={show.vote_average}
                imageUrl={show.poster_path}
                year={show.first_air_date.substring(0, 4)}
                isMovie={false}
              />
            ))}
          </Section>
        )}
        {popular && popular.length > 0 && (
          <Section title="Popular">
            {popular.map(show => (
              <Poster
                key={show.id}
                id={show.id}
                title={show.name}
                rating={show.vote_average}
                imageUrl={show.poster_path}
                year={show.first_air_date.substring(0, 4)}
                isMovie={false}
              />
            ))}
          </Section>
        )}
        {error && <Message text={error}></Message>}
      </Container>
    )}
  </>
);

TVPresenter.propTypes = {
  topRated: Proptypes.array,
  popular: Proptypes.array,
  airingToday: Proptypes.array,
  loading: Proptypes.bool.isRequired,
  error: Proptypes.string
};

export default TVPresenter;
