import { FaPhone } from "react-icons/fa6";
import { IoIosMailUnread } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { IoLogoTiktok } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";

function Info() {
  return (
    <div className="flex justify-center items-center">
      <div className="w-fit h-fit bg-white/1 backdrop-blur-sm rounded-lg shadow-xl border border-white/20 flex flex-col justify-center items-center space-y-6 p-6">

        <h2 className="text-3xl font-semibold text-white mb-6">Contact Us</h2>

        <div className="flex flex-row space-x-10 text-white">
          
        
          <div className="flex flex-col space-y-6 m-10">
            <div className="flex items-center gap-3">
              <FaPhone className="text-blue-600 text-2xl" />
              <span className="text-xl">+94 77 831 4711</span>
            </div>

            <div className="flex items-center gap-3">
              <IoIosMailUnread className="text-yellow-500 text-2xl" />
              <span className="text-xl">info@rosejasmine.com</span>
            </div>

            <div className="flex items-center gap-3">
              <IoLocationSharp className="text-green-400 text-2xl" />
              <span className="text-xl">
                Rose Jasmine (Pvt) Ltd <br />
                Colombo 07
              </span>
            </div>
          </div>

        
          <div className="flex flex-col space-y-6 m-10">
            <div className="flex items-center gap-3">
              <FaFacebookF className="text-blue-700 text-2xl" />
              <span className="text-xl">Rose Jasmine Shop</span>
            </div>

            <div className="flex items-center gap-3">
              <LuInstagram className="text-pink-400 text-2xl" />
              <span className="text-xl">Rose_Jasmine</span>
            </div>

            <div className="flex items-center gap-3">
              <IoLogoTiktok className="text-black text-2xl" />
              <span className="text-xl">@Rose_Jasmine</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
