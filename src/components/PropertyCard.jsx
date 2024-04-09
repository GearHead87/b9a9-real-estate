import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import PropTypes from 'prop-types';


const PropertyCard = ({ property }) => {

    useEffect(() => {
        AOS.init();
    }, [])

    const { id, estate_title, segment_name, description, price, status, area, location, facilities, image } = property;

    let animationType = ""
    if(id<=3){
        animationType = "fade-right"
    }
    else if(id<=6){
        animationType = "fade-left"
    }
    else if(id<=9){
        animationType = "fade-right" 
    }

    return (
        <div className="mx-auto">
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow" data-aos={animationType}>
                <span >
                    <img className="rounded-t-lg p-4 rounded-lg" src={image} alt="" />
                </span>
                <div className="p-5">
                    <span>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{estate_title}</h5>
                    </span>
                    <p className="mb-3 font-normal text-gray-700 ">{description}</p>
                    <Link to={`property/${id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                        View Property
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default PropertyCard;

PropertyCard.propTypes = {
    property: PropTypes.object,
}