import React, { useMemo, useReducer } from 'react';
import { Switch, Route } from 'react-router-dom';
import StoreContext from '../context/store.context';
import Navbar from './layout/navbar/Navbar';
import Dashboard from './dashboard/Dashboard';
import ProjectDetails from './projects/project-details/ProjectDetails';
import SignIn from './auth/signin/SignIn';
import SignUp from './auth/signup/SignUp';
import CreateProject from './projects/create-project/CreateProject';
import './App.css';
import ProjectReducer, { projectInitState } from '../context/project/project.reducer';

function App() {
    const [projectState, projectDispatch] = useReducer(ProjectReducer, projectInitState);

    const value = useMemo(() => {
        return { projectState, projectDispatch };
    }, [projectState, projectDispatch]);

    return (
        <StoreContext.Provider value={value}>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route path="/project/:id" component={ProjectDetails} />
                <Route path="/signin" component={SignIn} />
                <Route path="/signup" component={SignUp} />
                <Route path="/create" component={CreateProject} />
            </Switch>
        </StoreContext.Provider>
    );
}

export default App;
