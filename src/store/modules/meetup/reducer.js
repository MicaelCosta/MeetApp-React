import produce from 'immer';

const INITIAL_STATE = {
    meetups: [],
    meetup: null,
};

export default function auth(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {
            case '@meetup/CREATE_MEETUP_SUCCEESS': {
                draft.meetup = action.payload.meetup;
                break;
            }
            case '@meetup/LOAD_MEETUP_SUCCESS': {
                draft.meetups = action.payload.meetups;
                break;
            }
            case '@meetup/UPDATE_MEETUP_SUCCEESS': {
                draft.meetup = action.payload.meetup;
                break;
            }
            default:
        }
    });
}
