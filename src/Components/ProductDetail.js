import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router";

const ProductDetail = () => {
  let { id } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const atc = (data) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const findItemIndex = cart.findIndex((item) => item.id === data.id);

    if (findItemIndex === -1) {
      const updateCart = [...cart, data];
      localStorage.setItem("cart", JSON.stringify(updateCart));
      alert("Product added to cart");
    } else {
      alert("Product already in cart");
    }
  }

  return (
    <div className="container my-5">
      <div className="card border-0 shadow-sm rounded-4 overflow-hidden p-3 p-md-4">
        <div className="row g-4 align-items-center">
          {/* Product Image Column */}
          <div className="col-md-6 text-center">
            <div className="bg-light p-4 rounded-3 d-flex align-items-center justify-content-center" style={{ minHeight: "350px" }}>
              <img
                src={data.image}
                alt={data.title}
                className="img-fluid object-fit-contain"
                style={{ maxHeight: "350px", width: "100%" }}
              />
            </div>
          </div>

          {/* Product Details Column */}
          <div className="col-md-6">
            <div className="ps-md-3">
              <span className="badge bg-secondary text-uppercase tracking-wider mb-2">
                {data.category}
              </span>
              <h2 className="fw-bold mb-3 text-dark">{data.title}</h2>

              {/* Price & Rating */}
              <div className="d-flex align-items-center gap-3 mb-3">
                <span className="h3 fw-bold text-primary mb-0">
                  ${data.price?.toFixed(2)}
                </span>
                <span className="text-muted text-decoration-line-through">
                  ${data.price * 2}
                </span>
                <span className="badge bg-warning text-dark fs-6 ms-auto">
                  ★ {data.rating?.rate} ({data.rating?.count} reviews)
                </span>
              </div>

              <p className="text-secondary mb-4" style={{ lineHeight: "1.6" }}>
                {data.description}
              </p>

              {/* Quantity Selection */}
              <div className="d-flex align-items-center mb-4 gap-3">
                <label htmlFor="quantity" className="fw-semibold text-muted mb-0">
                  Quantity:
                </label>
                <input
                  type="number"
                  className="form-control text-center fw-semibold"
                  id="quantity"
                  defaultValue="1"
                  min="1"
                  style={{ width: "90px" }}
                />
              </div>

              {/* Action Buttons */}
              <div className="d-flex flex-wrap gap-2 mb-4">
                <button onClick={() => {atc(data)}} className="btn btn-primary btn-lg flex-grow-1 d-flex align-items-center justify-content-center gap-2">
                  <i className="bi bi-cart-plus"></i> Add to Cart
                </button>
                <Link to="/cart" className="btn btn-outline-primary btn-lg d-flex align-items-center justify-content-center px-4">
                  <i className="bi bi-cart"></i> Open Cart
                </Link>
              </div>

              {/* Product Badges */}
              <div className="row text-center g-2 pt-3 border-top text-muted small">
                <div className="col-4">
                  <i className="bi bi-truck fs-5 d-block text-primary"></i> Free Delivery
                </div>
                <div className="col-4">
                  <i className="bi bi-shield-check fs-5 d-block text-primary"></i> 1 Year Warranty
                </div>
                <div className="col-4">
                  <i className="bi bi-arrow-counterclockwise fs-5 d-block text-primary"></i> 30-Day Return
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;