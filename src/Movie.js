import React from 'react';
import PropTypes from 'prop-types';

// state가 필요없는 경우에는 class 대신 function을 쓰면 됨
// movie를 render 하기 위한 파일
function Movie({id, year, title, summary, poster}){
    return <h5>{title}</h5>
}

// proptypes 설정
Movie.propTypes = {
    id : PropTypes.number.isRequired,
    year : PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired
};

export default Movie;