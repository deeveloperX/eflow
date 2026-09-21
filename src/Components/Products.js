import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router";

const Products = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="container my-4">
        <h1 className="mb-4 text-center fw-bold">All Products</h1>
        <div className="row g-4">
          {data.map((item) => (
            <div key={item.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="card h-100 shadow-sm border-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="card-img-top p-3 object-fit-contain"
                  style={{ height: "200px" }}
                />
                <div className="card-body d-flex flex-column justify-content-between">
                  <h5 className="card-title text-truncate">{item.title}</h5>
                  <p className="card-text fw-bold text-success fs-5 m-0">
                    ${item.price.toFixed(2)}
                  </p>
                  <p className="card-text fs-6 text-secondary m-0">
                    {item.rating.rate} ⭐ ({item.rating.count} reviews)
                  </p>
                  <Link to={`/product/${item.id}`} className="btn btn-outline-primary mt-3">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
