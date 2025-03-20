import { useState } from 'react';
import Modal from 'react-modal';
import Cookies from "js-cookie";

interface PopupAddProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

function PopupAdd({ isOpen, onRequestClose }: PopupAddProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isActive, setIsActive] = useState(true);
  const [formData, setFormData] = useState({ imageurl: '', status: 'Active' });

  const handleUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const url = event.target.value;
    setSelectedImage(url);
    setFormData({ ...formData, imageurl: url });
  };

  const handleSave = async () => {
    const token = Cookies.get("token");

    if (!token) {
      alert("No token found. Please login again.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/api/adds/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to save advertisement");

      alert("Advertisement saved successfully!");
      onRequestClose();
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to save advertisement.");
    }
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} className="w-full h-screen flex items-center justify-center">
      <div className="bg-red-200 p-6 w-3/5 h-fit flex flex-col shadow-lg rounded-lg">
        {/* Close Button */}
        <div className="flex justify-end">
          <button
            onClick={onRequestClose}
            className="p-2 bg-red-800 text-white font-semibold rounded-lg hover:bg-red-600 transition duration-300 active:bg-red-800"
          >
            X
          </button>
        </div>

       
        {/* Display the selected image */}
        {selectedImage && <img src={selectedImage} alt="Selected" className="w-full h-80 object-cover rounded-lg mt-4" />}

       {/* Image URL Input */}
       <label className="block text-lg font-semibold mt-4">Paste Image URL</label>
        <input
          type="text"
          value={formData.imageurl}
          onChange={handleUrlChange}
          placeholder="Paste image URL here"
          className="w-3/4 p-2 border border-gray-400 rounded-lg mt-2"
        />


        {/* Active/Deactivate Toggle */}
        <div className="mt-4">
          <label className="block text-lg font-semibold mb-2">Status</label>
          <div className="flex items-center space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="status"
                checked={formData.status === 'Active'}
                onChange={() => setFormData({ ...formData, status: 'Active' })}
                className="mr-2"
              />
              Active
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="status"
                checked={formData.status === 'Deactivated'}
                onChange={() => setFormData({ ...formData, status: 'Deactivated' })}
                className="mr-2"
              />
              Deactivate
            </label>
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-end mt-4">
          <button onClick={handleSave} className="p-2 bg-green-800 text-white font-semibold rounded-lg hover:bg-green-600 transition duration-300 active:bg-green-800">
            Save
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default PopupAdd;
