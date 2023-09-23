import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function MovieCard({ newMovieData }) {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleDetailsClick = (moviedata) => {
    setSelectedMovie(moviedata);
  };

  const moviesData = newMovieData.map((moviedata) => (
    <Card style={{ width: "18rem" }} key={moviedata.id}>
      <Card.Img variant="top" src={moviedata.posterURL} />
      <Card.Body>
        <Card.Title>{moviedata.title}</Card.Title>
        <Card.Text>{moviedata.description}</Card.Text>
        <Card.Text>{moviedata.rating}</Card.Text>
        <Card.Text>{moviedata.type}</Card.Text>
        {/* Use Link to pass movie ID as part of the URL */}
        <Link to={`/movie-page/${moviedata.id}`}>
          <Button variant="primary" onClick={() => handleDetailsClick(moviedata)}>
            Details
          </Button>
        </Link>
      </Card.Body>
    </Card>
  ));

  return (
    <div className="MovieCard">
      {moviesData}
      {/* Removed MoviePage */}
    </div>
  );
}

export default MovieCard;
