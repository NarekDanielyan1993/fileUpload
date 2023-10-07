import clsx from 'clsx';

const ButtonGroup = ({
    children,
    gap = 2,
    display = 'flex',
    direction = 'row'
}) => {
    return (
        <div
            className={clsx(
                `${display}`,
                `gap-${gap} 
                flex-${direction}`
            )}>
            {children}
        </div>
    );
};

export default ButtonGroup;
