import {
  Button,
  Checkbox,
  Form,
  Link,
  TextArea,
  TextInput,
} from '@carbon/react';
import React from 'react';
import { useForm } from 'react-hook-form';

import styles from './contactForm.module.scss';
import classNames from 'classnames';
import { ArrowRight } from '@carbon/icons-react';

type ContactFormProps = {
  className?: string;
};

const ContactForm: React.FC<ContactFormProps> = ({}) => {
  const { register } = useForm();

  return (
    <Form>
      <TextInput
        className={classNames(styles.field, styles['field--half-width'])}
        id="firstName"
        labelText="First name*"
        {...register('firstName', {
          required: 'Please enter your first name.',
        })}
      />
      <TextInput
        className={classNames(styles.field, styles['field--half-width'])}
        id="lastName"
        labelText="Last name*"
        {...register('lastName', {
          required: 'Please enter your last name.',
        })}
      />
      <TextInput
        className={classNames(styles.field, styles['field--half-width'])}
        id="email"
        labelText="Email address*"
        {...register('email', {
          required: 'Please enter your email address.',
        })}
      />
      <TextInput
        className={classNames(styles.field, styles['field--half-width'])}
        id="emailConfirm"
        labelText="Confirm email address*"
        {...register('emailConfirm', {
          required: 'Please confirm your email address.',
        })}
      />
      <TextInput
        className={styles.field}
        id="organization"
        labelText="Organization name*"
        {...register('organization', {
          required: 'Please enter your organization name.',
        })}
      />
      <TextArea
        className={classNames(styles.field, styles.textarea)}
        id="message"
        labelText="Message (optional):"
        {...register('message', {})}
      />
      <Checkbox
        className={classNames(styles.field, styles.acknowledge)}
        id="privacy"
        labelText={
          <>
            By submitting this form, I acknowledge that I have read and
            understand the <Link>Privacy Statement</Link>.
          </>
        }
        {...register('privacy', {
          required: 'You need to acknowledge the Privacy Statement to proceed.',
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
