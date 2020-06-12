import React from "react";
import Axios from "axios";

const Pagination = (props) => {
  console.log(props);

  const onPageClick = async (e) => {
    if (props.data !== undefined && props.data.length > 0) {
      e.preventDefault();
      console.log(e.target.id);
      const { data } = await Axios.get(
        ` http://www.omdbapi.com/?i=tt3896198&apikey=d723c953&s=${props.movie}&page=${e.target.id}&y=${props.year}&plot=full`
      );
      console.log(data);
      if (data.Response) {
        props.setData(data.Search);
      }
    } else {
      alert("please type movie name");
    }
  };

  if (props.page) {
    let lg;
    lg = Math.ceil(parseInt(props.page) / 10);
    let pg = [];
    for (let i = 1; i <= lg; i++) {
      pg.push(i);
    }
    return (
      <div>
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-end">
            {pg.map((p, ind) => (
              <li className="page-item">
                <a className="page-link" href="#" id={p} onClick={onPageClick}>
                  {p}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    );
  } else {
    return <div>no</div>;
  }
};

export default Pagination;
