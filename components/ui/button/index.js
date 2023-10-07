const Button = ({
    variant = 'primary',
    children,
    width = 'full',
    type,
    disabled = false,
    className,
    style,
    onClick,
    form
}) => {
    const variants = {
        primary:
            'text-white py-5 rounded-50 shadow-md capitalize bg-gradient-orange-purple',
        secondary:
            'text-white py-5 rounded-50 shadow-md capitalize bg-gradient-blue-purple',
        disabled:
            'text-white py-5 rounded-50 shadow-md capitalize opacity-60 cursor-not-allowed',
        text: 'w-fit text-primary text-md bg-transparent font-semibold',
        cancel: 'py-5 rounded-3xl bg-gradient-blue-white text-secondary'
    };

    return (
        <button
            {...(form && { form: form })}
            onClick={onClick}
            disabled={disabled}
            type={type}
            style={style}
            className={`
            w-${width} 
            ${variants[variant]} 
            ${disabled && variants.disabled} 
            ${className ?? className} 
            `}>
            {children}
        </button>
    );
};

export default Button;
