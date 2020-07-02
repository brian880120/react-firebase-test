import React from 'react';
import useForm from '../../../common/hooks/useForm';

function SignUp() {
    const [values, handleChange] = useForm({
        email: '',
        password: '',
        lastName: '',
        firstName: '',
    });

    const onSubmit = () => {};

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
                    <label htmlFor="password">Email</label>
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
                        id="lastname"
                        name="lastname"
                        value={values.lastName}
                        onChange={handleChange}
                    />
                </div>
                <div className="input-field">
                    <label htmlFor="firstname">First Name</label>
                    <input type="text"
                        id="firstname"
                        name="firstname"
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
