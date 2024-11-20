import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import { Button, DropdownToggle } from 'react-bootstrap';
import { CartState } from './Context';
import {BsFillTrash3Fill} from "react-icons/bs"
import {Link} from 'react-router-dom'
function Header() {
  const {state:{cart},dispatch,productdispatch}=CartState()
  return (
    <div>
       <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Online Shopping</Navbar.Brand>
          <Nav className="m-auto">
            <Nav.Link href=""> <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              style={{"width":"500px"}}
              onChange={(e)=>{
                productdispatch({
                  type:"filterbysearch",
                  payload:e.target.value
                })
              }}
            />
            
          </Form>
          </Nav.Link>
            <Nav.Link href="" className='ms-5'>
            <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
      <i className="fa-solid fa-cart-shopping"></i>
      <sup className='fs-5'>{cart.length}</sup>
      </Dropdown.Toggle>

      <Dropdown.Menu style={{width:"350px"}}>
                  {
                    cart.length > 0 ? (
                      <>
                        {
                          cart.map((prod) => {
                            return (
                              <div className='d-flex justify-content-evenly align-items-center'>
                                <div key={prod.id}>
                                  <img src={prod.image} alt={prod.name} height="80" width="80" />
                                </div>

                                <div className='text-wrap'>{prod.name}</div>
                                <div>${prod.price}</div>
                                <div><BsFillTrash3Fill className='text-primary fs-5'
                                  onClick={() => dispatch({
                                    type: "REMOVEFROMCART",
                                    payload: prod
                                  })} /></div>

                              </div>
                            )
                          })
                        }
                        <Link to="/Cart">
                          <Button variant="primary">Go To Cart</Button>
                        </Link>
                      </>
                    ) : ("Cart is empty")
                  }
      </Dropdown.Menu>
    </Dropdown>
              
                </Nav.Link>
         
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
