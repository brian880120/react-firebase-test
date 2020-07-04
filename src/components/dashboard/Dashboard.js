import React, { useContext, useEffect } from 'react';
import { getProjects } from '../../context/project/project.service';
import withAuth from '../../common/hoc/withAuth';
import Notifications from './notifications/Notifications';
import ProjectList from '../projects/project-list/ProjectList';
import RootContext from '../../context/root/root.context';

function Dashboard() {
    const {
        state: {
            project: { projects },
        },
        dispatch,
    } = useContext(RootContext);

    useEffect(() => {
        const unsubscribe = getProjects(dispatch.project);

        return () => {
            unsubscribe();
        };
    }, [dispatch.project]);

    return (
        <div className="dashboard container">
            <div className="row">
                <div className="col s12 m6">
                    <ProjectList projects={projects} />
                </div>
                <div className="col s12 m5 offset-m1">
                    <Notifications />
                </div>
            </div>
        </div>
    );
}

export default withAuth(Dashboard);

