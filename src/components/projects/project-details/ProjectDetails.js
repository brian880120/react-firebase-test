import React, { useEffect, useState } from 'react';
import { getProjectByID } from '../../../context/project/project.service';
import withAuth from '../../../common/hoc/withAuth';

function ProjectDetails(props) {
    const id = props.match.params.id;

    const [project, setProject] = useState({});

    useEffect(() => {
        getProjectByID(id).then(project => {
            setProject({
                ...project,
            });
        });
    }, [id]);

    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">
                        Project Title - {project.title}
                    </span>
                    <p>{project.content}</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by {project.authorFirstName} {project.authorLastName}</div>
                    <div>3rd September, 2am</div>
                </div>
            </div>
        </div>
    );
}

export default withAuth(ProjectDetails);