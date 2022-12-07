import React, { useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { fetchBook } from '../feature/BookSlice';
import { useDispatch, useSelector } from 'react-redux';
import { addtoFav } from '../feature/BookFav';
import { useNavigate } from 'react-router-dom';

export default function BookList({book,showButton}) {
  const Books=useSelector((state)=> state.books.book)
  const disptach=useDispatch()
 useEffect(()=>{
 disptach( fetchBook())
  
 },[disptach])
 const navigate=useNavigate()
  return (
    <>
    <Container className='py-4 text-md-center my-5 text-sm-center text-center '>
      <Row className='py-4  '>
    {Books?.map ((book)=>(
    <Col key={book.id} className='text-sm-center my-2 mx-sm-auto mx-md-auto'>
    <Card   style={{ width: '19rem'}} className='text-md-center my-5 text-sm-center text-center mx-auto'>
        <Card.Img
        variant="top" className='mx-auto text-md-center text-sm-center' src={book.image_url} style={{width:"290px",height:"200px"}}/>
      <Card.Body>
        <Card.Title className='text-md-center text-sm-center'>{book.title}</Card.Title>
        <Card.Text className='text-md-center text-sm-center'>author: {book.authors}
        </Card.Text>
      </Card.Body>
      <div className='btn text-decoration-none'>
        <Button variant="primary"
      onClick={()=>disptach(addtoFav(book))}
      className='text-md-center text-sm-center text-decoration-none mx-2'
      >Add to Favorites</Button> 
      <span>
      <Button variant='warning'
      onClick={()=>navigate(`/books/${book.id}`)}
      >View Details</Button>  
      </span>
      </div>
    </Card>

    </Col>
      ))} 
      </Row>
    </Container> 
    </>
  )
}
