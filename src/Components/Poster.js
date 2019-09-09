import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Rating = styled.span`
  font-size: 12px;
  position: absolute;
  bottom: 7px;
  right: 3px;
  opacity: 0;
  transition: all 0.3s ease-in-out;
`;

const Image = styled.div`
  height: 180px;
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  background-position: center;
  border-radius: 4px;
  transition: all 0.3s ease-in-out;
`;

const Container = styled.div`
  width: 100%;
  transition: all 0.5s ease-in-out;
  &:hover ${Rating} {
    opacity: 1;
  }
  &:hover ${Image} {
    opacity: 0.4;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  margin-bottom: 5px;
`;

const Title = styled.span`
  display: block;
  font-size: 12px;
  margin-bottom: 3px;
`;
const Year = styled.span`
  font-size: 10px;
  color: rgba(255, 255, 255, 0.5);
`;

const Poster = ({ id, imageUrl, title, rating, year, isMovie = false }) => (
  <Link to={isMovie ? `/movie/${id}` : `/show/${id}`}>
    <Container>
      <ImageContainer>
        <Image
          imageUrl={
            imageUrl
              ? `https://image.tmdb.org/t/p/w300${imageUrl}`
              : require("../assets/default.png")
          }
        ></Image>
        <Rating role="img" aria-label="rating">
          ⭐{rating}/10
        </Rating>
      </ImageContainer>
      <Title>
        {title.length > 15 ? `${title.substring(0, 18)}...` : title}
      </Title>
      <Year>{year}</Year>
    </Container>
  </Link>
);
Poster.propTypes = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number,
  year: PropTypes.string
};

export default Poster;
