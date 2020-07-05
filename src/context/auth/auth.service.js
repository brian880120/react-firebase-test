import AppFirebase from "../../config/firebase-config";
import { USERPROFILE_ACTION } from "../user-profile/userProfile.service";

export const AUTH_ACTION = {
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    LOGIN_FAILED: 'LOGIN_FAILED',
    LOGOUT_SUCCESS: 'LOGOUT_SUCCESS',
    LOGOUT_FAILED: 'LOGOUT_FAILED',
    SIGNUP_SUCCESS: 'SIGNUP_SUCCESS',
    SIGNUP_FAILED: 'SIGNUP_FAILED',
};

export const initAuth = async (user, dispatch) => {
    const db = AppFirebase.getFirestore();

    dispatch.auth({
        type: AUTH_ACTION.LOGIN_SUCCESS,
        user: {
            refreshToken: user.refreshToken,
            uid: user.uid,
        },
    });

    const doc = await db.collection('users').doc(user.uid).get();
    const profile = {
        ...doc.data(),
        id: user.uid,
    };

    dispatch.profile({
        type: USERPROFILE_ACTION.INIT_USERPROFILE,
        profile,
    });
};

export const signIn = async (credentials, dispatch) => {
    const auth = AppFirebase.getAuth();
    const db = AppFirebase.getFirestore();

    try {
        const result = await auth.signInWithEmailAndPassword(credentials.email, credentials.password);

        dispatch.auth({
            type: AUTH_ACTION.LOGIN_SUCCESS,
            user: result.user,
        });

        const doc = await db.collection('users').doc(result.user.uid).get();
        const profile = {
            ...doc.data(),
            id: result.user.uid,
        };

        dispatch.profile({
            type: USERPROFILE_ACTION.INIT_USERPROFILE,
            profile,
        });

        localStorage.setItem('uid', result.user.uid);
        localStorage.setItem('refresh_token', result.user.refreshToken);
    } catch (err) {
        console.error(err);
        dispatch.auth({
            type: AUTH_ACTION.LOGIN_FAILED,
        });
    }
};

export const signOut = async (dispatch) => {
    const auth = AppFirebase.getAuth();

    try {
        await auth.signOut();

        dispatch.auth({
            type: AUTH_ACTION.LOGOUT_SUCCESS,
        });

        localStorage.removeItem('uid');
        localStorage.removeItem('refresh_token');
    } catch (err) {
        dispatch.auth({
            type: AUTH_ACTION.LOGOUT_FAILED,
            err,
        });
    }
};

export const signup = async (newUser, dispatch) => {
    const auth = AppFirebase.getAuth();
    const db = AppFirebase.getFirestore();

    const firstName = newUser.firstName;
    const lastName = newUser.lastName;

    try {
        const result = await auth.createUserWithEmailAndPassword(newUser.email, newUser.password);

        const profile = {
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            initials: firstName[0] + lastName[0],
        };

        await db.collection('users').doc(result.user.uid).set(profile);

        profile.id = result.user.uid;

        dispatch.auth({
            type: AUTH_ACTION.SIGNUP_SUCCESS,
            user: result.user,
        });

        dispatch.profile({
            type: USERPROFILE_ACTION.INIT_USERPROFILE,
            profile,
        });

        localStorage.setItem('uid', result.user.uid);
        localStorage.setItem('refresh_token', result.user.refreshToken);
    } catch (err) {
        console.error(err.message);
        dispatch.auth({
            type: AUTH_ACTION.SIGNUP_FAILED,
            err,
        });
    }
};