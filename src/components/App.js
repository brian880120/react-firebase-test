import React from 'react';
import { Switch, Route } from 'react-router-dom';
import StoreContext from '../context/store.context';
import RootReducer from '../context/root.reducer';
import Navbar from './layout/navbar/Navbar';
import Dashboard from './dashboard/Dashboard';
import ProjectDetails from './projects/project-details/ProjectDetails';
import SignIn from './auth/signin/SignIn';
import SignUp from './auth/signup/SignUp';
import CreateProject from './projects/create-project/CreateProject';
import './App.css';

function App() {
    const value = RootReducer();

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
