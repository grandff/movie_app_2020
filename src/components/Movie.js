import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

// state가 필요없는 경우에는 class 대신 function을 쓰면 됨
// movie를 render 하기 위한 파일
function Movie({ id, year, title, summary, poster, genres }) {
  return (
    <div className="movie">
      <img src={poster} alt={title} title={title} />
      <div className="movie__data">
        <h3 className="movie__title">{title}</h3>
        <h5 className="movie__year">{year}</h5>        
        <ul className="movie__genres">
          {genres.map((genre, index) => (
            <li key={index} className="genres__genre">{genre}</li>
          ))}
        </ul>
        <p className="movie__summary">{summary.slice(0,140)}...</p>
      </div>
    </div>
  );
}

// proptypes 설정
Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
