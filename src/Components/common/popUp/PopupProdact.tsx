import { useEffect, useState } from "react";
import Modal from "react-modal";
import Cookies from "js-cookie";

interface PopupProductProps {
  isOpen: boolean;
  onRequestClose: () => void;
  flowerData: Flower | null; // Add this line to accept flowerData prop
  onUpdate: (updatedFlower: Flower) => void;
}

type Flower = {
  _id: string;
  name: string;
  color: string;
  price: number;
  status: string;
  imageurl: string;
  category: string;
};

function PopupProduct({ isOpen, onRequestClose, flowerData, onUpdate }: PopupProductProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    color: "",
    price: "",
    category: "",
    status: "active",
    imageurl: "",
  });

  useEffect(() => {
    if (flowerData) {
      setFormData({
        name: flowerData.name,
        color: flowerData.color,
        price: flowerData.price.toString(),
        category: flowerData.category,
        status: flowerData.status,
        imageurl: flowerData.imageurl,
      });
      setSelectedImage(flowerData.imageurl);
    }
  }, [flowerData]);

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle URL input change
  const handleUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const url = event.target.value;
    setSelectedImage(url);
    setFormData({ ...formData, imageurl: url });
  };

  // Handle radio button change
  const handleStatusChange = (value: string) => {
    setFormData({ ...formData, status: value });
  };

  // POST Request (Create new product)
  const handlePost = async () => {
    const token = Cookies.get("token");

    if (!token) {
      alert("No token found. Please login again.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/api/products/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Product added successfully!");
        setFormData({
          name: "",
          color: "",
          price: "",
          category: "",
          status: "active",
          imageurl: "",
        });
        setSelectedImage(null);
        onRequestClose(); // Close modal after success
      } else {
        const data = await response.json();
        alert(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error("Error adding product:", error);
      alert("An unexpected error occurred.");
    }
  };

  const handlePut = async () => {
    if (!flowerData) return;

    const token = Cookies.get("token");

    if (!token) {
      alert("No token found. Please login again.");
      return;
    }

    try {
      console.log('id is ',flowerData._id)
      const response = await fetch(`http://localhost:3000/api/products/${flowerData._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Product updated successfully!");
        onUpdate(formData as unknown as Flower); // Update parent component with updated product data
        onRequestClose(); // Close modal after success
      } else {
        const data = await response.json();
        alert(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error("Error updating product:", error);
      alert("An unexpected error occurred.");
    }
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} className="w-full h-screen flex items-center justify-center">
      <div className="bg-white mt-5 p-6 w-3/5 h-fit flex flex-col shadow-lg rounded-lg">
        <div className="flex justify-end">
          <button onClick={onRequestClose} className="px-4 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-500">
            X
          </button>
        </div>

        {/* Image Display Section */}
        <div className="flex w-full h-64 bg-amber-100 justify-center items-center">
          <div className="w-64 h-64 border-4 border-gray-500 bg-white rounded-lg flex justify-center items-center overflow-hidden">
            {selectedImage && <img src={selectedImage} alt="Selected" className="rounded-lg max-h-64" />}
          </div>
        </div>

        {/* Image URL Input */}
        <label className="block text-lg font-semibold mt-4">Paste Image URL</label>
        <input
          type="text"
          name="imageurl"
          value={formData.imageurl}
          onChange={handleUrlChange}
          placeholder="Paste image URL here"
          className="w-3/4 p-2 border border-gray-400 rounded-lg mt-2"
        />

        {/* Form Inputs */}
        <div className="w-full grid grid-flow-row grid-cols-2 gap-4 mt-4">
          <div className="w-full">
            <label className="block text-lg font-semibold">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg"
            />
          </div>
          <div className="w-full">
            <label className="block text-lg font-semibold">Color</label>
            <input
              type="text"
              name="color"
              value={formData.color}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg"
            />
          </div>
          <div className="w-full">
            <label className="block text-lg font-semibold">Price</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg"
            />
          </div>
          <div className="w-full">
            <label className="block text-lg font-semibold">Category</label>
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg"
            />
          </div>
        </div>

        {/* Status Section */}
        <label className="block text-lg font-semibold mt-4">Status</label>
        <div className="flex items-center space-x-6 mt-2">
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="status"
              value="active"
              checked={formData.status === "active"}
              onChange={() => handleStatusChange("active")}
              className="h-5 w-5 text-blue-600 border-gray-300 rounded-full focus:ring-2 focus:ring-blue-600"
            />
            <span className="text-lg">Active</span>
          </label>

          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="status"
              value="inactive"
              checked={formData.status === "inactive"}
              onChange={() => handleStatusChange("inactive")}
              className="h-5 w-5 text-blue-600 border-gray-300 rounded-full focus:ring-2 focus:ring-blue-600"
            />
            <span className="text-lg">Inactive</span>
          </label>
        </div>

        {/* Save or Update Button */}
        <div className="flex justify-end mt-4">
          {flowerData ? (
            <button
              onClick={handlePut}
              className="p-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500"
            >
              Update Product
            </button>
          ) : (
            <button
              onClick={handlePost}
              className="p-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-500"
            >
              Save Product
            </button>
          )}
        </div>
      </div>
    </Modal>
  );
}

export default PopupProduct;
