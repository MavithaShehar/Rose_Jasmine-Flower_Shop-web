import { BsCake2Fill } from "react-icons/bs";
import { FaGift } from "react-icons/fa6";
import { RiFlowerFill } from "react-icons/ri";

function AdminDashboard() {
  return (
    <section className="w-full min-h-screen  flex justify-center items-center p-6">
      <div className="grid grid-cols-2 gap-6 w-full max-w-5xl">
        {/* Sale Cakes */}
        <div className="flex flex-col items-center justify-between bg-pink-300 p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
          <div className="flex items-center justify-between w-full">
            <h1 className="text-xl font-semibold text-gray-700">Sale Cakes</h1>
            <BsCake2Fill className="text-4xl text-pink-500" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mt-4">100</h1>
        </div>

        {/* Sale Flowers */}
        <div className="flex flex-col items-center justify-between bg-green-300 p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
          <div className="flex items-center justify-between w-full">
            <h1 className="text-xl font-semibold text-gray-700">Sale Flowers</h1>
            <RiFlowerFill className="text-4xl text-green-500" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mt-4">100</h1>
        </div>

        {/* Sale Gift */}
        <div className="flex flex-col items-center justify-between bg-blue-300 p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
          <div className="flex items-center justify-between w-full">
            <h1 className="text-xl font-semibold text-gray-700">Sale Gift</h1>
            <FaGift className="text-4xl text-blue-500" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mt-4">100</h1>
        </div>
      </div>
    </section>
  );
}

export default AdminDashboard;
