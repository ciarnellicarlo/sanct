import { ErrorMessages } from '../models/form.model';

export const FORM_ERROR_MESSAGES: ErrorMessages = {
    firstName: {
        required: 'First name is required.',
        alphabetOnly: 'First name can not contain special characters.'
    },
    lastName: {
        required: 'Last name is required.',
        alphabetOnly: 'Last name can not contain special characters.'
    },
    email: {
        required: 'Email is required.',
        email: 'Please enter a valid email.'
    },
    password: {
        required: 'Password is required.',
        minlength: 'Password should be at least 8 characters.',
        invalidPassword: 'Password should have at least one character and one special character.'
    },
    csvFile: {
        required: 'CSV file is required.'
    },
    invalidForm: {
        required: 'Form is invalid. Please correct the following errors:'
    }
};