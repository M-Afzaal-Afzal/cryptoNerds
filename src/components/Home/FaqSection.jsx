import React from 'react';
import {Box, Container} from "@mui/material";
import TopDashHeading from "../common/TopDashHeading";
import Image from 'next/image';

const FaqSection = () => {
    return (
        <Box sx={{
            background: (theme) => theme.palette.primary.main,
        }}>
            <Container maxWidth={'xxl'}>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    py: '6rem',
                }}>

                    <Box sx={{
                        flex: 1,
                        width: '100%',
                        height: '.5px',
                        background: theme => theme.palette.secondary.main,
                        borderRadius: '30px',
                        mr: '1rem',
                    }}/>

                    <TopDashHeading>
                        FAQs
                    </TopDashHeading>
                </Box>

                <Box sx={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 300px',
                }}>

                    {/*    Faqs section*/}
                    <Box>
                        faqs
                    </Box>

                    {/*    Side Images*/}
                    <Box sx={{
                        display: 'grid',
                        justifyContent: 'center',
                    }}>

                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            m: '1rem',
                        }}>
                            <Image src={'/2.png'} width={270} height={360}/>
                        </Box>

                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            m: '1rem',
                        }}>
                            <Image src={'/3.png'} width={270} height={360}/>
                        </Box>

                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            m: '1rem',
                        }}>
                            <Image src={'/1.png'} width={270} height={360}/>
                        </Box>

                    </Box>

                </Box>

            </Container>
        </Box>
    );
};

export default FaqSection;