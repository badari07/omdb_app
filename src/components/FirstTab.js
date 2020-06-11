import React, { useState } from "react";
import Axios from "axios";
import MovieInfo from "./MovieInfo";
import { useEffect } from "react";
import Pagination from "./Pagination";

const FirstTab = () => {
  const [movie, setMovie] = useState("");
  const [year, setYear] = useState(null);
  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    setMovie("");
    setYear(null);
  }, []);

  const onMovieChange = (e) => {
    setMovie(e.target.value);
  };

  const onYearChange = (e) => {
    setYear(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const { data } = await Axios.get(
      ` http://www.omdbapi.com/?i=tt3896198&apikey=d723c953&s=${movie}&y=${year}&plot=full`
    );
    console.log(data);
    setData(data.Search);
    setMovie("");
    setYear(null);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="movie">
          Movie Title:
          <input
            required
            type="text"
            name="movie title"
            id="movie"
            placeholder="movie title"
            value={movie}
            onChange={onMovieChange}
          />
        </label>
        <label htmlFor="year">
          {" "}
          Year:
          <input
            required
            type="number"
            name="movie year"
            id="year"
            placeholder="year"
            value={year}
            onChange={onYearChange}
          />
        </label>
        <input type="submit" value="Search" />
      </form>
      {data.map((info) => (
        <MovieInfo key={info.imdbIb} data={info} />
      ))}
    </div>
  );
};

export default FirstTab;
