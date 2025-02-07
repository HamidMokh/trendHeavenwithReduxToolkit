import { useDispatch } from 'react-redux';
import { addItemToCart, clearItemFromCart, removeItemFromCart } from '../../store/cart/cart.reducer';
import './checkout-item.styles.scss'


const CheckoutItem = ({cartItem})=> {

const{name, imageUrl, price, quantity}= cartItem;
const dispatch = useDispatch();

const clearItemFromCartHandler = ()=>dispatch (clearItemFromCart( cartItem));
const addItemToCartHandler = ()=>dispatch (addItemToCart(cartItem));
const removeItemFromCartHandler = ()=>dispatch (removeItemFromCart(cartItem));
return (

<div className='checkout-item-container'>
    <div className='image-container'>
        <img src={imageUrl} alt={`${name}`} />
    </div>

<span className='name'>{name}</span>

<span className='quantity'>
    <div className='arrow'onClick={removeItemFromCartHandler}>
    &#10094;
    </div>
<span className='value'>{quantity}</span>
<div className='arrow' onClick={addItemToCartHandler}>
    &#10095;
    </div>
</span>

<span className='price'>{price}</span>
<div className='remove-button' onClick={clearItemFromCartHandler}>&#10005;</div>

</div>

)

};

export default CheckoutItem;