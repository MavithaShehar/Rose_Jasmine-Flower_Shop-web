import { useState } from 'react';
import { MdDeleteForever } from 'react-icons/md';
import { FaStopCircle } from 'react-icons/fa';
import addsData from '../../../public/data/adds.json';
import PopupAdd from '../common/popUp/PopupAdd';

function AdminDashBordPosts() {
  const [visible, setVisible] = useState(false);

  const closeModal = () => {
    setVisible(false);
  };

  return (
    <section className="w-full h-fit relative bg-gray-100">
    
      <div className="sticky top-0 right-0 z-10 bg-white flex items-center justify-end w-full h-15 border-2 border-solid px-5">
        <button
          onClick={() => setVisible(true)}
          className="my-2 p-2 bg-green-800 text-white font-semibold rounded-lg hover:bg-green-600 transition duration-300 active:bg-green-800"
        >
          Create Poster
        </button>
        {<PopupAdd isOpen={visible} onRequestClose={closeModal} />}
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {addsData.adds.map((add, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div
              className="h-48 bg-cover bg-center"
              style={{ backgroundImage: `url(${add.url})` }}
            ></div>
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2">Advertisement {index + 1}</h2>
              <p className="text-gray-600">Status: {add.status}</p>
            </div>
            <div className="flex justify-around p-4 bg-gray-50">
              <button className="p-2 bg-red-500 text-white rounded-full hover:bg-red-700 transition duration-300">
                <MdDeleteForever size={24} />
              </button>
              <button className="p-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-700 transition duration-300">
                <FaStopCircle size={24} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AdminDashBordPosts;
