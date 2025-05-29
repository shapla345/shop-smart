import { useParams } from "react-router-dom";

export const ProductDetails = () => {
  const { id } = useParams();

  const products = [
    {
      id: 1,
      name: "Men's Denim Jacket",
      image: "https://i.ibb.co/4nQHKXLs/women.png",
      price: 49.99,
      category: "Men's Fashion",
      gender: "Male"
    },
    {
      id: 2,
      name: "Women's Casual Dress",
      image: "https://i.ibb.co/4nQHKXLs/women.png",
      price: 39.99,
      category: "Women's Fashion",
      gender: "Female"
    },
    {
      id: 3,
      name: "Bluetooth Headphones",
      image: "https://i.ibb.co/4nQHKXLs/women.png",
      price: 89.99,
      category: "Electronics",
      gender: "Unisex"
    },
    {
      id: 4,
      name: "Sports Shoes",
      image: "https://i.ibb.co/4nQHKXLs/women.png",
      price: 59.99,
      category: "Footwear",
      gender: "Unisex"
    },
    {
      id: 5,
      name: "Baby Romper Set",
      image: "https://i.ibb.co/4nQHKXLs/women.png",
      price: 24.99,
      category: "Baby Clothing",
      gender: "Baby"
    },
    {
      id: 6,
      name: "Leather Handbag",
      image: "https://i.ibb.co/4nQHKXLs/women.png",
      price: 79.99,
      category: "Accessories",
      gender: "Female"
    },
    {
      id: 7,
      name: "Gaming Mouse",
      image: "https://i.ibb.co/4nQHKXLs/women.png",
      price: 29.99,
      category: "Electronics",
      gender: "Unisex"
    },
    {
      id: 8,
      name: "Baby Shoes",
      image: "https://i.ibb.co/4nQHKXLs/women.png",
      price: 19.99,
      category: "Baby Footwear",
      gender: "Baby"
    },
    {
      id: 9,
      name: "Men's Formal Shirt",
      image: "https://i.ibb.co/4nQHKXLs/women.png",
      price: 34.99,
      category: "Men's Fashion",
      gender: "Male"
    },
    {
      id: 10,
      name: "Women's Handbag",
      image: "https://i.ibb.co/4nQHKXLs/women.png",
      price: 59.99,
      category: "Accessories",
      gender: "Female"
    }
  ];

  // Convert URL id to number
  const product = products.find(p => p.id === parseInt(id));

  // If not found
  if (!product) {
    return <h2 className="text-center mt-10 text-red-500">Product not found</h2>;
  }

  return (
    <div className="max-w-xl mx-auto bg-white p-6 shadow-md rounded-md mt-10">
      <img src={product.image} alt={product.name} className="w-full h-auto rounded-md mb-4" />
      <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
      <p className="text-lg text-gray-600 mb-1"><strong>Price:</strong> ${product.price}</p>
      <p className="text-lg text-gray-600 mb-1"><strong>Category:</strong> {product.category}</p>
      <p className="text-lg text-gray-600"><strong>Gender:</strong> {product.gender}</p>
      <div>
        <button className="text-center mt-4 mb-10  mx-auto text-xl font-bold  text-blue-400 block">Order Now</button>
      </div>
    </div>
  );
};
