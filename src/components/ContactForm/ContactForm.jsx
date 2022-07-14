import React, { Component } from 'react';
import * as yup from 'yup';
import { nanoid } from 'nanoid';
import { Formik, ErrorMessage } from 'formik';
import {
  ErrorText,
  FormEl,
  Input,
} from 'components/ContactForm/ContactForm.styled';
import { Label } from 'components/ui/Label/Label';
import { PrimaryButton } from 'components/ui/buttons/PrimaryButton';

const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.number().min(5).required(),
});

const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <ErrorText>{message}</ErrorText>}
    />
  );
};

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmit = (values, { resetForm }) => {
    const newContact = {
      id: nanoid(6),
      name: values.name,
      number: values.number,
    };
    this.props.onSubmit(newContact);
    resetForm();
  };

  render() {
    return (
      <Formik
        initialValues={this.state}
        validationSchema={schema}
        onSubmit={this.handleSubmit}
      >
        <FormEl>
          <Label>
            Name
            <Input type="text" name="name" />
            <FormError name="name" />
          </Label>
          <Label>
            Number
            <Input type="tel" name="number" />
            <FormError name="number" />
          </Label>

          <PrimaryButton type="submit">Add contact</PrimaryButton>
        </FormEl>
      </Formik>
    );
  }
}
