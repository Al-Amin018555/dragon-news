import Marquee from "react-fast-marquee";

const LastestNews = () => {
    return (
        <div className="w-11/12 mx-auto my-5">
            <div className="flex items-center bg-base-300 p-4 gap-4">
                <p className="bg-secondary p-3 text-base-100">Latest</p>
                <Marquee className="flex gap-5" pauseOnHover={true} speed={60}>
                    <p className="font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, omnis!</p>
                    <p className="font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, omnis!</p>
                    <p className="font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, omnis!</p>
                   
                </Marquee>
            </div>
        </div>
    );
};

export default LastestNews;