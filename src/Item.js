function Item(props) {
  return (
    <li className="item" data-id={props.itemId}>
      <img
        src={props.image}
        alt={"Image of a " + props.name + " mouse."}
      />
      <h2>{props.name}</h2>
      <div className="price">${props.price}</div>
      <div className="description">{props.desc}</div>
      <button onClick={props.add}>Add to Cart</button>
    </li>
  )
}

export default Item;