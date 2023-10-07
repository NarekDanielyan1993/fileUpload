import clsx from 'clsx';

function Field({ type, placeholder, variant, onChange, value, name }) {
    return (
        <input
            className={clsx(variants[variant])}
            placeholder={placeholder}
            value={value}
            name={name}
            type={type}
            onChange={onChange}
        />
    );
}

export default Field;
