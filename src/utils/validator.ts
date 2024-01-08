import ContactFormParams from '@type/contactFormParams';
import { NextApiRequest } from 'next';

export const validateContactForm = (
  body: NextApiRequest['body'],
): ContactFormParams | { error: string } => {
  try {
    const params = JSON.parse(body);
    if (
      !params.firstName ||
      !params.lastName ||
      !params.email ||
      !params.organization
    ) {
      throw new Error('required value missing');
    }
    return params as ContactFormParams;
  } catch (e) {
    console.error('[validateBody] Invalid request body:', body, e);
    return { error: String(e) };
  }
};

export const hasError = (
  b: ContactFormParams | { error: string },
): b is { error: string } => b.hasOwnProperty('error');
