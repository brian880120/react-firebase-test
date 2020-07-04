import React, { useContext } from 'react';
import RootContext from '../../../context/root/root.context';
import useForm from '../../../common/hooks/useForm';
import { useHistory } from 'react-router-dom';
import { createProject } from '../../../context/project/project.service';
import withAuth from '../../../common/hoc/withAuth';

function CreateProject() {
    const history = useHistory();

    const [values, handleChange] = useForm({
        title: '',
        content: '',
    });

    const { dispatch } = useContext(RootContext);

    const onSubmit = async (e) => {
        e.preventDefault();
        await createProject(values, dispatch.project);
        history.push('/');
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
