import logo from '../assets/logo.png';
const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center mt-10 gap-3'>
            <img className="w-87.5" src={logo} alt="" />
            <p>Journalism Without Fear or Favour</p>
        </div>
    );
};

export default Header;