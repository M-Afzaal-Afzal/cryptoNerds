import React from 'react';
import {Box, Container, Typography} from "@mui/material";
import TopDashHeading from "../common/TopDashHeading";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
// import TimelineDot from '@mui/lab/TimelineDot';
import {TimelineOppositeContent} from "@mui/lab";
// import Image from 'next/image';
import RoadmapHeadingWithDescription from "../common/RoadmapHeadingWithDescription";
import useMediaQuery from '@mui/material/useMediaQuery';
import Fade from 'react-reveal/Fade';

const RoadmapSection = () => {

    const isLargerThan800px = useMediaQuery('(min-width:800px)');

    console.log(isLargerThan800px, 'is larger than 800 px')

    return (
        <Box id={'ROADMAP'} sx={{
            background: (theme) => theme.palette.primary.main,
            py: {
                xs: '3rem',
                xl: '6rem',
            },
        }}>
            <Container maxWidth={'xxl'}>
                {/* top Heading*/}
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    py: '0rem',
                }}>
                    <Fade bottom>
                        <TopDashHeading>
                            Roadmap
                        </TopDashHeading>
                    </Fade>

                    <Box sx={{
                        flex: 1,
                        ml: '2rem',
                        width: '100%',
                        height: '.5px',
                        background: theme => theme.palette.secondary.main,
                        borderRadius: '30px',

                    }}/>


                </Box>

                <Box sx={{
                    py: "6rem",
                }}>

                    <Timeline position={isLargerThan800px ? "alternate" : "left"}>

                        <TimelineItem>
                            <TimelineOppositeContent  style={{overflow: 'hidden'}} color="text.secondary">
                            <Fade left>
                                <RoadmapHeadingWithDescription
                                    heading={'10%'}
                                    description={`The first 10 percent of NFT CryptoNerd holders will automatically be enrolled in giveaways valued at over 5 ETH.`}
                                />
                            </Fade>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                {/*<TimelineDot variant="outlined" />*/}
                                <TimelineConnector/>
                            </TimelineSeparator>
                            {
                                isLargerThan800px && (
                                    <TimelineContent></TimelineContent>
                                )
                            }

                        </TimelineItem>

                        <TimelineItem>
                            <TimelineOppositeContent  style={{overflow: 'hidden'}} color="text.secondary">
                                <Fade right>
                                <RoadmapHeadingWithDescription heading={'30%'}
                                                               description={`The exclusive discord opens only for CryptoNerd holders`}
                                />
                                </Fade>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                {/*<TimelineDot variant="outlined" color="primary" />*/}
                                <TimelineConnector/>
                            </TimelineSeparator>
                            {
                                isLargerThan800px && (
                                    <TimelineContent></TimelineContent>
                                )
                            }                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent  style={{overflow: 'hidden'}} color="text.secondary">
                                <Fade left>
                                <RoadmapHeadingWithDescription heading={'50%'}
                                                               description={`CryptoNerds Exclusive Merch store gets unlocked (T-shirts with your Avatar available as well as hoodies, hats and much more to come.)`}
                                />
                                </Fade>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                {/*<TimelineDot variant="outlined" color="secondary" />*/}
                                <TimelineConnector/>
                            </TimelineSeparator>
                            {
                                isLargerThan800px && (
                                    <TimelineContent></TimelineContent>
                                )
                            }                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent  style={{overflow: 'hidden'}} color="text.secondary">
                                <Fade right>
                                <RoadmapHeadingWithDescription heading={'80%'}
                                                               description={`We’ll be holding some NFT contests and giveaways! Winners to be paid in both crypto and NFTs!`}
                                />
                                </Fade>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                {/*<TimelineDot variant="outlined" />*/}
                                <TimelineConnector color={'secondary'}/>
                            </TimelineSeparator>
                            {
                                isLargerThan800px && (
                                    <TimelineContent></TimelineContent>
                                )
                            }                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent  style={{overflow: 'hidden'}} color="text.secondary">
                                <Fade left>
                                <RoadmapHeadingWithDescription heading={'100%'}
                                                               description={`SOLD OUT!! - We have some massive plans for the future utility of CryptoNerds. As soon as CryptoNerds have sold out we will be working tirelessly on roadmap 2.0. Roadmap 2.0 includes some exciting news such as Staking and 3D models for use in the metaverse and much more!`}
                                />
                                </Fade>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                {/*<TimelineDot variant="outlined" color="secondary" />*/}
                                <TimelineConnector/>
                            </TimelineSeparator>
                            {
                                isLargerThan800px && (
                                    <TimelineContent></TimelineContent>
                                )
                            }                        </TimelineItem>
                    </Timeline>

                </Box>
            </Container>
        </Box>
    );
};

export default RoadmapSection;