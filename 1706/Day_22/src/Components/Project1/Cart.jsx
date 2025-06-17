import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, updateQuantity } from "../../redux/actions/cartActions";

const Cart = () => {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="container mt-3">
      <h4>Shopping Cart</h4>
      {items.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <ul className="list-group">
          {items.map((item) => (
            <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
              <div>
                <strong>{item.name}</strong> <br />
                ₹{item.price} ×
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) =>
                    dispatch(updateQuantity(item.id, parseInt(e.target.value)))
                  }
                  min="1"
                  style={{ width: "50px", marginLeft: "10px" }}
                />
              </div>
              <button className="btn btn-sm btn-danger" onClick={() => dispatch(removeFromCart(item.id))}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
      <div className="mt-3">
        <h5>Total: ₹{total}</h5>
      </div>
    </div>
  );
};

export default Cart;
