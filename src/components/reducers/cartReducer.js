import {
  ADD_TO_CART,
  REMOVE_ITEM,
  SUB_QUANTITY,
  ADD_QUANTITY,
  ADD_SHIPPING
} from "../actions/action-types/cart-actions";

import Item1 from "../../images/benson.jpg";
import Item2 from "../../images/casio.jpg";
import Item3 from "../../images/dw.jpg";
import Item4 from "../../images/fossil.jpg";
import Item5 from "../../images/olevis.jpg";
import Item6 from "../../images/rolex.jpg";

const initState = {
  items: [
    {
      id: 1,
      description: "Made from the black-owned business Benson",
      title: "Benson watch",
      price: 100,
      quantity: 12,
      img: Item1
    },
    {
      id: 2,
      description: "Bringing back the classic watch with new modifications",
      title: "Casio Classic Silver watch",
      price: 270,
      quantity: 160,
      img: Item2
    },
    {
      id: 3,
      description: "A watch for minimalists",
      title: "Daniel Wellington Watch",
      price: 75,
      quantity: 210,
      img: Item3
    },
    {
      id: 4,
      description: "A leather watch with a silver rim and dark face.",
      title: "Fossil Brown watch",
      price: 250,
      quantity: 270,
      img: Item4
    },
    {
      id: 5,
      description:
        "A minimalist watch for women. Rose gold frame with a blue face.",
      title: "Olevis  Rose Gold Watch",
      price: 50,
      quantity: 73.0,
      img: Item5
    },
    {
      id: 6,
      description: "100% handmade watch",
      title: "Rolex Silver",
      price: 25000,
      quantity: 1,
      img: Item6
    }
  ],
  addedItems: [],
  total: 0
};

const cartReducer = (state = initState, action) => {
  //INSIDE HOME COMPONENT
  if (action.type === ADD_TO_CART) {
    let addedItem = state.items.find(item => item.id === action.id);
    //check if the action id exists in the addedItems
    let existed_item = state.addedItems.find(item => action.id === item.id);
    if (existed_item) {
      addedItem.quantity += 1;
      return {
        ...state,
        total: state.total + addedItem.price
      };
    } else {
      addedItem.quantity = 1;
      //calculating the total
      let newTotal = state.total + addedItem.price;

      return {
        ...state,
        addedItems: [...state.addedItems, addedItem],
        total: newTotal
      };
    }
  }
  if (action.type === REMOVE_ITEM) {
    let itemToRemove = state.addedItems.find(item => action.id === item.id);
    let new_items = state.addedItems.filter(item => action.id !== item.id);

    //calculating the total
    let newTotal = state.total - itemToRemove.price * itemToRemove.quantity;
    console.log(itemToRemove);
    return {
      ...state,
      addedItems: new_items,
      total: newTotal
    };
  }
  //INSIDE CART COMPONENT
  if (action.type === ADD_QUANTITY) {
    let addedItem = state.items.find(item => item.id === action.id);
    addedItem.quantity += 1;
    let newTotal = state.total + addedItem.price;
    return {
      ...state,
      total: newTotal
    };
  }
  if (action.type === SUB_QUANTITY) {
    let addedItem = state.items.find(item => item.id === action.id);
    //if the qt == 0 then it should be removed
    if (addedItem.quantity === 1) {
      let new_items = state.addedItems.filter(item => item.id !== action.id);
      let newTotal = state.total - addedItem.price;
      return {
        ...state,
        addedItems: new_items,
        total: newTotal
      };
    } else {
      addedItem.quantity -= 1;
      let newTotal = state.total - addedItem.price;
      return {
        ...state,
        total: newTotal
      };
    }
  }

  if (action.type === ADD_SHIPPING) {
    return {
      ...state,
      total: state.total + 10
    };
  }

  if (action.type === "SUB_SHIPPING") {
    return {
      ...state,
      total: state.total - 10
    };
  } else {
    return state;
  }
};

export default cartReducer;
