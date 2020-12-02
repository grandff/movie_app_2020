import React from 'react';
import PropTypes from "prop-types";

// class component로 변경
// react component 좋음
class App extends React.Component{
  // 변하는 데이터라고 생각하면 편함
  state = {
    count : 0
  };

  add = () => {
    alert("add");
  };

  minus = () => {
    alert("minus");
  };

  render(){
    return (
    <div>
      <h1>The number is : {this.state.count}</h1>
      <button onClick={this.add}>Add</button>
      <button onClick={this.minus}>Minus</button>
    </div>
    );
  }
}

export default App;
