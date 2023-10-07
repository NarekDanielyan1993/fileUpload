const Loader = ({ size = 'md', color = 'primary' }) => {
    const sizeClasses = {
        sm: 'h-7 w-7',
        md: 'h-9 w-9',
        lg: 'h-11 w-11'
    };

    const colorClasses = {
        primary: 'border-primary',
        secondary: 'border-secondary',
        tertiary: 'border-tertiary'
    };

    const sizeClass = sizeClasses[size] || sizeClasses['md'];
    const colorClass = colorClasses[color] || colorClasses['primary'];

    return (
        <div
            className={`flex items-center bg-secondary-opacity justify-center z-[9999]  w-full h-full fixed left-0 right-0 top-0 bottom-0`}>
            <div
                className={`animate-spin rounded-full ${sizeClass} ${colorClass} border-t-4 border-solid`}></div>
        </div>
    );
};

export default Loader;
