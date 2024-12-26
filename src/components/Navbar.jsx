

import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

export default function Navbar() {
    const { user } = useContext(AuthContext);AuthContext

    return (
        <div className="navbar bg-blue-600">
            {/* Navbar Start */}
            <div className="navbar-start">
                {/* Mobile Hamburger Menu */}
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>

                    {/* Mobile Dropdown Menu */}
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-white text-gray-800 rounded-box z-[1] mt-3 w-52 p-2 shadow-md"
                    >
                        <li><a>Item 1</a></li>
                        <li>
                            <a>Parent</a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>

                {/* Logo or Brand Name */}
                <a className="btn btn-ghost text-white text-2xl font-semibold">Hotel California</a>
            </div>

            {/* Navbar Center for Desktop */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-6">
                    <li><a className="text-white hover:text-gray-300 transition-colors">Home</a></li>
                    <li>
                        <details>
                            <summary className="text-white hover:text-gray-300 transition-colors">Services</summary>
                            <ul className="p-2 bg-white rounded-lg">
                                <li><a className="text-gray-700 hover:bg-gray-100">Submenu 1</a></li>
                                <li><a className="text-gray-700 hover:bg-gray-100">Submenu 2</a></li>
                            </ul>
                        </details>
                    </li>
                    <li><a className="text-white hover:text-gray-300 transition-colors">About</a></li>
                </ul>
            </div>

            {/* Navbar End */}
            <div className="navbar-end space-x-4">
                {/* Conditional Rendering */}
                {!user ? (
                    <>
                        <a
                            href="/signin"
                            className="btn bg-gray-700 text-white hover:bg-gray-800 transition-colors py-2 px-4 rounded-lg"
                        >
                            Sign In
                        </a>

                        <a
                            href="/signup"
                            className="btn bg-blue-500 text-white hover:bg-blue-600 transition-colors py-2 px-4 rounded-lg"
                        >
                            Sign Up
                        </a>
                    </>
                ) : (
                    <>
                        {/* Display user image */}
                        <div className="flex items-center space-x-2">
                            <img
                                src={user.photoURL || "default-avatar.png"}  // Default avatar if no photoURL is provided
                                alt={user.displayName}
                                className="w-8 h-8 rounded-full"
                            />
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
