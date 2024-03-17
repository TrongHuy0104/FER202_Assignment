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

import products from "../data/products";
import "../assets/css/productList.css";
import { Link } from "react-router-dom";
function ProductItem() {
  return (
    <>
      {products.map((product) => (
        <div className="col" key={product.id}>
          <article className="product-card">
            <div className="card">
              <div className="product-card__thumb-wrap">
                <Link to={`/product-detail/${product.id}`}>
                  <img
                    src={product.image}
                    alt=""
                    className="product-card__thumb"
                  />
                </Link>
              </div>
              <h3 className="product-card__title">
                <Link to={`/product-detail/${product.id}`}>{product.name}</Link>
              </h3>
              <p className="product-card__branch">{product.description}</p>
              <div className="product-card__row">
                <span className="product-card__price">
                  {product.currentPrice}
                </span>
                <span className="product-card__price product-card__price--old">
                  {product.oldPrice}
                </span>
              </div>
            </div>
          </article>
        </div>
      ))}
    </>
  );
}

export default ProductItem;
