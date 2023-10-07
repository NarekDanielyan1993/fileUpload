import { API_ERRORS_MESSAGES } from '@/constant';

export class NetworkError extends Error {
    constructor(error) {
        super();
        this.name = 'NetworkError';
        if (error.message) {
            this.message = error.message;
            return;
        }
        if (error.error) {
            this.message = error.error;
            return;
        }
        if (error.errors) {
            if (typeof error.errors === 'object') {
                this.message = Object.entries(error.errors)
                    .map(([key, value]) => `${key}: ${value}`)
                    .join('\n');
                return;
            }
            this.message = error.errors;
            return;
        }
        this.message = API_ERRORS_MESSAGES.DEFAULT;
    }
}
