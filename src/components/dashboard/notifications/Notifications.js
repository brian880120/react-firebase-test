import React, { useContext, useEffect } from 'react';
import moment from 'moment';
import RootContext from '../../../context/root/root.context';
import { getNotifications } from '../../../context/notification/notification.service';

function Notifications() {
    const {
        state: {
            notification: { notifications },
        },
        dispatch,
    } = useContext(RootContext);

    useEffect(() => {
        const unsubscribe = getNotifications(dispatch.notification);

        return () => {
            unsubscribe();
        };
    }, [dispatch.notification]);

    return (
        <div className="section">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Notifications</span>
                    <ul className="notifications">
                        {
                            notifications.length && notifications.map(item => {
                                return (
                                    <li key={item.id}>
                                        <span className="pink-text">{item.user} </span>
                                        <span>{item.content}</span>
                                        <div className="grey-text note-date">
                                            {moment(item.time.toDate()).fromNow()}
                                        </div>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Notifications;