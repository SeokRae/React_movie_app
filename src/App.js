import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {
  // Render: componentWillMount() -> render() -> componentDidMount()
  // Update: componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate()

  state = {
  }
  
  componentDidMount() {
    fetch("https://yts.am/api/v2/list_movies.json?sort_by=download_count")
    .then(response => response.json()) // fetch가 끝나면 실행
    .then(json => console.log(json))
    .catch(err => console.log(err)) //fetch에서 에러 발생시 catch실행
  }
  
  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      return <Movie title={movie.title} poster={movie.poster} key={index} />;
    });
    return movies
  }

  render() {
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : "Loading"}
      </div>
    );
  }
}

export default App;
