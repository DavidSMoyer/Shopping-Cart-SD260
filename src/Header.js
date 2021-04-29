import { Component } from 'react';
import Cart from './Cart.js';

class Header extends Component {
  state = {
    cartVisible: false
  }

  toggleCart = () => {
    this.setState((state, props) => ({cartVisible: !state.cartVisible}));
  }

  render() {
    return (
      <header>
        <h1>MouseHeaven</h1>
        <div className="cart-icon">
          <div className="cart-icon-values">
            <div className="cart-total">${this.props.totalPrice().toFixed(2)}</div>
            <div className="in-cart-items">{this.props.totalItems()} item{this.props.totalItems() === 1 ? "" : "s"}</div>
          </div>
          <i className="fas fa-shopping-cart" onClick={this.toggleCart}></i>
        </div>
        <Cart 
          visible={this.state.cartVisible}
          items={this.props.cartItems}
          modify={this.props.modifyCart}
          add={this.props.add}
          remove={this.props.remove}
          totalPrice={this.props.totalPrice}
          clear={this.props.clear}
        />
      </header>
    )
  }
}

export default Header;