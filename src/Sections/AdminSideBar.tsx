import { FaTachometerAlt, FaBox, FaClipboardList } from "react-icons/fa";

function AdminSideBar() {
  return (
    <section className="h-screen">
      <div className="bg-amber-400 w-48 h-full flex flex-col p-4 space-y-4">
        <h2 className="text-xl font-bold text-white">Admin Panel</h2>
        <nav className="flex flex-col space-y-3">
          <a href="#" className="flex items-center space-x-2 text-white hover:text-gray-800">
            <FaTachometerAlt />
            <span>Dashboard</span>
          </a>
          <a href="#" className="flex items-center space-x-2 text-white hover:text-gray-800">
            <FaBox />
            <span>Products</span>
          </a>
          <a href="#" className="flex items-center space-x-2 text-white hover:text-gray-800">
            <FaClipboardList />
            <span>Orders</span>
          </a>
        </nav>
      </div>
    </section>
  );
}

export default AdminSideBar;
