import { FILE_ALLOWED_FORMATS } from '@/constant';

export const getDataFromLocalStorage = (key) => {
    const token = localStorage.getItem(key);
    return token;
};

export const isObjEmpty = (obj) => {
    return obj ? Object.keys(obj).length === 0 : {};
};

export const setInitialErrors = (defaultValues) => {
    return Object.keys(defaultValues).reduce((acc, current) => {
        if (
            typeof defaultValues[current] !== 'boolean' &&
            !isValidDate(defaultValues[current])
        ) {
            acc[current] = {
                message: '',
                isValid: false
            };
        }
        return acc;
    }, {});
};

const isValidDate = (value) => {
    return (
        Object.prototype.toString.call(value) === '[object Date]' &&
        !isNaN(value)
    );
};
export const imageToBase64 = (imageSrc, croppedAreaPercentages) => {
    return new Promise((resolve, reject) => {
        const canvas = document.createElement('canvas');
        const image = new Image();
        image.src = imageSrc;
        image.onload = () => {
            const width = (image.width * croppedAreaPercentages.width) / 100;
            const height = (image.height * croppedAreaPercentages.height) / 100;
            const x = (image.width * croppedAreaPercentages.x) / 100;
            const y = (image.height * croppedAreaPercentages.y) / 100;

            canvas.width = width;
            canvas.height = height;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(image, x, y, width, height, 0, 0, width, height);

            const croppedBase64 = canvas.toDataURL(FILE_ALLOWED_FORMATS[0]);
            resolve(croppedBase64);
        };
        image.onerror = (error) => {
            reject(error);
        };
    });
};
