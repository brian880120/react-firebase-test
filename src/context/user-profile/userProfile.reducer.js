import produce from 'immer';
import { USERPROFILE_ACTION } from './userProfile.service';

export const userProfileInitState = {
    id: '',
    firstName: '',
    lastName: '',
    initials: '',
};

const UserProfileReducer = produce((draft, action) => {
    switch (action.type) {
        case USERPROFILE_ACTION.INIT_USERPROFILE:
            const { id, firstName, lastName, initials } = action.profile;
            draft.id = id;
            draft.firstName = firstName;
            draft.lastName = lastName;
            draft.initials = initials;
            return;
        default:
            return;
    }
});

export default UserProfileReducer ;
