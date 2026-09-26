import React from 'react'
import { Link, NavLink } from 'react-router'
import { RiShoppingCartLine } from "react-icons/ri";

const Navbar = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
            <div className="container py-3">
                <Link to={`/`} className="navbar-brand fw-bold">eFlow</Link>
                <button className="navbar-dark navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item"><NavLink to={`/`} className="nav-link">Products</NavLink></li>
                        <li className="nav-item"><NavLink to={`/deals`} className="nav-link">Deals</NavLink></li>
                    </ul>
                    <form className="d-flex me-3" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search products..." aria-label="Search" />
                        <button className="btn btn-outline-light" type="submit">Search</button>
                    </form>
                    <div className="navbar-nav">
                        <Link to={'/cart'} className="nav-link position-relative">
                            <RiShoppingCartLine style={{fontSize: "25px"}} />
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">2</span>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar