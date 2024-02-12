import {IoMdClose} from 'react-icons/io'
import Popup from 'reactjs-popup'
import {Link} from 'react-router-dom'
import Header from '../Header'
import CartListView from '../CartListView'

import CartContext from '../../context/CartContext'
import EmptyCartView from '../EmptyCartView'

import './index.css'

const Cart = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList, removeAllCartItems} = value
      const showEmptyView = cartList.length === 0
      // TODO: Update the functionality to remove all the items in the cart
      const removeAllItems = () => {
        removeAllCartItems()
      }
      let totalMoney = 0
      const totalAmount = cartList.forEach(each => {
        totalMoney += each.quantity * each.price
      })

      return (
        <>
          <Header />
          <div className="cart-container">
            {showEmptyView ? (
              <EmptyCartView />
            ) : (
              <div className="cart-content-container">
                <h1 className="cart-heading">My Cart</h1>
                <button
                  type="button"
                  onClick={removeAllItems}
                  className="remove-btn"
                >
                  Remove All
                </button>
                <CartListView />
                {/* TODO: Add your code for Cart Summary here */}
                <div className="cart-sumary-card">
                  <h1 className="order-amount">
                    Order Total:
                    <span className="amount">Rs {totalMoney}/-</span>
                  </h1>
                  <p className="cart-count">{cartList.length} Items in cart</p>
                  <div className="popup-container">
                    <Popup
                      className="popup-content"
                      modal
                      trigger={
                        <button className="checkout-btn" type="button">
                          Checkout
                        </button>
                      }
                    >
                      {onClose => (
                        <div className="popup-card">
                          {/* eslint-disable-next-line */}
                          <button
                            onClick={() => onClose()}
                            className="close-btn"
                          >
                            <IoMdClose className="close-icon" />
                          </button>
                          <div className="check-out-container">
                            <h1 className="heading">Payment Geteway</h1>
                            <div className="payment-summary-container">
                              <p className="total-items">
                                Total Items: {cartList.length}
                              </p>
                              <p className="total-amount">
                                Order Total: Rs {totalMoney}/-
                              </p>
                            </div>
                            <div className="payment-options-div">
                              <div className="payment-option">
                                <input
                                  id="radio1"
                                  className="payment-inp"
                                  type="radio"
                                  disabled
                                />
                                <label htmlFor="radio1" className="label">
                                  Debit Card
                                </label>
                              </div>
                              <div className="payment-option">
                                <input
                                  id="radio2"
                                  className="payment-inp"
                                  type="radio"
                                  disabled
                                />
                                <label htmlFor="radio2" className="label">
                                  Credit Card
                                </label>
                              </div>
                              <div className="payment-option">
                                <input
                                  id="radio3"
                                  className="payment-inp"
                                  type="radio"
                                  disabled
                                />
                                <label htmlFor="radio3" className="label">
                                  Net Banking
                                </label>
                              </div>
                              <div className="payment-option">
                                <input
                                  id="radio4"
                                  className="payment-inp"
                                  type="radio"
                                  selected
                                />
                                <label
                                  htmlFor="radio4"
                                  className="label cod-label"
                                >
                                  Cash On Delivery
                                </label>
                              </div>
                            </div>
                            <div className="order-div">
                              <Link to="/confirmed-order" className="link">
                                <button type="button" className="order-now-btn">
                                  Confirm Order
                                </button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      )}
                    </Popup>
                  </div>
                </div>
              </div>
            )}
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)
export default Cart
