import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
//import { AuthContext } from "../../Provider/AuthProvider";

import logo from '../../../assets/logo.png'
import swal from "sweetalert";
import { AuthContext } from "../../../providers/AuthProvider";

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
    
    const handleSignOut = () => {
        logout()
            .then(result => {

                swal('Sign Out Successful')
                console.log(result.user);
            })
            .catch(error => {
                console.error(error);
                
            })
    }

    const navLinks = <>

    <NavLink
        to="/"
        className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-emerald-400 underline" : ""
        }
    >
        <li className="text-lg md:text-xl font-semibold">Home</li>
    </NavLink>

    {/* <NavLink
        to="/register"
        className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-emerald-400 underline" : ""
        }
    >
        <li className="text-lg md:text-xl font-semibold">Register</li>

    </NavLink> */}
    <NavLink
        to="/addJob"
        className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-emerald-400 underline" : ""
        }
    >
        <li className="text-lg md:text-xl font-semibold"> Add Job</li>

    </NavLink>
    <NavLink
        to="/postedJob"
        className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-emerald-400 underline" : ""
        }
    >
        <li className="text-lg md:text-xl font-semibold"> My Posted Jobs</li>

    </NavLink>
    <NavLink
        to="/bids"
        className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-emerald-400 underline" : ""
        }
    >   <li className="text-lg md:text-xl font-semibold"> My Bids</li>

    </NavLink>
    <NavLink
        to="/bidRequest"
        className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-emerald-400 underline" : ""
        }
    >   <li className="text-lg md:text-xl font-semibold"> Bid Request</li>

    </NavLink>

</>

    return (
        <div className=" fixed top-0 left-0 w-full z-50 bg-base-100 shadow-md">
             <div className="navbar bg-base-100 mt-5">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {
            navLinks
        }
        
      </ul>
    </div>
     <div className="flex gap-0 items-center">
      <img className="w-20 h-20  " src={logo} alt="" />
       <a className=" hidden md:block  font-bold text-2xl ">Bit Jobs</a>
     </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="flex gap-3 md:gap-5 justify-center mt-1 mb-2">
        {
            navLinks
        }
     
    </ul>
  </div>
  <div className="navbar-end">
    {/* <NavLink to ="/login">login</NavLink> */}
          {
                    user ? <div className="flex items-center ">
                        
                       
                         <div className=" navbar-center hidden md:flex">
                         <img className="w-7 h-7 rounded-full mr-3" src={user.photoURL} alt="" />
                         <p className="text-lg font-medium mr-3">{user.displayName}</p>
                         </div>
                     
                        <button onClick={handleSignOut} className="btn bg-blue-700 text-base
                         text-white">Sign Out</button>
                        
                    </div> :
                        <Link to="/login"> <button 
                        className="btn bg-blue-700 text-base text-white">Login</button></Link>
                }
            </div>
   
            </div>
            <div className="md:hidden">
                     {
                        user && <div className=" flex justify-end">
                        <img className="w-7 h-7 rounded-full mr-3" src={user.photoURL} alt="" />
                        <p className="text-lg font-medium mr-3">{user.displayName}</p>
                        </div>
                     }
            </div>
        </div>
    );
};

export default Navbar;








//video part

// import React from "react";
// import Logo from "../../../assets/logo.png";
// import { IoMdSearch } from "react-icons/io";
// import { FaCartShopping } from "react-icons/fa6";
// import { FaCaretDown } from "react-icons/fa";
// import DarkMode from "./DarkMode";

// const Menu = [
//   {
//     id: 1,
//     name: "Home",
//     link: "/#",
//   },
//   {
//     id: 2,
//     name: "Top Rated",
//     link: "/#services",
//   },
//   {
//     id: 3,
//     name: "Kids Wear",
//     link: "/#",
//   },
//   {
//     id: 3,
//     name: "Mens Wear",
//     link: "/#",
//   },
//   {
//     id: 3,
//     name: "Electronics",
//     link: "/#",
//   },
// ];

// const DropdownLinks = [
//   {
//     id: 1,
//     name: "Trending Products",
//     link: "/#",
//   },
//   {
//     id: 2,
//     name: "Best Selling",
//     link: "/#",
//   },
//   {
//     id: 3,
//     name: "Top Rated",
//     link: "/#",
//   },
// ];

// const Navbar = ({ handleOrderPopup }) => {
//   return (
//     <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
//       {/* upper Navbar */}
//       <div className="bg-primary/40 py-2">
//         <div className="container flex justify-between items-center">
//           <div>
//             <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
//               <img src={Logo} alt="Logo" className="w-10" />
//               Shopsy
//             </a>
//           </div>

//           {/* search bar */}
//           <div className="flex justify-between items-center gap-4">
//             <div className="relative group hidden sm:block">
//               <input
//                 type="text"
//                 placeholder="search"
//                 className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800  "
//               />
//               <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
//             </div>

//             {/* order button */}
//             <button
//               onClick={() => handleOrderPopup()}
//               className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white  py-1 px-4 rounded-full flex items-center gap-3 group"
//             >
//               <span className="group-hover:block hidden transition-all duration-200">
//                 Order
//               </span>
//               <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
//             </button>

//             {/* Darkmode Switch */}
//             <div>
//               <DarkMode />
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* lower Navbar */}
//       <div data-aos="zoom-in" className="flex justify-center">
//         <ul className="sm:flex hidden items-center gap-4">
//           {Menu.map((data) => (
//             <li key={data.id}>
//               <a
//                 href={data.link}
//                 className="inline-block px-4 hover:text-primary duration-200"
//               >
//                 {data.name}
//               </a>
//             </li>
//           ))}
//           {/* Simple Dropdown and Links */}
//           <li className="group relative cursor-pointer">
//             <a href="#" className="flex items-center gap-[2px] py-2">
//               Trending Products
//               <span>
//                 <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
//               </span>
//             </a>
//             <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md">
//               <ul>
//                 {DropdownLinks.map((data) => (
//                   <li key={data.id}>
//                     <a
//                       href={data.link}
//                       className="inline-block w-full rounded-md p-2 hover:bg-primary/20 "
//                     >
//                       {data.name}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

