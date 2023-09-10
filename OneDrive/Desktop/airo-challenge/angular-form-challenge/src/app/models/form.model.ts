export interface FieldErrors {
    [key: string]: string;
  }
  
export interface ErrorMessages {
    [key: string]: FieldErrors;
}

export interface UserFormData {
    firstName: string;
    lastName: string;
    email: string;
    subscription: 'Basic' | 'Advanced' | 'Pro';
    password: string;
    csvFile: string;
}