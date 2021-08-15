import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { FormikControl } from './FormikControl'

export const RegisterForm = () => {
    const contactTypes = [
        {key: 'Email', value: 'Email'},
        {key: 'Telephone', value: 'Telephone'},
    ]

    const initialValues = {
        email: '',
        password: '',
        passwordConfirm: '',
        contactType: '',
        phoneNumber: ''
    }

    const validationSchema = Yup.object({
        email: Yup
            .string()
            .required('Required!')
            .email('Invalid email format!'),
        password: Yup
            .string()
            .required('Required')
            .matches(
                /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
            ),
        passwordConfirm: Yup
            .string()
            .required('Required')
            .oneOf([Yup.ref('password')], 'Passwords does not match'),  
        contactType: Yup
            .string()
            .required('Required'),
        phoneNumber: Yup
            .string()
            // conditional validation
            .when('contactType', {
                is: 'Telephone',
                then: Yup.string().required('Required')
            })
    })

    const onSubmit = values => {
        console.log('submit values', values)
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {formik => (
                <Form>
                    <FormikControl control='input' type='email' label='Email' name='email' />
                    <FormikControl control='input' type='password' label='Password' name='password' />
                    <FormikControl control='input' type='password' label='Confirm Password*' name='passwordConfirm' />
                    <FormikControl control='radio' options={contactTypes} label='Mode of contact' name='contactType' />
                    <FormikControl control='input' type='text' label='Phone' name='phoneNumber' />
                    <button type='submit' disabled={!formik.isValid}>Register</button>
                </Form>
            )}
        </Formik>
    )
}
