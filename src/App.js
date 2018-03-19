import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

const movieTitles = [
  "Matrix"
  , "Full Metal Jacket"
  , "Oldboy"
  , "Star Wars"
];

const movieImages = [
  "http://cfile21.uf.tistory.com/image/9911D03359A597021E359C",
  "http://image.cine21.com/cine21/poster/2005/0607/M0010102_.jpg",
  "http://ph.cctoday.co.kr/news/photo/201608/998830_351845_0256.jpg",
  "http://moonhak.co.kr/home/wp-content/uploads/bookcover/%EC%8A%A4%ED%83%80%EC%9B%8C%EC%A6%88-%EC%94%A8%EB%84%A4%EC%95%84%ED%8A%B84_%ED%91%9C1_web.jpg"
];

class App extends Component {
  render() {
    return <div className="App">
        <Movie title={movieTitles[0]} poster={movieImages[0]} />
        <Movie title={movieTitles[1]} poster={movieImages[1]} />
        <Movie title={movieTitles[2]} poster={movieImages[2]} />
        <Movie title={movieTitles[3]} poster={movieImages[3]} />
      </div>;
  }
}

export default App;
