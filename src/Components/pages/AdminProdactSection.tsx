import { useState } from "react";
import PopupProdact from "../common/popUp/PopupProdact";

function AdminProdactSection() {

     const [visible, setVisible] = useState(false);
    
      const closeModal = () => {
        setVisible(false);
      };
      
    return (
        <section className=" relative w-full h-fit bg-blue-700 flex flex-col">
           
         <div className="sticky top-0 right-0 z-10 bg-white flex items-center justify-end w-full h-20  border-2 border-solid">
        <button
          onClick={() => setVisible(true)}
          className="my-2 mr-10 p-2 bg-green-800 text-white font-semibold rounded-lg hover:bg-green-600 transition duration-300 active:bg-green-800"
        >
          Create Prosact
        </button>
        {<PopupProdact isOpen={visible} onRequestClose={closeModal} />}
            </div>

            <div className="w-full overflow-y-auto  pt-2">

                <div className="mb-5 w-full h-44 bg-yellow-400 flex items-center justify-center">
                <h1 className="text-5xl text-white font-bold">Admin Make DashBoard Posts</h1>
                </div>

                <div className="mb-5 w-full h-44 bg-yellow-400 flex items-center justify-center">
                <h1 className="text-5xl text-white font-bold">Admin Make DashBoard Posts</h1>
                </div>

                <div className="mb-5 w-full h-44 bg-yellow-400 flex items-center justify-center">
                <h1 className="text-5xl text-white font-bold">Admin Make DashBoard Posts</h1>
                </div>

                <div className="mb-5 w-full h-44 bg-yellow-400 flex items-center justify-center">
                <h1 className="text-5xl text-white font-bold">Admin Make DashBoard Posts</h1>
                </div>

                <div className="mb-5 w-full h-44 bg-yellow-400 flex items-center justify-center">
                <h1 className="text-5xl text-white font-bold">Admin Make DashBoard Posts</h1>
                </div>

                <div className="mb-5 w-full h-44 bg-yellow-400 flex items-center justify-center">
                <h1 className="text-5xl text-white font-bold">Admin Make DashBoard Posts</h1>
                </div>

            </div>
        </section>
    );
}

export default AdminProdactSection;
