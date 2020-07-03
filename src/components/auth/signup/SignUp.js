import React, { useContext } from 'react';
import useForm from '../../../common/hooks/useForm';
import { useHistory } from 'react-router-dom';
import AuthContext from '../../../context/auth/auth.context';
import { signup } from '../../../context/auth/auth.service';

function SignUp() {
    const history = useHistory();

    const [values, handleChange] = useForm({
        email: '',
        password: '',
        lastName: '',
        firstName: '',
    });

    const { authDispatch } = useContext(AuthContext);

    const onSubmit = async (e) => {
        e.preventDefault();
        await signup(values, authDispatch);
        history.push('/');
    };

    return (
        <div className="container">
            <form className="white" onSubmit={onSubmit}>
                <h5 className="grey-text text-darken-3">Sign Up</h5>
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
                    <label htmlFor="password">Password</label>
                    <input type="password"
                        id="password"
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                    />
                </div>
                <div className="input-field">
                    <label htmlFor="lastname">Last Name</label>
                    <input type="text"
                        id="lastName"
                        name="lastName"
                        value={values.lastName}
                        onChange={handleChange}
                    />
                </div>
                <div className="input-field">
                    <label htmlFor="firstname">First Name</label>
                    <input type="text"
                        id="firstName"
                        name="firstName"
                        value={values.firstName}
                        onChange={handleChange}
                    />
                </div>
                <div className="input-field">
                    <button type="submit"
                        className="btn pink lighten-1 z-depth-0">
                        Sign Up
                    </button>
                </div>
            </form>
        </div>
    );
}

export default SignUp;
