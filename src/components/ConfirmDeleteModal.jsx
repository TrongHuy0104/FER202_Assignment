import { useDispatch } from "react-redux";
import Button from "./Button";
import { remove } from "../features/productSlice";
import { useNavigate, useSearchParams } from "react-router-dom";

function ConfirmDeleteModal({ isShowDeleteModal, setIsShowDeleteModal }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");
    function handleRemove() {
        setIsShowDeleteModal(false);
        dispatch(remove(id));
        navigate("/admin");
    }

    return (
        <div
            id="delete-confirm"
            className={`modal modal--small ${isShowDeleteModal ? "show" : ""}`}
        >
            <div className="modal__content">
                <p className="modal__text">Do you want to remove this item</p>
                <div className="modal__bottom">
                    <Button
                        type="btn--outline"
                        className="modal__btn"
                        onClick={() => setIsShowDeleteModal(false)}
                    >
                        Cancel
                    </Button>
                    <Button
                        type="btn--danger btn--primary btn--no-margin"
                        className="modal__btn"
                        onClick={handleRemove}
                    >
                        Delete
                    </Button>
                </div>
            </div>
            <div
                className="modal__overlay"
                onClick={() => setIsShowDeleteModal(false)}
            ></div>
        </div>
    );
}

export default ConfirmDeleteModal;
