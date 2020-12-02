import React from 'react';

function Food({ name, picture }){  
  return <div>
    <h2>I like {name}</h2>
    <img src={picture} alt={name} />
    </div>;
}

const Apple = () => {
  return <h3>es6 is ok?</h3>;
}

const foodILike = [
  // console log 에 찍히는 unique id를 해결하기 위해 id 부여
  {
    id : 1,
  name: "Kimchi",
  image:
    "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg"
  },
  {
    id : 2,
    name: "Samgyeopsal",
    image:
      "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg"
  },
  {
    id : 3,
    name: "Bibimbap",
    image:
      "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb"
  },
  {
    id : 4,
    name: "Doncasu",
    image:
      "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg"
  },
  {
    id : 5,
    name: "Kimbap",
    image:
      "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg"
  }
]

function renderFood(dish) {
  console.log(dish);
  // 아래에서 한 map을 함수로 옮김
  return <Food key={dish.id} name={dish.name} picture = {dish.image} />
}


function App() {
  return (
    <div>
      <div>
        <h1>Dynamic Component</h1>
        {foodILike.map(dish => <Food key={dish.id} name={dish.name} picture = {dish.image} />)}   
      </div>
      <div>
        <h1>map</h1>
        {foodILike.map(renderFood)}
      </div>      
    </div>    
  );
}

export default App;
