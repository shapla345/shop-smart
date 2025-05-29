import { useState } from "react";
import { NavLink } from "react-router-dom";
//import { useSearchParams } from "react-router-dom";


export const AllProduct = () => {
    const products  = [
  {
    id: 1,
    name: "Men's Denim Jacket",
    image:"https://i.ibb.co/4nQHKXLs/women.png" ,
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

const [showAll, setShowAll] = useState(false);
const displayProducts = showAll? products : products.slice(0,8);

  return (
    <div className="max-w-screen-xl mx-auto" >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10 " >
            {displayProducts.map(product => (
                <div >
                    <div className="card bg-base-100 bg-white text-black shadow-lg">
  <figure>
    <img
      src={product.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-xl mx-auto font-bold">{product.name}</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
<p className="text-xl text-center font-bold text"><span className="text-blue-500">{product.price}</span> $</p>
    <div className="flex justify-between	 ">
        <div className="card-actions justify-end">
     <NavLink to={`/product/${product.id}`}> <button className="btn bg-yellow-600 rounded-lg border-none ">Details</button></NavLink>

    </div>
    <div>
        <button className="btn bg-yellow-600 rounded-lg border-none">Add to Card</button>
    </div>
    </div>
    
  </div>
                </div>
                </div>
            ))}
        </div>

        {!showAll && products.length> 8 && (
            <p onClick={() => setShowAll(true)} className="text-center mt-4 mb-10  mx-auto text-xl font-bold  text-blue-400 block">
 See More...
</p>

        )}
    </div>
  )
}

//chat gpt code

// import { useState } from "react";
// import { NavLink } from "react-router-dom";
// import { useCart } from "../../../Pages/Home/AllProduct/CartContext"; // ✅ path ঠিকমতো দাও

// export const AllProduct = () => {
//   const { addToCart } = useCart(); // ✅ কার্ট ফাংশন

//   const products = [
//     {
//       id: 1,
//       name: "Men's Denim Jacket",
//       image: "https://i.ibb.co/4nQHKXLs/women.png",
//       price: 49.99,
//       category: "Men's Fashion",
//       gender: "Male"
//     },
//     {
//       id: 2,
//       name: "Women's Casual Dress",
//       image: "https://i.ibb.co/4nQHKXLs/women.png",
//       price: 39.99,
//       category: "Women's Fashion",
//       gender: "Female"
//     },
//     {
//     id: 3,
//     name: "Bluetooth Headphones",
//     image: "https://i.ibb.co/4nQHKXLs/women.png",
//     price: 89.99,
//     category: "Electronics",
//     gender: "Unisex"
//   },
//   {
//     id: 4,
//     name: "Sports Shoes",
//     image: "https://i.ibb.co/4nQHKXLs/women.png",
//     price: 59.99,
//     category: "Footwear",
//     gender: "Unisex"
//   },
//   {
//     id: 5,
//     name: "Baby Romper Set",
//     image: "https://i.ibb.co/4nQHKXLs/women.png",
//     price: 24.99,
//     category: "Baby Clothing",
//     gender: "Baby"
//   },
//   {
//     id: 6,
//     name: "Leather Handbag",
//     image: "https://i.ibb.co/4nQHKXLs/women.png",
//     price: 79.99,
//     category: "Accessories",
//     gender: "Female"
//   },
//   {
//     id: 7,
//     name: "Gaming Mouse",
//     image: "https://i.ibb.co/4nQHKXLs/women.png",
//     price: 29.99,
//     category: "Electronics",
//     gender: "Unisex"
//   },
//   {
//     id: 8,
//     name: "Baby Shoes",
//     image: "https://i.ibb.co/4nQHKXLs/women.png",
//     price: 19.99,
//     category: "Baby Footwear",
//     gender: "Baby"
//   },
//   {
//     id: 9,
//     name: "Men's Formal Shirt",
//     image: "https://i.ibb.co/4nQHKXLs/women.png",
//     price: 34.99,
//     category: "Men's Fashion",
//     gender: "Male"
//   },
//   {
//     id: 10,
//     name: "Women's Handbag",
//     image: "https://i.ibb.co/4nQHKXLs/women.png",
//     price: 59.99,
//     category: "Accessories",
//     gender: "Female"
//   }
//     // ✅ বাকি product গুলোও একইভাবে রাখতে পারো
//   ];

//   const [showAll, setShowAll] = useState(false);
//   const displayProducts = showAll ? products : products.slice(0, 8); // ✅ এখানে হচ্ছে error fix

//   return (
//     <div className="max-w-screen-xl mx-auto">
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
//         {displayProducts.map((product) => (
//           <div key={product.id}>
//             <div className="card bg-white text-black shadow-lg">
//               <figure>
//                 <img src={product.image} alt={product.name} />
//               </figure>
//               <div className="card-body">
//                 <h2 className="card-title text-xl mx-auto font-bold">{product.name}</h2>
//                 <p className="text-center text-gray-600">{product.category}</p>
//                 <p className="text-xl text-center font-bold">
//                   <span className="text-blue-500">{product.price}</span> $
//                 </p>
//                 <div className="flex justify-between mt-3">
//                   <NavLink to={`/product/${product.id}`}>
//                     <button className="btn bg-yellow-600 rounded-lg border-none">Details</button>
//                   </NavLink>
//                   <button
//                     onClick={() => addToCart(product)}
//                     className="btn bg-yellow-600 rounded-lg border-none"
//                   >
//                     Add to Cart
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {!showAll && products.length > 8 && (
//         <p
//           onClick={() => setShowAll(true)}
//           className="text-center mt-4 mb-10 mx-auto text-xl font-bold text-blue-400 block cursor-pointer"
//         >
//           See More...
//         </p>
//       )}
//     </div>
//   );
// };
