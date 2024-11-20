import React from 'react'
import Filters from './Filters'
import { CartState } from './Context'
import Singleproduct from './Singleproduct'

function Home() {
  const {state:{products},productstate:{sort,stock,searchQuery}}=CartState()
    console.log(products)
    const transformProducts=()=>{
      let sortedproducts=products
      if(sort)
      {
        sortedproducts=sortedproducts.sort((a,b)=>
        sort==="ascending"?a.price-b.price:b.price-a.price
        )
      }
      if(!stock)
      {
        sortedproducts=sortedproducts.filter((prod)=>prod.stock)
      }
      if(searchQuery)
      {
        sortedproducts=sortedproducts.filter((prod)=>
        prod.name.toLowerCase().includes(searchQuery))
      }
      return sortedproducts
    }
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-3 bg-dark mt-5'>
            <Filters/>
        </div>
        <div className='col-9'>
        <div className="row row-cols-1 row-cols-sm-4 g-4 mt-4">
          {
            transformProducts().map((prod,index)=>{
              return (
                <Singleproduct prod={prod} key={index}/>
              )
            })
          }
        </div>
        </div>
      </div>
    </div>
  )
}

export default Home
