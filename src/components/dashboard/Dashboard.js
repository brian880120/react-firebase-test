import React, { useContext, useEffect } from 'react';
import ProjectContext from '../../context/project/project.context';
import { getProjects } from '../../context/project/project.service';
import Notifications from './notifications/Notifications';
import ProjectList from '../projects/project-list/ProjectList';

function Dashboard() {
    const { projectState, projectDispatch } = useContext(ProjectContext);
    const { projects } = projectState;

    useEffect(() => {
        getProjects(projectDispatch);
    }, [projectDispatch]);

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

export default Dashboard;
