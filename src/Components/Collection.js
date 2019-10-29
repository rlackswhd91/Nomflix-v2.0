import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Image = styled.div`
  background-image: url(${props => props.imageUrl});
  height: 200px;
  width: 200px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  border-radius: 10px;
  margin-right: 20px;
  transition: all 0.3s ease-in-out;
`;
const MovieTitle = styled.span`
  font-size: 12px;
  transition: all 0.3s ease-in-out;
`;

const Container = styled.div`
  width: 100%;
  margin-bottom: 20px;
  &:hover ${Image} {
    transform: scale(1.07);
  }
  &:hover ${MovieTitle} {
    color: #fa983a;
  }
`;
const ImageContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Collection = ({ collection }) => {
  const { id, name, poster_path } = collection;
  return (
    <Container>
      <Link to={`/collection/${id}`}>
        <ImageContainer>
          <Image
            imageUrl={
              poster_path
                ? `https://image.tmdb.org/t/p/w300${poster_path}`
                : require("../assets/default_cover.jpg")
            }
          />
          <MovieTitle>{name}</MovieTitle>
        </ImageContainer>
      </Link>
    </Container>
  );
};

export default Collection;
