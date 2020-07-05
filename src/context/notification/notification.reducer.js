import produce from 'immer';
import { NOTIFICAITON_ACTION } from './notification.service';

export const notificationInitState = {
    notifications: [],
};

const NotificationReducer = produce((draft, action) => {
    switch(action.type) {
        case NOTIFICAITON_ACTION.GET_NOTIFICATION_SUCCESS:
            draft.notifications = action.notifications
            return;
        case NOTIFICAITON_ACTION.GET_NOTIFICATION_FAILED:
            console.error(action.err);
            return;
        default:
            return draft;
    }
});

export default NotificationReducer;
