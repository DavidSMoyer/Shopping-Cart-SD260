import CartItem from './CartItem.js';

function Cart(props) {
  if (props.visible === false) return null;
  return (
    <aside className="cart">
      <h2>Your Cart</h2>
      <ul>
        {props.items.map(item => (
          <CartItem 
            itemId={item.id}
            name={item.name}
            key={item.id}
            price={item.price}
            quantity={item.quantity}
            add={props.add}
            remove={props.remove}
            clear={props.clear}
          />
        ))}
        {
          !props.items.length && <p>Your cart is empty.</p>
        }
      </ul>
      <div className="total">Total: ${props.totalPrice().toFixed(2)}</div>
    </aside>
  )
}

export default Cart;