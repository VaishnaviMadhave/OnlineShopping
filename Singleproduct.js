import React from 'react'
import Button from 'react-bootstrap/Button';
import { CartState } from './Context';

function Singleproduct({prod}) {
  const {state:{cart},dispatch}=CartState()
  return (
    <div>
       <div className="col">
    <div className="card h-100">
      <img src={prod.image} className="mx-auto d-block w-100" height={200} alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{prod.name}</h5>
        <p className="card-text">
            ${prod.price}
        </p>
        {cart.some((p)=>p.id===prod.id)?
        (<Button variant="danger" onClick={()=>{
          dispatch({
            type:"REMOVEFROMCART",
            payload:prod
          })
        }}>Remove from Cart</Button>)
        :(<Button variant="primary" 
        onClick={()=>dispatch({
          type:"ADDTOCART",
          payload:prod
      })}
      disabled={!prod.stock}>
        {!prod.stock?("Out of Stock"):("Add to Cart")}
    </Button>)}
        
        
      </div>
    </div>
  </div>
    </div>
  )
}

export default Singleproduct
