import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

export default function Checkout({subtotal}) {
    function tokenHandler(token) {

        console.log(token);

    }
  return (
    <div>
      <StripeCheckout
        amount={subtotal*100}
        shippingAddress
        token={tokenHandler}
        stripeKey='pk_test_51Ns9RiKDziGAxotvwMcBk0AqIcy8H9f71QDQFyIox2G69eCqbBDdT0Hq9LiH4Er3gF3v6kPYFgIUl6fKcMPEQgh700Ir85RxT0'
        currency='USD'
      >
        <button className='btn' style={{marginLeft: '37%'}}>Pay Now</button>
      </StripeCheckout>
    </div>
  )
}
