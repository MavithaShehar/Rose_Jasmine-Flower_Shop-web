import { IoMdCloseCircleOutline } from "react-icons/io";
import jsonData from "../../../../public/data/ordercard.json";

interface OrderCard {
    id: number;
    name: string;
    color: string;
    price: number;
    status: string;
    image: string;
    category: string;
}

function Ordered({ isCartOpen, toggleCart }: { isCartOpen: boolean; toggleCart: () => void }) {
    const orderCards: OrderCard[] = jsonData.ordercads; // Ensure correct key name

    return (
        <div
            className={`fixed mt-16 top-0 right-0 h-fit w-96 bg-white shadow-lg transform ${isCartOpen ? "translate-x-0" : "translate-x-full"
                } transition-transform duration-300 ease-in-out`}
        >
            {/* Header */}
            <div className="p-4 flex justify-between items-center border-b">
                <h2 className="text-lg font-semibold">Your Ordered Products</h2>
                <button onClick={toggleCart} className="text-red-600 text-4xl hover:text-red-400 active:text-red-300">
                    <IoMdCloseCircleOutline />
                </button>
            </div>

            {/* Order Items */}
            <div className="p-4 flex flex-col items-center">
                <div className="w-full h-fit px-2 py-2  flex flex-col items-center">
                    {orderCards.map((orderCard) => (
                        <div key={orderCard.id} className="w-full h-28 mb-2 rounded-md flex flex-row justify-around gap-2  p-2 shadow-md border">
                            {/* Product Image */}
                            <div className="w-1/3 h-24 overflow-hidden flex items-center justify-center">
                                <img src={orderCard.image} alt={orderCard.name} className="w-full h-full object-cover rounded-md" />
                            </div>

                            {/* Product Details */}
                            <div className="flex flex-col justify-center ">
                                <p className="font-semibold">{orderCard.name}</p>
                                <p className="text-sm">Color: {orderCard.color}</p>
                                <p className="text-sm">Price: ${orderCard.price}</p>
                                <p className="text-xs">{orderCard.status}</p>
                            </div>

                            {/* Remove Button */}
                            <div className="w-10 h-full flex justify-end">
                                <button className="text-white rounded-full w-8 h-8 hover:bg-red-900 ">✖</button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Order Button */}
                <div className=" w-full p-4 border-t shadow-md bg-gray-100">
                    <button className="w-full py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition">
                        Place Order
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Ordered;
