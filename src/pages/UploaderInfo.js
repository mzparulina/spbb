import React from 'react'
import axios from 'axios'

import "antd/dist/antd.css";
import * as yup from 'yup'
import {  Formik   } from 'formik'
import {
    SubmitButton,
    Input,
    Form,
	FormItem,
	Cascader
  } from "formik-antd"
  
  import {  RightOutlined } from '@ant-design/icons';
  import history from "../utils/history"

  const initialValues = {
    firstName: '',
	lastName: '', 
	local: ''
  }

  const validationSchema = yup.object({
    firstName: yup.string()
        .required('First name is required'),
    lastName: yup.string()
		.required('Last name is required'),
	local: yup.string()
		.required('Local is required')
		.min(3, 'must have at least 3 characters')
  
  })

  //TODO: need to connect to backend
  const onSubmit = (values, actions) => {
	  console.log('Form data', values)
	  axios.post('https://5f8d309b4c15c40016a1d572.mockapi.io//uploadInfo', values )
	  .then(response => {
		  actions.setSubmitting(true)
		  history.push('/uploadfiles')
		  console.log('connected')
		  console.log(response.data)
	  })
	  .catch(error => {
		  console.log(error)
	  })
	  actions.setSubmitting(false)
  }


// const onChange = values => {
// 	console.log(values)
// }

const options = [
	{
	  value: 'northAmerica',
	  label: 'North America',
	  children: [
		{
		  value: 'usa',
		  label: 'USA',
		  children: [
			{
			  value: 'westUsa',
			  label: 'West USA',
			},
			{
				value: 'eastUsa',
				label: 'East USA',
			  }
		  ],
		  
		},
		{
			value: 'canada',
			label: 'Canada',
			children: [
			  {
				value: 'westCanada',
				label: 'West Canada',
			  },
			  {
				  value: 'eastCanada',
				  label: 'East Canada',
				}
			],
			
		  }
	  ],
	},
	{
	  value: 'other',
	  label: 'Others',
	  children: [
		{
		  value: 'nanjing',
		  label: 'Nanjing',
		  children: [
			{
			  value: 'zhonghuamen',
			  label: 'Zhong Hua Men',
			},
		  ],
		},
	  ],
	},
  ];

function UploaderInfo () {
    return(
        <div style={{
            marginTop: 80,
            maxWidth: 800,
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
						label="First Name"
						required={true}
						validate={validationSchema}
					>
						<Input name="firstName" placeholder="First Name" />
				</FormItem>
				<FormItem
						name="lastName"
						label="Last Name"
						required={true}
						validate={validationSchema}
					>
						<Input name="lastName" placeholder="Last Name" />
				</FormItem>
					<p>Choose Region, Division and District</p>
				<Cascader
					label="Division"
					options={options}
					name="cascader"
					placeholder="Region"
				/>

				<FormItem
                    name="local"
                    label="Local"
                    required={true}
                    validate={validationSchema}
                >
                    <Input name="local" placeholder="Local" />
              </FormItem>

				
                    <SubmitButton size={'small'} style={{ marginLeft: 200}} disabled={!formik.isValid}>
					<RightOutlined style={{ float: 'right', marginTop: 5 }}/>
                      Next
                    </SubmitButton>
					
                </Form>
            )
        }
    }

    </Formik>


    </div>
  )

}

export default UploaderInfo

