export interface registrationFormValues {
  confirmPassword: string;
  email: string;
  fullname: string;
  password: string;
  police: boolean;
  phone_number?: string;
  code?: {
    label: string;
    value: string;
  };
}
