import React from 'react'
import { useFormik } from 'formik'
// 1. Managing the form state
// 2. Handling form submission
// 3. Validation and error message
import * as Yup from 'yup'

const initialValues = {
    email: '',
    name: '',
    channel: ''
}

const onSubmit = values => {
    console.log('submit data', values)
}

const validate = values => {
    let errors = {}

    if (!values.email) {
        errors.email = 'Required'
    } else if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(values.email)) {
        errors.email = 'Invalid email format'
    }
    if (!values.channel) {
        errors.channel = 'Required'
    }
    return errors
}

const validationSchema = Yup.object({
    email: Yup.string()
        .email('Invalid email format!')
        .required('Required!'),
    channel: Yup.string().required('Required!')
})

export const YoutubeForm = () => {

    const formik = useFormik({
        initialValues,
        onSubmit,
        // validate
        validationSchema
    })
    // console.log('formik values', formik.values)
    // console.log('formik errors', formik.errors)
    console.log('formik touched', formik.touched)

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div className='form-control'>
                    <label htmlFor='email'>Email*</label>
                    <input 
                        type='email' 
                        id='email' 
                        name='email' 
                        onChange={formik.handleChange} 
                        onBlur={formik.handleBlur}
                        value={formik.values.email} 
                    />
                    {formik.touched.email && formik.errors.email ? (
                        <div className='error'>{formik.errors.email}</div>
                    ) : null}
                </div>

                <div className='form-control'>
                    <label htmlFor='name'>Name</label>
                    <input 
                        type='text' 
                        id='name' 
                        name='name' 
                        onChange={formik.handleChange} 
                        onBlur={formik.handleBlur}
                        value={formik.values.name} 
                    />
                </div>
                
                <div className='form-control'>
                    <label htmlFor='channel'>Channel*</label>
                    <input
                        type='text'
                        id='channel'
                        name='channel'
                        placeholder='YouTube channel name'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.channel}
                    />
                    {formik.touched.channel && formik.errors.channel ? (
                        <div className='error'>{formik.errors.channel}</div>
                    ) : null}
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
