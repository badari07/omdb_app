import React, { useState } from "react";
import Axios from "axios";
import MovieInfo from "./MovieInfo";
import Pagination from "../components/Pagination";
import { Link } from "gatsby";

const FirstTab = (props) => {
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
          <div className="form-group">
            <label htmlFor="movie">
              Movie Title:
              <input
                className="form-control"
                required
                type="text"
                name="movie title"
                id="movie"
                placeholder="movie title"
                value={movie}
                onChange={onMovieChange}
              />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="year">
              {" "}
              Year:
              <input
                className="form-control"
                required
                type="number"
                name="movie year"
                id="year"
                placeholder="year"
                value={year}
                onChange={onYearChange}
              />
            </label>
            <input className="btn btn-primary" type="submit" value="Search" />
          </div>
        </form>
        <Pagination
          movie={movie}
          year={year}
          data={data}
          setData={setData}
          page={page}
          setPage={setPage}
        />
        <MovieInfo data={data} />
        <Link
          to="/dashboard/login/"
          state={{
            modal: true,
          }}
        >
          More Info about movie
        </Link>
      </div>
    );
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="movie">
            Movie Title:
            <input
              className="form-control"
              required
              type="text"
              name="movie title"
              id="movie"
              placeholder="movie title"
              value={movie}
              onChange={onMovieChange}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="year">
            {" "}
            Year:
            <input
              className="form-control"
              required
              type="number"
              name="movie year"
              id="year"
              placeholder="year"
              value={year}
              onChange={onYearChange}
            />
          </label>
          <input className="btn btn-primary" type="submit" value="Search" />
        </div>
      </form>
      <div>
        {data === undefined ? <h1>Nothing to see</h1> : <h1>Search to see</h1>}
      </div>
    </div>
  );
};

export default FirstTab;
