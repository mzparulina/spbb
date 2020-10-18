import React from 'react'
import { Formik } from 'formik'
import { useForm } from 'antd/lib/form/Form'
import * as Yup from 'yup'


// const validationSchema = Yup.object({
//     name:
// })
function SignUp () {
    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        username: ''
      }

      const validationSchema = Yup.object({
        firstName: Yup.string()
            .required('First name is required'),
        lastName: Yup.string()
            .required("Last name is required"),
        email: Yup.string()
            .email('invalid email format')
            .required('Email required')
      })

      //need to connect this to backend
      const onSubmit = values => {
          console.log('Form data', values)
      }
    
    return(
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
        {
            formik => {
                return (
                    <Form>
                        <FormikControl
                            control='input'
                            type='text'
                            label='firstName'
                            name='firstName'
                        />

                         <FormikControl
                            control='input'
                            type='text'
                            label='lastName'
                            name='lastName'
                        />
                         <FormikControl
                            control='input'
                            type='email'
                            label='Email'
                            name='email'
                        />

                        <button type='submit' disabled={!formik.isValid}>
                          Submit
                        </button>
                    </Form>
                )
            }
        }

        </Formik>

    )
   
}

export default SignUp