import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {
  // Render: componentWillMount() -> render() -> componentDidMount()
  // Update: componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate()
  
  state = {
    movies: [
    {
      title: "Matrix",
      poster: "http://cfile21.uf.tistory.com/image/9911D03359A597021E359C"
    },
    {
      title: "Full Metal Jacket",
      poster: "http://image.cine21.com/cine21/poster/2005/0607/M0010102_.jpg"
    },
    {
      title: "Oldboy",
      poster: "http://ph.cctoday.co.kr/news/photo/201608/998830_351845_0256.jpg"
    },
    {
      title: "Star Wars",
      poster:
        "http://moonhak.co.kr/home/wp-content/uploads/bookcover/%EC%8A%A4%ED%83%80%EC%9B%8C%EC%A6%88-%EC%94%A8%EB%84%A4%EC%95%84%ED%8A%B84_%ED%91%9C1_web.jpg"
    }
    ]
  };
  
  componentDidMount(){
    setTimeout(() => {
      this.setState({
        movies: [
          {
            title: "Game of Thrones",
            poster:
              "http://cfile5.uf.tistory.com/image/2252BC4A58C7B0A202C15B"
          },
          ...this.state.movies
        ]
      });
    }, 5000)
  }
  render() {
    return <div className="App">
        {this.state.movies.map((movie, index) => {
          return <Movie title={movie.title} poster={movie.poster} key={index}/>
        })}
      </div>;
  }
}

export default App;
