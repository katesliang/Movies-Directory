import React from 'react';
import './Movies.css';
import { Card } from 'react-bootstrap';

function Movies(props) {
    return (
        <div class = "movies">
            {props.movies.map(movie => {
                if(movie.Poster === "N/A"){
                    movie.Poster = "https://westsiderc.org/wp-content/uploads/2019/08/Image-Not-Available.png";
                    console.log(movie.Poster);
                }
                return (
                    <Card class = "movie" onClick={(e) => props.handleClick(e, movie.imdbID)} style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={movie.Poster}/>
                        <Card.Body>
                            <Card.Title>{movie.Title}</Card.Title>
                            <Card.Text>
                                {movie.Year}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                )
            })}
        </div>
    )
}

export default Movies;