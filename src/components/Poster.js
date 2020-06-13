import React from "react";
const Poster = (props) => {
  const posters = () => {
    return props.data.map((detail, index) => {
      const { Title, Year, imdbID, Type, Poster } = detail;
      return (
        <div className="container">
          <div className="row">
            <div className="card col">
              <div className="image-grid-container">
                <img src={`${Poster}`} alt={Title} />
              </div>
              <div className="card-body">
                <h4 className="card-title">{Title}</h4>
                <h3>({Year})</h3>
                <p classNAme="card-text">{Type}</p>
              </div>
            </div>
          </div>
        </div>
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
