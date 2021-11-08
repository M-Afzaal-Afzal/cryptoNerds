import {Box, Container} from "@mui/material";
import {Swiper, SwiperSlide} from 'swiper/react';
import Image from 'next/image';

import SwiperCore, {
    Navigation
} from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation]);


const HeroSection = () => {

    const slides = [
        {
            imgSrc: '/1.png',
            id: 1,
        }, {
            imgSrc: '/2.png',
            id: 2,
        }, {
            imgSrc: '/3.png',
            id: 3,
        },{
            imgSrc: '/3.png',
            id: 3,
        },{
            imgSrc: '/3.png',
            id: 3,
        },{
            imgSrc: '/3.png',
            id: 3,
        },
    ];

    return (
        <Box sx={{
            background: (theme) => theme.palette.primary.main,
            py: '3rem',
        }}>
            <Container maxWidth={'xxl'}>
                <Swiper
                    navigation={true}
                    loop={true}
                    centeredSlides={true}
                    spaceBetween={50}
                    slidesPerView={3}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {
                        slides.map(({id, imgSrc}) => (
                            <SwiperSlide style={{
                                alignItems: 'center',
                            }}>
                                {({ isActive }) => (
                                    <Box sx={{
                                        display: 'flex',
                                        justifyContent: "center",
                                    }}>
                                        <Image src={imgSrc} width={isActive ? 374 : 293 } height={isActive ? 514 : 402} />
                                    </Box>
                                )}
                            </SwiperSlide>
                        ))
                    }

                </Swiper>
            </Container>
        </Box>
    );
};

export default HeroSection;