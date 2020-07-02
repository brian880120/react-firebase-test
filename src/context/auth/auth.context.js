import React, { useReducer } from 'react';
import AuthReducer, { initState } from './auth.reducer';

const [authState, dispatchAuthAction] = useReducer(AuthReducer, initState);

const AuthContext = React.createContext({
    authState,
    dispatchAuthAction,
});

export default AuthContext;
