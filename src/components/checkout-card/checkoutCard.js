import React from 'react'
import "./checkoutCard.css"
import { useCartContext } from '../../contexts/cartContext';
import { useAddressContext } from '../../contexts/addressContext';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export const CheckoutCard = () => {
  const {cart, setCart, totalPrice, totalDiscount, totalDelivery} = useCartContext();
  const {checkout} = useAddressContext();
  const navigate = useNavigate();

  const totalAmount = (+totalPrice + +totalDelivery) - (+totalDiscount);


    const selectedAddress = `${checkout.street}, ${checkout.city},${checkout.state},${checkout.country},`

    const loadScript = (url) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = url;
    
        script.onload = () => {
          resolve(true);
        };
    
        script.onerror = () => {
          resolve(false);
        };
    
        document.body.appendChild(script);
      });
    };

    const displayRazorpay = async () => {
      if (selectedAddress === "") {
        toast.warning("Select Address!");
      } else {
        const response = await loadScript(
          "https://checkout.razorpay.com/v1/checkout.js"
        );
  
        if (!response) {
          alert("Razorpay SDK failed to load, check your internet connection");
          return;
        }
        const options = {
          key: "rzp_test_jFS9Bs9XOyRSeX",
          amount: totalAmount * 100,
          currency: "INR",
          name: "Cake Factory",
          description: "Thank You For Shopping!",
          handler: function () {
            navigate("/summary");
            // const newCartValue = [];
            setCart([]);
            setTimeout(() => {
              navigate("/");
            }, 6000);
            toast.success("Your Order has been Placed!.");
          },
          theme: {
            color: "#1dbf73",
          },
        };
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
      }
    };
  
  return (
    <>
    <div>
    <div className='cart-total-area'>
        <h2>Order Details</h2>
        <hr></hr>
        <div className='d_flex'>
        <p>
          <strong>Item</strong>
          </p>
          <p>
            <strong>Quantity</strong>
          </p>
        </div>
        
        <div>
        {cart.map((item) => {
              return (
                <>
                  <div key={item._id} className="d_flex">
                    <p className="title-cart">{item.title}</p>
                    <p>{item.qty}</p>
                  </div>
                </>
              );
            })}
        </div>
          
        
        <hr />
        <div className="d_flex">
          <h4>Order Details</h4>
          <p></p>
        </div>
        <hr />


        <div className='total-price'>
            <p>Total Price:</p>
            <p>{totalPrice}</p>
        </div>
        <div className='total-discount'>
            <p>Discount</p>
            <p>{totalDiscount}</p>
        </div>
        <div className='delivery'>
            <p>Delivery Charges</p>
            <p>{totalDelivery}</p>
        </div>
        <hr></hr>
        <div className='cart-total-price'>
        <p><b>Total Amount</b></p>
        <p><b>Rs. {totalAmount < 0 ? 0 : totalAmount}</b></p>
        </div>
        <hr></hr>
        <div className='deliver-to'>
        {Object.values(checkout)[0].length > 0 ? (
          <div className="delivery-address">
            <p>
              <b>Deliver to: </b>{checkout.name}
            </p>
            <div className="final-address">
              <p><b>Address:</b> {checkout.street}, {checkout.city}, {checkout.state}</p>
              <p>{checkout.pincode}</p>
            </div>
          </div>
        ) : <p>No Address Found</p>}

        </div>
        <div className='cart-checkout-btn'>
            <button onClick={displayRazorpay} className='impact-btn'>Checkout</button>
            <p className='total-savings'>You will save {totalDiscount} on this order</p>
        </div>

    </div>
    </div>

    </>
  )
}