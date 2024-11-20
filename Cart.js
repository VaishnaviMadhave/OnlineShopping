import React, { useEffect, useState } from 'react'
import { CartState } from './Context'
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import {BsFillTrash3Fill} from "react-icons/bs"
import { Button } from 'react-bootstrap';
function Cart() {
  const {state:{cart},dispatch}=CartState()
  const [total,setTotal]=useState()
  useEffect(()=>{
    setTotal(cart.reduce((acc,curr)=>acc+Number(curr.price*curr.qty),0))
  },[cart])
  return (
    <div className='row'>
      <div className='col-9'>
     <ListGroup>
      {
        cart.map((prod)=>{
          return (
              <ListGroup.Item key={prod.id}>
                <Row>
                  <Col md={2}>
                    <img src={prod.image} alt={prod.name} className='img-fluid rounded'/>
                  </Col>
                  <Col md={2}>
                    <span>{prod.name}</span>
                  </Col>
                  <Col md={2}>
                    <span>${prod.price}</span>
                  </Col>
                  <Col md={2}>
                  <Form.Select 
                  as="select"
                  value={prod.qty}
                  onChange={(e)=>{
                    dispatch({
                      type:"changecartqty",
                      payload:{
                        id:prod.id,
                        qty:e.target.value
                      }
                    })
                  }}>
                   {
                    [...Array(prod.stock).keys()].map((x)=>{
                      return (
                        <option key={x+1}>{x+1}</option>
                      )
                    })
                   }
                  </Form.Select>
                  </Col>
                  <Col md={2}>
                  <BsFillTrash3Fill className='text-primary fs-5'
                  onClick={()=>{
                    dispatch({
                      type:"REMOVEFROMCART",
                      payload:prod
                    })
                  }}/>
                  </Col>
                </Row>
              </ListGroup.Item>
          )
        })
      }     
      
    </ListGroup>
    </div>
    <div className='col-3 bg-dark text-white p-3'>
      <h4>Subtotal ({cart.length}) items</h4>
      <h5 className='mt-4'>Total: ${total}</h5>
      <Button variant='success' disabled={cart.length===0} className='mt-4'>Proceed to Checkout</Button>
    </div>
    </div>
  )
}

export default Cart
