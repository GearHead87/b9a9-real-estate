import { useLoaderData } from "react-router-dom";
import Estates from "../components/Estates";
import Slider from "../components/Slider";

const Home = () => {
    const properties = useLoaderData();
    return (
        <div>
            <Slider></Slider>
            <Estates
                properties = {properties}
            ></Estates>
        </div>
    );
};

export default Home;