import {v4 as uuidv4} from "uuid";


function Reducer (shoppingItems,action){
console.log(action)
if(action.type == 'add_item') {
    return[
        ...shoppingItems, 
        {id: uuidv4(), name: action.itemName, quantity: 1}
    ];
} 

else if(action.type == 'inc_item') {
   let newShoppingItems = shoppingItems.map(item => {
        if(item.id == action.itemId){
        item.quantity++
        }
        return item;
    });
    return newShoppingItems;
}

 else if(action.type == 'dec_item') {
    let newShoppingItems = shoppingItems.map(item => {
        if(item.id == action.itemId) {
            item.quantity--;
        }
        return item;
    });
    return newShoppingItems.filter(item => item.quantity > 0);
}
}

export default Reducer;