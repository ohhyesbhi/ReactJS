import {useReducer} from 'react';
import Header from '../header/Header';
import Inputitem from '../inputItem/Inputitem';
import Itemlist from '../itemlist/Itemlist';
import { ToastContainer } from 'react-toastify';

import Reducer from '../../reducer/Reducer';

import "./shoppingList.css";
import 'react-toastify/dist/ReactToastify.css';

// import {ShoppingItemsContext,ShoppingDispatchContext} from "../providers/ShoppingContext";

function ShoppingList() {
 
  // const[shoppingItems,setShoppingItems] = useState([]);

  const[shoppingItems,dispatch] = useReducer(Reducer,[])


  function addingData(value){
    dispatch({
      type:"add_item",
      itemName:value,
    })
  }

  function addQuantity(id){

    dispatch({
      type:"inc_item",
      itemId:id,
    })
  }

  function removingItems(id){
    console.log("id'sssss",id)
  dispatch({
    type:"dec_item",
    itemId:id,
  })
   
  }

  return (
    <>

          <Header />
          <ToastContainer />
          <div className="currentShoppingList">
            <Inputitem addItem={addingData} />
            <Itemlist
              shoppingItems={shoppingItems}
              addItems={addQuantity}
              decItems={removingItems}
            />
          </div>
    </>
  );
}

export default ShoppingList
