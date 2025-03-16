
import jsonData from '../../../public/data/orders.json'

interface Order {
    id: number;
    name: string;
    Address: string;
    quantity: number;
    status: string;
    prodact: string;
    category: string;
    contact: string;
    price:number;
    total:number;
    date:string
}

const orders: Order[] = jsonData.orders;



function AdminOrderSection() {
    return (
        <section className="relative w-full min-h-screen bg-blue-700 flex flex-col">
            {/* Header */}
            <div className="sticky top-0 right-0 z-10 bg-white flex items-center justify-between w-full h-20 border-b border-gray-300 px-5 shadow-md">
                <div className="w-1/4 flex items-end justify-between text-blue-500 text-lg font-semibold">
                    <button className="hover:text-blue-800 active:text-blue-400">All orders</button>
                    <button className="hover:text-blue-800 active:text-blue-400">Completed</button>
                    <button className="hover:text-blue-800 active:text-blue-400">Pending</button>
                </div>
            </div>

            {/* Table Section */}
            <div className="w-full p-5 bg-white">
                <table className="w-full border-collapse border border-gray-300 shadow-lg">
                    <thead className="sticky">
                        <tr className="bg-blue-600 text-white text-lg sticky">
                            <th className="border border-gray-300 px-4 py-2">Prodact</th>
                            <th className="border border-gray-300 px-4 py-2">Date</th>
                            <th className="border border-gray-300 px-4 py-2">Id</th>
                            <th className="border border-gray-300 px-4 py-2">Name</th>
                            <th className="border border-gray-300 px-4 py-2">Category</th>
                            <th className="border border-gray-300 px-4 py-2">Quantity</th>
                            <th className="border border-gray-300 px-4 py-2">Address</th>
                            <th className="border border-gray-300 px-4 py-2">Contact</th>
                            <th className="border border-gray-300 px-4 py-2">Price</th>
                            <th className="border border-gray-300 px-4 py-2">Total</th>
                            <th className="border border-gray-300 px-4 py-2">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order) => (
                            <tr key={order.id} className="hover:bg-gray-100 even:bg-gray-50 text-gray-700 h-24 text-center">
                                <td className="border border-gray-300 flex items-center justify-center">
                                    <img src={order.prodact} alt="Product" className=" p-2 w-24 h-fit object-cover rounded-md" />
                                </td>
                                <td className="border border-gray-300 px-4 py-2">{order.date}</td>
                                <td className="border border-gray-300 px-4 py-2">{order.id}</td>
                                <td className="border border-gray-300 px-4 py-2">{order.name}</td>
                                <td className="border border-gray-300 px-4 py-2">{order.category}</td>
                                <td className="border border-gray-300 px-4 py-2">{order.quantity}</td>
                                <td className="border border-gray-300 px-4 py-2">{order.Address}</td>
                                <td className="border border-gray-300 px-4 py-2">{order.contact}</td>
                                <td className="border border-gray-300 px-4 py-2">{order.price}</td>
                                <td className="border border-gray-300 px-4 py-2">{order.total}</td>
                                <td className="border border-gray-300 px-4 py-2">{order.status}</td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>
        </section>
    );
}

export default AdminOrderSection;
