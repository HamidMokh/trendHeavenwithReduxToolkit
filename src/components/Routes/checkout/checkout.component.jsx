import { useSelector } from 'react-redux'
import { selectCartItems, selectCartTotal } from '../../../store/cart/cart.selector'
import './checkout.styles.scss'
import CheckoutItem from '../../checkout-item/checkout-item.component'
import PaymentForm from '../../payment-form/payment-form.component'
const Checkout = ()=>{

    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);
    // const { cartItems, cartTotal } = useContext(CartContext)

    return (
        
        
        <div className='checkout-container'>
            <div className='checkout-header'>
                <div className='header-block'    >
                <span>Product</span>
                </div>

                <div className='header-block'    >
                <span>Description</span>
                </div>
                
                <div className='header-block'    >
                <span>Quantity</span>
                </div>
                
                <div className='header-block'    >
                <span>Price</span>
                </div>
                
                <div className='header-block'    >
                <span>Remove</span>
                </div>
            </div> 


        {
            

            cartItems.map((cartItem)=>{ 
                


                return (
                        <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
                );})
        }
        
        <span className='total'>Total: DZD {cartTotal}</span>
        <PaymentForm />
        </div>
        
    )
}

export default Checkout;