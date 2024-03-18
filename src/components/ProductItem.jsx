// import products from "../data/products";
// import "../assets/css/productList.css";
// function ProductItem() {
//   return (
//     <>
//       {products.map((product) => (
//         <div className="col" key={product.id}>
//           <article className="product-card">
//             <div className="card">
//               <div className="product-card__thumb-wrap">
//                 <a href="./product-detail">
//                   <img
//                     src={product.image}
//                     alt=""
//                     className="product-card__thumb"
//                   />
//                 </a>
//               </div>
//               <h3 className="product-card__title">
//                 <a href="./product-detail">{product.name}</a>
//               </h3>
//               <p className="product-card__branch">{product.description}</p>
//               <div className="product-card__row">
//                 <span className="product-card__price">
//                   {product.currentPrice}
//                 </span>
//                 <span className="product-card__price product-card__price--old">
//                   {product.oldPrice}
//                 </span>
//               </div>
//             </div>
//           </article>
//         </div>
//       ))}
//     </>
//   );
// }

// export default ProductItem;

// import products from "../data/products";
import "../assets/css/productList.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, productSelected } from "../features/productSlice";
import { dataReceived } from "../features/productSlice";

function ProductItem() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);

  useEffect(() => {
    dispatch(dataReceived());
  }, [dispatch]);
  const handleProductClick = (product) => {
    dispatch(productSelected(product));
  };
  return (
    <>
      {products.map((product) => {
        return (
          <>
            <div className="col" key={product.id}>
              <article className="product-card">
                <div className="card">
                  <div className="product-card__thumb-wrap">
                    <Link
                      to={`/product-detail/${product.id}`}
                      onClick={handleProductClick(product)}
                    >
                      <img
                        src={product.image}
                        alt=""
                        className="product-card__thumb"
                      />
                    </Link>
                  </div>
                  <h3 className="product-card__title">
                    <Link
                      to={`/product-detail/${product.id}`}
                      onClick={handleProductClick(product)}
                    >
                      {product.name}
                    </Link>
                  </h3>
                  <p className="product-card__branch">{product.description}</p>
                  <div className="product-card__row">
                    <span className="product-card__price">
                      {product.currentPrice}
                    </span>
                    <span className="product-card__price product-card__price--old">
                      {product.price}
                    </span>
                  </div>
                </div>
              </article>
            </div>
          </>
        );
      })}
    </>
  );
}

export default ProductItem;
