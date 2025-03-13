import React from "react";
import jsonData from "../../public/data/prodact.json"; // Assuming the new JSON is stored here

interface Flower {
  id: number;
  name: string;
  color: string;
  price: number;
  image: string;
  category: string;
}

const ProductSection: React.FC = () => {
  const flowers: Flower[] = jsonData.flowers;

  return (
    <section className="bg-red-800 py-10">
      <div className="w-screen pl-20 pr-20 bg-amber-300">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {flowers.map((flower) => (
            <div
              key={flower.id}
              className="bg-white p-2 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl"
            >
              <div className="flex flex-col items-center">
                {/* Background image */}
                <div
                  style={{
                    backgroundImage: `url(${flower.image || '/default-image.jpg'})`, // Fallback image if flower.image is missing
                  }}
                  className="w-64 h-64 rounded-2xl bg-center bg-cover duration-500 mb-4"
                ></div>

                {/* Flower details */}
                <div className="text-center space-y-2">
                  <h3 className="text-xl font-semibold text-gray-800">{flower.name}</h3>
                  <p className="text-sm text-gray-600">Color: {flower.color}</p>
                  <span className="block text-lg font-semibold text-gray-900">${flower.price.toFixed(2)}</span>
                </div>
              </div>

              {/* Add to Cart Section */}
              <div className="flex justify-between items-center mt-6">
                <div className="flex items-center space-x-2">
                  <button className="text-xl px-3 py-1 border border-gray-300 rounded-l-lg">-</button>
                  <input
                    type="number"
                    value={1}
                    min="1"
                    className="w-12 text-center border border-gray-300"
                  />
                  <button className="text-xl px-3 py-1 border border-gray-300 rounded-r-lg">+</button>
                </div>

                <button className="text-red-600 hover:text-red-800 font-semibold">Remove</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
