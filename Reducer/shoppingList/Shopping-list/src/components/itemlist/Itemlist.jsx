import React from 'react';
import Item from '../item/Item';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus,faMinus } from '@fortawesome/free-solid-svg-icons'
import {showError} from "../showtoasts/Toasts";


import "./itemlist.css";

function Itemlist({shoppingItems,addItems,decItems}) {

  return (
    <>

    <div className='shopping-Items-Wrapper'>
      {
        shoppingItems.map((items)=>{
          return (
      <div className='items-list'  key={items.id}>

        <div className='inc-quantity' onClick={()=>addItems(items.id)} >
          <FontAwesomeIcon className='icon' icon={faPlus} />
        </div>
        
          <Item 
             items={items.name}
             quantity={items.quantity}
          />

        <div className='dec-quantity' onClick={()=>{
          if(items.quantity == 1){
            showError("Removed successfully")
          }
          decItems(items.id);
        }}>
          <FontAwesomeIcon className='icon' icon={faMinus}/>
        </div>

      </div>
          )
        })
      }
    </div>
    
    </>
  )
}

export default React.memo(Itemlist);
