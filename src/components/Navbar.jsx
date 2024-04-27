import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => {
    console.log(toggle);
    setToggle(!toggle);
  }
  return (
    <div>
      <nav className="flex justify-between items-center h-24 max-w-[1240px] mx-auto text-white px-4">
        <h1 className="text-3xl font-bold text-[#00df9a]">REACT.</h1>
      <ul className='hidden md:flex'>
        <li className='p-4 cursor-pointer hover:text-[#00df9a]'>Home</li>
        <li className='p-4 cursor-pointer hover:text-[#00df9a]'>Company</li>
        <li className='p-4 cursor-pointer hover:text-[#00df9a]'>Resources</li>
        <li className='p-4 cursor-pointer hover:text-[#00df9a]'>About</li>
        <li className='p-4 cursor-pointer hover:text-[#00df9a]'>Contact</li>
      </ul>
        <div onClick={handleClick} className="md:hidden">
          {toggle ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
      </nav>
      <ul className={toggle? "md:hidden fixed left-1 h-full ease-in-out duration-500":"md:hidden ease-in-out duration-500 fixed left-[-100%]"}>
        <li className="p-4 text-[#ffffff] hover:text-[#00df9a]">Home</li>
        <li className="p-4 text-[#ffffff] hover:text-[#00df9a]">Company</li>
        <li className="p-4 text-[#ffffff] hover:text-[#00df9a]">Resources</li>
        <li className="p-4 text-[#ffffff] hover:text-[#00df9a]">About</li>
        <li className="p-4 text-[#ffffff] hover:text-[#00df9a]">Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
