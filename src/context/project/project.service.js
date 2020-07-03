import AppFirebase from "../../config/firebase-config";

export const PROJECT_ACTION = {
    CREATE_PROJECT_SUCCESS: 'CREATE_PROJECT_SUCCESS',
    CREATE_PROJECT_FAILED: 'CREATE_PROJECT_FAILED',
    GET_PROJECTS_SUCCESS: 'GET_PROJECTS_SUCCESS',
    GET_PROJECTS_FAILED: 'GET_PROJECTS_FAILED',
}

export const getProjects = (dispatch) => {
    const db = AppFirebase.getFirestore();

    try {
        return db.collection('projects').onSnapshot(snapshot => {
            const projects = snapshot.docs.map(doc => {
                return {
                    id: doc.id,
                    ...doc.data(),
                };
            });
            dispatch({
                type: PROJECT_ACTION.GET_PROJECTS_SUCCESS,
                projects,
            });
        });

    } catch (err) {
        dispatch({
            type: PROJECT_ACTION.GET_PROJECTS_FAILED,
            err,
        });
    }
};

export const getProjectByID = async (id) => {
    const db = AppFirebase.getFirestore();

    try {
        const doc = await db.collection('projects').doc(id).get();
        return doc.data();
    } catch (err) {
        console.error(err);
    }
};

export const createProject = async (project, dispatch) => {
    const db = AppFirebase.getFirestore();

    try {
        await db.collection('projects').add({
            ...project,
            authorFirstName: 'Net',
            authorLastName: 'Ninja',
            authorId: 12345,
            createdAt: new Date(),
        });
    } catch (err) {
        dispatch({
            type: PROJECT_ACTION.CREATE_PROJECT_FAILED,
            err,
        });
    }
};
