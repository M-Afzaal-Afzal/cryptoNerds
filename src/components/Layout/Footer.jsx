import React from 'react';
import {Box, Container, IconButton, Stack, Typography} from "@mui/material";
import Image from 'next/image';
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
    return (
        <Box sx={{
            background: (theme) => theme.palette.primary.main,
            // height: '100px',
            width: '100%',
            // pt: '5rem',
        }}>
            <Container maxWidth={'xxl'}>

                <Typography sx={{
                    textAlign: 'center',
                    fontSize: '60px',
                    fontWeight: 'bold',
                    mx: 'auto',
                    color: '#fff',
                    py: "6rem",
                }} variant={'h1'}>
                    CRYPTO NERDS
                </Typography>

                {/* Bottom Section*/}
                <Box sx={{
                    display: 'grid',
                    gridTemplateColumns: {xs: '1fr',lg:'auto auto'},
                    justifyContent: 'space-between',
                    gridGap: '2rem',
                    alignItems: 'center',
                    pb: '4rem',
                }}>

                    {/* Left Items*/}
                    <Box>
                        <Typography variant={'h5'} sx={{
                            color: '#fff',
                            ml: '1rem',
                        }}>
                            Stay In Touch
                        </Typography>
                        <Box sx={{
                            maxWidth: '476px',
                            width: '100%',
                            height: '54px',
                            background: 'linear-gradient(92.78deg, #eb9fef 0%, #03254e 100%)',
                            borderRadius: '27px',
                            mt: '1rem',
                            display: 'flex',
                            alignItems: 'center',
                            px: '2rem',
                            color: '#fff',
                        }}>
                            email@email.com
                        </Box>
                    </Box>

                    {/* Right Items*/}
                    <Box>
                        <Typography variant={'h5'} sx={{
                            color: '#fff',
                            ml: '1rem',
                        }}>
                            Join The Community
                        </Typography>

                        <Box sx={{
                            mt: '1rem',
                        }}>
                            {/* Left side icons*/}
                            <Stack sx={{
                                color: '#fff',
                            }} spacing={1} alignItems={'center'} direction={'row'}>
                                <IconButton sx={{
                                    display:'flex',
                                }} color={'secondary'}>
                                    <TelegramIcon fontSize={'30px'}/>
                                </IconButton>

                                <IconButton sx={{
                                    display:'flex',

                                }} color={'secondary'}>
                                    <InstagramIcon fontSize={'30px'}/>
                                </IconButton>

                                <IconButton sx={{
                                    display:'flex',

                                }} color={'secondary'}>
                                    <TwitterIcon fontSize={'30px'}/>
                                </IconButton>

                                <IconButton>
                                    <Image width={25} height={25} src={'/openSea.svg'}/>
                                </IconButton>
                            </Stack>

                        </Box>

                    </Box>

                </Box>

            </Container>
        </Box>
    );
};

export default Footer;