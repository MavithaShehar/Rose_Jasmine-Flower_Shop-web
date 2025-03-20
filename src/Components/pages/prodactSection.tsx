import React, { useEffect, useState } from "react";
import jsonData from "../../../public/data/prodact.json"; 

interface Flower {
  _id: string;
  name: string;
  color: string;
  price: number;
  status: string;
  imageurl: string;
  category: string;
}

function ProductSection(){

  const [flowers, setFlowers] = useState<Flower[]>([]);

  useEffect(() => {
    const fetchFlowers = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/products");
        const data = await response.json();
        
        if (response.ok) {
          console.log(data)
          setFlowers(data); // Assuming `data` is an array
        } else {
          alert(data.message || "Something went wrong.");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        alert("Something went wrong.");
      }
    };
    fetchFlowers();
  }, []);
      
  return (
    <section className="bg-red-800 py-10">
      <div className="w-full pl-20 pr-20 bg-amber-300">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 bg-amber-900">
          {flowers.map((flower) => {
            if (flower.status === "active") {
                return (
                    <div
                      key={flower._id}
                      className="bg-white p-1 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl"
                    >
                      <div className="flex flex-col items-center bg-amber-300">
                        {/* Background image */}
                        <div
                          style={{
                            backgroundImage: `url(${flower.imageurl})`,
                          }}
                          className="w-full h-64 rounded-1xl bg-center bg-cover mb-4"
                        ></div>
      
                        {/* Flower details */}
                        <div className="text-center space-y-2 bg-red-600">
                          <h3 className="text-xl font-semibold text-gray-800">
                            {flower.name}
                          </h3>
                          <p className="text-sm text-gray-600">
                            Color: {flower.color}
                          </p>
                          <span className="block text-lg font-semibold text-gray-900">
                            ${flower.price}
                          </span>
                        </div>
                      </div>
      
                      {/* Add to Cart Section */}
                      <div className="flex justify-around items-center mt-2">
                        <div className="flex items-center space-x-2">
                          <button className="text-sm px-3 py-1 border border-green-400 rounded-2xl hover:bg-gray-200 active:bg-blue-300">
                            -
                          </button>
      
                          <input
                            type="number"
                            defaultValue={1}
                            min="1"
                            className="w-12 flex text-center border border-gray-300"
                          />
      
                          <button className="text-sm px-3 py-1 border border-green-400 rounded-2xl hover:bg-gray-200 active:bg-blue-300">
                            +
                          </button>
                        </div>
      
                        <button className="p-1 text-green-600 hover:text-white font-semibold border border-green-800 rounded-lg hover:bg-green-600 transition duration-300">
                          BUY +
                        </button>
                      </div>
                    </div>
                  );
            }
           
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
