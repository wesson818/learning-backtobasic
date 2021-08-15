import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage, FieldArray, FastField } from 'formik'
// 1. Managing the form state
// 2. Handling form submission
// 3. Validation and error message
import * as Yup from 'yup'
import { TextError } from './TextError'

const initialValues = {
    email: 'wzhang@email.com',
    name: '',
    channel: '',
    comments: '',
    address: '',
    // nested object
    social: {
        facebook: '',
        twitter: ''
    },
    // array
    phoneNumbers: ['',''],
    phNumbers: ['']
}

const savedValues = {
    email: 'wzhang@email.com',
    name: 'Wen',
    channel: 'learn to basic',
    comments: 'this is good learn profile in github',
    address: '',
    social: {
        facebook: '',
        twitter: ''
    },
    phoneNumbers: ['',''],
    phNumbers: ['']
}

const onSubmit = (values, onSubmitProps) => {
    console.log('onSubmitProps', onSubmitProps)
    console.log('submit data', values)
    setTimeout(() => {
        onSubmitProps.setSubmitting(false)
        onSubmitProps.resetForm()
    }, 1000);
}

// Form level Yup validation
const validationSchema = Yup.object({
    email: Yup.string()
        .email('Invalid email format!')
        .required('Required!'),
    channel: Yup.string().required('Required!'),
    address: Yup.string().required('Required!')
})

// Field level custom validation
const validateComments = values => {
    let error
    if (!values) {
        error = 'Required'
    }
    return error
}

export const YoutubeForm = () => {
    const [formValues, setFormValues] = useState(null)
    return (
        <Formik
            initialValues={formValues || initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            // validateOnChange={false}
            // validateOnBlur={false}
            // validateOnMount
            enableReinitialize
        >
            {formik => {
                console.log('formik', formik)
                return (
                    <Form>
                        <div className='form-control'>
                            <label htmlFor='email'>Email*</label>
                            <Field type='email' id='email' name='email' />
                            {/* option 1: adding custom component to render ErrorMessage */}
                            <ErrorMessage name='email' component={TextError} />
                        </div>

                        <div className='form-control'>
                            <label htmlFor='name'>Name</label>
                            <Field type='text' id='name' name='name' />
                        </div>
                        
                        <div className='form-control'>
                            <label htmlFor='channel'>Channel*</label>
                            <Field type='text' id='channel' name='channel' placeholder='YouTube channel name' />
                            {/* option 2: using render props patten to ErrorMessage */}
                            <ErrorMessage name='channel'>
                                {errorMsg => <div className='error'>{errorMsg}</div>}
                            </ErrorMessage>
                        </div>

                        <div className='form-control'>
                            <label htmlFor='comments'>Comments*</label>
                            <Field as='textarea' id='comments' name='comments' validate={validateComments} />
                            <ErrorMessage name='comments' component={TextError} />
                        </div>

                        <div className='form-control'>
                            <label htmlFor='address'>Address*</label>
                            {/* FastField only re-render when itself changes */}
                            <FastField name='address'>
                                {/* can using render props way to hook with custom function/component */}
                                {props => {
                                    const { field, form, meta } = props
                                    console.log('props', props)
                                    return (
                                        <div>
                                            <input type='text' id='address' {...field} />
                                            {meta.touched && meta.error ? <div className='error'>{meta.error}</div> : null}
                                        </div>
                                    )
                                }}
                            </FastField>
                        </div>

                        <div className='form-control'>
                            <label htmlFor='facebook'>Facebook</label>
                            <Field type='text' id='facebook' name='social.facebook' />
                        </div>

                        <div className='form-control'>
                            <label htmlFor='twitter'>Twitter</label>
                            <Field type='text' id='twitter' name='social.twitter' />
                        </div>

                        <div className='form-control'>
                            <label htmlFor='phone1'>Phone 1</label>
                            <Field type='text' id='phone1' name='phoneNumbers[0]' />
                        </div>

                        <div className='form-control'>
                            <label htmlFor='phone2'>Phone 2</label>
                            <Field type='text' id='phone2' name='phoneNumbers[1]' />
                        </div>

                        {/* dynamic field rendering */}
                        <div className='form-control'>
                            <label>List of Phone Numbers</label>
                            <FieldArray name='phNumbers'>
                                {
                                    fieldArrayProps => {
                                        // console.log('fieldArrayProps', fieldArrayProps)
                                        const { push, remove, form } = fieldArrayProps
                                        const { values, errors } = form
                                        const { phNumbers } = values
                                        console.log('errors', errors)
                                        return <div>
                                            {
                                                phNumbers.map((phNumber, index) => {
                                                    return (
                                                        <div key={index}>
                                                            <Field name={`phNumbers_${index}`} />
                                                            {index > 0 && <button type='button' onClick={()=>remove(index)}> - </button>}
                                                            <button type='button' onClick={()=>push('')}> + </button>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    }
                                }
                            </FieldArray>
                        </div>

                        {/* manually triggering validation */}
                        <button type="button" onClick={()=>formik.validateField('comments')}>Validate comments</button>
                        <button type="button" onClick={()=>formik.validateForm()}>Validate all</button>
                        <button type="button" onClick={()=>formik.setFieldTouched('comments')}>Visit comments</button>
                        <button type="button" onClick={()=>formik.setTouched({
                            email: true,
                            channel: true,
                            address: true
                        })}>Visit fields</button>
                        <br />
                        {/* need add enableReinitialize in Formik attribute to load values */}
                        <button type="button" onClick={()=>setFormValues(savedValues)}>Load saved data</button>
                        <br />
                        <button type="reset">Reset</button> &nbsp;
                        <button type="submit" disabled={!formik.isValid || formik.isSubmitting}>Submit</button>
                        {/* isSubmitting: avoid double submitting */}
                    </Form>
                )
            }}
            
        </Formik>
    )
}
