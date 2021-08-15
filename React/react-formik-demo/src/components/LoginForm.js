import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { FormikControl } from './FormikControl'

export const LoginForm = () => {
    const initialValues = {
        email: '',
        password: ''
    }

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email format!').required('Required!'),
        password: Yup.string().required('Required')
    })

    const onSubmit = values => {
        console.log('submit values', values)
        // formatted date value to string value for DB
        console.log('saved values', JSON.parse(JSON.stringify(values)))
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {formik => (
                <Form>
                    <FormikControl control='chakraInput' type='email' label='Email*' name='email' />
                    <FormikControl control='chakraInput' type='password' label='Password*' name='password' />
                    <button type='submit'>Login</button>
                </Form>
            )}
        </Formik>
    )
}
