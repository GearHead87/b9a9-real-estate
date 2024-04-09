import 'animate.css';
const WelcomeBanner = () => {
    return (
        <div className='flex flex-col justify-center items-center h-72 bg-slate-400 rounded-3xl mt-4 px-4'>
            <h1 className="animate__animated animate__bounce animate__delay-1s animate__infinite text-3xl lg:text-7xl font-bold">Welcome to UrbanDwell</h1>
            <p className='text-lg lg:text-xl font-semibold mt-10'>Start your journey with UrbanDwell today and find the urban oasis you've been dreaming of.</p>
        </div>
    );
};

export default WelcomeBanner;