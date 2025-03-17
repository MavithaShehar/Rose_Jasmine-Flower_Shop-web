import { useState } from 'react';
import Modal from 'react-modal';

interface PopupProdactProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

function PopupProdact({ isOpen, onRequestClose }: PopupProdactProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null); // To store the image URL
  const [isActive, setIsActive] = useState(true); // To track Active/Deactivate state
  const [imageUrl, setImageUrl] = useState<string>(''); // To store the URL input

  // Handle image file selection
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file); // Create a URL for the selected image
      setSelectedImage(imageUrl);
    }
  };

  // Handle URL input change
  const handleUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const url = event.target.value;
    if (url) {
      setSelectedImage(url); // Set the URL as the image source
    }
  };

  // Function to render the selected image
  const renderImage = () => {
    if (!selectedImage) return null;
    return <img src={selectedImage} alt="Selected" className="rounded-lg max-h-64" />;
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="w-full h-screen flex items-center justify-center"
    >
      <div className="bg-red-200 p-4 w-2/5 h-fit flex flex-col shadow-lg rounded-lg">
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
        <div className="flex w-full h-64 bg-amber-300 justify-center items-center">
          <div className="w-64 h-64 border-4 border-gray-500 bg-white rounded-lg flex justify-center items-center overflow-hidden">
            {renderImage()} {/* Calls the function to display the image */}
          </div>
        </div>

        <div className="flex-1">
         
          {/* URL Input Field */}
          <label className="block text-lg font-semibold mb-2">Paste Image URL</label>
          <input
            type="text"
            onChange={handleUrlChange}
            placeholder="Paste image URL here"
            className="w-3/4 p-2 border border-gray-400 rounded-lg"
          />
        </div>

        {/* Inputs */}
        <div className="w-full grid grid-flow-row grid-cols-2">
          <div className="w-3/4">
            <label className="block text-lg font-semibold mt-4">Name</label>
            <input type="text" className="w-full p-2 border rounded-lg" />
          </div>
          <div className="w-2/4">
            <label className="block text-lg font-semibold mt-4">Color</label>
            <input type="text" className="w-full p-2 border rounded-lg" />
          </div>
          <div className="w-2/4">
            <label className="block text-lg font-semibold mt-4">Price</label>
            <input type="number" className="w-full p-2 border rounded-lg" />
          </div>
          <div className="w-3/3">
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
