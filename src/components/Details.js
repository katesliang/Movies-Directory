import React from 'react';
import './Movies.css';
import { Card } from 'react-bootstrap';

function Details(props) {
  return (
    <div>
      {props.details.map(movie => {
        return (
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={movie.Poster} />
            <Card.Body>
              <Card.Title>{movie.Title}</Card.Title>
              <Card.Text>{movie.Genre}</Card.Text>
              <Card.Text>{movie.Director}</Card.Text>
              <Card.Text>{movie.Runtime} </Card.Text>
              <Card.Text>{movie.Released}</Card.Text>
            </Card.Body>
          </Card>)
      })}
    </div>
  )
}

export default Details;