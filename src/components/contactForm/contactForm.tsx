import React, { useCallback } from 'react';
import {
  Button,
  Checkbox,
  Form,
  Link,
  TextArea,
  TextInput,
} from '@carbon/react';
import classNames from 'classnames';
import { useForm } from 'react-hook-form';
import { ArrowRight } from '@carbon/icons-react';

import styles from './contactForm.module.scss';

const PRIVACY_STATEMENT_URL = '#'; // TODO
const INPUT_MAX_LENGTH = 100;
const MESSAGE_MAX_LENGTH = 1000;

type ContactFormProps = {
  className?: string;
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

const ContactForm: React.FC<ContactFormProps> = ({}) => {
  const { register, handleSubmit, formState } = useForm<ContactFormData>();

  const onSubmit = useCallback((values: ContactFormData) => {
    // TODO
  }, []);

  return (
    <Form className={styles.contactForm} onSubmit={handleSubmit(onSubmit)}>
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
      <Checkbox
        className={classNames(styles.field, styles.acknowledge)}
        id="privacy"
        labelText={
          <>
            By submitting this form, I acknowledge that I have read and
            understand the{' '}
            <Link
              className={styles.link}
              href={PRIVACY_STATEMENT_URL}
              target="_blank"
            >
              Privacy Statement
            </Link>
            .
          </>
        }
        invalid={!!formState.errors?.privacy}
        invalidText={formState.errors?.privacy?.message}
        {...register('privacy', {
          required: 'Please accept the Privacy Statement',
        })}
      />
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
