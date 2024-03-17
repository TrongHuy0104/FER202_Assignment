function Button({ children, type, className }) {
    return <button className={`btn ${type} ${className}`}>{children}</button>;
}

export default Button;
