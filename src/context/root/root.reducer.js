import { useReducer } from 'react';
import AuthReducer, { authInitState } from '../auth/auth.reducer';
import ProjectReducer, { projectInitState } from '../project/project.reducer';
import UserProfileReducer, { userProfileInitState } from '../user-profile/userProfile.reducer';
import NotificationReducer, { notificationInitState } from '../notification/notification.reducer';

const RootReducer = () => {
    const [authState, authDispatch] = useReducer(AuthReducer, authInitState);
    const [projectState, projectDispatch] = useReducer(ProjectReducer, projectInitState);
    const [profileState, profileDispatch] = useReducer(UserProfileReducer, userProfileInitState);
    const [notificationState, notificationDispatch] = useReducer(NotificationReducer, notificationInitState);

    return {
        state: {
            auth: authState,
            project: projectState,
            profile: profileState,
            notification: notificationState,
        },
        dispatch: {
            auth: authDispatch,
            project: projectDispatch,
            profile: profileDispatch,
            notification: notificationDispatch,
        },
    };
};

export default RootReducer;
