import { useReducer } from 'react';
import AuthReducer, { authInitState } from '../auth/auth.reducer';
import ProjectReducer, { projectInitState } from '../project/project.reducer';
import UserProfileReducer, { userProfileInitState } from '../user-profile/userProfile.reducer';

const RootReducer = () => {
    const [authState, authDispatch] = useReducer(AuthReducer, authInitState);
    const [projectState, projectDispatch] = useReducer(ProjectReducer, projectInitState);
    const [profileState, profileDispatch] = useReducer(UserProfileReducer, userProfileInitState);

    return {
        state: {
            auth: authState,
            project: projectState,
            profile: profileState,
        },
        dispatch: {
            auth: authDispatch,
            project: projectDispatch,
            profile: profileDispatch,
        },
    };
};

export default RootReducer;
