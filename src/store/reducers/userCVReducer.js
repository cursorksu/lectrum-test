import { SET_USER_CV_DATA } from '../constants';

const userCV = {
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    phone: '',
};

const userReducer = (state = userCV, { type, payload }) => {
    if (type === SET_USER_CV_DATA) {
        return {...userCV, payload};
    } else return state;
};

export default userCVReducer;