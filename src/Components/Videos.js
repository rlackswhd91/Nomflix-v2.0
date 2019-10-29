import React, { memo } from "react";
import styled from "styled-components";

const VideoContainer = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 10px;
`;
const Video = styled.iframe`
  width: 30vw;
  margin: auto;
  height: 16vw;
  border-radius: 12px;
`;

const Videos = memo(({ videos }) => {
  return (
    <VideoContainer>
      {videos.results.length === 0 && <p>No promotion videos</p>}
      {videos.results.map((video, index) => {
        if (index < 2) {
          return (
            <Video
              key={video.id}
              src={`https://www.youtube.com/embed/${video.key}`}
              controls
              frameborder="0"
              allowfullscreen
            ></Video>
          );
        } else {
          return null;
        }
      })}
    </VideoContainer>
  );
});
export default Videos;
