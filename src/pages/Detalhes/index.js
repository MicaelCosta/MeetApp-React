import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { MdEdit, MdDeleteForever, MdEvent, MdPlace } from 'react-icons/md';

import { Container } from './styles';

import history from '~/services/history';
import { deleteMeetupRequest } from '~/store/modules/meetup/actions';

export default function Detalhes({ match }) {
    const dispatch = useDispatch();
    const { meetup_id } = match.params;
    const meetup = useSelector(state =>
        state.meetup.meetups.find(m => String(m.id) === meetup_id)
    );

    function handleDelete(id) {
        dispatch(deleteMeetupRequest(id));
    }

    if (!meetup) {
        toast.error('Meetup não encontrado!');
        history.push('/');
        return <Container />;
    }

    return (
        <Container>
            <header>
                <strong>{meetup.title}</strong>
                <div>
                    <Link to={`/meetup/${meetup.id}`}>
                        <button type="button" id="btnEdit">
                            <MdEdit color="#fff" size={20} />
                            Editar
                        </button>
                    </Link>

                    <button
                        type="button"
                        id="btnCancel"
                        onClick={() => handleDelete(meetup.id)}
                    >
                        <MdDeleteForever color="#fff" size={20} />
                        Cancelar
                    </button>
                </div>
            </header>

            <div>
                <img src={meetup.file.url} alt="MeetApp" />
            </div>

            <p>{meetup.description}</p>

            <footer>
                <span>
                    <MdEvent size={20} />
                    24 de Junho, às 20h
                </span>
                <span>
                    <MdPlace size={20} />
                    {meetup.location}
                </span>
            </footer>
        </Container>
    );
}

Detalhes.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            meetup_id: PropTypes.string,
        }),
    }).isRequired,
};
