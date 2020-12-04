import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

class App extends React.Component {
  state = {
    isLoading: true, // 로딩 환경
    movies: [],
  };

  getMovies = async () => {
    // data load. fetch 대신 axios 사용
    // axios 속도가 그리 빠른편이 아니므로 didmount가 끝날때까지 시간이 걸린다라는 명시를 해줘야함.
    // 즉 비동기 처리. axios가 끝날때 까지 기다렸다가 계속함
    // const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json"); bad
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    ); // es6

    //this.setState({movies : movies}); // bad
    this.setState({ movies, isLoading: false }); // es6
  };

  // component 완료 후 작업. 대표적으로 fetch data가 필요함
  componentDidMount() {
    //setTimeout(() => {
    //  this.setState({ isLoading : false})
    //}, 6000);
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state; // es6
    return (
      <section class="container">
        {isLoading
          ? (
            <div class="loader">
              <span class="loader__text">Loading...</span>
            </div>
          )
          : (
            <div class="movies">
              {movies.map( movie =>
                <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                />              
              )}
            </div>
          )}
      </section>
    );
  }
}

export default App;
