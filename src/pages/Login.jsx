import Logo from "../components/Logo";
import Button from "../components/Button";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../features/userSlice";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";

function Login() {
    const [inputFields, setInputFields] = useState({
        username: "",
        password: "",
    });
    const [errors, setErrors] = useState({});
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [isAuth, setIsAuth] = useState(true);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user, isLoading, isAuthenticated } = useSelector(
        (store) => store.users
    );
    useEffect(() => {
        if (isAuthenticated) {
            if (user.role === "admin") {
                navigate("admin");
            }
            if (user.role === "user") {
                navigate("products");
            }
        }
    }, [isAuthenticated, navigate]);

    function handleChangeInput(e) {
        setErrors({});
        setInputFields({ ...inputFields, [e.target.name]: e.target.value });
    }

    const validateValues = (inputValues) => {
        let errors = {};
        if (!inputValues.username) {
            errors.username = "Please enter this field";
        }

        if (!inputValues.password) {
            errors.password = "Please enter this field";
        } else if (inputValues.password.length < 6) {
            errors.password = "Please enter at least 6 characters!";
        }
        return errors;
    };

    function handleSubmit(e) {
        e.preventDefault();
        const errorList = validateValues(inputFields);
        setErrors(errorList);

        if (Object.keys(errorList).length !== 0) return;

        const tempUser = {
            username: inputFields.username,
            password: inputFields.password,
        };
        dispatch(login(tempUser));

        isAuthenticated ? setIsAuth(true) : setIsAuth(false);
    }

    if (isLoading) return <Spinner />;
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
                    {!isAuth && (
                        <div className="auth__message message message--error">
                            Password or username is incorrect!
                        </div>
                    )}
                    <form
                        className="form auth__form"
                        id="sign-up-form"
                        onSubmit={handleSubmit}
                    >
                        <div className="form__group">
                            <div className="form__text-input">
                                <input
                                    type="text"
                                    placeholder="Username"
                                    className="form__input"
                                    name="username"
                                    value={inputFields.username}
                                    onChange={handleChangeInput}
                                />
                                <img
                                    src="./src/assets/icons/letter.svg"
                                    alt=""
                                    className="form__input-icon"
                                />
                            </div>
                            <span className="form__message">
                                {errors.username && errors.username}
                            </span>
                        </div>
                        <div className="form__group">
                            <div className="form__text-input">
                                <input
                                    id="password"
                                    type={`${
                                        isShowPassword ? "text" : "password"
                                    }`}
                                    placeholder="Password"
                                    className="form__input"
                                    name="password"
                                    value={inputFields.password}
                                    onChange={handleChangeInput}
                                />
                                <img
                                    src={`./src/assets/icons/${
                                        isShowPassword
                                            ? "eye-slash.svg"
                                            : "eye.svg"
                                    }`}
                                    alt=""
                                    className="form__input-icon"
                                    id="togglePassword"
                                    onClick={() =>
                                        setIsShowPassword(!isShowPassword)
                                    }
                                />
                            </div>
                            <span className="form__message">
                                {errors.password && errors.password}
                            </span>
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
