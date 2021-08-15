import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { FormikControl } from './FormikControl'

export const FormikContainer = () => {
    const initialValues = {
        email: '',
        comments: '',
        bloodType: '',
        gender: '',
        interests: [],
        birthDate: null
    }
    const bloodTypes = [
        { key: 'Select an option', value: ''},
        { key: 'A', value: 'a'},
        { key: 'B', value: 'b'},
        { key: 'AB', value: 'ab'},
        { key: 'O', value: 'o'}
    ]
    const gender = [
        {key: 'Male', value: 'male'},
        {key: 'Female', value: 'female'}
    ]
    const interestOptions = [
        { key: 'Reading', value: 'reading'},
        { key: 'Running', value: 'running'},
        { key: 'Dancing', value: 'dancing'},
    ]

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email format!').required('Required!'),
        bloodType: Yup.string().required('Required'),
        gender: Yup.string().required('Required'),
        interests: Yup.array().required('Required!'),
        birthDate: Yup.date().required('Required').nullable()
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
                    <FormikControl control='input' type='email' label='Email*' name='email' />
                    <FormikControl control='textarea' label='Comments' name='comments' />
                    <FormikControl control='select' options={bloodTypes} label='Blood Type' name='bloodType' />
                    <FormikControl control='radio' options={gender} label='Gender' name='gender' />
                    <FormikControl control='checkbox' options={interestOptions} label='Interests' name='interests' />
                    <FormikControl control='date' label='Birth Date' name='birthDate' />
                    <button type='submit'>Submit</button>
                </Form>
            )}
        </Formik>
    )
}
