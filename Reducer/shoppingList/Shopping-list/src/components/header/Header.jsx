import React from 'react';
import image from "../../assets/ShoppingVectorIllustration.jpg";

import "./header.css";

function Header() {
  return (
    <>
<div className='headerWrapper'>
    <h1
    className='headerText'    
    >
    Shoopping List</h1>
    <div className='headerImageWrapper'> 
       <img 
       className='headerImage'
       src={image}/>
    </div>   
</div>  
    </>
  )
  }
export default Header
