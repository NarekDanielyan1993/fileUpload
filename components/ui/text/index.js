const Text = ({
    as = 'p',
    color = 'primary',
    size = 'md',
    weight = 'normal',
    children,
    display = 'inline-block',
    className
}) => {
    const Tag = as;
    return (
        <Tag
            className={`${display} text-${size} text-${color} font-${weight} ${
                className ?? ''
            }`}>
            {children}
        </Tag>
    );
};

export default Text;
