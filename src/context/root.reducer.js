import { useReducer } from 'react';
import ProejctReducer, { projectInitState } from './project/project.reducer';
import AuthReducer, { authInitState } from './auth/auth.reducer';

const RootReducer = () => {
    const [projectState, projectDispatch] = useReducer(ProejctReducer, projectInitState);
    const [authState, authDispatch] = useReducer(AuthReducer, authInitState);

    return {
        projectState,
        projectDispatch,
        authState,
        authDispatch,
    };
};

export default RootReducer;
