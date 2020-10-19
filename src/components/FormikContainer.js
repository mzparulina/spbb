import React from 'react'
import { Formik, Form} from 'formik'
import * as yup from 'yup'
import FormikControl from './FormikControl'
function FormikContainer() {
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
    const onSubmit = values => console.log('Form data', values)
    return (
        <div>
            <Formik
                initialValues = {initialValues}
                validationSchema= {validationSchema}
                onSubmit={onSubmit}
            > 
                {formik => (
                    <Form>
                    <FormikControl
                        control='input'
                        type='text'
                        label='First Name'
                        name='firstName'
                    />
                        <button type='submit'> Submit</button>
                    </Form>
                )}
            
            </Formik>
        </div>
    )
}

export default FormikContainer
