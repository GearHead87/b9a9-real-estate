const Contact = () => {


    return (
        <div>
            <section className="bg-blue-50 " id="contact">
                <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
                    <div className="mb-4">
                        <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
                            <p className="text-base font-semibold uppercase tracking-wide text-blue-600 ">
                                Contact
                            </p>
                            <h2
                                className="font-heading mb-4 font-bold tracking-tight text-gray-900 text-3xl sm:text-5xl">
                                Get in Touch
                            </h2>
                            <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-600 ">Have questions or need assistance?
                            </p>
                        </div>
                    </div>
                    <div className="flex items-stretch justify-center">
                        <div className="">
                            <div className="h-full pr-6 ">
                                <p className="mt-3 mb-12 text-lg text-gray-600 ">
                                    We're here to help! Feel free to reach out to our team using the contact information below. Whether you're interested in scheduling a property viewing, exploring investment opportunities, or simply want more information about our services, we're ready to assist you.
                                </p>
                                <ul className="mb-6 md:mb-0 flex flex-col lg:flex-row justify-center items-center gap-4">
                                    <li className="flex">
                                        <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round" className="h-6 w-6">
                                                <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                                                <path
                                                    d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z">
                                                </path>
                                            </svg>
                                        </div>
                                        <div className="ml-4 mb-4">
                                            <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 ">Our Address
                                            </h3>
                                            <p className="text-gray-600 ">1230 Maecenas Street Donec Road</p>
                                            <p className="text-gray-600 ">New York, EEUU</p>
                                        </div>
                                    </li>
                                    <li className="flex">
                                        <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round" className="h-6 w-6">
                                                <path
                                                    d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2">
                                                </path>
                                                <path d="M15 7a2 2 0 0 1 2 2"></path>
                                                <path d="M15 3a6 6 0 0 1 6 6"></path>
                                            </svg>
                                        </div>
                                        <div className="ml-4 mb-4">
                                            <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 ">Contact
                                            </h3>
                                            <p className="text-gray-600 ">Mobile: +1 (123) 456-7890</p>
                                            <p className="text-gray-600 ">Mail: tailnext@gmail.com</p>
                                        </div>
                                    </li>
                                    <li className="flex">
                                        <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round" className="h-6 w-6">
                                                <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                                                <path d="M12 7v5l3 3"></path>
                                            </svg>
                                        </div>
                                        <div className="ml-4 mb-4">
                                            <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 ">Working
                                                hours</h3>
                                            <p className="text-gray-600 ">Monday - Friday: 08:00 - 17:00</p>
                                            <p className="text-gray-600 ">Saturday &amp; Sunday: 08:00 - 12:00</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            {/* <div className="card h-fit max-w-6xl p-5 md:p-12" id="form">
                                <h2 className="mb-4 text-2xl font-bold ">Ready to Get Started?</h2>
                                <div className='border-2 h-[500px]'>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </section >
        </div >
    );
};

export default Contact;