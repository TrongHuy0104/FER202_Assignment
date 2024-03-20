function Button({ children, type, className, onClick, form }) {
    return (
        <button
            form={form}
            className={`btn ${type} ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
}

export default Button;
