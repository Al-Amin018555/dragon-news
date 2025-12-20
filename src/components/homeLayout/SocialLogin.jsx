import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
    return (
        <div>
            <p className="font-bold">Login With</p>
            <div className="mt-5 space-y-3">
                <button className="btn btn-secondary btn-outline w-full"> <FcGoogle size={24} /> Login with  Google</button>
                <button className="btn btn-primary btn-outline w-full"> <FaGithub size={24} /> Login with Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;