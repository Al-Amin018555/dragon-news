import { format } from 'date-fns';
import logo from '../assets/logo.png';
const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center mt-10 gap-3'>
            <img className="w-100" src={logo} alt="" />
            <p className='text-accent'>The Bangladeshi News</p>
            <p className='font-semibold text-accent'>{format(new Date(), "EEEE, MMMM MM, yyyy")}</p>
        </div>
    );
};

export default Header; 