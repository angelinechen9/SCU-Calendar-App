import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { TextField } from 'formik-material-ui';
import { InputLabel, Button } from '@material-ui/core';
import axios from 'axios';

const ScreenContainer = ({ children }) => (
  <View style={styles.container}>{children}</View>
);

export const CreateEvent = ({ navigation }) => {
  return (
    <div className="App">
      <Formik
        initialValues={{
          name: '',
          description: '',
          date: '',
          time: '',
          duration: '',
        }}
        validate={(values) => {
          const errors = {};
          if (!values.name) {
            errors.name = 'Required';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting, setStatus, resetForm }) => {
          axios
            .post(
              'https://a0o9ic8hrc.execute-api.us-east-1.amazonaws.com/test/events',
              values
            )
            .then((response) => {
              setSubmitting(false);
              setStatus({ success: true });
              resetForm();
            })
            .catch((error) => {
              console.log(error);
            });
        }}>
        {({ isSubmitting }) => (
          <ScreenContainer style={styles.container}>
            <Form>
              <Field
                component={TextField}
                type="text"
                name="name"
                placeholder="Name"
              />
              <br />
              <br />
              <Field
                component={TextField}
                type="text"
                name="description"
                placeholder="Description"
              />
              <br />
              <br />
              <InputLabel htmlFor="date">Date</InputLabel>
              <Field component={TextField} type="date" name="date" />
              <br />
              <br />
              <InputLabel htmlFor="time">Time</InputLabel>
              <Field component={TextField} type="time" name="time" />
              <br />
              <br />
              <Field
                component={TextField}
                type="text"
                name="duration"
                placeholder="Duration"
              />
              <br />
              <br />
              <Button
                variant="contained"
                color="primary"
                type="submit"
                disabled={isSubmitting}>
                Submit
              </Button>
            </Form>
          </ScreenContainer>
        )}
      </Formik>
    </div>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'top',
    paddingTop: 80,
    height: 1500,
  },
});

// export default CreateEvent;
