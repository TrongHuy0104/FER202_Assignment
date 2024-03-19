import { useState, useEffect } from "react";
import { useDispatch} from "react-redux";
import { edit } from "../features/productSlice";
import Button from "./Button";

function FormEdit({ onCloseModal, dataProductEdit }) {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [currentPrice, setCurrentPrice] = useState("");
  const [message, setMessage] = useState("");
  const [image, setImage] = useState(null);
  const [showModal,] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    if (dataProductEdit) {
        setProductName(dataProductEdit.name);
        setPrice(dataProductEdit.price);
        setDescription(dataProductEdit.description);
        setCurrentPrice(dataProductEdit.currentPrice);
    }
}, [dataProductEdit]);

  const currentForm = () => {
    setProductName(productName);
    setPrice(price);
    setDescription(description);
    setCurrentPrice(currentPrice);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (
      productName === "" &&
      price === "" &&
      description === "" &&
      currentPrice === ""
    ) {
      setMessage("Please fill in all required fields.");
      return;
    }

    if (productName.length < 3) {
      setMessage("Name must be at least 3 characters long");
      return;
    }

    if (description.length < 10) {
      setMessage("Description must be at least 10 characters long");
      return;
    }

    if (!image) {
      setMessage("Please select an image.");
      return;
    }

    const updatedProduct = {
        id: dataProductEdit.id, 
        name: productName,
        price: price,
        description: description,
        currentPrice: currentPrice,
        image: dataProductEdit.image,
    };

    dispatch(edit(updatedProduct));
    currentForm();
    setMessage("Product edited successfully!");
  }

  const handleCancel = () => {
    onCloseModal();
  };

  return (
    <>
      {showModal && (
        <div
          id="add-new-address"
          className="modal show"
          style={{ "--content-width": "650px" }}
        >
          <div className="modal__content">
            <form onSubmit={handleSubmit} className="form">
              <div className="message">
                {message && (
                  <p
                    style={{
                      color: message.includes("Error") ? "red" : "green",
                    }}
                  >
                    {message}
                  </p>
                )}
              </div>
              <h2 className="modal__heading">Edit a product</h2>
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
                      value={productName}
                      placeholder="Name"
                      className="form__input"
                      required=""
                      onChange={(e) => setProductName(e.target.value)}
                    ></input>
                    <img
                      src="./assets/icons/form-error.svg"
                      alt=""
                      className="form__input-icon-error"
                    ></img>
                  </div>
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
                        value={price}
                        placeholder="Price"
                        className="form__input"
                        required=""
                        onChange={(e) => setPrice(e.target.value)}
                      ></input>
                      <img
                        src="./assets/icons/form-error.svg"
                        alt=""
                        className="form__input-icon-error"
                      ></img>
                    </div>
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
                        value={currentPrice}
                        placeholder="CurentPrice"
                        className="form__input"
                        required=""
                        onChange={(e) => setCurrentPrice(e.target.value)}
                      ></input>
                      <img
                        src="./assets/icons/form-error.svg"
                        alt=""
                        className="form__input-icon-error"
                      ></img>
                    </div>
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
                      id="image"
                      placeholder="Image"
                      accept="image/png, image/jpeg"
                      className="form__input"
                      required=""
                      style={{ height: "auto" }}
                      onChange={handleImageChange}
                    ></input>
                    <img
                      src="./assets/icons/form-error.svg"
                      alt=""
                      className="form__input-icon-error"
                    ></img>
                  </div>
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
                      value={description}
                      placeholder="Description"
                      className="form__text-area-input"
                      required=""
                      onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                    <img
                      src="./assets/icons/form-error.svg"
                      alt=""
                      className="form__input-icon-error"
                    ></img>
                  </div>
                </div>
              </div>
              <div className="modal__bottom">
                <Button
                  onClick={handleCancel}
                  type="btn--outline"
                  className="modal__btn"
                >
                  Close
                </Button>
                <Button
                  type=" btn--primary btn--no-margin "
                  className="modal__btn"
                >
                  Update
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default FormEdit;