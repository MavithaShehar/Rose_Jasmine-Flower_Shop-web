import { useState } from 'react';
import Modal from 'react-modal';

interface PopupAddProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

function PopupProdact({ isOpen, onRequestClose }: PopupAddProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null); // To store the image URL
  const [isActive, setIsActive] = useState(true); // To track Active/Deactivate state

  // Handle image selection
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file); // Create a URL for the selected image
      setSelectedImage(imageUrl);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="w-full h-screen flex items-center justify-center"
      
    >
      <div className="bg-red-200 p-6 w-3/5 h-4/5 flex flex-col shadow-lg rounded-lg">
        {/* Close Button */}
        <div className="flex justify-end">
          <button
            onClick={onRequestClose}
            className="p-2 bg-red-800 text-white font-semibold rounded-lg hover:bg-red-600 transition duration-300 active:bg-red-800"
          >
            X
          </button>
        </div>

        {/* Image Upload Field */}
        <div className=" flex-1">
          <label className="block text-lg font-semibold mb-2">Upload Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full p-2 border border-gray-400 rounded-lg"
          />
          {/* Display the selected image */}
          {selectedImage && (
            <div className="mt-4">
              <img
                src={selectedImage}
                alt="Selected"
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
          )}
        </div>

        {/* Active/Deactivate Toggle */}
        <div className="mt-4">
          <label className="block text-lg font-semibold mb-2">Status</label>
          <div className="flex items-center space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="status"
                checked={isActive}
                onChange={() => setIsActive(true)}
                className="mr-2"
              />
              Active
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="status"
                checked={!isActive}
                onChange={() => setIsActive(false)}
                className="mr-2"
              />
              Deactivate
            </label>
          </div>
        </div>

        

        {/* Save Button */}
        <div className=" flex justify-end">
          <button
            onClick={onRequestClose}
            className="p-2 bg-green-800 text-white font-semibold rounded-lg hover:bg-green-600 transition duration-300 active:bg-green-800"
          >
            Save
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default PopupProdact;