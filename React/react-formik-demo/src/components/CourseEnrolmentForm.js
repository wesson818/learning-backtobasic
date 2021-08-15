import React from 'react'
import { Formik, Form } from 'formik'
import * as yup from 'yup'
import { FormikControl } from './FormikControl'

export const CourseEnrolmentForm = () => {

    const courseOptions = [
        {key: 'Select your course', value: ''},
        {key: 'React', value: 'react'},
        {key: 'Vue', value: 'vue'},
        {key: 'Angular', value: 'angular'},
    ]

    const skillSets = [
        {key: 'HTML', value: 'HTML'},
        {key: 'CSS', value: 'CSS'},
        {key: 'JavaScript', value: 'JavaScript'},
    ]

    const initialValues = {
        email: '',
        bio: '',
        course: '',
        skillSet: [],
        courseDate: ''
    }

    const validationSchema = yup.object({
        email: yup.string().required('Required!').email('Invalid email format!'),
        bio: yup.string().required('Required'),
        course: yup.string().required('Required'),
        courseDate: yup.date().required('Required').nullable()
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
                    <FormikControl control='textarea' label='Bio' name='bio' />
                    <FormikControl control='select' label='Course' name='course' options={courseOptions} />
                    <FormikControl control='checkbox' label='Skill Set' name='skillSet' options={skillSets} />
                    <FormikControl control='date' label='Course Date' name='courseDate' />
                    <button type='submit' disabled={!formik.isValid}>Enroll</button>
                </Form>
            )}
        </Formik>
    )
}
