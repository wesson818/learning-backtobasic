import React from 'react'
import { Checkbox } from './Checkbox';
import { Input } from './Input';
import { Radio } from './Radio';
import { Select } from './Select';
import { Textarea } from './Textarea';
import { DatePicker } from './DatePicker';
import { ChakraInput } from './ChakraInput';

export const FormikControl = (props) => {
    const { control, ...rest } = props
    switch (control) {
        case 'input':
            return <Input {...rest} />
        case 'textarea':
            // return <Input as='textarea' {...rest} />
            return <Textarea {...rest} />
        case 'select':
            return <Select {...rest} />
        case 'radio':
            return <Radio {...rest} />
        case 'checkbox':
            return <Checkbox {...rest} />
        case 'date':
            return <DatePicker {...rest} />
        case 'chakraInput':
            return <ChakraInput {...rest} />
        default:
            return null;
    }
}
