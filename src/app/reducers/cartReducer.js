import * as types from "../actions/types";

const initState = {
  cart: [],
  totalAmount: 0,
  totalQuantity: 0
};
export const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case types.GET_CART:
      return { ...state };
    case types.ADD_PRODUCT_CART: {
      const cart = [...state.cart, { ...action.payload, quantity: 1 }];
      return {
        ...state,
        cart,
        totalAmount: totals(cart).amount,
        totalQuantity: totals(cart).qty
      };
    }

    case types.UPDATE_CART: {
      const cart = state.cart.map(product =>
        product.id === action.payload.id
          ? (product = {
              ...product,
              quantity:
                action.payload.operator === "+"
                  ? product.quantity + 1
                  : product.quantity - 1
            })
          : product
      );
      return {
        ...state,
        cart,
        totalAmount: totals(cart).amount,
        totalQuantity: totals(cart).qty
      };
    }
    case types.REMOVE_PRODUCT_CART: {
      const cart = [...state.cart.filter(c => c.id !== action.payload)];
      return {
        ...state,
        cart,
        totalAmount: totals(cart).amount,
        totalQuantity: totals(cart).qty
      };
    }
    default:
      return state;
  }
};

const totals = cart => {
  const totalAmount = cart
    .map(cart => {
      return cart.price * cart.quantity;
    })
    .reduce((a, b) => {
      return a + b;
    }, 0);

  const totalQuantity = cart
    .map(qty => {
      return qty.quantity;
    })
    .reduce((a, b) => {
      return a + b;
    }, 0);

  return { amount: totalAmount.toFixed(2), qty: totalQuantity };
};
