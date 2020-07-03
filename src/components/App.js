import React, { useMemo, useReducer, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import AuthReducer, { authInitState } from '../context/auth/auth.reducer';
import ProjectReducer, { projectInitState } from '../context/project/project.reducer';
import AuthContext from '../context/auth/auth.context';
import ProjectContext from '../context/project/project.context';
import { initAuth } from '../context/auth/auth.service';
import Navbar from './layout/navbar/Navbar';
import Dashboard from './dashboard/Dashboard';
import ProjectDetails from './projects/project-details/ProjectDetails';
import SignIn from './auth/signin/SignIn';
import SignUp from './auth/signup/SignUp';
import CreateProject from './projects/create-project/CreateProject';
import './App.css';

function App() {
    const [projectState, projectDispatch] = useReducer(ProjectReducer, projectInitState);
    const [authState, authDispatch] = useReducer(AuthReducer, authInitState);

    const projectContextValue = useMemo(() => {
        return { projectState, projectDispatch };
    }, [projectState, projectDispatch]);

    const authContextValue = useMemo(() => {
        return { authState, authDispatch };
    }, [authState, authDispatch]);

    useEffect(() => {
        initAuth(authDispatch);
    }, []);

    return (
        <AuthContext.Provider value={authContextValue}>
            <ProjectContext.Provider value={projectContextValue}>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Dashboard} />
                    <Route path="/project/:id" component={ProjectDetails} />
                    <Route path="/signin" component={SignIn} />
                    <Route path="/signup" component={SignUp} />
                    <Route path="/create" component={CreateProject} />
                </Switch>
            </ProjectContext.Provider>
        </AuthContext.Provider>
    );
}

export default App;
