import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { FaGoogle, FaGithub } from "react-icons/fa";

const Login = () => {
    const { loginUser, googleLoginUser, githubLoginUser } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const [error, setError] = useState(null);


    const handleFormLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get("email");
        const password = form.get("password");
        setError(null);
        loginUser(email, password)
            .then((result) => {
                console.log(result.user);
                navigate(location?.state ? location.state : "/");
            })
            .catch((error) => {
                console.log(error);
                setError(error.message);
            })
    };

    const handleGoogleLogin = () => {
        setError(null);
        googleLoginUser()
            .then((result) => {
                console.log(result.user)
                navigate(location?.state ? location.state : "/");
            })
            .catch((error) => {
                console.log(error)
                setError(error.message);
            })
    }
    const handleGithubLogin = () => {
        setError(null);
        githubLoginUser()
            .then((result) => {
                console.log(result.user)
                navigate(location?.state ? location.state : "/");
            })
            .catch((error) => {
                console.log(error)
                setError(error.message);
            })
    }

    return (
        <div>
            <div className="max-w-sm mx-auto border-2 p-10 rounded-2xl mt-10">
                <form onSubmit={handleFormLogin}>
                    <div className="mb-5">
                        <label className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                        <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Email" required />
                    </div>
                    <div className="mb-5">
                        <label className="block mb-2 text-sm font-medium text-gray-900 ">Your password</label>
                        <input type="password" name="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Password" required />
                    </div>
                    <div className="flex items-start mb-5">
                        <div className="flex items-center h-5">
                            <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 " required />
                        </div>
                        <label className="ms-2 text-sm font-medium text-gray-900 ">Remember me</label>
                    </div>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Submit</button>
                </form>
                <div>
                    <div onClick={handleGoogleLogin} className="btn my-5 text-sm font-medium rounded-lg text-gray-900 w-full bg-gray-50 border border-gray-300">
                        <p className="flex items-center justify-center gap-4"><FaGoogle></FaGoogle>Login with Google</p>
                    </div>
                    <div onClick={handleGithubLogin} className="btn my-2 text-sm font-medium rounded-lg text-gray-900 w-full bg-gray-50 border border-gray-300">
                        <p className="flex items-center justify-center gap-4"><FaGithub></FaGithub>Login with Google</p>
                    </div>

                </div>
                {error
                    ? <h2 className="text-red-600">{error}</h2>
                    : <></>

                }
                <p className="mt-4">Dont have a account <Link className="text-sm font-medium text-gray-900  " to={"/register"}> Create an account </Link></p>
            </div>
        </div>
    );
};

export default Login;