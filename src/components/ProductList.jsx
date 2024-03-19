import { useDispatch, useSelector } from "react-redux";
import ProductItem from "./ProductItem";
import Spinner from "./Spinner";
import { useEffect } from "react";
import { dataReceived } from "../features/productSlice";

function ProductList() {
    const { isLoading, products } = useSelector((store) => store.products);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(dataReceived());
    }, [dispatch]);
    return (
        <main className="container home">
            {isLoading && <Spinner />}
            <section className="home__container">
                <div className="home__row">
                    <h2 className="home__heading">Product List</h2>
                </div>
                <div className="row row-cols-4 row-cols-lg-2 row-cols-md-1 g-3">
                    {products.map((product) => (
                        <ProductItem product={product} key={product.id} />
                    ))}
                </div>
            </section>
        </main>
    );
}

export default ProductList;
