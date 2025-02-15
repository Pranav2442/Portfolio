import { Link } from "react-router-dom";
import { name,} from "../constants";
import { profile} from "../assets";

const Navigation = () => {
  return (
    <nav className={`sm:px-16 px-6 w-full flex items-center py-5 fixed top-0 z-20 `}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'>
          <img src={profile} className="h-10 w-10 object-contain rounded-3xl"/>
          <p className='text-white text-[20px] font-bold cursor-pointer flex '>
            {name} &nbsp;
          </p>
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;