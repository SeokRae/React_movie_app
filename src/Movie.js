import React, {Component} from 'react';
import './Movie.css';

class Movie extends Component {
    // 컴포넌트는 항상 render를 해야 한다는 것을 기억
    render() {
        // console.log(this.props);
        return(
            <div>
                <MoviePoster poster={this.props.poster}/>
                <h1>{this.props.title}</h1>
            </div>
        )
    }
}

class MoviePoster extends Component {
    render() {
        // console.log(this.props);
        return(
            <img src={this.props.poster} />
        )
    }
}
export default Movie