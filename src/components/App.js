import React, { useMemo, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import AppFirebase from '../config/firebase-config';
import RootReducer from '../context/root/root.reducer';
import RootContext from '../context/root/root.context';
import { initAuth } from '../context/auth/auth.service';
import Navbar from './layout/navbar/Navbar';
import Dashboard from './dashboard/Dashboard';
import ProjectDetails from './projects/project-details/ProjectDetails';
import SignIn from './auth/signin/SignIn';
import SignUp from './auth/signup/SignUp';
import CreateProject from './projects/create-project/CreateProject';
import './App.css';

function App() {
    const { state, dispatch } = RootReducer();

    const contextValue = useMemo(() => {
        return { state, dispatch };
    }, [state, dispatch]);

    useEffect(() => {
        const auth = AppFirebase.getAuth();
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                initAuth(user, dispatch);
            }
        });

        return () => {
            unsubscribe();
        };
    }, [dispatch]);

    return (
        <RootContext.Provider value={contextValue}>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route path="/project/:id" component={ProjectDetails} />
                <Route path="/signin" component={SignIn} />
                <Route path="/signup" component={SignUp} />
                <Route path="/create" component={CreateProject} />
            </Switch>
        </RootContext.Provider>
    );
}

export default App;
