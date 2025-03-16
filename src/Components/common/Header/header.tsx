import { useState } from "react";
import Logo from "../../../assets/images/headerIMG/Logo.png";
import { FaSearch } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";
import { FiShoppingCart } from "react-icons/fi";
import Navbar from "../Navebar/navbar";
import Ordered from "../Header/ordered"; // Import Ordered component

function Header() {
    const [isCartOpen, setIsCartOpen] = useState(false);

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
    };

    return (
        <header className="w-full h-30 flex flex-col fixed z-10">
            {/* Top Section */}
            <div className="bg-gradient-to-r from-pink-700 to-[#d6f6ff] w-full h-1/2 flex justify-around items-center">
                {/* Logo */}
                <div className="flex items-center text-3xl font-medium flex-row">
                    <div className="border-1 border-amber-50 xl:border-3 bg-white rounded-2xl">
                        <img src={Logo} alt="description" />
                    </div>
                    <h1 className="text-amber-100 font-extralight">ROSE JASMINE</h1>
                </div>

                {/* Search Bar */}
                <div>
                    <div className="flex items-center bg-white border border-gray-300 rounded-full px-1 py-2 w-120 h-10">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="outline-none flex-grow bg-transparent text-gray-700 px-2"
                        />
                        <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition duration-300">
                            <FaSearch className="text-gray-500" />
                        </button>
                    </div>
                </div>

                {/* Account & Cart */}
                <div className="w-2xs h-full flex justify-around items-center">
                    <div className="flex flex-col items-center">
                        <VscAccount className="size-8 text-green-700" />
                        <h5>Shear</h5>
                    </div>
                    {/* Cart Button */}
                    <button
                        onClick={toggleCart}
                        className="flex flex-row items-center text-red-700 font-bold cursor-pointer"
                    >
                        <FiShoppingCart className="size-8 text-green-700 active:text-green-200" />
                        <h5>5</h5>
                    </button>

                    <Ordered isCartOpen={isCartOpen} toggleCart={toggleCart} />
                </div>
            </div>

            {/* Navbar Section */}
            <div className="bg-blue-400 w-full h-1/2">
                <Navbar />
            </div>

           
            
        </header>
    );
}

export default Header;
