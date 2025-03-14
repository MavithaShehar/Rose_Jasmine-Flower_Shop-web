import { Link } from 'react-router-dom';
import { FaTachometerAlt, FaBox, FaClipboardList } from 'react-icons/fa';

function AdminSideBar() {
  return (
    <section className=" w-full h-screen ">
      <div className=" w-full h-full bg-amber-400  flex flex-col p-4 space-y-4">
        <h2 className="text-xl font-bold text-white">Admin Panel</h2>
        <nav className="flex flex-col space-y-3">
          <Link
            to="/admin"
            className="flex items-center space-x-2 text-white hover:text-gray-800"
          >
            <FaTachometerAlt />
            <span>Dashboard</span>
          </Link>
          <Link
            to="/admin/dashbord"
            className="flex items-center space-x-2 text-white hover:text-gray-800"
          >
            <FaBox />
            <span>Products</span>
          </Link>
          <Link
            to="/admin/orders"
            className="flex items-center space-x-2 text-white hover:text-gray-800"
          >
            <FaClipboardList />
            <span>Orders</span>
          </Link>
        </nav>
      </div>
    </section>
  );
}

export default AdminSideBar;
