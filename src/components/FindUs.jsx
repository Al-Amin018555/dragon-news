import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
    return (
        <div>
            <h2 className="font-bold mb-5">Find Us On</h2>
            <div className="join join-vertical space-y-3 border border-base-300 p-3 w-full">
                <button className="btn justify-start border-0 shadow-none bg-base-100 join-item">
                   <FaFacebook size={20}></FaFacebook> Facebook</button>
                   <hr />
                <button className="btn justify-start border-0 shadow-none bg-base-100 join-item">
                   <FaTwitter size={20}></FaTwitter> Twitter</button>
                <hr />
                <button className="btn justify-start border-0 shadow-none bg-base-100 join-item">
                   <FaInstagram size={20}></FaInstagram> Instagram</button>
            </div>
        </div>
    );
};

export default FindUs;