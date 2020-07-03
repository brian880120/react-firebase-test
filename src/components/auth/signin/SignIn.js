import React, { useContext } from 'react';
import useForm from '../../../common/hooks/useForm';
import { useHistory } from 'react-router-dom';
import AuthContext from '../../../context/auth/auth.context';
import { signIn } from '../../../context/auth/auth.service';

function SignIn() {
    const history = useHistory();

    const [values, handleChange] = useForm({
        email: '',
        password: '',
    });

    const { authDispatch } = useContext(AuthContext);

    const onSubmit = async (e) => {
        e.preventDefault();
        await signIn(values, authDispatch);
        history.push('/');
    };

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
