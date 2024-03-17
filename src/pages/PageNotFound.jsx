import { Link } from "react-router-dom";
import Button from "../components/Button";

function PageNotFound() {
    return (
        <main className="error">
            <img
                src="./src/assets/img/error/404.png"
                alt=""
                className="error__img"
            />
            <p className="error__message">
                Sorry, the page you’re looking for doesn’t exist. If you think
                something is broken, report a porblem
            </p>
            <Link to="products">
                <Button
                    type="btn--primary btn--rounded"
                    classNameName="error__cta"
                >
                    Go to Home
                </Button>
            </Link>
        </main>
    );
}

export default PageNotFound;
