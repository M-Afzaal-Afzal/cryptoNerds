import React from 'react';
import {Box, Container, Typography} from "@mui/material";
import TopDashHeading from "../common/TopDashHeading";
import Image from 'next/image';

const OverviewSection = () => {
    return (
        <Box sx={{
            background: (theme) => theme.palette.primary.main,
            py: '6rem',
        }}>
            <Container maxWidth={'xxl'}>

                {/* top Heading*/}

                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    py: '0rem',
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
                        Overview
                    </TopDashHeading>
                </Box>

                {/*    Content of the overview section*/}

                <Box sx={{
                    display: 'grid',
                    gridTemplateColumns: {xs: '1fr', xl: '1fr 1fr'},
                    alignItems: 'center',
                    gridGap: '4rem',
                    justifyContent: 'center',
                    mt: {
                        xs: '3rem',
                        xl: '-3rem',
                    },
                }}>

                    {/* Left Side Images with circle background*/}
                    <Box sx={{position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <Box sx={{
                            background: 'rgba(244, 132, 255, .7)',
                            width: {xs: '250px', sm: '280px', md: '350px', lg: '400px', xl: "526px"},
                            height: {xs: '250px', sm: '280px', md: '350px', lg: '400px', xl: "526px"},
                            borderRadius: '50%',
                            filter: 'blur(3rem)',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            '& > span': {
                                transform: {
                                    xs: 'scale(1.5)',
                                    sm: 'scale(1.5)',
                                    md: 'scale(1.3)',
                                    xl: 'scale(1.1)'
                                },
                            }
                        }}/>


                        <Box sx={{
                            position: 'absolute', top: {
                                xs: 0,
                                lg: '50%',
                            }, left: {
                                xs: '0',
                                lg: '50%',
                                xl: 0,
                            }, transform: {xs: 'unset',lg: 'translate(-50%,-50%)',xl: 'translate(-0,-50%)'}
                        }}>
                            <Image src={'/overview.png'} width={658} height={361}/>
                        </Box>

                    </Box>

                    {/* Right side text content*/}
                    <Box>
                        <Typography gutterBottom sx={{
                            marginBottom: '1rem',
                            color: '#fff',
                        }} variant={'body1'}>
                            CryptoNerds are a collection of 8,888 characters with over 50
                            traits and attributes including Hats, Backgrounds, Hair and Clothing.
                            Each CryptoNerd are uniqueNon-Fungible Tokens hosted on the Ethereum Blockchain
                        </Typography>
                        <Typography gutterBottom sx={{
                            color: '#fff',
                            marginBottom: '1rem',

                        }} variant={'body1'}>
                            Members of the CryptoNerd community will be rewarded with
                            upcoming giveaways and airdrops as well as many special prizes
                            along the roadmap. We will also be opening up our discord
                            server exclusively for those that hold a CryptoNerd.
                        </Typography>
                        <Typography gutterBottom sx={{
                            color: '#fff',
                            marginBottom: '1rem',

                        }} variant={'body1'}>
                            CryptoNerds members will receive tokens in the future, the token
                            supply will have a limit of 10,000 and will require CryptoNerd holders
                            to stake their NFT’s and in exchange CryptoNerds will be given
                            the token to later be spent to purchase NFT’s. More on this to come!
                        </Typography>
                    </Box>

                </Box>

            </Container>
        </Box>
    );
};

export default OverviewSection;