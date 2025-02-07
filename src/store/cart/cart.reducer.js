import { createSlice } from "@reduxjs/toolkit";


export const addCartItem = (cartItems, productToAdd) => {
  // Find the index of the existing item in the cart
  const existingCartItemIndex = cartItems.findIndex(
  (cartItem) => cartItem.id === productToAdd.id
  );
  // If the item exists in the cart
  if (existingCartItemIndex !== -1) {
  // Create a copy of the cart items array
  const updatedCartItems = [...cartItems];
  // Increment the quantity of the existing item
  updatedCartItems[existingCartItemIndex].quantity += 1;
  // Return the updated cart items
  return updatedCartItems;}
  // If the item does not exist in the cart
  // Add the item with a quantity of 1
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const removeCartItem = (cartItems, cartItemToRemove) => {
 //look for the product that you want to remove inside of the CartItems.
const existingCartItem = cartItems.find(
(cartItem) => cartItem.id === cartItemToRemove.id
);

if(existingCartItem.quantity === 1) {
return  cartItems.filter((cartItem)=>cartItem.id !== cartItemToRemove.id)
}
return cartItems.map( (cartItem)=>
      cartItem.id === cartItemToRemove.id
      ? {...cartItem, quantity: cartItem.quantity -1}
      : cartItem
    )
  }

 
     export const clearCartItem = (cartItems, cartItemToClear)=>{
        return  cartItems.filter((cartItem)=>cartItem.id !== cartItemToClear.id)
     }
  
 
   
   
  
export const CART_INITIAL_STATE = {
    isCartOpen: false, 
    cartItems: [],

  }
  
export const cartSlice = createSlice({
  name: 'cart',
  initialState: CART_INITIAL_STATE,
  reducers: {
    setIsCartOpen(state, action) {
      state.isCartOpen = action.payload;
    },
    addItemToCart(state, action){
      state.cartItems = addCartItem(state.cartItems, action.payload);
    },
    removeItemFromCart(state, action){
      state.cartItems = removeCartItem(state.cartItems, action.payload);
    },
    clearItemFromCart(state, action){
      state.cartItems =clearCartItem(state.cartItems, action.payload);
  },
}})

export const { 
  setIsCartOpen,
  addItemToCart, 
  removeItemFromCart, 
  clearItemFromCart} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
  