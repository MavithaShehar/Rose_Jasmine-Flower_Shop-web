import { useState } from "react";
import PopupProdact from "../common/popUp/PopupProdact";
import jsonData from "../../../public/data/prodact.json";
import { GrUpdate } from "react-icons/gr";
import { FaRegCircleStop } from "react-icons/fa6";
import { MdDeleteForever } from "react-icons/md";

interface Flower {
  id: number;
  name: string;
  color: string;
  price: number;
  status: string;
  image: string;
  category: string;
}

function AdminProdactSection() {
  const [visible, setVisible] = useState(false);

  const closeModal = () => {
    setVisible(false);
  };

  const flowers: Flower[] = jsonData.flowers;

  return (
    <section className="relative w-full min-h-screen bg-blue-700 flex flex-col">
      {/* Header */}
      <div className="sticky top-0 right-0 z-10 bg-white flex items-center justify-end w-full h-15 border-2 border-solid px-5">
        <button
          onClick={() => setVisible(true)}
          className="my-2 p-2 bg-green-800 text-white font-semibold rounded-lg hover:bg-green-600 transition duration-300 active:bg-green-800"
        >
          Create Product
        </button>
        {<PopupProdact isOpen={visible} onRequestClose={closeModal} />}
      </div>

      {/* Grid Container */}
      <div className="w-full p-5 grid grid-cols-1 md:grid-cols-2 gap-6 bg-red-500">
        {flowers.map((flower) => (
          <div
            key={flower.id}
            className="p-1 w-full flex bg-yellow-200 rounded-lg shadow-md hover:shadow-lg transition-all"
          >
            {/* Image */}
            <div
              className="w-1/3 h-52 bg-cover bg-center rounded-md"
              style={{
                backgroundImage: `url(${flower.image})`,
              }}
            ></div>

            {/* Details */}
            <div className="w-2/3 flex flex-col justify-center px-3">
              <h2 className="text-lg font-semibold text-blue-700">{flower.name}</h2>
              <p className="text-gray-700">Color: {flower.color}</p>
              <p className="text-gray-700">Category: {flower.category}</p>
              <p className="text-gray-700">Status: {flower.status}</p>
              <p className="text-green-700 font-bold">Price: ${flower.price}</p>
            </div>

            {/* Icons */}
            <div className="flex flex-col items-center justify-center gap-5 px-4 bg-amber-50 ">
              <GrUpdate className="text-3xl text-green-600 hover:text-gray-800 transition cursor-pointer" />
              <FaRegCircleStop className="text-3xl text-yellow-600 hover:text-gray-800 transition cursor-pointer" />
              <MdDeleteForever className="text-4xl text-red-600 hover:text-red-800 transition cursor-pointer" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AdminProdactSection;
