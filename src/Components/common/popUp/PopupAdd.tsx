
import Modal from 'react-modal';

interface PopupAddProps {
    isOpen: boolean;
    onRequestClose: () => void;
  }
  
function PopupAdd({ isOpen, onRequestClose }:PopupAddProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="w-full h-screen flex items-center justify-center"
    >
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <h1>Pop-up is here</h1>
        <button
          onClick={onRequestClose}
          className="mt-2 p-2 bg-green-800 text-white font-semibold rounded-lg hover:bg-green-600 transition duration-300 active:bg-green-800"
        >
          Close
        </button>
      </div>
    </Modal>
  );
}

export default PopupAdd;
