import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const Wrapper = styled(Link)`
  width: 32%;
  border: 2px solid #333;
  border-redius: 4px;
  margin-bottom: 25px;
  padding_right: 10px;
  overflow: hidden;
  color: black;
  text-decoration: none;
`;
const Image = styled.img`
  width: 20%;
  float: left;
  margin-right: 10px;
`;

const Poster = (props) => {
  const posters = () => {
    return props.data.map((detail, index) => {
      const { Title, Year, imdbID, Type, Poster } = detail;
      return (
        <Wrapper to={imdbID}>
          <Image alt={`${Title} Poster`} src={`${Poster}`} />
          <div>
            <h3>{Title}</h3>
            <h4>({Year})</h4>
            <p>{Type}</p>
          </div>
        </Wrapper>
      );
    });
  };

  return (
    <>
      <div>{posters()}</div>
    </>
  );
};

export default Poster;
