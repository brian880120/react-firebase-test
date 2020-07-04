import React, { useMemo, useContext } from 'react';
import moment from 'moment';
import withAuth from '../../../common/hoc/withAuth';
import RootContext from '../../../context/root/root.context';

function ProjectDetails(props) {
    const id = props.match.params.id;

    const {
        state: {
            project: { projects }
        }
    } = useContext(RootContext);

    const project = useMemo(() => {
        return projects.filter((item) => {
            return item.id === id;
        })[0];
    }, [projects, id]);

    const date = useMemo(() => {
        return moment(project.createdAt.toDate()).calendar();
    }, [project]);

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
                    <div>{date}</div>
                </div>
            </div>
        </div>
    );
}

export default withAuth(ProjectDetails);