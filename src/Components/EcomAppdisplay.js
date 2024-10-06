import React from 'react'
import WorkImg from '../assets/workImg.jpeg'
import splash from "../assets/splash.png"
import cart from "../assets/Cart.png"
import checkout from "../assets/checkout.png"
import products from "../assets/Products.png"
import profile from "../assets/profile.png"
import RealEstate from '../assets/realestate.jpg'
import '../../src/index.css'
export default function EcomAppdisplay() {
  return (
    <>
    <div className="max-w-[1320px] mx-auto">
      <h1 className="text-4xl  text-center py-5">Grocery App</h1>
    </div>
    <div className="max-w-[1320px] mx-auto grid lg:grid-cols-4 md:grid-cols-2 gap-5 px-20 p-5">
      <div>
        <div className="overflow-hidden">
        <img src={splash} style={{height:400,marginLeft:15}} className="hover:scale-125 duration-1000"/>
       </div>
        <h3 className="text-center shadow-lg py-2 ">Splash Screen</h3>
      </div>
      <div>
      <div className="overflow-hidden">
        <img src={products} style={{height:400,marginLeft:15}} className="hover:scale-125 duration-1000"/>
       </div>
        <h3 className="text-center shadow-lg py-2 ">Products Screen</h3>
      </div><div>
      <div className="overflow-hidden">
        <img src={cart} style={{height:400,marginLeft:15}} className="hover:scale-125 duration-1000"/>
       </div>
        <h3 className="text-center shadow-lg py-2 ">Cart Items</h3>
      </div><div>
      <div className="overflow-hidden">
        <img src={checkout} style={{height:400,marginLeft:15}} className="hover:scale-125 duration-1000"/>
       </div> 
        <h3 className="text-center shadow-lg py-2 ">Check Out Screen</h3>
      </div>

    </div>
    
   </>
  )
}