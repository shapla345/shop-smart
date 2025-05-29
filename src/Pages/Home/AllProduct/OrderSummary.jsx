// src/pages/OrderSummary.jsx
import { useParams } from "react-router-dom";

export const OrderSummary = () => {
  const { id } = useParams();

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow rounded text-center">
      <h2 className="text-2xl font-bold mb-4 text-green-600">Order Successful!</h2>
      <p className="mb-2 text-gray-700">Thank you for your purchase.</p>
      <p className="mb-4"><strong>Order for Product ID:</strong> {id}</p>
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        onClick={() => window.location.href = "/"}
      >
        Back to Home
      </button>
    </div>
  );
};
