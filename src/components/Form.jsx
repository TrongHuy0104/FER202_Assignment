import { useState } from "react";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { add } from "../features/productSlice";

function Form({ isShowAddForm, setIsShowAddForm }) {
    const dispatch = useDispatch();
    const [inputFields, setInputFields] = useState({
        name: "",
        price: "",
        currentPrice: "",
        description: "",
        image: "",
    });
    const [errors, setErrors] = useState({});

    function handleChangeInput(e) {
        setErrors({});
        if (e.target.name === "image") {
            setInputFields({
                ...inputFields,
                [e.target.name]: URL.createObjectURL(e.target.files[0]),
            });
        } else
            setInputFields({ ...inputFields, [e.target.name]: e.target.value });
    }

    const validateValues = (inputValues) => {
        let errors = {};
        if (!inputValues.name) errors.name = "Please enter this field";
        if (!inputValues.description)
            errors.description = "Please enter this field";
        if (!inputValues.image) errors.image = "Please enter this field";

        if (!inputValues.price) {
            errors.price = "Please enter this field";
        } else if (!/^[1-9][0-9]*$/.test(inputValues.price)) {
            errors.price = "Please enter natural number!";
        }

        if (!inputValues.currentPrice) {
            errors.currentPrice = "Please enter this field";
        } else if (!/^[1-9][0-9]*$/.test(inputValues.currentPrice)) {
            errors.currentPrice = "Please enter natural number!";
        }

        return errors;
    };

    function handleSubmit(e) {
        e.preventDefault();
        const errorList = validateValues(inputFields);
        setErrors(errorList);

        if (Object.keys(errorList).length !== 0) return;
        const tempProduct = {
            name: inputFields.name,
            price: inputFields.price,
            currentPrice: inputFields.currentPrice,
            image: inputFields.image,
            description: inputFields.description,
        };
        dispatch(add(tempProduct));
        setIsShowAddForm(false);
    }
    return (
        <div
            id="add-new-address"
            className={`modal ${isShowAddForm ? "show" : ""}`}
            style={{ "--content-width": "650px" }}
        >
            {/* <img src={inputFields.image} /> */}
            <div className="modal__content">
                <form
                    action=""
                    id="addForm"
                    className="form"
                    onSubmit={handleSubmit}
                >
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
                                    value={inputFields.name}
                                    onChange={handleChangeInput}
                                ></input>
                                <img
                                    src="./assets/icons/form-error.svg"
                                    alt=""
                                    className="form__input-icon-error"
                                ></img>
                            </div>
                            <p className="form__message">
                                {errors.name && errors.name}
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
                                        type="number"
                                        name="price"
                                        id="price"
                                        placeholder="Price"
                                        className="form__input"
                                        value={inputFields.price}
                                        onChange={handleChangeInput}
                                    ></input>
                                    <img
                                        src="./assets/icons/form-error.svg"
                                        alt=""
                                        className="form__input-icon-error"
                                    ></img>
                                </div>
                                <p className="form__message">
                                    {errors.price && errors.price}
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
                                        type="number"
                                        name="currentPrice"
                                        id="current-price"
                                        placeholder="Current Price"
                                        className="form__input"
                                        value={inputFields.currentPrice}
                                        onChange={handleChangeInput}
                                    ></input>
                                    <img
                                        src="./assets/icons/form-error.svg"
                                        alt=""
                                        className="form__input-icon-error"
                                    ></img>
                                </div>
                                <p className="form__message">
                                    {errors.currentPrice && errors.currentPrice}
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
                                    onChange={handleChangeInput}
                                    style={{ height: "auto" }}
                                ></input>

                                <img
                                    src="./assets/icons/form-error.svg"
                                    alt=""
                                    className="form__input-icon-error"
                                ></img>
                            </div>
                            <p className="form__message">
                                {errors.image && errors.image}
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
                                    name="description"
                                    id="desc"
                                    placeholder="Description"
                                    className="form__text-area-input"
                                    value={inputFields.description}
                                    onChange={handleChangeInput}
                                ></textarea>
                                <img
                                    src="./assets/icons/form-error.svg"
                                    alt=""
                                    className="form__input-icon-error"
                                ></img>
                            </div>
                            <p className="form__message">
                                {errors.description && errors.description}
                            </p>
                        </div>
                    </div>
                </form>
                <div className="modal__bottom">
                    <Button
                        type="btn--outline"
                        className="modal__btn"
                        onClick={() => {
                            setInputFields({
                                name: "",
                                price: "",
                                currentPrice: "",
                                description: "",
                                image: "",
                            });
                            setErrors({});
                            setIsShowAddForm(false);
                        }}
                    >
                        Cancel
                    </Button>
                    <Button
                        form="addForm"
                        type=" btn--primary btn--no-margin"
                        className="modal__btn"
                    >
                        Create
                    </Button>
                </div>
            </div>
            <div
                className="modal__overlay"
                onClick={() => setIsShowAddForm(false)}
            ></div>
        </div>
    );
}

export default Form;
