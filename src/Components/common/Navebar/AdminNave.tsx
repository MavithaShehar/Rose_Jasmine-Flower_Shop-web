import { Link, NavLink } from 'react-router-dom';
import { FaTachometerAlt, FaBox, FaClipboardList, FaChartLine, FaShoppingCart } from 'react-icons/fa';

function AdminSideBar() {
  return (
    <section className="w-64 h-screen bg-amber-400 shadow-lg">
      <div className="w-full h-full flex flex-col p-6 space-y-6">
        {/* Header */}
        <h2 className="text-2xl font-bold text-white mb-4">Admin Panel</h2>

        {/* Navigation Links */}
        <nav className="flex flex-col space-y-4">
          <NavLink
            to="/admin"
            className={({ isActive }) =>
              `flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 ${
                isActive
                  ? 'bg-white text-amber-600 shadow-md font-semibold'
                  : 'text-gray-950 hover:bg-white hover:text-amber-600'
              }`
            }
          >
            <FaTachometerAlt className="text-xl" />
            <span>Dashboard</span>
          </NavLink>

          <NavLink
            to="/poster"
            className={({ isActive }) =>
              `flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 ${
                isActive
                  ? 'bg-white text-amber-600 shadow-md font-semibold'
                  : 'text-gray-950 hover:bg-white hover:text-amber-600'
              }`
            }
          >
            <FaBox className="text-xl" />
            <span>Posters</span>
          </NavLink>

          <NavLink
            to="/products"
            className={({ isActive }) =>
              `flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 ${
                isActive
                  ? 'bg-white text-amber-600 shadow-md font-semibold'
                  : 'text-gray-950 hover:bg-white hover:text-amber-600'
              }`
            }
          >
            <FaBox className="text-xl" />
            <span>Prodacts</span>
          </NavLink>

          <Link
            to="/admin/orders"
            className="flex items-center space-x-3 p-3 rounded-lg text-gray-950 hover:bg-white hover:text-amber-600 transition-all duration-300"
          >
            <FaClipboardList className="text-xl" />
            <span>Orders</span>
          </Link>

          {/* Additional Links */}
          <NavLink
            to="/admin/reports"
            className={({ isActive }) =>
              `flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 ${
                isActive
                  ? 'bg-white text-amber-600 shadow-md font-semibold'
                  : 'text-gray-950 hover:bg-white hover:text-amber-600'
              }`
            }
          >
            <FaChartLine className="text-xl" />
            <span>Reports</span>
          </NavLink>
        </nav>
      </div>
    </section>
  );
}

export default AdminSideBar;
