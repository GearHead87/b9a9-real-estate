import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import './styles.css';

const Slider = () => {
    return (
        <div>
            <h2 className='text-4xl font-bold text-center my-4'>Popular Estates</h2>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper flex items-center justify-center">
                <SwiperSlide> <img src="https://i.ibb.co/vmvtq8P/image.pngg"/> </SwiperSlide>
                <SwiperSlide> <img src="https://i.ibb.co/jWx8QQp/image.png" /> </SwiperSlide>
                <SwiperSlide> <img src="https://i.ibb.co/SVMMc0q/john-chapman-house-2-Courteisy-of-Plus-Architecture.jpg" /> </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;