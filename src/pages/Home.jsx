import { useLoaderData } from "react-router-dom";
import Estates from "../components/Estates";
import Slider from "../components/Slider";
import WelcomeBanner from "../components/WelcomeBanner";
import { Helmet } from "react-helmet";

const Home = () => {
    const properties = useLoaderData();
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <WelcomeBanner></WelcomeBanner>
            <Slider></Slider>
            <Estates
                properties = {properties}
            ></Estates>
        </div>
    );
};

export default Home;