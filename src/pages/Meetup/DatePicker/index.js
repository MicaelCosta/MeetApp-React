import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ReactDatePicker from 'react-datepicker';
import { parseISO } from 'date-fns';

import { useField } from '@rocketseat/unform';
import { Container } from './styles';

import 'react-datepicker/dist/react-datepicker.css';

export default function DatePicker({ name, placeholder }) {
    const ref = useRef(null);
    const { fieldName, registerField, defaultValue, error } = useField(name);
    const [selected, setSelected] = useState(
        defaultValue && parseISO(defaultValue)
    );

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: ref.current,
            path: 'props.selected',
            clearValue: pickerRef => {
                pickerRef.clear();
            },
        });
  }, [ref.current, fieldName]); // eslint-disable-line

    return (
        <Container>
            <ReactDatePicker
                placeholderText={placeholder}
                name={fieldName}
                selected={selected}
                dateFormat="dd/MM/yyyy HH:mm"
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={60}
                onChange={date => setSelected(date)}
                ref={ref}
                minDate={new Date()}
            />
            {error && <span>{error}</span>}
        </Container>
    );
}

DatePicker.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
};

DatePicker.defaultProps = {
    placeholder: '',
};
