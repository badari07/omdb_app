import React, { useState } from "react";
import Axios from "axios";
// import { Link } from "gatsby";
import Poster from "../components/Poster";

const SecondTab = () => {
  const [movie, setMovie] = useState("");
  const [year, setYear] = useState(null);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(null);
  console.log(data);

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
    if (data.Response) {
      setData(data.Search);
      setPage(data.totalResults);
    }
  };

  if (data !== undefined && data.length > 0) {
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
        <Poster data={data} />
      </div>
    );
  } else {
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
        <div>no poster</div>
      </div>
    );
  }
};

export default SecondTab;
