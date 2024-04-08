import { useContext } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "../provider/AuthProvider";
import { isUrl } from "check-valid-url";
import toast from "react-hot-toast";

const UpdateProfile = () => {
    const { user, setLoading, updateUserProfile } = useContext(AuthContext);

    const handleUpdateForm = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget);
        const name = form.get("name");
        const photoURL = form.get("photo-url");
        setLoading(true);
        updateUserProfile(name, photoURL)
            .then((result) => {
                setLoading(false);
                console.log("profile updated" + result)
                toast.success("Your profile has been updated successfully");
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <div>
            <Helmet>
                <title>Update Profile</title>
            </Helmet>

            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow ">

                <div className="flex flex-col items-center pb-10 mt-4">
                    <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={isUrl(user?.photoURL) ? user?.photoURL : "https://i.ibb.co/XDrnjqc/image.png"} alt="Bonnie image" />
                    <h5 className="mb-1 text-xl font-medium text-gray-900 ">{user?.displayName}</h5>
                    <span className="text-sm text-gray-500 ">{user.email}</span>

                    <form onSubmit={handleUpdateForm}>
                        <div className="my-5">
                            <label className="block mb-2 text-sm font-medium text-gray-900 ">Name</label>
                            <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" defaultValue={user.displayName} required />
                        </div>
                        <div className="mb-5">
                            <label className="block mb-2 text-sm font-medium text-gray-900 ">Your Email</label>
                            <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" value={user.email} disabled />
                        </div>
                        <div className="mb-5">
                            <label className="block mb-2 text-sm font-medium text-gray-900 ">Photo URL</label>
                            <input type="text" name="photo-url" id="photo-url" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " defaultValue={user.photoURL} required />
                        </div>
                        <button type="submit" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">Submit</button>

                    </form>
                </div>
            </div>

        </div>
    );
};

export default UpdateProfile;