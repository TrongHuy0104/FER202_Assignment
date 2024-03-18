
import Button from "./Button";

function ConfirmDeleteModal({ onCancel, onDelete }) {
    return (
        <div id="delete-confirm" className="modal modal--small show">
            <div className="modal__content">
                <p className="modal__text">Do you want to remove this item?</p>
                <div className="modal__bottom">
                    <Button onClick={onCancel} type="btn--outline" className="modal__btn">
                        Cancel
                    </Button>
                    <Button onClick={onDelete}
                        type="btn--danger btn--primary btn--no-margin"
                        className="modal__btn"
                    >
                        Delete
                    </Button>
                </div>
            </div>
            <div className="modal__overlay"></div>
        </div>
    );
}

export default ConfirmDeleteModal;
