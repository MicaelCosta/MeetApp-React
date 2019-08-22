import React from 'react';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { MdAddCircleOutline } from 'react-icons/md';

import { Container } from './styles';

import BannerInput from './BannerInput';
import DatePicker from './DatePicker';

import {
    createMeetupRequest,
    updateMeetupRequest,
} from '~/store/modules/meetup/actions';

const schema = Yup.object().shape({
    title: Yup.string().required('O título é um campo obrigatório'),
    file_id: Yup.number(),
    description: Yup.string().required('A descrição é um campo obrigatório'),
    location: Yup.string().required('A localização é um campo obrigatório'),
    date_meetup: Yup.date().required('A data é um obrigatório'),
});

export default function Meetup({ match }) {
    const { meetup_id } = match.params;
    const meetup = useSelector(state =>
        state.meetup.meetups.find(m => String(m.id) === meetup_id)
    );
    const dispatch = useDispatch();

    function handleSubmit(data) {
        if (meetup) {
            dispatch(updateMeetupRequest(data));
        } else {
            dispatch(createMeetupRequest(data));
        }
    }

    return (
        <Container>
            <Form schema={schema} initialData={meetup} onSubmit={handleSubmit}>
                <BannerInput name="file_id" />

                <Input name="title" placeholder="Título do Meetup" />

                <Input
                    id="description"
                    name="description"
                    placeholder="Descrição do Meetup"
                    multiline={2}
                />

                {<DatePicker name="date_meetup" placeholder="Data do meetup" />}

                <Input name="location" placeholder="Localização" />

                <button type="submit">
                    <MdAddCircleOutline size={20} color="#fff" />
                    Salvar meetup
                </button>
            </Form>
        </Container>
    );
}

Meetup.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            meetup_id: PropTypes.string,
        }),
    }).isRequired,
};
