import React from "react";

const MovieInfo = (props) => {
  const renderTableData = () => {
    return props.data.map((detail, index) => {
      const { Title, Year, imdbID, Type, Poster } = detail;
      return (
        <tr key={imdbID}>
          <td>{Title}</td>
          <td>{Year}</td>
          <td>{imdbID}</td>
          <td>{Type}</td>
        </tr>
      );
    });
  };

  return (
    <>
      <div>
        <h1 id="title">Omdb Details</h1>
        <table id="data" class="table table-striped table-dark">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Year</th>
              <th scope="col">imdbID</th>
              <th scope="col">Type</th>
            </tr>
          </thead>
          <tbody>{renderTableData()}</tbody>
        </table>
      </div>
    </>
  );
};

export default MovieInfo;
