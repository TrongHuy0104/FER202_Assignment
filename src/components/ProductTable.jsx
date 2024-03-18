import { useEffect, useState } from "react";
import Button from "./Button";

import ConfirmDeleteModal from "./ConfirmDeleteModal";
import { dataReceived, deleteProduct } from "../features/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { Form } from "react-router-dom";

function ProductTable() {
  const { products } = useSelector((store) => store.products);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(dataReceived());
  }, [dispatch]);

  const handleDeleteClick = (productId) => {
    setSelectedProductId(productId);
    setShowConfirmModal(true);
    console.log(productId);
  };

  const handleConfirmDelete = () => {
    if (selectedProductId) {
      dispatch(deleteProduct(selectedProductId));
    }
    setShowConfirmModal(false);
  };

  const handleCancelDelete = () => {
    setShowConfirmModal(false);
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
            {products.length === 0 ? ( <img className="table_image" src="./src/assets/img/no-product-found.jpg" alt="No Products Available"/>   
            ) : (
              products.map((product, index) => (
                <tr key={product.id}>
                  <td>{index + 1}</td>
                  <td>{product.name}</td>
                  <td>{product.description}</td>
                  <td>{product.price}</td>
                  <td>{product.currentPrice}</td>
                  <td>
                    {/* Add delete button */}
                    <Button
                      type="btn--danger btn--primary btn--no-margin"
                      onClick={() => handleDeleteClick(product.id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))
            )}
            {showConfirmModal && (
              <ConfirmDeleteModal
                onDelete={handleConfirmDelete}
                onCancel={handleCancelDelete}
              />
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProductTable;
