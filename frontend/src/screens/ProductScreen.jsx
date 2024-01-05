import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useEffect,useState } from 'react';

import { Row,Col,Image,ListGroup,Card,Button } from 'react-bootstrap'

import Rating from '../components/Rating'
import products from '../products'
import axios from 'axios'
const ProductScreen = () => {

    const [product,setProduct]=useState({});

    const {id:productId}=useParams();
    
  useEffect(() => {
    const fetchProduct= async() => {
      const {data}= await axios.get(`/api/products/${productId}`);
      setProduct(data);
    };

    fetchProduct();
    
  },[productId]);
    

  return (
    <>
      <Link className="btn btn-light my-3" to='/'>Go Back
      </Link>

      <Row>
        <Col md={5}>
            <Image src={product.image} alt={product.name} fluid></Image>
        </Col>
        <Col md={4}>
       <ListGroup variant='flush'>
        <ListGroup.Item>
            <h3>{product.name}</h3>
        </ListGroup.Item>

        <ListGroup.Item>
            <Rating value={product.rating} text={`${product.numReviews} reviews`}/>
        </ListGroup.Item>

        <ListGroup.Item>
           Price: ${product.price}
        </ListGroup.Item>

        <ListGroup.Item>
           Price: ${product.description}
        </ListGroup.Item>


        </ListGroup> 
        </Col>
        <Col md={3}>

            <Card>
                <ListGroup variant='flush'>
                    <ListGroup.Item>
                        <Row>
                            <Col>Price:</Col>
                            <Col><strong>${product.price}</strong></Col>
                        </Row>
                    </ListGroup.Item>

                    <ListGroup.Item>
                        <Row>
                            <Col>Status:</Col>
                            <Col><strong>{product.countInStock >0 ? 'Instock' : 'Out of Stock'}</strong></Col>
                        </Row>
                    </ListGroup.Item>

                    <ListGroup.Item>
                        <Button className='btn-block' type='button' disabled={product.countInStock===0}> Add to Cart</Button>
                    </ListGroup.Item>
                </ListGroup>
            </Card>
        </Col>
      </Row>
    </>
  )
}

export default ProductScreen
