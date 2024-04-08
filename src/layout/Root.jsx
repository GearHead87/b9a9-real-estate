import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import { Toaster } from 'react-hot-toast';
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const Root = () => {
    const { loading } = useContext(AuthContext);

    if (loading) {
        return <>
            <div className="flex items-center justify-center mt-[20vh]">
                <div className="flex items-center justify-center w-56 h-56 border border-gray-200 rounded-lg bg-gray-50 ">
                    <div className="px-3 py-1 text-xs font-medium leading-none text-center text-blue-800 bg-blue-200 rounded-full animate-pulse ">loading...</div>
                </div>
            </div>
        </>
    }

    return (
        <div className='max-w-screen-xl mx-auto'>
            <Toaster></Toaster>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;