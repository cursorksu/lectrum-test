import { SET_USER_DATA } from '../constants';

const user = {
    email: '',
    firstName: '',
    lastName: '',
    password: '',
};

const userReducer = (state = user, { type, payload }) => {
    if (type === SET_USER_DATA) {
        return payload;
    } else return state;
};

export default userReducer;