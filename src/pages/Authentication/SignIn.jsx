import React, { useContext, useEffect } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import { Helmet } from "react-helmet";
import lottieLogin from "../../assets/lottie/login.json";
import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";

export default function SignIn() {
    const navigate = useNavigate();
    const location = useLocation();
    const locState = location?.state || "/";

    const { signIn, signInWithGoogle } = useContext(AuthContext);

    const handleSignIn = async (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const email = form.get("email");
        const password = form.get("password");
        console.log({ email, password });
        try {
            await signIn(email, password);
            toast.success("Signin Successful");
            navigate(locState, { replace: true });
        } catch (err) {
            console.log(err);
            toast.error(err?.message);
        }
    };

    const handleGoogleSignIn = async () => {
        try {
            await signInWithGoogle();
            toast.success("Signin Successful");
            navigate(locState, { replace: true });
        } catch (err) {
            console.log(err);
            toast.error(err?.message);
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300">
            <Helmet>
                <title>Login - Hotel California</title>
                <meta name="description" content="Sign in to your Hotel California account and book your perfect stay." />
            </Helmet>

            <div className="flex flex-col lg:flex-row items-center w-full max-w-4xl bg-white rounded-lg shadow-lg p-6">
                <div className="w-full lg:w-1/2 flex justify-center mb-6 lg:mb-0">
                    <Player autoplay loop src={lottieLogin} className="w-80 h-80" />
                </div>

                <div className="w-full lg:w-1/2">
                    <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
                        Login
                    </h2>

                    <form onSubmit={handleSignIn}>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                className="w-full border rounded-lg px-3 py-2 text-gray-700 focus:ring focus:ring-blue-400"
                                placeholder="Enter your email"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                                Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                className="w-full border rounded-lg px-3 py-2 text-gray-700 focus:ring focus:ring-blue-400"
                                placeholder="Enter your password"
                            />
                        </div>

                        <div className="mb-4">
                            <button
                                type="submit"
                                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
                            >
                                Login
                            </button>
                        </div>
                    </form>

                    <div className="flex justify-center items-center my-4">
                        <div className="border-t border-gray-300 w-full"></div>
                        <p className="mx-4 text-gray-500">OR</p>
                        <div className="border-t border-gray-300 w-full"></div>
                    </div>
                    <button
                        onClick={handleGoogleSignIn}
                        type="button"
                        className="w-full flex justify-center items-center bg-gray-100 text-gray-700 border rounded-lg py-2 hover:bg-gray-200 transition-colors"
                    >
                        <FcGoogle className="text-2xl mr-2" />
                        Sign in with Google
                    </button>

                    <p className="text-sm text-center text-gray-600 mt-6">
                        Don't have an account?{" "}
                        <a
                            href="#"
                            className="text-blue-500 hover:text-blue-700 font-medium"
                        >
                            Register here
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}
