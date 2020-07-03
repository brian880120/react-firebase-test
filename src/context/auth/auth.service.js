import AppFirebase from "../../config/firebase-config";

export const AUTH_ACTION = {
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    LOGIN_FAILED: 'LOGIN_FAILED',
    LOGOUT_SUCCESS: 'LOGOUT_SUCCESS',
    LOGOUT_FAILED: 'LOGOUT_FAILED',
};

export const initAuth = (user, dispatch) => {
    dispatch({
        type: AUTH_ACTION.LOGIN_SUCCESS,
        user: {
            refreshToken: user.refreshToken,
            uid: user.uid,
        },
    });
};

export const signIn = async (credentials, dispatch) => {
    const auth = AppFirebase.getFirebase().auth();

    try {
        const result = await auth.signInWithEmailAndPassword(credentials.email, credentials.password);

        dispatch({
            type: AUTH_ACTION.LOGIN_SUCCESS,
            user: result.user,
        });

        localStorage.setItem('uid', result.user.uid);
        localStorage.setItem('refresh_token', result.user.refreshToken);
    } catch (err) {
        console.error(err);
        dispatch({
            type: AUTH_ACTION.LOGIN_FAILED,
        });
    }
};

export const signOut = async (dispatch) => {
    const auth = AppFirebase.getFirebase().auth();

    try {
        await auth.signOut();

        dispatch({
            type: AUTH_ACTION.LOGOUT_SUCCESS,
        });

        localStorage.removeItem('uid');
        localStorage.removeItem('refresh_token');
    } catch (err) {
        console.error(err);
        dispatch({
            type: AUTH_ACTION.LOGOUT_FAILED,
        });
    }
};