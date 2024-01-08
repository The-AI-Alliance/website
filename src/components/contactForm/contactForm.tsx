import React, { useCallback } from 'react';
import { Button, Form, TextArea, TextInput } from '@carbon/react';
import classNames from 'classnames';
import { useForm } from 'react-hook-form';
import { ArrowRight } from '@carbon/icons-react';
import ContactFormParams from '@type/contactFormParams';

import styles from './contactForm.module.scss';

const INPUT_MAX_LENGTH = 100;
const MESSAGE_MAX_LENGTH = 1000;

export type ContactFormProps = {
  className?: string;
  onSubmit: (params: ContactFormParams) => Promise<void>;
};

type ContactFormData = {
  firstName: string;
  lastName: string;
  email: string;
  emailConfirm: string;
  organization: string;
  message?: string;
  privacy: boolean;
};

const isEmail = (value: string) =>
  /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(value);

const consentText = `The AI Alliance is committed to protecting and respecting your privacy, and we’ll only use your personal information to contact you upon submission of this form.
By submitting the preceding form, you consent to allow IBM to store and process the personal information submitted to provide the content requested.`;

const ContactForm: React.FC<ContactFormProps> = ({ className, onSubmit }) => {
  const { register, handleSubmit, formState } = useForm<ContactFormData>();

  const handleSubmitForm = useCallback(
    ({
      firstName,
      lastName,
      email,
      organization,
      message,
    }: ContactFormData) => {
      firstName &&
        lastName &&
        email &&
        organization &&
        onSubmit({
          firstName,
          lastName,
          email,
          organization,
          message,
          consentText,
        });
    },
    [onSubmit],
  );

  return (
    <Form
      className={classNames(styles.contactForm, className)}
      onSubmit={handleSubmit(handleSubmitForm)}
    >
      <TextInput
        className={classNames(styles.field, styles['field--half-width'])}
        id="firstName"
        labelText="First name*"
        placeholder="Johnny"
        maxLength={INPUT_MAX_LENGTH}
        invalid={!!formState.errors?.firstName}
        invalidText={formState.errors?.firstName?.message}
        {...register('firstName', {
          required: 'Please enter your first name.',
        })}
      />
      <TextInput
        className={classNames(styles.field, styles['field--half-width'])}
        id="lastName"
        labelText="Last name*"
        placeholder="Appleseed"
        maxLength={INPUT_MAX_LENGTH}
        invalid={!!formState.errors?.lastName}
        invalidText={formState.errors?.lastName?.message}
        {...register('lastName', {
          required: 'Please enter your last name.',
        })}
      />
      <TextInput
        className={classNames(styles.field, styles['field--half-width'])}
        id="email"
        labelText="Email address*"
        placeholder="appleseed@business.com"
        maxLength={INPUT_MAX_LENGTH}
        invalid={!!formState.errors?.email}
        invalidText={formState.errors?.email?.message}
        {...register('email', {
          required: 'Please enter your email address.',
          validate: {
            isEmail: value =>
              isEmail(value) ? true : 'Entered email is not valid',
          },
        })}
      />
      <TextInput
        className={classNames(styles.field, styles['field--half-width'])}
        id="emailConfirm"
        labelText="Confirm email address*"
        placeholder="appleseed@business.com"
        maxLength={INPUT_MAX_LENGTH}
        invalid={!!formState.errors?.emailConfirm}
        invalidText={formState.errors?.emailConfirm?.message}
        {...register('emailConfirm', {
          required: 'Please confirm your email address.',
          validate: {
            isEmail: value =>
              isEmail(value) ? true : 'Entered email is not valid',
            matchEmail: (value, allValues) =>
              value === allValues.email ? true : "Entered emails don't match",
          },
        })}
      />
      <TextInput
        className={styles.field}
        id="organization"
        labelText="Organization name*"
        placeholder="Business name"
        maxLength={INPUT_MAX_LENGTH}
        invalid={!!formState.errors?.organization}
        invalidText={formState.errors?.organization?.message}
        {...register('organization', {
          required: 'Please enter your organization name.',
        })}
      />
      <TextArea
        className={classNames(styles.field, styles.textarea)}
        id="message"
        labelText="Message (optional):"
        placeholder="Type your message here..."
        maxLength={MESSAGE_MAX_LENGTH}
        {...register('message', {})}
      />
      <div
        className={classNames(styles.field, styles.acknowledge, styles.test)}
      >
        {consentText.split('\n').map((paragraph, idx) => (
          <p key={idx}>{paragraph}</p>
        ))}
      </div>
      <Button
        className={styles.submitBtn}
        kind="primary"
        type="submit"
        renderIcon={() => <ArrowRight />}
      >
        Submit
      </Button>
    </Form>
  );
};

export default ContactForm;
