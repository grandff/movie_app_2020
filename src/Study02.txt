import React from 'react';
import PropTypes from "prop-types";

// class component로 변경
// react component 좋음
class App extends React.Component{

  constructor(props){
    super(props);
    console.log("test1")
  };

  // 변하는 데이터라고 생각하면 편함
  state = {
    count : 0
  };

  add = () => {
    // this.state.count = 1; => wrong
    // this.setState({count : this.state.count + 1});  => bad
    this.setState(current => ({count : current.count + 1}));  // good
  };

  minus = () => {
    // this.state.count = -1; => wrong
    // this.setState({count : this.state.count - 1});  => bad
    this.setState(current => ({count : current.count - 1})); // good
  };

  componentDidMount(){
    console.log("Rednered");
  };

  componentDidUpdate(){

  };

  /*
    react는 render function을 refresh 하지 않기 때문에 직접 state를 변경하면 안됨.
    어차피 동작이 안됨.
    setState를 통해 state를 변경하고 render를 호출함
  */

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
