import React from 'react'
import { Field, ErrorMessage } from 'formik'
import { TextError } from './TextError'

export const Radio = (props) => {
    const { label, name, options, ...rest } = props
    return (
        <div className='form-control'>
            <label>{label}</label>
            <Field name={name}>
                {({field}) => {
                    // console.log('radio field', field)
                    return options.map(option => {
                        return(
                            <React.Fragment key={option.key}>
                                <input 
                                    type='radio' 
                                    id={option.value} 
                                    {...field}
                                    {...rest}
                                    value={option.value}
                                    checked={field.value === option.value} 
                                />
                                <label className='inlineLabel' htmlFor={option.value}>{option.key}</label>&nbsp;&nbsp;
                            </React.Fragment>
                        )
                    })
                }}
            </Field>
            <ErrorMessage name={name} component={TextError} />
        </div>
    )
}
