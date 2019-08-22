import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdAddCircleOutline, MdChevronRight } from 'react-icons/md';

import { Container, Meetup } from './styles';

import { loadMeetupRequest } from '~/store/modules/meetup/actions';

export default function Dashboard() {
    const dispatch = useDispatch();
    const meetups = useSelector(state => state.meetup.meetups);

    useEffect(() => {
        dispatch(loadMeetupRequest());
    }, [dispatch]);

    return (
        <Container>
            <header>
                <strong>Meus meetups</strong>
                <Link to="/meetup/0">
                    <button type="button">
                        <MdAddCircleOutline color="#fff" size={20} />
                        Novo meetup
                    </button>
                </Link>
            </header>

            <ul>
                {meetups.map(meetup => (
                    <Link to={`/detalhes/${meetup.id}`} key={String(meetup.id)}>
                        <Meetup>
                            <strong>{meetup.title}</strong>
                            <span>
                                24 de Junho, às 20h
                                <MdChevronRight color="#fff" size={30} />
                            </span>
                        </Meetup>
                    </Link>
                ))}
            </ul>
        </Container>
    );
}
