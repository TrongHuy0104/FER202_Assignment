import { useSearchParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";

function ProductDetail() {
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");
    const { products } = useSelector((store) => store.products);
    const currentProduct = products.at(id - 1);
    function convertToNumber(value) {
        return parseFloat(value.replace(/\./g, ""));
    }
    return (
        <div>
            <Navbar />
            <main className="product-page">
                <div className="container">
                    <div className="product-container prod-info-content">
                        <div className="row">
                            <div className="col-5 col-xl-6 col-lg-12">
                                <div className="product-preview">
                                    <div className="product-preview__item">
                                        <img
                                            src={`./src/assets/img/product/${currentProduct.image}`}
                                            alt=""
                                            className="product-preview__img js-slideshow-thumb"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-7 col-xl-6 col-lg-12">
                                <form action="">
                                    <section className="product-info">
                                        <h1 className="product-info__heading">
                                            {currentProduct.name}
                                        </h1>
                                        <div className="row">
                                            <div className="col-5 col-xxl-6 col-xl-12">
                                                <div className="product-properties">
                                                    <div className="product-property">
                                                        <h4 className="product-property__title">
                                                            Description
                                                        </h4>
                                                    </div>
                                                    <div className="product-property">
                                                        <h4 className="product-property__title">
                                                            {
                                                                currentProduct.description
                                                            }
                                                        </h4>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-7 col-xxl-6 col-xl-12">
                                                <div className="product-properties">
                                                    <div className="product-property">
                                                        <h4 className="product-property__title">
                                                            Price
                                                        </h4>
                                                    </div>
                                                    <div className="product-property">
                                                        <h4 className="product-property__title">
                                                            Price:{" "}
                                                            {
                                                                currentProduct.currentPrice
                                                            }
                                                            {"  "}
                                                            (d)
                                                        </h4>
                                                    </div>
                                                    <div className="product-property">
                                                        <h4 className="product-property__title">
                                                            Current Price:{" "}
                                                            {
                                                                currentProduct.price
                                                            }
                                                            (d)
                                                        </h4>
                                                    </div>
                                                    <div className="product-property">
                                                        <h4 className="product-property__title">
                                                            Discount:{" "}
                                                            {Math.round(
                                                                (1 -
                                                                    convertToNumber(
                                                                        currentProduct.currentPrice
                                                                    ) /
                                                                        convertToNumber(
                                                                            currentProduct.price
                                                                        )) *
                                                                    100
                                                            )}
                                                            %
                                                        </h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default ProductDetail;
