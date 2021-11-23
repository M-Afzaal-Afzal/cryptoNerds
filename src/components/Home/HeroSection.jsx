import {Box, Container} from "@mui/material";
import {Swiper, SwiperSlide} from 'swiper/react';
import Image from 'next/image';

import SwiperCore, {
    Navigation
} from 'swiper';
import useMediaQuery from "@mui/material/useMediaQuery";
import Fade from 'react-reveal/Fade';

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
            imgSrc: '/4.png',
            id: 4,
        },{
            imgSrc: '/5.png',
            id: 5,
        },{
            imgSrc: '/6.png',
            id: 6,
        },
    ];

    const isLargerThan700px = useMediaQuery('(min-width:700px)');


    return (
        <Box id={'HOME'} sx={{
            background: (theme) => theme.palette.primary.main,
            py: '3rem',
        }}>
            <Container maxWidth={'xxl'}>
                <Swiper
                    navigation={true}
                    loop={true}
                    centeredSlides={true}
                    spaceBetween={50}
                    slidesPerView={isLargerThan700px ? 3 : 1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {
                        slides.map(({id, imgSrc}) => (
                            <SwiperSlide key={id} style={{
                                alignItems: 'center',
                            }}>
                                {({ isActive }) => (
                                    <Fade bottom>
                                    <Box sx={{
                                        display: 'flex',
                                        justifyContent: "center",
                                        '& img': {
                                            borderRadius: '15px',
                                        }
                                    }}>
                                        <Image quality={100} priority={true} src={imgSrc} width={isActive ? 514 : 300 } height={isActive ? 514 : 300} />
                                    </Box>
                                    </Fade>
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