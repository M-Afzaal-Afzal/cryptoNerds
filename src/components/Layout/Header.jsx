import React, {useState} from 'react';
import {Box, Container, Divider, Drawer, IconButton, Stack, Typography} from "@mui/material";
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import ButtonPink from "../common/ButtonPink";
import MenuIcon from '@mui/icons-material/Menu';
import DrawerOutlinedButton from "../common/DrawerOutlinedButton";
import Image from "next/image";
import {Link} from 'react-scroll';

const Header = () => {

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const drawerToggler = () => {
        setIsDrawerOpen(prevState => !prevState);
    }

    const links = [
        {
            id: '1',
            text: 'Home',
        },
        {
            id: '2',
            text: 'Roadmap',
        },
        {
            id: '3',
            text: 'Faq',
        },

    ];

    return (
        <>
        <Box sx={{
            background: (theme) => theme.palette.primary.main,
            position: 'fixed',
            left: 0,
            top: 0,
            width: '100%',
            zIndex: 9999,
        }}>
            <Container
                sx={{
                    height: '100px',
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }} maxWidth={'xxl'}
            >
                <Typography variant={'h2'} sx={{
                    color: '#fff',
                    fontSize: {
                        xs: '24px',
                        md: '24px',
                        lg: '30px',
                        xl:'38px'},
                    fontWeight: 'bold',
                }}>
                    CRYPTO NERDS
                </Typography>
                <Stack sx={{
                    display: {
                        xs: 'none',
                        xl: 'flex',
                    },
                    color: '#fff',
                }} spacing={5} alignItems={'center'} direction={'row'}>
                    {
                        links.map(({text,id}) => {

                            console.log(text)

                            return (
                                <Link key={id} activeClass="active"
                                      class={'link'}
                                      to={text.toUpperCase()}
                                      spy={true}
                                      smooth={true}
                                      hashSpy={true}
                                      offset={50}
                                      duration={500}
                                      // delay={1000}

                                >

                                    <Typography key={id} sx={{
                                        fontSize: '28px',
                                        cursor: 'pointer',
                                        // color: (theme) => theme.palette.secondary.main,
                                    }}
                                                // color={'secondary'}
                                                variant={'h3'}
                                    >
                                        {text}
                                    </Typography>
                                </Link>
                            )
                        })
                    }

                </Stack>

                {/* Left side icons*/}
                <Stack sx={{
                    color: '#fff',
                }} spacing={1} alignItems={'center'} direction={'row'}>
                    {/*<IconButton sx={{*/}
                    {/*    display: {*/}
                    {/*        xs: 'none',*/}
                    {/*        xl: 'flex',*/}
                    {/*    },*/}
                    {/*}} color={'secondary'}>*/}
                    {/*    <TelegramIcon fontSize={'30px'}/>*/}
                    {/*</IconButton>*/}

                    <IconButton sx={{
                        display: {
                            xs: 'none',
                            xl: 'flex',
                        },
                    }} color={'secondary'}>
                        <InstagramIcon fontSize={'30px'}/>
                    </IconButton>

                    <IconButton sx={{
                        display: {
                            xs: 'none',
                            xl: 'flex',
                        },
                    }} color={'secondary'}>
                        <TwitterIcon fontSize={'30px'}/>
                    </IconButton>

                    <IconButton sx={{
                        display: {
                            xs: 'none',
                            xl: 'flex',
                        },
                    }}>
                        <Image width={25} height={25} src={'/openSea.svg'}/>
                    </IconButton>

                    <ButtonPink>
                        Connect
                    </ButtonPink>
                    {/*    MenuIcon for Mobile    */}
                    <IconButton sx={{
                        display: {
                            xs: 'block',
                            xl: 'none',
                        }
                    }} onClick={drawerToggler} color={'secondary'}>
                        <MenuIcon fontSize={'50px'}/>
                    </IconButton>
                </Stack>



            </Container>

            <Drawer
                anchor={'left'}
                open={isDrawerOpen}
                onClose={drawerToggler}
                sx={{
                    zIndex: 99999,
                }}
            >
                <Box
                    sx={{width: 250,height: '100%', color: '#fff',background: theme => theme.palette.primary.main,}}
                    role="presentation"
                    onClick={drawerToggler}
                    onKeyDown={drawerToggler}

                >
                    <Box sx={{
                        width: '100%',
                        height: '5rem',
                        display: 'grid',
                        placeContent: 'center',
                        fontSize: '1.5rem',
                    }}>
                        CRYPTO NERDS
                    </Box>

                    <Divider color={'#eb9fef'}/>

                    {
                        links.map(({text, id}) => (
                            <Link key={id} activeClass="active"
                                  class={'link'}
                                  to={text.toUpperCase()}
                                  spy={true}
                                  smooth={true}
                                  hashSpy={true}
                                  offset={50}
                                  duration={500}
                                  onClick={drawerToggler}
                                // delay={1000}

                            >

                                <DrawerOutlinedButton size={'large'} fullWidth>
                                    {text}
                                </DrawerOutlinedButton>
                                <Divider color={'#eb9fef'}/>

                            </Link>
                        ))
                    }

                </Box>
            </Drawer>
        </Box>
            {/*     Header Bottom Spacing*/}
            <Box sx={{
                height: '100px',
            }}/>
        </>
    );
};

export default Header;
