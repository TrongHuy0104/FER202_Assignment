import Button from "./Button";

function Form() {
    return (
        <div
            id="add-new-address"
            className="modal show"
            style={{ "--content-width": "650px" }}
        >
            <div className="modal__content">
                <form action="" className="form">
                    <h2 className="modal__heading">Add new product</h2>
                    <div className="modal__body">
                        <div className="form__group">
                            <label
                                htmlFor="name"
                                className="form__label form__label--small"
                            >
                                Name
                            </label>
                            <div className="form__text-input form__text-input--small">
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Name"
                                    className="form__input"
                                    required=""
                                ></input>
                                <img
                                    src="./assets/icons/form-error.svg"
                                    alt=""
                                    className="form__input-icon-error"
                                ></img>
                            </div>
                            <p className="form__error">
                                {/* Name must be at least 2 characters */}
                            </p>
                        </div>
                        <div className="form__row">
                            <div className="form__group">
                                <label
                                    htmlFor="price"
                                    className="form__label form__label--small"
                                >
                                    Price
                                </label>
                                <div className="form__text-input form__text-input--small">
                                    <input
                                        type="text"
                                        name="price"
                                        id="price"
                                        placeholder="Price"
                                        className="form__input"
                                        required=""
                                    ></input>
                                    <img
                                        src="./assets/icons/form-error.svg"
                                        alt=""
                                        className="form__input-icon-error"
                                    ></img>
                                </div>
                                <p className="form__error">
                                    {/* Name must be at least 2 characters */}
                                </p>
                            </div>
                            <div className="form__group">
                                <label
                                    htmlFor="current-price"
                                    className="form__label form__label--small"
                                >
                                    Current Price
                                </label>
                                <div className="form__text-input form__text-input--small">
                                    <input
                                        type="tel"
                                        name="current-price"
                                        id="current-price"
                                        placeholder="Phone"
                                        className="form__input"
                                        required=""
                                    ></input>
                                    <img
                                        src="./assets/icons/form-error.svg"
                                        alt=""
                                        className="form__input-icon-error"
                                    ></img>
                                </div>
                                <p className="form__error">
                                    {/* Phone must be at least 10 characters */}
                                </p>
                            </div>
                        </div>
                        <div className="form__group">
                            <label
                                htmlFor="image"
                                className="form__label form__label--small"
                            >
                                Image
                            </label>
                            <div className="form__text-input form__text-input--small">
                                <input
                                    type="file"
                                    name="image"
                                    id="image"
                                    placeholder="Image"
                                    accept="image/png, image/jpeg"
                                    className="form__input"
                                    required=""
                                    style={{ height: "auto" }}
                                ></input>
                                <img
                                    src="./assets/icons/form-error.svg"
                                    alt=""
                                    className="form__input-icon-error"
                                ></img>
                            </div>
                            <p className="form__error">
                                {/* Phone must be at least 10 characters */}
                            </p>
                        </div>
                        <div className="form__group">
                            <label
                                htmlFor="desc"
                                className="form__label form__label--small"
                            >
                                Description
                            </label>
                            <div className="form__text-area">
                                <textarea
                                    name="desc"
                                    id="desc"
                                    placeholder="Description"
                                    className="form__text-area-input"
                                    required=""
                                ></textarea>
                                <img
                                    src="./assets/icons/form-error.svg"
                                    alt=""
                                    className="form__input-icon-error"
                                ></img>
                            </div>
                            <p className="form__error">
                                {/* Address not empty */}
                            </p>
                        </div>
                    </div>
                    <div className="modal__bottom">
                        <Button type="btn--outline" className="modal__btn">
                            Cancel
                        </Button>
                        <Button
                            type=" btn--primary btn--no-margin"
                            className="modal__btn"
                        >
                            Create
                        </Button>
                    </div>
                </form>
            </div>
            <div className="modal__overlay"></div>
        </div>
    );
}

export default Form;
