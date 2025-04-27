import { FaCcVisa, FaCcMastercard } from "react-icons/fa";

function PaymentPage() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-lg">
      <div className="w-full max-w-md bg-white rounded-lg p-6 shadow-lg">

        {/* Total amount display */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-semibold text-green-700">Total: $100.00</h1>
        </div>

        {/* Card icons */}
        <div className="w-full h-16 bg-amber-500 mb-5 rounded-md flex justify-center items-center gap-5">
          <FaCcVisa className="text-5xl text-white" />
          <FaCcMastercard className="text-5xl text-white" />
        </div>

        {/* Card Name */}
        <div className="mb-5">
          <label htmlFor="card-name" className="block text-sm font-semibold text-gray-600">Card Name</label>
          <input
            id="card-name"
            type="text"
            placeholder="Enter Card Name"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-300"
            required
          />
        </div>

        {/* Card Number */}
        <div className="mb-5">
          <label htmlFor="card-number" className="block text-sm font-semibold text-gray-600">Card Number</label>
          <input
            id="card-number"
            type="text"
            inputMode="numeric"
            pattern="[0-9\s]{13,19}"
            placeholder="Enter Card Number"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-300"
            required
          />
        </div>

        {/* Expiry Date and CVV */}
        <div className="flex gap-4 mb-5">
          <div className="w-1/2">
            <label htmlFor="expire-date" className="block text-sm font-semibold text-gray-600">Expire Date</label>
            <input
              id="expire-date"
              type="date"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-300"
              required
            />
          </div>
          <div className="w-1/2">
            <label htmlFor="cvv" className="block text-sm font-semibold text-gray-600">CVV</label>
            <input
              id="cvv"
              type="text"
              inputMode="numeric"
              maxLength={3}
              placeholder="Enter CVV"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-300"
              required
            />
          </div>
        </div>

        {/* Pay Now Button */}
        <div className="mt-6">
          <button className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300">
            Pay Now
          </button>
        </div>

      </div>
    </div>
  );
}

export default PaymentPage;
