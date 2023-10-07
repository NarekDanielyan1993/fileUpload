import Field from '@/components/ui/field';
import { setInitialErrors } from '@/utils';
import { useCallback, useMemo, useState } from 'react';
import { useFormValidation } from './useFormValidation';

function useForm({ defaultValues, validationSchema = {} }) {
    const [fields, setFields] = useState(defaultValues);
    const initialErrors = useMemo(
        () => setInitialErrors(defaultValues),
        [defaultValues]
    );
    const [errors, setErrors] = useState(initialErrors);
    const { validateField, isFormValid, validateFields } =
        useFormValidation(validationSchema);
    const handleFieldChange = useCallback(
        (e) => {
            const { name, value } = e.target;
            if (validationSchema[name]) {
                const validationError = validateField(
                    name,
                    value,
                    errors[name],
                    fields
                );
                setErrors((prev) => ({ ...prev, [name]: validationError }));
            }
            setFields((prev) => ({
                ...prev,
                [name]: typeof prev[name] === 'boolean' ? !prev[name] : value
            }));
        },
        [fields, errors]
    );

    const resetFields = useCallback(() => {
        setFields(defaultValues);
        setErrors(initialErrors);
    }, []);

    const handleSubmit = useCallback(
        (onSubmit) => async (e) => {
            e.preventDefault();

            const updatedErrors = validateFields(fields, errors);

            if (isFormValid(updatedErrors)) {
                onSubmit(fields);
            } else {
                setErrors(updatedErrors);
            }
        },
        [fields, errors, isFormValid]
    );

    const FormField = ({ name, type, label, iconPrepend }) => {
        return (
            <Field
                placeholder={label}
                type={type}
                name={name}
                label={label}
                {...(iconPrepend && { withIconPrepend: iconPrepend })}
                errorMessage={errors[name] ? errors[name]?.message : ''}
                value={fields[name]}
                onChange={handleFieldChange}
            />
        );
    };

    return {
        FormField,
        handleSubmit,
        resetFields,
        fieldsState: fields,
        isValid: isFormValid(errors)
    };
}

export default useForm;
