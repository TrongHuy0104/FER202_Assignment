import { Link } from "react-router-dom";

function ProductItem({ product }) {
    return (
        <div className="col">
            <article className="product-card">
                <div className="product-card__thumb-wrap">
                    <Link to={`/product-detail?id=${product.id}`}>
                        <img
                            src={`${
                                product.image.includes("http://")
                                    ? product.image
                                    : `/src/assets/img/product/${product.image}`
                            }`}
                            alt=""
                            className="product-card__thumb"
                        />
                    </Link>
                </div>
                <h3 className="product-card__title">
                    <Link to={`product-detail?id=${product.id}`}>
                        <h3>{product.name}</h3>
                    </Link>
                </h3>
                <p className="product-card__branch">{product.description}</p>
                <div className="product-card__row">
                    <span className="product-card__price product-card__price--old">
                        {product.price}
                    </span>
                    <span className="product-card__price">
                        {product.currentPrice}
                    </span>
                </div>
            </article>
        </div>
    );
}

export default ProductItem;
