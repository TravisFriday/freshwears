import {
  ADD_TO_CART,
  REMOVE_ITEM,
  SUB_QUANTITY,
  ADD_QUANTITY,
  ADD_SHIPPING
} from "../actions/action-types/cart-actions";

const initState = {
  items: [
    {
      id: 1,
      description:
        "An everyday jar of flower, for relaxing after a day at work.",
      name: "3.5g Zkittlez Buds",
      price: 35.0,
      quantity: 123.0
    },
    {
      id: 2,
      description: "500mg glass cart",
      name: "500mg cartridge",
      price: 27.75,
      quantity: 16.0
    },
    {
      id: 3,
      description: "Bulk flower sold by the gram, bagged on demand.",
      name: "Bulk flower",
      price: 5.0,
      quantity: 2103.57
    },
    {
      id: 4,
      description: "Crunchy, and satisfying",
      name: "10mg 1:1 Chocolate Chip cookie",
      price: 8.0,
      quantity: 27.0
    },
    {
      id: 5,
      description: "Top quality rolling papers, made from unbleached paper",
      name: "FUNKYMONKEY ROLLING PAPERS (6-PACK)",
      price: 2.0,
      quantity: 73.0
    },
    {
      id: 6,
      description: "Sized for sharing",
      name: "28g OG Kush Buds, bagged",
      price: 238.15,
      quantity: 21.0
    },
    {
      id: 7,
      description:
        "A clear, tasteless infusion of THC that's ready to mix with your favorite cocktail. Great for birthday parties, after-work mixers, and any holiday occassion. Come see why we're everyone's #1 favorite gift this season!",
      name: "Simply Pure, 100mg bottle",
      price: 76.0,
      quantity: 31.0
    },
    {
      id: 8,
      description: "Crunchy, and satisfying",
      name: "10mg 1:1 Chocolate Chip cookie (6-pack)",
      price: 45.0,
      quantity: 43.0
    },
    {
      id: 9,
      description:
        "Infused with kief and shatter, this preroll will always take you there.",
      name: "Mr. Sinz 1g infused preroll",
      price: 18.5,
      quantity: 88.0
    },
    {
      id: 10,
      description:
        "Apply to skin and let stand for 10 minutes. Non-comedogenic, never tested on animals.",
      name: "1:1 50mg Relax Your Back Balm",
      price: 92.0,
      quantity: 43.0
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
