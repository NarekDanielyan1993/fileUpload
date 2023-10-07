import { VALIDATION_ERROR_MESSAGES } from '@/constant';
import { useCallback } from 'react';

export const useFormValidation = (validationRules) => {
    const validateField = useCallback(
        (fieldName, value, fieldError, fieldValues) => {
            const fieldErr = { ...fieldError };
            console.log(fieldErr);
            const rules = validationRules[fieldName];
            fieldErr.isValid = true;
            fieldErr.message = '';
            if (rules?.required?.value && !value) {
                fieldErr.message =
                    rules.required.message ||
                    VALIDATION_ERROR_MESSAGES.required;
                fieldErr.isValid = false;
            } else if (
                rules?.pattern &&
                rules?.pattern?.value &&
                !new RegExp(rules.pattern.value).test(value)
            ) {
                fieldErr.message =
                    rules.pattern.message || VALIDATION_ERROR_MESSAGES.invalid;
                fieldErr.isValid = false;
            } else if (
                rules?.custom?.linkField &&
                value !== fieldValues[rules?.custom.linkField.value]
            ) {
                fieldErr.message =
                    rules?.custom.linkField.message ||
                    VALIDATION_ERROR_MESSAGES.passwordMatch;
                fieldErr.isValid = false;
            }
            return fieldErr;
        },
        [validationRules]
    );
    const validateFields = useCallback((fields, errorsObj) => {
        const updatedErrorsObj = { ...errorsObj };

        for (const fieldName in fields) {
            if (fields.hasOwnProperty(fieldName) && fieldName in errorsObj) {
                const fieldError = validateField(
                    fieldName,
                    fields[fieldName],
                    updatedErrorsObj[fieldName],
                    fields
                );
                updatedErrorsObj[fieldName] = fieldError;
            }
        }

        return updatedErrorsObj;
    }, []);

    const isFormValid = useCallback((errorObj) => {
        return Object.keys(errorObj).every((field) => errorObj[field].isValid);
    }, []);

    return { validateField, validateFields, isFormValid };
};
