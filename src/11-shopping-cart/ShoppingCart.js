import { useState } from "react";

const items = [
  {
    name: "apple",
    price: 0.39,
  },
  {
    name: "banana",
    price: 0.79,
  },
  {
    name: "cherry tomatoes",
    price: 3.99,
  },
];

function ShoppingCart() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    console.log(item);
    let cartCopy = [...cart];
    const itemInCart = cartCopy.find((i) => i.name === item.name);
    if (itemInCart) {
      itemInCart.quantity += 1;
      setCart(cartCopy);
    } else {
      setCart((prevCart) => [...prevCart, { ...item, quantity: 1 }]);
    }
  };

  const increaseQuantity = (name) => {
    let cartCopy = [...cart];
    let item = cartCopy.find((i) => i.name === name);
    item.quantity += 1;
    setCart(cartCopy);
  };

  const decreaseQuantity = (name) => {
    let cartCopy = [...cart];
    let item = cartCopy.find((i) => i.name === name);
    if (item.quantity > 1) {
      item.quantity -= 1;
    } else {
      cartCopy = cartCopy.filter((item) => item.name !== name);
    }
    setCart(cartCopy);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <div className="cart" style={{}}>
        <h1>Shopping Cart</h1>
        <div className="items">
          <h2>Items</h2>
          {items.map((item) => (
            <div key={item.name}>
              <h3>{item.name}</h3>
              <p>${item.price}</p>
              <button onClick={() => addToCart(item)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2>Cart</h2>
        {cart.map((item) => (
          <div key={item.name}>
            <h3>{item.name}</h3>
            <p>
              <button onClick={() => decreaseQuantity(item.name)}>-</button>
              {item.quantity}
              <button onClick={() => increaseQuantity(item.name)}>+</button>
            </p>
            <p>Subtotal: ${(item.quantity * item.price).toFixed(2)}</p>
          </div>
        ))}
      </div>
      <div className="total">
        <h2>
          Total: $
          {cart
            ?.reduce((acc, item) => acc + item.quantity * item.price, 0)
            .toFixed(2)}
        </h2>
      </div>
    </div>
  );
}

export default ShoppingCart;
