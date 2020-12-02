import React from 'react';
import PropTypes from "prop-types";

function Food({ name, picture, rating }){  
  return <div>
    <h2>I like {name}</h2>
    <h4>{rating}/5.0</h4>
    <img src={picture} alt={name} />
    </div>;
}

// prop types 추가
Food.propTypes = {
  // isRequired는 필수 요소 처리 해줌. 없어도 상관은 없음
  name : PropTypes.string.isRequired,
  picture : PropTypes.string.isRequired,
  rating : PropTypes.number    // 만약 string으로 하면 콘솔에서 오류창이 나옴. 화면상에 문제는 없음
};

const Apple = () => {
  return <h3>es6 is ok?</h3>;
}

const foodILike = [
  // console log 에 찍히는 unique id를 해결하기 위해 id 부여
  {
    id : 1,
  name: "Kimchi",
  image:
    "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg",
    rating : 5
  },
  {
    id : 2,
    name: "Samgyeopsal",
    image:
      "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg",
      rating : 4.9
  },
  {
    id : 3,
    name: "Bibimbap",
    image:
      "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb",
      rating : 4.8
  },
  {
    id : 4,
    name: "Doncasu",
    image:
      "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg",
      rating : 4.5
  },
  {
    id : 5,
    name: "Kimbap",
    image:
      "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg",
      rating : 4.0
  }
]

function renderFood(dish) {
  console.log(dish);
  // 아래에서 한 map을 함수로 옮김
  return <Food key={dish.id} name={dish.name} picture = {dish.image} rating = {dish.rating} />
}


function App() {
  return (
    <div>
      <div>
        <h1>Dynamic Component</h1>
        {foodILike.map(dish => <Food key={dish.id} name={dish.name} picture = {dish.image} rating={dish.rating} />)}   
      </div>
      <div>
        <h1>map</h1>
        {foodILike.map(renderFood)}
      </div>      
    </div>    
  );
}

export default App;
