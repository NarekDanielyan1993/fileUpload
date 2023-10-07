export const VALIDATION_ERROR_MESSAGES = {
    required: 'This field is required',
    email: 'Invalid email',
    password: 'Password must be at least 6 characters long',
    invalid: 'Invalid input',
    passwordMatch: 'Password and confirm password does not match'
};

export const API_ERRORS_MESSAGES = {
    LOGIN: {
        SUCCESS: 'You have been successfully logged in'
    },
    SIGNUP: {
        SUCCESS: 'You have been successfully signed up'
    },
    DEFAULT: 'An unknown error occurred.'
};

export const FILE_ERRORS_MESSAGES = {
    MAX_SIZE: 'File size exceeds(Max: 5MB)',
    ALLOWED_FORMATS: 'Invalid file format(Allowed types: JPEG, PNG)',
    IMAGE_CROP: 'Something happened while cropping image.'
};
