import React, {useState}from 'react'


import {Input, Button, Form as FormA  } from 'antd'
import "antd/dist/antd.css";
import * as yup from 'yup'
import {
    Formik,
    Form,
    Field,
    ErrorMessage,
    FieldArray,
    FastField,
    useFormik,
    withFormik,
    FormikErrors,
     FormikProps
  } from 'formik'
import { render } from 'react-dom';

//   import { Form as FormA, SubmitButton, ResetButton /* ... */ } from 'formik-antd'

const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };


  const initialValues = {
    firstName: '',
    email: '',
    username: ''
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

  //need to connect this to backend
  const onSubmit = values => {
      console.log('Form data', values)
  }

  

function SignUp () {
    return(
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            > 
 { props=>(
          <Form> 
       
          <FormA.Item>
                <Input name="email" 
                placeholder="Email"
                value ={props.values.email}
                onChange={props.handleChange}
                onBlue={props.handleBlur}
                />
              </FormA.Item>


            <div className='form-control'>
              <label htmlFor='name'>First Name</label>
              <Field 
                type='text'
                id='firstName'
                name='firstName'
                />
              <ErrorMessage name='firstName' />
            </div>

            <div className='form-control'>
              <label htmlFor='email'>Email</label>
              <Field 
                type='email'
                id='email'
                name='email'
                />
              <ErrorMessage name='email' />
            </div>


            <div className='form-control'>
              <label htmlFor='password'>Password</label>
              <Field 
                type='password'
                id='password'
                name='password'
                />
              <ErrorMessage name='password' />
            </div>
            
            <div className='form-control'>
              <label htmlFor='text'>Confirm Password</label>
              <Field 
                type='password'
                id='confirmPassword'
                name='confirmPassword'
                />
              <ErrorMessage name='confirmPassword' />
            </div>

            <Button type='primary' htmlType='submit' >Submit</Button>




          </Form>
       ) }
      
    </Formik>
   
  )

   }

export default SignUp


{/* // </Formik>/Formik>return( */}
//     <Formik
//         initialValues={initialValues}
//         validationSchema={validationSchema}
//         onSubmit={onSubmit}
//     >
//     {
//         formik => {
//             return (
//                 <Form>
//                     <FormikControl
//                         control='input'
//                         type='text'
//                         label='First Name'
//                         name='firstName'
//                     />
//                      <FormikControl
//                         control='input'
//                         type='email'
//                         label='Email'
//                         name='email'
//                     />
//                     <FormikControl
//                         control='input'
//                         type='password'
//                         label='Password'
//                         name='password'
//                     />
//                     <FormikControl
//                         control='input'
//                         type='password'
//                         label='Confirm Password'
//                         name='confirmPassword'
//                     />
//                     <button type='submit' disabled={!formik.isValid}>
//                       Submit
//                     </button>
//                 </Form>
//             )
//         }
//     }

//     </Formik>