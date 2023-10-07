const BaseBackdrop = ({
    children,
    isOpen,
    display = 'flex',
    justify = 'center',
    align = 'center'
}) => {
    return (
        isOpen && (
            <div
                className={`${display} z-[1000] justify-${justify} items-${align} fixed inset-0 bg-secondary-opacity`}>
                {children}
            </div>
        )
    );
};

export default BaseBackdrop;
