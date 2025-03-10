import { MdOutlineArrowDropDown } from "react-icons/md";

function Navbar() {
  return (
    <div className="w-full bg-gray-100">
      <nav className="flex gap-20 p-4 justify-center items-center">
        <a href="/" className="text-blue-600 font-bold hover:text-pink-700">Home</a>
        <a href="/" className="text-blue-600 font-bold hover:text-pink-700 flex items-center gap-1">
          Categories <MdOutlineArrowDropDown className="size-6"/>
        </a>
        <a href="/" className="text-blue-600 font-bold hover:text-pink-700">About Shop</a>
        <a href="/" className="text-blue-600 font-bold hover:text-pink-700">Contact & Location</a>
      </nav>
    </div>
  );
}

export default Navbar;
