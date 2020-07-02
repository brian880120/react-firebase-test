import produce from 'immer';
import { AUTH_ACTION } from "./auth.service";

export const authInitState = {
    authError: null,
    isAuthenticated: false,
    refreshToken: null,
};

const AuthReducer = produce((draft, action) => {
    switch(action.type) {
        case AUTH_ACTION.LOGIN_SUCCESS:
            draft.authError = null;
            draft.isAuthenticated = true;
            draft.refreshToken = action.refreshToken;
            return;
        case AUTH_ACTION.LOGIN_FAILED:
            draft.authError = 'login failed';
            return;
        case AUTH_ACTION.LOGOUT_SUCCESS:
            draft.authError = null;
            draft.isAuthenticated = false;
            draft.refreshToken = null;
            return;
        case AUTH_ACTION.LOGOUT_FAILED:
            draft.authError = 'logout failed';
            return;
        default:
            return draft;
    }
});

export default AuthReducer;
