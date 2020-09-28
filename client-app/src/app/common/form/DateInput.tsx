import React from 'react'
import { FieldRenderProps } from 'react-final-form';
import { FormFieldProps, Form, Label } from 'semantic-ui-react'
import { DateTimePicker } from 'react-widgets'

interface IProps extends FieldRenderProps<any, HTMLElement>, FormFieldProps { }


const DateInput: React.FC<IProps> = (props) => {
    const {
        input,
        width,
        placeholder,
        date = false,
        time = false,
        meta: { touched, error },
        ...rest
    } = props;
    return (
        <Form.Field error={touched && !!error} width={width}>
            <DateTimePicker
                placeholder={placeholder}
                value={input.value || null}
                onChange={input.onChange}
                date={date}
                time={time}
                onKeyDown={(e) => e.preventDefault()}
                onBlur={input.onBlur}
                {...rest}
            />
            {touched && error && (
                <Label basic color='red'>
                    {error}
                </Label>
            )}
        </Form.Field>
    )
}

export default DateInput
