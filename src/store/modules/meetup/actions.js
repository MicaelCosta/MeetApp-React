export function createMeetupRequest(data) {
    return {
        type: '@meetup/CREATE_MEETUP_REQUEST',
        payload: { data },
    };
}

export function createMeetupSuccess(meetup) {
    return {
        type: '@meetup/CREATE_MEETUP_SUCCESS',
        payload: { meetup },
    };
}

export function updateMeetupRequest(data) {
    return {
        type: '@meetup/UPDATE_MEETUP_REQUEST',
        payload: { data },
    };
}

export function updateMeetupSuccess(meetup) {
    return {
        type: '@meetup/UPDATE_MEETUP_SUCCESS',
        payload: { meetup },
    };
}

export function deleteMeetupRequest(id) {
    return {
        type: '@meetup/DELETE_MEETUP_REQUEST',
        payload: { id },
    };
}

export function loadMeetupRequest(userId) {
    return {
        type: '@meetup/LOAD_MEETUP_REQUEST',
        payload: { userId },
    };
}

export function loadMeetupSuccess(meetups) {
    return {
        type: '@meetup/LOAD_MEETUP_SUCCESS',
        payload: { meetups },
    };
}

export function meetupFailure() {
    return {
        type: '@auth/MEETUP_FAILURE',
    };
}
