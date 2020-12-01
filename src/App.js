import React from 'react';

function Food({ fav }){  
  return <h1>I like {fav}!</h1>;
}

const Apple = () => {
  return <h3>es6 is ok?</h3>;
}

function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Food fav="kimchi" />
      <Food fav="ramen" />
      <Food fav="mummy" />
      <Food fav="caks" />
      <Apple />      
    </div>    
  );
}

export default App;
