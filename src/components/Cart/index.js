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
                  <button className="checkout-btn" type="button">
                    Checkout
                  </button>
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
