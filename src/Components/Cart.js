import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router";
import Checkout from "./Checkout";
import { MdOutlineDelete } from "react-icons/md";


const Cart = () => {
  const [cart, setCart] = useState([]);
  const [ship, setShip] = useState(1000);
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const fixedCart = cart.map((item) => ({
      ...item,
      quantity: item.quantity || 1,
    }));
    setCart(fixedCart);
  }, []);

  const subTatal = cart.reduce((acc, item) => {
    return acc + item.price * (item.quantity || 1);
  }, 0);

  const total = subTatal + ship - discount;

  const incquan = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: (item.quantity || 1) + 1 } : item,
      ),
    );
  };

  const decquan = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id && item.quantity !== 1 ? { ...item, quantity: (item.quantity || 1) - 1 } : item, 
      ),
    );
  };
  
  const clearCart = () => {
    setCart([]);
    localStorage.removeItem('cart');
  }

  const removeCartItem = () => {
    alert("Add the functionality")
  }

  return (
    <div className="cart-wrapper">
      <div className="container my-4">
        <div className="row g-4">
          {/* Cart Items Section */}
          <div className="col-lg-8">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h4 className="mb-0">Shopping Cart</h4>
              <div className="d-flex gap-2 align-items-center">
                <button onClick={clearCart} className="btn btn-outline-danger border">Clear Cart</button>
                <span className="text-muted">3 items</span>
              </div>
            </div>

            {(cart.length !== 0) ? 
            // product card
            <div className="d-flex flex-column gap-3">
              {cart.map((item) => (
                <div className="product-card p-3 shadow-sm border rounded">
                  <div className="row align-items-center">
                    <div className="col-md-2">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="product-image img-fluid rounded"
                        style={{ maxHeight: "80px", width: "80px" }}
                      />
                    </div>
                    <div className="col-md-4">
                      <h6 className="mb-1">{item.title}</h6>
                      <p className="text-muted mb-0">{item.category}</p>
                      {/* <span className="badge bg-danger mt-2">20% OFF</span> */}
                    </div>
                    <div className="col-md-3">
                      <div className="d-flex align-items-center gap-2">
                        <button
                          onClick={() => {
                            decquan(item.id);
                          }}
                          className="btn btn-outline-secondary btn-sm"
                        >
                          -
                        </button>
                        Quantity: {(item.quantity || 1)}
                        <button
                          onClick={() => {
                            incquan(item.id);
                          }}
                          className="btn btn-outline-secondary btn-sm"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <span className="fw-bold">
                        Rs. { item.price * (item.quantity || 1) }
                      </span>
                    </div>
                    <div onClick={removeCartItem} className="col-md-1 cursor-pointer"><MdOutlineDelete className="text-danger fs-4" /></div>
                  </div>
                </div>
              ))};
            </div>
            : <div className="d-flex flex-column gap-3 align-items-center mt-5">
              <h3 className="text-danger">The cart is Empty</h3>
              <Link to={"/"} className='btn btn-light border border-secondary'>Back to shop</Link>
            </div>
            }
            
          </div>

          {/* Summary Section */}
          <div className="col-lg-4">
            <div className="summary-card p-4 shadow-sm border rounded">
              <h5 className="mb-4">Order Summary</h5>

              <div className="d-flex justify-content-between mb-3">
                <span className="text-muted">Subtotal</span>
                <span>Rs. {subTatal.toFixed(2)}</span>
              </div>
              <div className="d-flex justify-content-between mb-3">
                <span className="text-muted">Discount</span>
                <span className="text-success">-Rs. {discount.toFixed(2)}</span>
              </div>
              <div className="d-flex justify-content-between mb-3">
                <span className="text-muted">Shipping</span>
                <span>Rs. {ship}</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between mb-4">
                <span className="fw-bold">Total</span>
                <span className="fw-bold">Rs. {total?.toFixed(2)}</span>
              </div>


              <Link to={'/checkout'} className="btn btn-primary checkout-btn w-100 mb-3">
                Proceed to Checkout
              </Link>

              <div className="d-flex justify-content-center gap-2">
                <i className="bi bi-shield-check text-success"></i>
                <small className="text-muted">Secure checkout</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
