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
      <div className="bg-red-200 p-4 w-3/5 h-fit flex flex-col shadow-lg rounded-lg">
        {/* Close Button */}
        <div className="flex justify-end">
          <button
            onClick={onRequestClose}
            className="px-4 py-2 bg-red-800 text-white font-semibold rounded-lg hover:bg-red-600 transition duration-300 active:bg-red-800"
          >
            X
          </button>
        </div>

        {/* Image Display Section */}
        <div className="flex w-full h-52 bg-amber-300 justify-center items-center">
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Selected"
              className="max-h-full max-w-full object-contain rounded-lg"
            />
          )}
        </div>

        <div className="flex-1">
          {/* Image Upload Field */}
          <label className="block text-lg font-semibold mb-2">Upload Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-1/4 p-2 border border-gray-400 rounded-lg"
          />
        </div>

        {/* Inputs */}
        <div className="grid grid-flow-row grid-cols-2 gap-4">
          <div>
            <label className="block text-lg font-semibold mt-4">Name</label>
            <input type="text" className="w-full p-2 border rounded-lg" />
          </div>
          <div>
            <label className="block text-lg font-semibold mt-4">Color</label>
            <input type="text" className="w-full p-2 border rounded-lg" />
          </div>
          <div>
            <label className="block text-lg font-semibold mt-4">Price</label>
            <input type="number" className="w-full p-2 border rounded-lg" />
          </div>
          <div>
            <label className="block text-lg font-semibold mt-4">Category</label>
            <input type="text" className="w-full p-2 border rounded-lg" />
          </div>
        </div>

        {/* Status */}
        <label className="block text-lg font-semibold mt-4">Status</label>
        <div className="flex items-center space-x-4">
          <label className="flex items-center">
            <input type="radio" name="status" checked={isActive} onChange={() => setIsActive(true)} className="mr-2" />
            Active
          </label>
          <label className="flex items-center">
            <input type="radio" name="status" checked={!isActive} onChange={() => setIsActive(false)} className="mr-2" />
            Deactivate
          </label>
        </div>

        {/* Save Button */}
        <div className="flex justify-end">
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
