import React from "react";
import style from "./Slider.module.css";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, {Keyboard, Mousewheel, Navigation, Pagination} from "swiper/core";

SwiperCore.use ([Navigation, Pagination, Mousewheel, Keyboard]);

function Slider (props: { pics:any[] }) {
    return (
        <Swiper autoHeight={true} cssMode={true} navigation={true} pagination={true} mousewheel={true} loop={true}
                keyboard={true}
                className="mySwiper">
            {props.pics.map (pic => <SwiperSlide>
                <div className={style.example__picContainer}>
                    <img className={style.example__pic} src={pic} alt="дом"/>
                </div>
            </SwiperSlide>)}
        </Swiper>
    );
}

export default Slider;
