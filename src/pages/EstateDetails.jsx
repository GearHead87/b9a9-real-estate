import { useLoaderData, useParams } from "react-router-dom";
import { IoMdResize } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { Helmet } from "react-helmet";

const EstateDetails = () => {
    const properties = useLoaderData();
    const propertyID = parseInt(useParams().id);
    const property = properties.find((p) => p.id === propertyID);
    const { id, estate_title, segment_name, description, price, status, area, location, facilities, image } = property
    return (
        <div>
            <Helmet>
                <title>{estate_title}</title>
            </Helmet>
            <div className="flex flex-col items-center mt-10 bg-white border border-gray-200 rounded-lg shadow md:flex-row">
                <img className="object-cover w-full rounded-t-lg m-4 h-96 md:h-auto md:w-96 md:rounded-none md:rounded-s-lg" src={image} />
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{estate_title}</h5>
                    <p className="mb-2 text-base text-gray-500">{segment_name}</p>
                    <div className="mb-2">
                        <span className=" bg-blue-100 text-blue-800 text-lg font-semibold px-2.5 py-0.5 rounded ">{status}</span>
                    </div>
                    <p className="mb-3 font-normal text-gray-700 ">{description}</p>
                    <div className="bg-slate-100 p-2 rounded-3xl mb-2">
                        <div className="flex flex-row items-center gap-2 mb-2">
                            <IoMdResize className="text-lg" />
                            <p className=" font-semibold">Area: {area} </p>
                        </div>
                        <div className="flex flex-row items-center gap-2 mb-2">
                            <IoLocationSharp className="text-lg" />
                            <p className=" font-semibold">Location: {location} </p>
                        </div>
                        <div className="flex flex-row items-center gap-2 mb-2  ">
                            <p className="font-semibold">Facilities:</p>
                            <ul className="ml-4 list-disc font-semibold">
                                {
                                    facilities.map((f, index) => (
                                        <li key={index}>{f}</li>
                                    ))
                                }

                            </ul>
                        </div>
                        <p className="text-2xl font-bold text-gray-900">{price}</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default EstateDetails;