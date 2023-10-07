import {
    FILE_ALLOWED_FORMATS,
    FILE_MAX_SIZE,
    VALIDATION_ERROR_MESSAGES
} from '@/constant';

export const emailSchema = () => {
    return {
        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        message: VALIDATION_ERROR_MESSAGES.email
    };
};

export const passwordSchema = (message) => {
    return {
        value: '^.{6,}$',
        message: message || VALIDATION_ERROR_MESSAGES.password
    };
};

export const isRequiredSchema = () => {
    return {
        value: true,
        message: VALIDATION_ERROR_MESSAGES.required
    };
};

export const loginValidationSchema = {
    email: {
        pattern: emailSchema(),
        required: isRequiredSchema()
    },
    password: {
        pattern: passwordSchema(),
        required: isRequiredSchema()
    }
};

export const signUpValidationSchema = {
    email: {
        pattern: emailSchema(),
        required: isRequiredSchema()
    },
    password: {
        pattern: passwordSchema(),
        required: isRequiredSchema()
    },
    confirmPassword: {
        pattern: passwordSchema(),
        required: isRequiredSchema(),
        custom: {
            linkField: {
                value: 'password',
                message: VALIDATION_ERROR_MESSAGES.passwordMatch
            }
        }
    }
};

export const validateField =
    (validationRules) => (fieldName, value, errObj) => {
        const errors = { ...errObj };
        const rules = validationRules[fieldName];
        if (rules?.required && !value) {
            errors[fieldName].message =
                rules.required.message || VALIDATION_ERROR_MESSAGES.required;
            errors[fieldName].isValid = false;
        } else {
            errors[fieldName].isValid = true;
            errors[fieldName].message = '';
        }

        if (
            rules?.pattern &&
            rules?.pattern?.rule &&
            !new RegExp(rules.pattern.rule).test(value)
        ) {
            errors[fieldName].message =
                rules.pattern.message || VALIDATION_ERROR_MESSAGES.invalid;
            errors[fieldName].isValid = false;
        } else {
            errors[fieldName].isValid = true;
            errors[fieldName].message = '';
        }
        return errors;
    };

export const validateFile = (file, type) => {
    switch (type) {
        case 'size': {
            if (file.size > FILE_MAX_SIZE) {
                return false;
            }
            return true;
        }
        case 'format': {
            if (!FILE_ALLOWED_FORMATS.includes(file.type)) {
                return false;
            }
            return true;
        }
    }
};
