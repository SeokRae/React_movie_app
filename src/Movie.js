import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

class Movie extends Component {
  // 영화제목에 문자외에 다른 타입을 출력하고 싶지 않을 경우 propType을 정해준다.
  static propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
  };

  // 컴포넌트는 항상 render를 해야 한다는 것을 기억
  render() {
    // console.log(this.props);
    return (
      <div>
        <MoviePoster poster={this.props.poster} />
        <h1>{this.props.title}</h1>
      </div>
    );
  }
}

class MoviePoster extends Component {

    static propTypes = {
        poster: PropTypes.string.isRequired
    }
    render() {
        // console.log(this.props);
        return(
            <img src={this.props.poster} alt={this.props.title} />
        )
    }
}
export default Movie