import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '~/services/history';
import api from '~/services/api';

import {
    loadMeetupSuccess,
    createMeetupSuccess,
    updateMeetupSuccess,
} from './actions';

export function* createMeetup({ payload }) {
    try {
        const {
            title,
            file_id,
            description,
            location,
            date_meetup,
        } = payload.data;

        const response = yield call(api.post, 'meetups', {
            title,
            file_id,
            description,
            location,
            date_meetup,
        });

        toast.success('Meetup criado com sucesso');

        yield put(createMeetupSuccess(response.data));

        history.push('/');
    } catch (err) {
        toast.error('Falha ao cadastrar meetup, verifique seus dados');
    }
}

export function* updateMeetup({ payload }) {
    try {
        const {
            id,
            title,
            file_id,
            description,
            location,
            date_meetup,
        } = payload.data;

        const response = yield call(api.put, `meetups/${id}`, {
            id,
            title,
            file_id,
            description,
            location,
            date_meetup,
        });

        toast.success('Meetup atualizado com sucesso');

        yield put(updateMeetupSuccess(response.data));

        history.push('/');
    } catch (err) {
        toast.error('Falha ao atualizar meetup, verifique seus dados');
    }
}

export function* loadMeetups({ payload }) {
    try {
        const { userId } = payload;

        const response = yield call(api.get, 'meetuporganization', { userId });

        yield put(loadMeetupSuccess(response.data));
    } catch (err) {
        toast.error('Falha ao buscar os meetups');
    }
}

export function* deleteMeetup({ payload }) {
    try {
        const { id } = payload;

        yield call(api.delete, `meetups/${id}`);

        toast.success('Meetup cancelado com sucesso');

        history.push('/');
    } catch (err) {
        toast.error('Falha ao cancelar meetup');
    }
}

export default all([
    takeLatest('@meetup/CREATE_MEETUP_REQUEST', createMeetup),
    takeLatest('@meetup/UPDATE_MEETUP_REQUEST', updateMeetup),
    takeLatest('@meetup/LOAD_MEETUP_REQUEST', loadMeetups),
    takeLatest('@meetup/DELETE_MEETUP_REQUEST', deleteMeetup),
]);
