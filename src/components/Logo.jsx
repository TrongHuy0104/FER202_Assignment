import { Link } from "react-router-dom";

function Logo() {
    return (
        <Link to="/" className="logo">
            <img
                src="./src/assets/icons/logo.svg"
                alt="grocerymart"
                className="logo__img top-bar__logo-img"
            />
            <h2 className="logo__title top-bar__logo-title">grocerymart</h2>
        </Link>
    );
}

export default Logo;
