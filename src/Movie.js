import React, {Component} from 'react';
import './Movie.css';

class Movie extends Component {
    // 컴포넌트는 항상 render를 해야 한다는 것을 기억
    render() {
        return(
            <div>
                <h1>Hello this is a movie</h1>
                <MoviePoster />
            </div>
        )
    }
}

class MoviePoster extends Component {
    render() {
        return(
            <img src="http://img.movist.com/?img=/x00/04/73/55_p1.jpg" />
        )
    }
}
export default Movie