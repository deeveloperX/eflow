import React from "react";
import { useState, useEffect } from "react";

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

  return (
    <div className="cart-wrapper">
      <div className="container my-4">
        <div className="row g-4">
          {/* Cart Items Section */}
          <div className="col-lg-8">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h4 className="mb-0">Shopping Cart</h4>
              <span className="text-muted">3 items</span>
            </div>

            {/* Product Cards */}
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
                        <button className="btn btn-outline-secondary btn-sm">
                          -
                        </button>
                        Quantity: {item.quantity}
                        <button className="btn btn-outline-secondary btn-sm">
                          +
                        </button>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <span className="fw-bold">
                        Rs. {item.price?.toFixed(2)}
                      </span>
                    </div>
                    <div className="col-md-1">
                      <i className="bi bi-trash text-danger cursor-pointer"></i>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Summary Section */}
          <div className="col-lg-4">
            <div className="summary-card p-4 shadow-sm border rounded">
              <h5 className="mb-4">Order Summary</h5>

              <div className="d-flex justify-content-between mb-3">
                <span className="text-muted">Subtotal</span>
                <span>Rs. {subTatal}</span>
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
                <span className="fw-bold">Rs. {total}</span>
              </div>

              {/* Promo Code */}
              <div className="mb-4">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Promo code"
                  />
                  <button className="btn btn-outline-secondary" type="button">
                    Apply
                  </button>
                </div>
              </div>

              <button className="btn btn-primary checkout-btn w-100 mb-3">
                Proceed to Checkout
              </button>

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
