import { useEffect, useState } from "react";
import Button from "./Button";
import Form from "./Form";

function ProductTable() {
  const [products, setProducts] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const BASE_URL = "http://localhost:9999";
  useEffect(
    function () {
      async function fetchProducts() {
        const res = await fetch(`${BASE_URL}/products`);
        const data = await res.json();

        setProducts(() => data);
      }
      fetchProducts();
    },
    [setProducts]
  );

  return (
    <div className="container">
      <h2 className="table__heading">Products Management</h2>
      <Button
        onClick={() => setModalOpen(true)}
        className="btn--no-margin"
        type="btn--primary"
      >
        + Add
      </Button>
      {isModalOpen && <Form onClick={() => setModalOpen(false)} />}

      <div className="table__responsive">
        <table className="table table__striped">
          <thead>
            <tr>
              <th scope="col">No.</th>
              <th scope="col">Name</th>
              <th scope="col">Description</th>
              <th scope="col">Price</th>
              <th scope="col">Current Price</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.description}</td>
                <td>{product.price}</td>
                <td>{product.currentPrice}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProductTable;
