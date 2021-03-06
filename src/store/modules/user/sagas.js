import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '~/services/history';
import api from '~/services/api';

import { updateProfileSuccess, updateProfileFaillure } from './actions';

export function* updateProfile({ payload }) {
    try {
        const { name, email, ...rest } = payload.data;

        const profile = {
            name,
            email,
            ...(rest.oldPassword ? rest : {}),
        };

        const response = yield call(api.put, 'users', profile);

        toast.success('Perfil atualizado com sucesso!');

        yield put(updateProfileSuccess(response.data));

        history.push('/');
    } catch (err) {
        toast.error('Erro ao atualizar perfil, confira seus dados!');

        yield put(updateProfileFaillure());
    }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
