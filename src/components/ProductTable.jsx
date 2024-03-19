import { useDispatch, useSelector } from "react-redux";
import Button from "./Button";
import { dataReceived } from "../features/productSlice";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";
import ConfirmDeleteModal from "./ConfirmDeleteModal";
import { Link } from "react-router-dom";
import Form from "./Form";

function ProductTable() {
    const { isLoading, products } = useSelector((store) => store.products);
    const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
    const [isShowAddForm, setIsShowAddForm] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(dataReceived());
    }, [dispatch]);

    return (
        <div className="container">
            <h2 className="table__heading">Products Management</h2>
            <Button
                type="btn--primary"
                className="btn--no-margin"
                onClick={() => {
                    setIsShowAddForm(true);
                }}
            >
                Add New Product
            </Button>
            {isLoading && <Spinner />}
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
                        {products.length === 0 ? (
                            <img
                                className="table__image"
                                src="https://bepharco.com/no-products-found.png"
                            />
                        ) : (
                            products.map((product, index) => (
                                <tr scope="row" key={product.description}>
                                    <td>{index + 1}</td>
                                    <td>
                                        <a href="#">{product.name}</a>
                                    </td>
                                    <td>{product.description}</td>
                                    <td>{product.price}</td>
                                    <td>{product.currentPrice}</td>
                                    <td>
                                        <Button type="btn--edit">Edit</Button>
                                        <Link to={`?id=${product.id}`}>
                                            <Button
                                                type="btn--delete"
                                                className="btn--no-margin"
                                                onClick={() => {
                                                    setIsShowDeleteModal(true);
                                                }}
                                            >
                                                Delete
                                            </Button>
                                        </Link>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
                <ConfirmDeleteModal
                    isShowDeleteModal={isShowDeleteModal}
                    setIsShowDeleteModal={setIsShowDeleteModal}
                />
                <Form
                    isShowAddForm={isShowAddForm}
                    setIsShowAddForm={setIsShowAddForm}
                />
            </div>
        </div>
    );
}

export default ProductTable;
