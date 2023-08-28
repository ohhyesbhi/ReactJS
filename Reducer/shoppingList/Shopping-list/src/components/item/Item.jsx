import React from 'react';

import "./Item.css";

function Item({items,quantity,key}) {
  return (
   <>
   <div className='item-wrapper' key={key}>
    <div className='item-name'>
        {items}
    </div>
    <div className='item-quantity'>
         {quantity}
    </div>
   </div>
   </>
  )
}

export default Item;