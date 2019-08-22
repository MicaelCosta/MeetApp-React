import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { MdAddCircleOutline, MdChevronRight } from 'react-icons/md';

import { Container, Meetup } from './styles';

import { loadMeetupRequest } from '~/store/modules/meetup/actions';

export default function Dashboard() {
    const dispatch = useDispatch();
    const meetups = useSelector(state =>
        state.meetup.meetups.map(meetup => ({
            ...meetup,
            dateFormatted: format(
                parseISO(meetup.date_meetup),
                "dd 'de' MMMM 'às' HH'h'",
                { locale: pt }
            ),
        }))
    );

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
                                {meetup.dateFormatted}
                                <MdChevronRight color="#fff" size={30} />
                            </span>
                        </Meetup>
                    </Link>
                ))}
            </ul>
        </Container>
    );
}
