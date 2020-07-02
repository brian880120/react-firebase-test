import produce from 'immer';
import { PROJECT_ACTION } from "./project.service";

export const projectInitState = {
    projects: []
};

const ProjectReducer = produce((draft, action) => {
    switch(action.type) {
        case PROJECT_ACTION.CREATE_PROJECT_SUCCESS:
            draft.projects.push(action.project);
            return;
        case PROJECT_ACTION.CREATE_PROJECT_FAILED:
            console.error(action.err);
            return draft;
        case PROJECT_ACTION.GET_PROJECTS_SUCCESS:
            draft.projects = action.projects;
            return;
        case PROJECT_ACTION.GET_PROJECTS_FAILED:
            console.error(action.err);
            return;
        default:
            return draft;
    }
});

export default ProjectReducer;
