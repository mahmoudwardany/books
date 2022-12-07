import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import axios from 'axios';
export default function BookDetails() {
  const [book,setBooks]=useState()
  const params=useParams()
useEffect(()=>{
axios.get(`https://example-data.draftbit.com/books/${params.id}`)
  .then ((res)=>{
   setBooks (res.data) 
  })

  } ,[params])
  return <div className='mt-5 text-md-center text-sm-center mx-auto'>
    <Card style={{ width: '18rem' }}  className='mt-5 text-md-center text-sm-center mx-auto bg-light'>

<Card.Body>
  <Card.Title>{params.id}-{book?.title}</Card.Title>
  <Card.Img variant="bottom" src={book?.image_url} />
</Card.Body>
<ListGroup className="list-group-flush">
  <ListGroup.Item>Author: {book?.authors}</ListGroup.Item>
  <ListGroup.Item>Rating: {book?.rating}</ListGroup.Item>
  <ListGroup.Item>Genres : {book?.genres}</ListGroup.Item>
  <ListGroup.Item>Quote1 : {book?.Quote1}</ListGroup.Item>
</ListGroup>
</Card>    
    </div>
  
}
