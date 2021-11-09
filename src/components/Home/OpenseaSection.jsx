import React from 'react';
import {Box, Container} from "@mui/material";
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
                        display: 'flex',
                        alignItems: 'flex-end',
                    }}>
                        <Image src={'/opensea1.png'} width={177} height={230}/>
                    </Box>

                    {/* 2nd Image*/}
                    <Box sx={{
                        zIndex: 1,
                        gridRow: '1/-1',
                        gridColumn: '2/3',
                        display: 'flex',
                        alignItems: 'flex-end',
                    }}>
                        <Image src={'/opensea2.png'} width={237} height={321}/>

                    </Box>

                {/*    3rd Image  */}
                    <Box sx={{
                        zIndex: 1,
                        gridRow: '1/-1',
                        gridColumn: '3/4',
                        display: 'flex',
                        alignItems: 'flex-end',
                    }}>
                        <Image src={'/opensea3.png'} width={177} height={230}/>

                    </Box>

                    {/* Open Sea Button container*/}
                    <Box sx={{
                        marginTop: 'auto',
                        height: '140px',
                        gridColumn: '1/-1',
                        gridRow: '1/-1',
                        background: 'linear-gradient(92.78deg, #eb9fef 0%, #03254e 100%)',
                        borderRadius: '31px',
                        display: 'flex',
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                    }}>
                        <ButtonPink sx={{
                            mr: '4rem',
                        }}>
                            Opensea
                        </ButtonPink>
                    </Box>

                {/*    Back Circle */}

                    <Box sx={{
                        position: 'absolute',
                        width: '600px',
                        height: '600px',
                        background: (theme) => theme.palette.secondary.main,
                        borderRadius: '50%',
                        filter: 'blur(3rem)',
                        left: 30,
                        top: -110,
                    }} />

                </Box>

            </Container>

        </Box>
    );
};

export default OpenseaSection;