import React from 'react';
import {Box, Container, Typography} from "@mui/material";
import Image from 'next/image';
import ButtonPink from "../common/ButtonPink";

const OpenseaSection = () => {
    return (
        <Box sx={{
            background: (theme) => theme.palette.primary.main,
            py: '3rem',
        }}>

            <Container maxWidth={'xxl'}>

                <Box sx={{
                    display: 'grid',
                    gridTemplateColumns: 'auto auto auto 1fr',
                    gridGap: '2rem',
                    alignItems: 'center',
                    position: 'relative',
                }}>
                    {/* 1st Image*/}
                    <Box sx={{
                        ml: '2rem',
                        zIndex: 1,
                        gridRow: '1/-1',
                        gridColumn: '1/2',
                        display: {
                            xs: 'none',
                            xl: 'flex',
                        },
                        alignItems: 'flex-end',
                    }}>
                        <Image src={'/opensea1.png'} width={177} height={230}/>
                    </Box>

                    {/* 2nd Image*/}
                    <Box sx={{
                        zIndex: 1,
                        gridRow: '1/-1',
                        gridColumn: '2/3',
                        display: {
                            xs: 'none',
                            xl: 'flex',
                        },
                        alignItems: 'flex-end',
                    }}>
                        <Image src={'/opensea2.png'} width={237} height={321}/>

                    </Box>

                    {/*    3rd Image  */}
                    <Box sx={{
                        zIndex: 1,
                        gridRow: '1/-1',
                        gridColumn: '3/4',
                        display: {
                            xs: 'none',
                            xl: 'flex',
                        },
                        alignItems: 'flex-end',

                    }}>
                        <Image src={'/opensea3.png'} width={177} height={230}/>

                    </Box>

                    {/* Open Sea Button container*/}
                    <Box sx={{

                        marginTop: 'auto',
                        // height: '140px',
                        py: '3rem',
                        gridColumn: '1/-1',
                        gridRow: '1/-1',
                        background: 'linear-gradient(92.78deg, #eb9fef 0%, #03254e 100%)',
                        borderRadius: '31px',
                        display: 'grid',
                        gridGap: '2rem',
                        gridTemplateColumns: {xs: '1fr',lg: 'auto auto'},
                        px: {
                            xs: '1rem',
                            sm: '2rem',
                            lg: '3rem',
                            xl: "4rem",
                        },
                        justifyContent: {
                            xs: 'space-between',
                            xl: 'flex-end'
                        },
                        alignItems: 'center',
                    }}>
                        <Typography
                            sx={{
                                display: {
                                    xs: 'block',
                                    xl: 'none',
                                },
                                // ml: '4rem',
                                // color: "primary",
                                textAlign: {
                                    xs: 'center',
                                    lg: 'left',
                                },
                                fontSize: '2rem',
                                color: theme => theme.palette.primary.main,
                            }}

                        >
                            Have a look at the market
                        </Typography>
                        <ButtonPink sx={{
                            // mr: '4rem',
                        }}>
                            Opensea
                        </ButtonPink>
                    </Box>

                    {/*    Back Circle */}

                    <Box sx={{
                        display: {
                            xs: 'none',
                            xl: 'block',
                        },
                        position: 'absolute',
                        width: '550px',
                        height: '550px',
                        background: (theme) => theme.palette.secondary.main,
                        borderRadius: '50%',
                        filter: 'blur(3rem)',
                        left: 30,
                        top: -100,
                    }}/>

                </Box>

            </Container>

        </Box>
    );
};

export default OpenseaSection;