import { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
    const [error, setError] = useState("");
    const { signIn } = use(AuthContext);
    const location = useLocation();
    // console.log(location)
    const navigate = useNavigate();

    const handleLogIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const user = result.user;
                navigate(`${location.state ? location.state : "/"}`)
            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // alert(errorCode, errorMessage)
                setError(errorCode)
            })

    }
    return (
        <div className="min-h-screen flex justify-center items-center">
            <form onSubmit={handleLogIn} className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <h2 className="text-2xl font-semibold text-center py-4">Login your account</h2>
                    <fieldset className="fieldset">

                        {/* email */}
                        <label className="label">Email</label>
                        <input
                            type="email"
                            name="email"
                            className="input"
                            placeholder="Email"
                            required
                        />

                        {/* password */}
                        <label className="label">Password</label>
                        <input
                            type="password"
                            name="password"
                            className="input"
                            placeholder="Password"
                            required
                        />

                        <div><a className="link link-hover">Forgot password?</a></div>

                        {
                            error &&
                            <p className="text-red-500 text-xs
                        ">{error}</p>
                        }

                        <button type="submit" className="btn btn-neutral mt-4">Login</button>
                        <p className="font-semibold text-center py-5">Don't Have An Account ? <Link to="/auth/register" className="text-secondary">Regiser</Link></p>
                    </fieldset>
                </div>
            </form>
        </div>
    );
};

export default Login;