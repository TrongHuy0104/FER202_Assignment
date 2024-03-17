function ProductItem() {
    return (
        <div className="col">
            <article className="product-card">
                <div className="product-card__thumb-wrap">
                    <a href="./product-detail.html">
                        <img
                            src="./src/assets/img/product/item-1.png"
                            alt=""
                            className="product-card__thumb"
                        />
                    </a>
                </div>
                <h3 className="product-card__title">
                    <a href="./product-detail.html">
                        Coffee Beans - Espresso Arabica and Robusta Beans
                    </a>
                </h3>
                <p className="product-card__branch">
                    "Core i5-1240P, Ram 16GB, SSD 512GB, màn hình 14 inch QHD
                    IPS, Win 11bản quyền, màu bạc"
                </p>
                <div className="product-card__row">
                    <span className="product-card__price">$47.00</span>
                    <span className="product-card__price product-card__price--old">
                        $47.00
                    </span>
                </div>
            </article>
        </div>
    );
}

export default ProductItem;
