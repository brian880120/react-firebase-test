import React, { useMemo } from 'react';
import moment from 'moment';

function ProjectSummary({ project }) {
    const { authorFirstName, authorLastName, createdAt } = project;

    const date = useMemo(() => {
        return moment(createdAt.toDate()).calendar();
    }, [createdAt]);

    return (
        <div className="card z-depth-0 project-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{project.title}</span>
                <p>Posted by {authorFirstName} {authorLastName} </p>
                <p className="grey-text">{date}</p>
            </div>
        </div>
    );
}

export default ProjectSummary;