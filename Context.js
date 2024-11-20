import React, { createContext, useContext, useReducer } from 'react'
import { cartReducer,productReducer } from './reducers'
const Items=createContext()
function Context({children}) {
   
    const products=[
        {
            id:1,
            name:"Wrist Watch",
            price:1250,
            image:"./images/m1.png",
            stock:10
        },
        {
            id:2,
            name:"Smart Watch",
            price:3450,
            image:"./images/e3.png",
            stock:14
        },
        {
            id:3,
            name:"Digital Watch",
            price:2150,
            image:"./images/e1.png",
            stock:9
        },
        {
            id:4,
            name:"Wall Clock",
            price:750,
            image:"./images/w1.png",
            stock:18
        },
        {
            id:5,
            name:"Alarm Clock",
            price:580,
            image:"./images/a3.png",
            stock:0
        },
        {
            id:6,
            name:"iPhone 15",
            price:75380,
            image:"./images/iphone.png",
            stock:20
        },
        {
            id:7,
            name:"One Plus 9",
            price:34580,
            image:"./images/OnePlus 9.png",
            stock:15
        },
        {
            id:8,
            name:"Oppo",
            price:25580,
            image:"./images/oppo.png",
            stock:14
        },
        {
            id:9,
            name:"Redmi",
            price:46890,
            image:"./images/redmi.jpg",
            stock:0
        },
        {
            id:10,
            name:"Vivo",
            price:37580,
            image:"./images/vivo.jpg",
            stock:9
        },
        {
            id:11,
            name:"Asus Laptop",
            price:49580,
            image:"./images/Asus.png",
            stock:10
        },
        {
            id:12,
            name:"Lenovo Laptop",
            price:55380,
            image:"./images/lenovo.jpg",
            stock:6
        },
        {
            id:13,
            name:"Dell Laptop",
            price:82580,
            image:"./images/dell.jpg",
            stock:0
        },
        {
            id:14,
            name:"Apple Laptop",
            price:114580,
            image:"./images/Macbook.png",
            stock:9
        },
        {
            id:15,
            name:"Thinkpad Laptop",
            price:29580,
            image:"./images/thinkpad.jpg",
            stock:10
        },
        {
            id:16,
            name:"Sony T.V.",
            price:35580,
            image:"./images/sony.jpg",
            stock:10
        },
        {
            id:17,
            name:"LG T.V.",
            price:65580,
            image:"./images/LG.png",
            stock:15
        },
        {
            id:18,
            name:"Xiaomi T.V.",
            price:43580,
            image:"./images/Xiaomi.png",
            stock:0
        },
        {
            id:19,
            name:"Panasonic T.V.",
            price:32580,
            image:"./images/Panasonic.png",
            stock:8
        },
        {
            id:20,
            name:"Macbook",
            price:580,
            image:"./images/Macbook.png",
            stock:0
        }
    ]
    const [state,dispatch]=useReducer(cartReducer,{
        products:products,
        cart:[]
    })
    const [productstate,productdispatch]=useReducer(productReducer,{
        stock:false,
        searchQuery:""
    })
  return (
    <Items.Provider value={{state,dispatch,productstate,productdispatch}}>
      {children}
    </Items.Provider>
  )
}

export default Context
export const CartState=()=>{
    return useContext(Items)
}
