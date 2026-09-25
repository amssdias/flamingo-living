export interface LeadFormValues {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  country: string;
  privacy: boolean;
}

export type LeadFormErrors = Partial<Record<keyof LeadFormValues, string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_PHONE_DIGITS = 7;

export function validateLead(values: LeadFormValues): LeadFormErrors {
  const errors: LeadFormErrors = {};
  if (!values.firstname.trim()) errors.firstname = 'Escribe tu nombre.';
  if (!values.lastname.trim()) errors.lastname = 'Escribe tus apellidos.';
  if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = 'Introduce un email válido, p. ej. nombre@correo.com.';
  }
  if (values.phone.replace(/\D/g, '').length < MIN_PHONE_DIGITS) {
    errors.phone = `Introduce un teléfono con al menos ${MIN_PHONE_DIGITS} dígitos.`;
  }
  if (!values.country.trim()) errors.country = 'Indica tu país de residencia.';
  if (!values.privacy) errors.privacy = 'Debes aceptar la política de privacidad para continuar.';
  return errors;
}
