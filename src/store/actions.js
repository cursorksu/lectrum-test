
export const GET_FISH_REQUEST = 'GET_FISH_REQUEST';
export const GET_FISH_SUCCESS = 'GET_FISH_SUCCESS';
export const GET_FISH_FAILURE = 'GET_FISH_FAILURE';

export const LOGIN_REQUEST = 'LOG_IN_REQUEST';
export const LOGIN_SUCCESS = 'LOG_IN_SUCCESS';
export const REGISTER_INIT = 'REGISTER_INIT';
export const REGISTER_DONE = 'REGISTER_DONE';
export const SET_CURRENT_AUTH_STEP = 'SET_CURRENT_AUTH_STEP';

export const REGISTER_FAILURE = 'REGISTER_FAILURE';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const POST_REGISTER_REQUEST = 'POST_REGISTER_REQUEST';
export const POST_ENQUIRY_REQUEST = 'POST_ENQUIRY_REQUEST';
export const SAVE_ENQUIRY_STEP = 'SAVE_ENQUIRY_STEP';
export const POST_ENQUIRY_FAIL = 'POST_ENQUIRY_FAIL';
export const TOGGLE_LOGIN_MODAL = 'TOGGLE_LOGIN_MODAL';
export const TOGGLE_VERIFICATION_MODAL = 'TOGGLE_VERIFICATION_MODAL';
export const SET_VERIFICATION_MODAL = 'SET_VERIFICATION_MODAL';

// SECOND STEP

export function getFishRequest() {
    return {
        type: GET_FISH_REQUEST,
    };
}


export const toggleAuthSteps = (step) => ({
    type: SET_CURRENT_AUTH_STEP,
    payload: step,
});

export function registerInit() {
    return {
        type: REGISTER_INIT,
    };
}

export function registrationDone() {
    return {
        type: REGISTER_DONE,
    };
}

export function postRegisterAction(data, params='') {
    return {
        type: POST_REGISTER_REQUEST,
        data,
        params,
    };
}

export function postEnquiryRequest(payload) {
    return {
        type: POST_ENQUIRY_REQUEST,
        payload,
    };
}

export function postLoginRequest(payload) {
    return {
        type: LOGIN_REQUEST,
        payload,
    };
}


export function saveEnquiryStep(payload) {
    return {
        type: SAVE_ENQUIRY_STEP,
        payload,
    };
}

export function EnquiryStepFail(payload) {
    return {
        type: POST_ENQUIRY_FAIL,
        payload,
    };
}

export function clearLoginErrors(payload) {
    return {
        type: LOGIN_FAILURE,
        payload,
    };
}

export function clearRegisterErrors(payload) {
    return {
        type: REGISTER_FAILURE,
        payload,
    };
}
export function toggleLoginModal() {
    return {
        type: TOGGLE_LOGIN_MODAL
    };
}

export function toggleVerificationModal() {
    return {
        type: TOGGLE_VERIFICATION_MODAL
    };
}
export function setVerificationModal(payload) {
    return {
        type: SET_VERIFICATION_MODAL,
        payload
    };
}

export const GET_ALL_TOPICS_INIT = 'GET_ALL_TOPICS_INIT';
export const GET_ALL_TOPICS_SUCCESS = 'GET_ALL_TOPICS_SUCCESS';
export const GET_ALL_TOPICS_FAILURE = 'GET_ALL_TOPICS_FAILURE';