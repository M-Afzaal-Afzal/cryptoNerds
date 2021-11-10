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
                            <TimelineOppositeContent color="text.secondary">
                            <Fade left>
                                <RoadmapHeadingWithDescription
                                    heading={'10%'}
                                    description={`The first 10 percent of NFTs holders will automatically be enrolled in the chance to win Airdrops of NFTs `}
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
                            <TimelineOppositeContent color="text.secondary">
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
                            <TimelineOppositeContent color="text.secondary">
                                <Fade left>
                                <RoadmapHeadingWithDescription heading={'50%'}
                                                               description={`The first 10 percent of NFTs holders will automatically be enrolled in the chance to win Airdrops of NFTs `}
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
                            <TimelineOppositeContent color="text.secondary">
                                <Fade right>
                                <RoadmapHeadingWithDescription heading={'80%'}
                                                               description={`Massive giveaways on the exclusive discord including prizes up to 10 eth in value. Such as MAYC, Cool Cats and more.`}
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
                            <TimelineOppositeContent color="text.secondary">
                                <Fade left>
                                <RoadmapHeadingWithDescription heading={'100%'}
                                                               description={`Massive giveaways on the exclusive discord including prizes up to 10 eth in value. Such as MAYC, Cool Cats and more.`}
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