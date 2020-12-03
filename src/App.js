import React from 'react';

class App extends React.Component{
  state = {
    isLoading : true,  // 로딩 환경
    movies : []
  };

  // component 완료 후 작업. 대표적으로 fetch data가 필요함
  componentDidMount(){
    setTimeout(() => {
      this.setState({ isLoading : false})
    }, 6000);
  };

  render(){
    const { isLoading } = this.state; // es6
  return <div>{isLoading ? "Loading..." : "We are ready"}</div>;
  }
}

export default App;
