import './index.css'
import {Link} from 'react-router-dom'

const ConfirmedOrder = () => (
  <div className="payment-success-div">
    <h1 className="success-heading">Payment Successfull!</h1>
    <p className="success-mes">Your order has been placed successfully</p>
    <Link to="products" className="link">
      <button type="button" className="order-now-btn prod-btn">
        Products
      </button>
    </Link>
  </div>
)

export default ConfirmedOrder
