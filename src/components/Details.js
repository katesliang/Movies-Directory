import React from 'react';
import './Details.css';
import { Card } from 'react-bootstrap';

function Details(props) {
  return (
    <div>
      {props.details.map(movie => {
        if (movie.Poster === "N/A") {
          movie.Poster = "https://westsiderc.org/wp-content/uploads/2019/08/Image-Not-Available.png";
          console.log(movie.Poster);
        }

        return (
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={movie.Poster} />
            <Card.Body>
              <Card.Title><strong>{movie.Title}</strong></Card.Title>
              <Card.Text><strong>Genre:</strong> {movie.Genre}</Card.Text>
              <Card.Text><strong>Director:</strong> {movie.Director}</Card.Text>
              <Card.Text><strong>Runtime:</strong> {movie.Runtime} </Card.Text>
              <Card.Text><strong>Release Date:</strong> {movie.Released}</Card.Text>
            </Card.Body>
          </Card>)
      })}
    </div>
  )
}

export default Details;