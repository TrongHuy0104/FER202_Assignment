import Logo from "../components/Logo";
import Button from "../components/Button";

function Login() {
    return (
        <main className="auth">
            <div className="auth__content">
                <div className="auth__content-inner">
                    <Logo />
                    <h1 className="auth__heading">Hello!</h1>
                    <p className="auth__desc">
                        Welcome to sign in. As a returning customer, you have
                        access to your previously saved all information.
                    </p>
                    <form
                        action="./index-logined.html"
                        className="form auth__form"
                        id="sign-up-form"
                    >
                        <div className="form__group">
                            <div className="form__text-input">
                                <input
                                    type="text"
                                    placeholder="Username"
                                    className="form__input"
                                    name="username"
                                />
                                <img
                                    src="./src/assets/icons/letter.svg"
                                    alt=""
                                    className="form__input-icon"
                                />
                            </div>
                            <span className="form__message"></span>
                        </div>
                        <div className="form__group">
                            <div className="form__text-input">
                                <input
                                    id="password"
                                    type="password"
                                    placeholder="Password"
                                    className="form__input"
                                    name="password"
                                />
                                <img
                                    src="./src/assets/icons/eye.svg"
                                    alt=""
                                    className="form__input-icon"
                                    id="togglePassword"
                                />
                            </div>
                            <span className="form__message"></span>
                        </div>
                        <div className="form__group auth__btn-group">
                            <Button
                                type="btn--primary"
                                className="auth__btn form__submit-btn"
                            >
                                Login
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
}

export default Login;
