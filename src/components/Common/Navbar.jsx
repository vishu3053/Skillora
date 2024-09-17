import React from "react";
import Logo from "../../assets/Logo/Logo-Full-Light.png";
import { Link, matchPath } from "react-router-dom";
import {NavbarLinks} from "../../data/navbar-links";
import { useLocation } from "react-router-dom";
import { AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai"
import { ACCOUNT_TYPE } from "../../utils/constants"
import { useSelector } from "react-redux";
import ProfileDropdown from "../core/Auth/ProfileDropdown";
import { apiConnector } from "../../services/apiConnector"
import { categories } from "../../services/apis"
import { useState, useEffect } from "react";


const subLinks = [
  {
    title: "Python",
    link: "/catalog/python",
  },
  {
    title: "web-development",
    link: "/catalog/web-development",
  },
];


function Navbar() {
    const { token } = useSelector((state) => state.auth)
    const { user } = useSelector((state) => state.profile)
    const { totalItems } = useSelector((state) => state.cart)

    const location = useLocation();

    // const [subLinks, setSubLinks] = useState([subLinks])

    // const fetchSubLinks = async() => {
    //     try {
    //         const res = await apiConnector("GET", categories.CATEGORIES_API)
    //         setSubLinks(res.data.data)
    //     } 
    //     catch (error) {
    //         console.log("Could not fetch Categories.", error)
    //     }
    // }

    // useEffect( () => {
    //     fetchSubLinks();
    // }, []);

    const matchRoute = (route) => {
        return matchPath({path:route}, location.pathname);
    } 

    return (
        <div className="flex h-14 border-b-richblack-700 border-b-[1px] items-center justify-center"> 
            <div className="flex w-9/12 max-w-maxContent items-center justify-between">

            {/* Image */}
                <Link to="/">
                    <img src={Logo} width={160} height={42} loading="lazy"/>
                </Link>

            {/* Nav Links */}
            <nav>
                <ul className="flex gap-x-6 text-richblack-25">
                    {
                        NavbarLinks.map ((link, index) => (
                            <li key={index}>
                                {
                                    link.title === "Catalog" ? (
                                    <div>
                                        <p>
                                            {link.title}
                                        </p>
                                    </div>
                                    ) : (
                                        <Link to={link?.path}>
                                            <p className={`${matchRoute(link?.path) ? "text-yellow-25" : 
                                                "text-richblack-25" }`}>
                                                {link.title}
                                            </p>
                                        </Link>
                                    )
                                }
                            </li>
                        )) 
                    }
                </ul>
            </nav>

            {/* Login/Signup/Dashboard */}
                <div className="flex gap-x-6 items-center">
                    {
                        user && user?.accountType !== ACCOUNT_TYPE.INSTRUCTOR  && (
                            <Link to="/dashboard/cart" className="relative">
                                <AiOutlineShoppingCart className="text-2xl text-richblack-100" />
                                {
                                    totalItems > 0 && (
                                        <span className="absolute -bottom-2 -right-2 grid h-5 w-5 place-items-center overflow-hidden rounded-full bg-richblack-600 text-center text-xs font-bold text-yellow-100">
                                            {totalItems}
                                        </span>
                                    )
                                }
                            </Link>
                        )
                    }

                {/*When To show Login button or not */}
                    {
                        token === null && (
                            <Link to="/login">
                                <button className="rounded-[8px] border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100">
                                    Log in
                                </button>
                        </Link>
                        )
                    }

                {/* Signup Button */}
                    {
                        token === null && (
                            <Link to="/signup">
                                <button className="rounded-[8px] border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100">
                                    Sign up
                                </button>
                            </Link>
                        )
                    }

                {/* If user exists */}
                    {
                        token !== null && <ProfileDropdown />
                    }
                </div>

            </div>
        </div>
    );
}

export default Navbar;