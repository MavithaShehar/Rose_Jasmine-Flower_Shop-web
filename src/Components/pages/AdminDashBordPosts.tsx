import { useEffect, useState } from 'react';
import { MdDeleteForever } from 'react-icons/md';
import { FaPlay, FaStopCircle } from 'react-icons/fa';
import PopupAdd from '../common/popUp/PopupAdd';
import Cookies from "js-cookie";

function AdminDashBordPosts() {
  interface Advertisement {
    _id: string;
    status: string;
    imageurl: string;
  }

  const [visible, setVisible] = useState(false);
  const [advertisement, setAdvertisement] = useState<Advertisement[]>([]);

  const closeModal = () => {
    setVisible(false);
  };

  useEffect(() => {
    const fetchAdvertisements = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/adds");
        const data = await response.json();

        if (response.ok) {
          setAdvertisement(data); // Assuming `data` is an array
        } else {
          alert(data.message || "Something went wrong.");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        alert("Something went wrong.");
      }
    };
    fetchAdvertisements();
  }, []);


  const handleDeleteAdvertisement = async (_id: string) => {
    if (!_id) return;

    const token = Cookies.get("token");

    if (!token) {
      alert("No token found. Please login again.");
      return;
    }

    try {
      console.log("Deleting advertisement ID:", _id);
      const response = await fetch(`http://localhost:3000/api/adds/${_id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (response.ok) {
        setAdvertisement((prevAds) => prevAds.filter((ad) => ad._id !== _id));
        alert("Advertisement deleted successfully.");
      } else {
        alert(data.message || "Something went wrong.");
      }
    } catch (error) {
      console.error("Error deleting advertisement:", error);
      alert("Something went wrong.");
    }
  };

  const handleStatus = async (_id: string, currentStatus: string) => {
    if (!_id) return;
  
    const token = Cookies.get("token");
  
    if (!token) {
      alert("No token found. Please login again.");
      return;
    }
  
    try {
      const newStatus = currentStatus === "active" ? "inactive" : "active";
  
      const response = await fetch(`http://localhost:3000/api/adds/${_id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ status: newStatus }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        setAdvertisement((prevAds) =>
          prevAds.map((ad) =>
            ad._id === _id ? { ...ad, status: newStatus } : ad
          )
        );
        alert(`Advertisement is now ${newStatus}.`);
      } else {
        alert(data.message || "Something went wrong.");
      }
    } catch (error) {
      console.error("Error updating advertisement status:", error);
      alert("Something went wrong.");
    }
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
        <PopupAdd isOpen={visible} onRequestClose={closeModal} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {advertisement.map((add, index) => (
          <div key={add._id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div
              className="h-48 bg-cover bg-center"
              style={{ backgroundImage: `url(${add.imageurl})` }}
            ></div>
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2">Advertisement {index + 1}</h2>
              <p className="text-gray-600">Status: {add.status}</p>
            </div>
            <div className="flex justify-around p-4 bg-gray-50">
              <button
                onClick={() => handleDeleteAdvertisement(add._id)}
                className="p-2 bg-red-500 text-white rounded-full hover:bg-red-700 transition duration-300"
              >
                <MdDeleteForever size={24} />
              </button>

              <button
                onClick={() => handleStatus(add._id, add.status)}
                className={`p-2 ${add.status === "active" ? "bg-yellow-500 hover:bg-yellow-700" : "bg-green-500 hover:bg-green-700"
                  } text-white rounded-full transition duration-300 text-center`}
              >
                {add.status === "active" ? <FaStopCircle size={24} /> : <FaPlay size={24} />}
              </button>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AdminDashBordPosts;
