import React from 'react'

import "antd/dist/antd.css";
import * as yup from 'yup'
import {  Formik   } from 'formik'
import {
    SubmitButton,
    Input,
    Form,
    FormItem,
  } from "formik-antd"


  const initialValues = {
    firstName: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: ''
  }

  const validationSchema = yup.object({
    firstName: yup.string()
        .required('First name is required'),
    email: yup.string()
        .email('invalid email format')
        .required('Email required'),
    username: yup.string()
        .required('Create a username')
        .min(5, 'must be at least 5 characters'),
    password: yup
        .string()
        .required("Please enter your password")
        .matches(
          /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
          "Password must contain at least 8 characters, one uppercase, one number and one special case character"
        ),
    confirmPassword: yup
        .string()
        .required("Please confirm your password")
        .when("password", {
          is: password => (password && password.length > 0 ? true : false),
          then: yup.string().oneOf([yup.ref("password")], "Password doesn't match")
        })
  })

  //need to connect this to backend
  const onSubmit = (values, actions) => {
      console.log('Form data', values)
      actions.setSubmitting(false)
  }

function SignUp () {
    return(
        <div style={{
            marginTop: 80,
            maxWidth: 700,
            marginRight: "auto",
            marginLeft: "auto",
          }}>
<Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
    >
    {
        formik => {
            return (
                <Form >
                <FormItem
                    name="firstName"
                    label="Firstname"
                    required={true}
                    validate={validationSchema}
                >
                    <Input name="firstName" placeholder="Firstname" />
              </FormItem>
              <FormItem 
                name="email"
                label="Email" 
                required={true}
                validate={validationSchema}
                >
                    <Input name="email" placeholder="Email" />
              </FormItem>

              <FormItem
                    name="username"
                    label="Username"
                    required={true}
                    validate={validationSchema}
                >
                    <Input name="username" placeholder="Username" />
              </FormItem>

              <FormItem
                name="password"
                label="Password"
                required={true}
                validate={validationSchema}
                >
                    <Input.Password name="password" placeholder="Password" />
              </FormItem>

              <FormItem
                name="confirmPassword"
                label="Confirm Password"
                required={true}
                validate={validationSchema}>
                    <Input.Password name="confirmPassword" placeholder="Confirm Password" />
              </FormItem>
             
                  
                    <SubmitButton style={{ marginLeft: 125}} disabled={!formik.isValid}>
                      Submit
                    </SubmitButton>
                    
                </Form>
            )
        }
    }

    </Formik>


    </div>
  )

}

export default SignUp

