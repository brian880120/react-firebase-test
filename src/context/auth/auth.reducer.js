import produce from 'immer';
import { AUTH_ACTION } from "./auth.service";

export const authInitState = {
    authError: null,
    isAuthenticated: false,
    refreshToken: null,
    uid: null,
};

const AuthReducer = produce((draft, action) => {
    switch(action.type) {
        case AUTH_ACTION.LOGIN_SUCCESS:
            draft.authError = null;
            draft.isAuthenticated = true;
            draft.refreshToken = action.user.refreshToken;
            draft.uid = action.user.uid;
            return;
        case AUTH_ACTION.LOGIN_FAILED:
            draft.authError = 'login failed';
            return;
        case AUTH_ACTION.LOGOUT_SUCCESS:
            draft.authError = null;
            draft.isAuthenticated = false;
            draft.refreshToken = null;
            draft.uid = null;
            return;
        case AUTH_ACTION.LOGOUT_FAILED:
            draft.authError = action.err.message;
            return;
        case AUTH_ACTION.SIGNUP_SUCCESS:
            draft.isAuthenticated = true;
            draft.authError = null;
            return;
        case AUTH_ACTION.SIGNUP_FAILED:
            draft.authError = action.err.message;
            return;
        default:
            return draft;
    }
});

export default AuthReducer;
