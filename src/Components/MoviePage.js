import React from "react";
import { useParams } from "react-router-dom";
import movieRawData from "../Data/MoviesRawData"; // Import movieRawData or the appropriate data source
import Card from 'react-bootstrap/Card';

function MoviePage() {
  const { id } = useParams();
  
  // Find the selected movie by ID from the imported data source
  const selectedMovie = movieRawData.find((moviedata) => moviedata.id === +id);

  // Handle the case where the movie is not found
  if (!selectedMovie) {
    return <div>Movie not found</div>;
  }

  return (
    <div className="MoviePage">
      <Card style={{ width: '18rem' }}>
        <div dangerouslySetInnerHTML={{ __html: selectedMovie.trailerURL }} />
        <Card.Body>
          <Card.Title>{selectedMovie.title}</Card.Title>
          <Card.Text>{selectedMovie.description}</Card.Text>
        </Card.Body>
      </Card>
  </div>

  );
}

export default MoviePage;
