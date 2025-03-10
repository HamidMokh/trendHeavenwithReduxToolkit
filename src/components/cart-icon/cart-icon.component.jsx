
import { useDispatch, useSelector } from "react-redux";

import { selectCartCount, selectIsCartOpen } from "../../store/cart/cart.selector";
import { setIsCartOpen

 } from "../../store/cart/cart.reducer";

import {ShoppingICon, CartIconContainer, ItemCount } from './cart-icon.styles';



const CartIcon = ()=>{

    // const {isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

const dispatch = useDispatch();
const cartCount = useSelector(selectCartCount);
const isCartOpen = useSelector(selectIsCartOpen);

    const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));
   
return (
 <CartIconContainer onClick={toggleIsCartOpen}>
    <ShoppingICon className='shpping-icon'/>
    <ItemCount>{cartCount}</ItemCount>
 </CartIconContainer>
);

}

export default CartIcon;