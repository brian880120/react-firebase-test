import React, { useContext } from 'react';
import ProjectContext from '../../../context/project/project.context';
import useForm from '../../../common/hooks/useForm';
import { createProject } from '../../../context/project/project.service';
import withAuth from '../../../common/hoc/withAuth';

function CreateProject() {
    const [values, handleChange] = useForm({
        title: '',
        content: '',
    });

    const { projectDispatch } = useContext(ProjectContext);

    const onSubmit = (e) => {
        e.preventDefault();
        createProject(values, projectDispatch);
    };

    return (
        <div className="container">
            <form className="white" onSubmit={onSubmit}>
                <h5 className="grey-text text-darken-3">Create New Project</h5>
                <div className="input-field">
                    <label htmlFor="title">Project Title</label>
                    <input type="text"
                        id="title"
                        name="title"
                        value={values.title}
                        onChange={handleChange}
                    />
                </div>
                <div className="input-field">
                    <label htmlFor="content">Project Content</label>
                    <textarea className="materialize-textarea"
                        id="content"
                        name="content"
                        value={values.content}
                        onChange={handleChange}
                    />
                </div>
                <div className="input-field">
                    <button type="submit"
                        className="btn pink lighten-1 z-depth-0">
                        Create
                    </button>
                </div>
            </form>
        </div>
    );
}

export default withAuth(CreateProject);
