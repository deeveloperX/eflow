import React from 'react'
import { Link } from 'react-router'

const OrderSuccess = () => {
  return (
    <div className='d-flex flex-column align-items-center justify-content-center vh-100'>
        <h1>Thank You...!</h1>
        <h4>Your Order is Placed Successfully</h4>
        <Link to={"/"} className='btn btn-light border border-secondary mt-5'>Back to shop</Link>
    </div>
  )
}

export default OrderSuccess