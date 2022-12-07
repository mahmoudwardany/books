import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';

import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { ClearBook, removeFromFav } from '../feature/BookFav';

export default function Favorites() {
  const favorites=useSelector(state =>state.fav.bookItem)
  const disptach=useDispatch()
  return (
    <>
    <div className='text-center'>
    <h1 className="pt-5 text-md-center text-sm-center">Your Favorite Books</h1>
        </div> 
        <div className='text-center'>
        <Button
              variant='warning'
              onClick={()=> disptach(ClearBook())}
      className='mx-sm-auto mx-md-auto mb-3 text-center '>
        Clear All Favorite Books
        </Button> 
        </div> 
        <Container className='py-4 text-md-center my-5 text-sm-center text-center '>
      
      {favorites.length > 0 ?favorites.map ((fav)=>(
      <Col key={fav.id} className='text-sm-center my-2 mx-sm-auto mx-md-auto'>
      <Card   style={{ width: '15rem'}} className='text-md-center my-5 text-sm-center text-center mx-auto'>
          <Card.Img variant="top" className='mx-auto text-md-center text-sm-center' src={fav.image_url} style={{width:"200px",height:"200px"}}/>
        <Card.Body>
          <Card.Title className='text-md-center text-sm-center'>{fav.title}</Card.Title>
          <Card.Text className='text-md-center text-sm-center'>Author: {fav.authors} $</Card.Text>
  
        </Card.Body>
        <div className='btn text-decoration-none'>
          <Button variant="danger"
        onClick={()=>disptach(removeFromFav(fav))}
        className='text-md-center text-sm-center text-decoration-none'
        >Remove from  Cart</Button>
        </div>
        
      </Card>
      </Col>
      )): <p className='text-center fs-4'>Please add one Book and Check again. </p>} 
      </Container> 
 
    </>
  )
}
