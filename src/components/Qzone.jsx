import swimmingImage from '../assets/swimming.png';
import classImage from '../assets/class.png';
import playGroundImage from '../assets/playground.png';
const Qzone = () => {
    return (
        <div className='bg-base-200 p-10 flex flex-col'>
              <img src={swimmingImage} alt="" />
              <img src={classImage} alt="" />
              <img src={playGroundImage} alt="" />
        </div>
    );
};

export default Qzone;