import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dataReceived } from "../features/productSlice";
import Button from "./Button";
import Form from "./Form";

function ProductTable() {
  const { products } = useSelector((store) => store.products);
  const [isModalOpen, setModalOpen] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(dataReceived());
  }, [dispatch]);

  const handleCloseModal = () => {
    setModalOpen(false);
  };

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
      {isModalOpen && <Form onCloseModal={handleCloseModal} />}

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
