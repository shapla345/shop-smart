// src/pages/Checkout.jsx
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

export const Checkout = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [address, setAddress] = useState("");

  const handleOrder = () => {
    if (!address.trim()) {
      alert("Please enter your shipping address.");
      return;
    }
    // Simulate successful order and redirect
    navigate(`/order-summary/${id}`);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4 text-center">Checkout</h2>
      <p className="mb-2"><strong>Product ID:</strong> {id}</p>
      <label className="block mb-2 font-semibold">Shipping Address:</label>
      <textarea
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded mb-4"
        placeholder="Enter your shipping address..."
      ></textarea>
      <button
        onClick={handleOrder}
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
      >
        Confirm & Pay
      </button>
    </div>
  );
};
