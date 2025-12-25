import { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../context/AuthContext';

const Register = () => {
    const { createUser } = use(AuthContext);
    
    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log({ name, photo, email, password })
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage);
            })

    }
    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <form onSubmit={handleRegister} className="card-body">
                    <h2 className="text-2xl font-semibold text-center py-4">Register your account</h2>
                    <fieldset className="fieldset">
                        {/* name */}
                        <label className="label">Your Name</label>
                        <input
                            name='name'
                            type="text"
                            className="input"
                            placeholder="Enter your name"
                            required
                        />

                        {/* photo url */}
                        <label className="label">Photo URL</label>
                        <input
                            name='photo'
                            type="text"
                            className="input"
                            placeholder="Photo URL"
                            required
                        />

                        {/* email */}
                        <label className="label">Email</label>
                        <input
                            name='email'
                            type="email"
                            className="input"
                            placeholder="Email"
                            required
                        />

                        {/* password */}
                        <label className="label">Password</label>
                        <input
                            name='password'
                            type="password"
                            className="input"
                            placeholder="Password"
                            required
                        />

                        <button
                            type='submit'
                            className="btn btn-neutral mt-4">Register</button>

                        <p className="font-semibold text-center py-5">Already Have An Account ? Please <Link to="/auth/login" className="text-secondary">Login</Link></p>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Register;