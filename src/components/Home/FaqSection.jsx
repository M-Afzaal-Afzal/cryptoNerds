import React from 'react';
import {Box, Container} from "@mui/material";
import TopDashHeading from "../common/TopDashHeading";
import Image from 'next/image';
import Faqs from "./Faqs";
import Fade from 'react-reveal/Fade';

const FaqSection = () => {
    return (
        <Box id={'FAQ'} sx={{
            background: (theme) => theme.palette.primary.main,

        }}>
            <Container maxWidth={'xxl'}>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    py: {
                        xs: '3rem',
                        lg: '6rem',
                    },
                }}>

                    <Box sx={{
                        flex: 1,
                        width: '100%',
                        height: '.5px',
                        background: theme => theme.palette.secondary.main,
                        borderRadius: '30px',
                        mr: '1rem',
                    }}/>
                    <Fade bottom>
                    <TopDashHeading>
                        FAQs
                    </TopDashHeading>
                    </Fade>
                </Box>

                <Box sx={{
                    display: 'grid',
                    gridTemplateColumns: {
                       xs: '1fr',lg: '1fr 300px',
                    },
                    alignItems: 'center',
                    gridGap: '3rem',
                }}>

                    {/*    Faqs section*/}
                    <Box>
                       <Faqs/>
                    </Box>

                    {/*    Side Images*/}
                    <Box sx={{
                        display: 'grid',
                        gridTemplateColumns: {
                            xs: '1fr 1fr 1fr',
                            lg: '1fr',
                        },
                        justifyContent: 'center',
                    }}>



                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            m: '1rem',
                            '& img': {
                                borderRadius: '15px',
                            }
                        }}>
                        <Fade bottom>
                            <Image quality={100} src={'/2.png'}  width={200} height={200}/>
                        </Fade>
                        </Box>

                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            m: '1rem',
                            '& img': {
                                borderRadius: '15px',
                            }
                        }}>
                            <Fade bottom>
                            <Image quality={100} src={'/3.png'} width={200} height={200}/>
                            </Fade>
                        </Box>

                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            m: '1rem',
                            '& img': {
                                borderRadius: '15px',
                            }
                        }}>
                            <Fade bottom>
                            <Image quality={100} src={'/1.png'}  width={200} height={200}/>
                            </Fade>
                        </Box>


                    </Box>

                </Box>

            </Container>
        </Box>
    );
};

export default FaqSection;