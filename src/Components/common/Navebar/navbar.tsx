import { Link } from "react-router-dom"; // Correct import for React Router v6

function Navbar() {
  return (
    <div className="w-full bg-gray-100 z-10">
      <nav className="flex gap-20 p-4 justify-center items-center">
        <Link to="/home" className="text-blue-600 font-bold hover:text-pink-700">Home</Link>
        <Link to="/categories" className="text-blue-600 font-bold hover:text-pink-700 flex items-center gap-1">
          Categories
        </Link>
        <Link to="/about" className="text-blue-600 font-bold hover:text-pink-700">About Shop</Link>
        <Link to="/contact" className="text-blue-600 font-bold hover:text-pink-700">Contact & Location</Link>     
      </nav>
    </div>
  );
}

export default Navbar;
