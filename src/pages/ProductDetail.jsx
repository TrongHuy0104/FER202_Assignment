import Navbar from "../components/Navbar";

function ProductDetail() {
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
                                            src="./src/assets/img/product/item-1.png"
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
                                            Coffee Beans - Espresso Arabica and
                                            Robusta Beans
                                        </h1>
                                        <div className="row">
                                            <div className="col-5 col-xxl-6 col-xl-12">
                                                <div className="product-properties">
                                                    <div className="product-property">
                                                        <h4 className="product-property__title">
                                                            Descriptions
                                                        </h4>
                                                    </div>
                                                    <div className="product-property">
                                                        <h4 className="product-property__title">
                                                            (3.5) 1100 reviews
                                                        </h4>
                                                    </div>
                                                    <div className="product-property">
                                                        <h4 className="product-property__title">
                                                            (3.5) 1100 reviews
                                                        </h4>
                                                    </div>
                                                    <div className="product-property">
                                                        <h4 className="product-property__title">
                                                            (3.5) 1100 reviews
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
                                                            Price: 1000 (d)
                                                        </h4>
                                                    </div>
                                                    <div className="product-property">
                                                        <h4 className="product-property__title">
                                                            Current Price: 1000
                                                            (d)
                                                        </h4>
                                                    </div>
                                                    <div className="product-property">
                                                        <h4 className="product-property__title">
                                                            Discount: 20%
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
