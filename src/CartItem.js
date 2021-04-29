function CartItem(props) {
  return (
    <li className="cart-item" data-id={props.itemId}>
      <div className="name">{props.name}</div>
      <div className="quantity">
        <button className="fa fa-minus" onClick={props.remove}><i></i></button>
        {props.quantity}
        <button className="fa fa-plus" onClick={props.add}><i></i></button>
      </div>
      <div className="price">@ ${props.price}</div>
      <button className="remove-from-cart" onClick={props.clear}><i className="far fa-times-circle"></i></button>
    </li>
  )
}

export default CartItem;