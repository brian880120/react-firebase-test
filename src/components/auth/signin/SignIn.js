import React, { useContext } from 'react';
import useForm from '../../../common/hooks/useForm';
import { useHistory, Redirect } from 'react-router-dom';
import RootContext from '../../../context/root/root.context';
import { signIn } from '../../../context/auth/auth.service';

function SignIn() {
    const history = useHistory();

    const [values, handleChange] = useForm({
        email: '',
        password: '',
    });

    const {
        state: { auth },
        dispatch,
    } = useContext(RootContext);

    const onSubmit = async (e) => {
        e.preventDefault();
        await signIn(values, dispatch);
        history.push('/');
    };

    if (auth.isAuthenticated) {
        return <Redirect to='/' />
    }

    return (
        <div className="container">
            <form className="white" onSubmit={onSubmit}>
                <h5 className="grey-text text-darken-3">Sign In</h5>
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input type="email"
                        id="email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="input-field">
                    <label htmlFor="password">Email</label>
                    <input type="password"
                        id="password"
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                    />
                </div>
                <div className="input-field">
                    <button type="submit"
                        className="btn pink lighten-1 z-depth-0">
                        Login
                    </button>
                </div>
            </form>
        </div>
    );
}

export default SignIn;
