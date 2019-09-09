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
const Form = styled.form`
  margin-bottom: 50px;
  width: 100%;
`;
const Input = styled.input`
  all: unset;
  font-size: 28px;
  width: 100%;
`;

const SearchPresenter = ({
  movieResults,
  tvResults,
  searchTerm,
  loading,
  error,
  handleSubmit,
  updateTerm
}) => (
  <Container>
    <Helmet>
      {/* should be in title element */}
      <title>Search | Nomflix</title>
    </Helmet>
    <Form onSubmit={handleSubmit}>
      <Input
        placeholder="Search Movies or TV Shows"
        value={searchTerm}
        onChange={updateTerm}
      ></Input>
    </Form>
    {loading ? (
      <Loader />
    ) : (
      <>
        {movieResults && movieResults.length > 0 && (
          <Section title="Movie Result">
            {movieResults.map(movie => (
              <Poster
                key={movie.id}
                id={movie.id}
                title={movie.title}
                rating={movie.vote_average}
                imageUrl={movie.poster_path}
                year={
                  movie.release_date ? movie.release_date.substring(0, 4) : null
                }
                isMovie
              />
            ))}
          </Section>
        )}
        {tvResults && tvResults.length > 0 && (
          <Section title="TV Show Result">
            {tvResults.map(show => (
              <Poster
                key={show.id}
                id={show.id}
                title={show.name}
                rating={show.vote_average}
                imageUrl={show.poster_path}
                year={
                  show.first_air_date
                    ? show.first_air_date.substring(0, 4)
                    : null
                }
                isMovie={false}
              />
            ))}
          </Section>
        )}
        {error && <Message text={error}></Message>}
        {movieResults &&
          movieResults.length === 0 &&
          tvResults &&
          tvResults.length === 0 && (
            <Message text={"No result found"}></Message>
          )}
      </>
    )}
  </Container>
);

SearchPresenter.propTypes = {
  movieResults: Proptypes.array,
  tvResults: Proptypes.array,
  searchTerm: Proptypes.string,
  loading: Proptypes.bool.isRequired,
  error: Proptypes.string,
  handleSubmit: Proptypes.func.isRequired,
  updateTerm: Proptypes.func.isRequired
};

export default SearchPresenter;
