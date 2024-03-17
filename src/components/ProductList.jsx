import ProductItem from "./ProductItem";

function ProductList() {
    return (
        <main className="container home">
            <div className="home__container"></div>
            <section className="home__container">
                <div className="home__row">
                    <h2 className="home__heading">Product List</h2>
                </div>
                <div className="row row-cols-4 row-cols-lg-2 row-cols-md-1 g-3">
                    <ProductItem />
                </div>
            </section>
        </main>
    );
}

export default ProductList;
