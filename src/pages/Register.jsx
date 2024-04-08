import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const [error, setError] = useState(null);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();


    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get("name");
        const photoURL = form.get("photo-url");
        const email = form.get("email");
        const password = form.get("password");
        setError(null);

        const hasLowerCase = /[a-z]/.test(password);
        const hasUpperCase = /[A-Z]/.test(password);
        if (!hasLowerCase) {
            setError("Password must contain at least one lowercase letter.");
            toast.error("Password must contain at least one lowercase letter.");
            return;
        }
        if (!hasUpperCase) {
            setError("Password must contain at least one uppercase letter.");
            toast.error("Password must contain at least one uppercase letter.");
            return;
        }
        if (password.length < 6) {
            setError("Password must be at least 6 characters long.");
            toast.error("Password must be at least 6 characters long.");
            return;
        }

        createUser(email, password)
            .then((result) => {
                console.log(result.user);
                updateUserProfile(name, photoURL)
                    .then((result) => {
                        console.log("profile updateed" + result)
                    })
                    .catch((error) => {
                        console.log(error)
                    })
                setError(null);
                toast.success(`Successfully registered user: ${name}`)
                navigate("/");
            })
            .catch((error) => {
                console.log(error);
                setError(error.message);
                toast.error(error.message);
            })

    }
    return (
        <div>
            <Helmet>
                <title>Register</title>
            </Helmet>
            <div className="max-w-sm mx-auto border-2 p-10 rounded-2xl mt-10">
                <form onSubmit={handleRegister}>
                    <div className="mb-5">
                        <label className="block mb-2 text-sm font-medium text-gray-900 ">Name</label>
                        <input type="text" id="name" name="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Name" />
                    </div>
                    <div className="mb-5">
                        <label className="block mb-2 text-sm font-medium text-gray-900 ">Your Email</label>
                        <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Email" required />
                    </div>
                    <div className="mb-5">
                        <label className="block mb-2 text-sm font-medium text-gray-900 ">Photo URL</label>
                        <input type="text" name="photo-url" id="photo-url" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Last Name" required />
                    </div>
                    <div className="mb-5 relative">
                        <label className="block mb-2 text-sm font-medium text-gray-900 ">Your Password</label>
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Password" required />
                        <span className="absolute top-[60%] right-5" onClick={() => setShowPassword(!showPassword)}>
                            {
                                showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                            }
                        </span>
                    </div>
                    <div className="flex items-start mb-5">
                        <div className="flex items-center h-5">
                            <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 " required />
                        </div>
                        <label className="ms-2 text-sm font-medium text-gray-900 ">Remember me</label>
                    </div>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Submit</button>
                </form>
                {error
                    ? <h2 className="text-red-600 mt-4">{error}</h2>
                    : <></>

                }
                <p className="mt-4">Already have a account? <Link className="text-sm font-medium text-gray-900 " to={"/login"}> Login </Link></p>
            </div>
        </div>
    );
};

export default Register;