import AppFirebase from "../../config/firebase-config";

export const NOTIFICAITON_ACTION = {
    GET_NOTIFICATION_SUCCESS: 'GET_NOTIFICATION_SUCCESS',
    GET_NOTIFICATION_FAILED: 'GET_NOTIFICATION_FAILED',
};

export const getNotifications = (dispatch) => {
    const db = AppFirebase.getFirestore();
    try {
        return db.collection('notifications').orderBy('time', 'desc').limit(3).onSnapshot(snapshot => {
            const notifications = snapshot.docs.map(doc => {
                return {
                    id: doc.id,
                    ...doc.data(),
                };
            });

            dispatch({
                type: NOTIFICAITON_ACTION.GET_NOTIFICATION_SUCCESS,
                notifications,
            });
        });
    } catch (err) {
        dispatch({
            type: NOTIFICAITON_ACTION.GET_NOTIFICATION_FAILED,
            err,
        });
    }
};