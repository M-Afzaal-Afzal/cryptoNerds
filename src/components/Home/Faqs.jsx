import React from 'react';
import {Box} from "@mui/material";
import { useState } from "react";
// import Container from "@mui/material/Container";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Fade from 'react-reveal/Fade';

const Faqs = () => {

    const [expanded, setExpanded] = useState(false);
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const faqs = [
        {
            id: 1,
            heading: `How much will it cost to mint these NFT’s?`,
            description: `It will cost you 0.04 Ethereum for one CryptoNerd.`
        },
        {
            id: 2,
            heading: `How many CryptoNerds am I able to mint ?`,
            description: `There will be a limit of 15 CryptoNerds per transaction.`
        },{
            id: 3,
            heading: `What are CryptoNerds ?`,
            description: `Right here on the website. Find the Mint button to own your very own CryptoNerd.`
        },{
            id: 4,
            heading: `When is the CryptoNerd launch ?`,
            description:`CryptoNerds will be dropped as a Stealth launch. Keep your eyes peeled...`
        },{
            id: 5,
            heading: `How many CryptoNerds exist on the ethereum blockchain ?`,
            description:`There will be 8888 CryptoNerds available for minting.`
        },
        {
            id: 6,
            heading: `Do I own the commercial rights to my CryptoNerd ?`,
            description:`Yes you have full creative and commercial rights.`
        },
        {
            id: 7,
            heading: `Will there be a secondary marketplace to purchase CryptoNerds ?`,
            description:`Yes. You will be able to purchase a CryptoNerd on the secondary market place using the Opensea link at the top of the page. So don't stress if you could not mint one.`
        }
    ];

    return (
        <Box>
            {
                faqs.map(({id,heading,description}) => (
                    <Fade bottom>
                    <Accordion
                        key={id}
                        expanded={expanded === `panel${id}`}
                        onChange={handleChange(`panel${id}`)}
                        sx={{
                            background:'linear-gradient(92.78deg, #eb9fef 0%, #03254e 100%)',
                            my: '8px',borderRadius: '16px',
                            '&.MuiAccordion-root:first-of-type' :{
                                borderRadius: '16px',
                            },'&.MuiAccordion-root:last-of-type' :{
                                borderRadius: '16px',
                            },
                            '&.Mui-expanded' :{
                                my: 0,
                            }
                        }}
                    >

                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon sx={{fontSize:30,color:'rgba(244, 132, 255, .7)'}} />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                        >


                            <Typography variant="h6" sx={{
                                width:'100%',
                                fontFamily: `'Paytone One', sans-serif`,
                                letterSpacing:.5,

                                flexShrink: 0,color:'#fff', fontWeight:900}}>
                                {heading}
                            </Typography>

                        </AccordionSummary>
                        <AccordionDetails>


                            <Typography variant="body1" sx={{color:'#fff',
                                fontFamily: `'Play', sans-serif`,
                            }} >
                                {description}
                            </Typography>

                        </AccordionDetails>
                    </Accordion>
                    </Fade>
                ))
            }
        </Box>
    );
};

export default Faqs;