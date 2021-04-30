import './App.css';
import { Component } from 'react';
import Header from './Header.js';
import Item from './Item.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      cartItems: []
    }
  }

  componentDidMount = async () => {
    const request = await fetch('https://mitt-react-project-default-rtdb.firebaseio.com/items.json');
    const items = await request.json();
    this.setState({ items });
  }

  addItem = (e) => {
    const item = this.state.items.find(cartItem => cartItem.id === parseInt(e.target.closest('li').dataset.id));
    const cartItem = this.state.cartItems.find(cartItem => cartItem.id === parseInt(e.target.closest('li').dataset.id));
    if (cartItem !== undefined) {
      if (cartItem.quantity >= item.stock) return;
      this.setState((state, props) => ({
        cartItems: state.cartItems.map(curItem => {
          if (curItem === cartItem) {
            return { ...curItem, quantity: curItem.quantity + 1 };
          }
          return curItem;
        })
      }))
    } else {
      if (item.stock === 0) return;
      this.setState((state, props) => ({
        cartItems: [...state.cartItems,
        {
          id: item.id,
          name: item.name,
          quantity: 1,
          price: item.price
        }
        ]
      }))
    }
  }

  removeItem = (e) => {
    const cartItem = this.state.cartItems.find(cartItem => cartItem.id === parseInt(e.target.closest('li').dataset.id));
    if (cartItem === undefined) return;
    this.setState(state => ({
      cartItems: state.cartItems.map(item => {
        if (item.id === cartItem.id) {
          return { ...cartItem, quantity: item.quantity - 1 }
        }
        return item;
      }).filter(item => item.quantity > 0)
    }))
  }

  clearItem = (e) => {
    const cartItem = this.state.cartItems.find(cartItem => cartItem.id === parseInt(e.target.closest('li').dataset.id));
    if (cartItem === undefined) return;
    this.setState(state => ({
      cartItems: state.cartItems.filter(item => item.id !== cartItem.id)
    }))
  }

  totalPrice = () => {
    return this.state.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  totalItems = () => {
    return this.state.cartItems.reduce((total, item) => total + item.quantity, 0);
  }

  render() {
    return (
      <>
        <Header
          cartItems={this.state.cartItems}
          toggleCart={this.toggleCart}
          modifyCart={this.modifyCart}
          add={this.addItem}
          remove={this.removeItem}
          totalPrice={this.totalPrice}
          totalItems={this.totalItems}
          clear={this.clearItem}
        />
        <main>
          <ul className="items">
            {this.state.items.map(item => (
              <Item
                key={item.id}
                desc={item.description}
                itemId={item.id}
                image={item.imageURL}
                name={item.name}
                price={item.price}
                add={this.addItem}
                stock={item.stock}
              />
            ))}
          </ul>
        </main>
      </>
    );
  }
}

export default App;
