import { useState, useEffect } from "react";
import PopupProdact from "../common/popUp/PopupProdact";
import { GrUpdate } from "react-icons/gr";
import { MdDeleteForever } from "react-icons/md";

import Cookies from "js-cookie";

interface Flower {
  _id: string;
  name: string;
  color: string;
  price: number;
  status: string;
  imageurl: string;
  category: string;
}

function AdminProdactSection() {
  const [visible, setVisible] = useState(false);
  const [flowers, setFlowers] = useState<Flower[]>([]);
  const [selectedFlower, setSelectedFlower] = useState<Flower | null>(null);

  const closeModal = () => {
    setVisible(false);
    setSelectedFlower(null);
  };

  useEffect(() => {
    const fetchFlowers = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/products");
        const data = await response.json();

        if (response.ok) {
          setFlowers(data);
        } else {
          alert(data.message || "Something went wrong.");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        alert("Something went wrong.");
      }
    };

    fetchFlowers();
  }, []); // Added empty dependency array to run only once when the component mounts

  const handleDeleteProduct = async (_id: string) => {
    if (!_id) return;
  
    const token = Cookies.get("token");
  
    if (!token) {
      alert("No token found. Please login again.");
      return;
    }
    try {
      console.log("Deleting product ID:", _id);
      const response = await fetch(`http://localhost:3000/api/products/${_id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
  
      const data = await response.json();
  
      if (response.ok) {
        setFlowers((prevFlowers) => prevFlowers.filter((flower) => flower._id !== _id));
        alert("Product deleted successfully.");
      } else {
        alert(data.message || "Something went wrong.");
      }
    } catch (error) {
      console.error("Error deleting data:", error);
      alert("Something went wrong.");
    }
  };
  
  
  

  // Function to update the product list after an update
  const handleUpdateProduct = (updatedFlower: Flower) => {
    setFlowers((prevFlowers) =>
      prevFlowers.map((flower) =>
        flower._id === updatedFlower._id ? updatedFlower : flower
      )
    );
  };

  return (
    <section className="relative w-full min-h-screen bg-blue-700 flex flex-col">
      {/* Header */}
      <div className="sticky top-0 right-0 z-10 bg-white flex items-center justify-end w-full h-15 border-2 border-solid px-5">
        <button
          onClick={() => {
            setSelectedFlower(null);
            setVisible(true);
          }}
          className="my-2 p-2 bg-green-800 text-white font-semibold rounded-lg hover:bg-green-600 transition duration-300 active:bg-green-800"
        >
          Create Product
        </button>
        {<PopupProdact isOpen={visible} onRequestClose={closeModal} flowerData={selectedFlower} onUpdate={handleUpdateProduct} />}
      </div>

      {/* Grid Container */}
      <div className="w-full p-5 grid grid-cols-1 md:grid-cols-2 gap-6 bg-red-500">
        {flowers.map((flower) => (
          <div
            key={flower._id}
            className="p-1 w-full flex bg-yellow-200 rounded-lg shadow-md hover:shadow-lg transition-all"
          >
            {/* Image */}
            <div
              className="w-1/3 h-52 bg-cover bg-center rounded-md"
              style={{ backgroundImage: `url(${flower.imageurl})` }}
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
            <div className="flex flex-col items-center justify-center gap-15 px-4 bg-amber-50">
              {/* Update Button */}
              <GrUpdate
                className="text-3xl text-green-600 hover:text-gray-800 transition cursor-pointer"
                onClick={() => {
                  setSelectedFlower(flower); // Pass the clicked flower data
                  setVisible(true);
                }}
              />
              {/* Delete Button */}
              <MdDeleteForever
                className="text-4xl text-red-600 hover:text-red-800 transition cursor-pointer"
                onClick={() => handleDeleteProduct(flower._id)} // Trigger delete on click
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AdminProdactSection;
