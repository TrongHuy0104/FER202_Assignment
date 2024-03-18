function Button({ children, type, className, onClick }) {
    return <button className={`btn ${type} ${className}`} onClick={onClick}>{children}</button>;
}

export default Button;
