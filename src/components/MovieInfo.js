import React from "react";

const MovieInfo = (props) => {
  const { Title, Year, Poster, imdbId, Type } = props.data;
  return (
    <>
      <div>{Title}</div>
    </>
  );
};

export default MovieInfo;
