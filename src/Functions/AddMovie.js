import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function AddMovie( {setNewMovieData ,newMovieData} ) {

  const addNewMovieData=(newMovie)=>{
    setNewMovieData([...newMovieData,newMovie])
  }
  const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    const [title,setTitle] = useState("")
    const [description,setDescription] = useState("")
    const [rating,setRating] = useState("")
    const [posterUrl,setPosterUrl] = useState("")
    const [trailer,setTrailer] = useState("")
    const [type,setType] = useState("")
  
    const handletDescription =(e)=>{
      setDescription(e.target.value)
    }
    const handleTitle =(e)=>{
      setTitle(e.target.value)
    }
    const handleRating =(e)=>{
      setRating(e.target.value)
    }
    const handlePosterUrl =(e)=>{
      setPosterUrl(e.target.value)
    }
    const handleTrailer =(e)=>{
      setTrailer(e.target.value)
    }
    const handleType =(e)=>{
      setType(e.target.value)
    }      

  const addNewMovie=()=>{

    const newMovie = {
      id: Math.random(),
      title: title,
      description: description,
      rating: rating,
      posterUrl: posterUrl,
      trailer: trailer,
      type: type,
    };

    addNewMovieData(newMovie)

    handleClose()
  }

    return (
      <>
        <Button variant="primary" onClick={handleShow}> Add Product </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Product</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>

              <Form.Group className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  name="Title"
                  onChange={(e)=>{handleTitle(e)}}
                  autoFocus
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  type="text"
                  name="Description"
                  onChange={(e)=>{handletDescription(e)}}
                  autoFocus
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Rating</Form.Label>
                <Form.Control
                  type="text"
                  name="Rating"
                  onChange={(e)=>{handleRating(e)}}
                  autoFocus
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>PosterUrl</Form.Label>
                <Form.Control
                  type="text"
                  name="PosterUrl"
                  onChange={(e)=>{handlePosterUrl(e)}}
                  autoFocus
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Trailer</Form.Label>
                <Form.Control
                  type="text"
                  name="Trailer"
                  onChange={(e)=>{handleTrailer(e)}}
                  autoFocus
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Type</Form.Label>
                <Form.Control
                  type="text"
                  name="Type"
                  onChange={(e)=>{handleType(e)}}
                  autoFocus
                />
              </Form.Group>

            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary" onClick={addNewMovie}>
              Add New Movie
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }


export default AddMovie