import produce from 'immer';
import { USERPROFILE_ACTION } from './userProfile.service';

export const userProfileInitState = {
    firstName: '',
    lastName: '',
    initials: '',
};

const UserProfileReducer = produce((draft, action) => {
    switch (action.type) {
        case USERPROFILE_ACTION.INIT_USERPROFILE:
            draft.firstName = action.profile.firstName;
            draft.lastName = action.profile.lastName;
            draft.initials = action.profile.initials;
            return;
        default:
            return;
    }
});

export default UserProfileReducer ;
