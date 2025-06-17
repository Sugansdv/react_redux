import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/cartActions";

const products = [
  { id: 1, name: "Apple", price: 50 },
  { id: 2, name: "Banana", price: 20 },
  { id: 3, name: "Orange", price: 30 }
];

const ProductList = () => {
  const dispatch = useDispatch();

  return (
    <div className="container mt-3">
      <h4>Products</h4>
      <ul className="list-group">
        {products.map((p) => (
          <li key={p.id} className="list-group-item d-flex justify-content-between">
            <span>{p.name} - ₹{p.price}</span>
            <button className="btn btn-sm btn-success" onClick={() => dispatch(addToCart(p))}>
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
