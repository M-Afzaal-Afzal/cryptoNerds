import React from 'react';
import {Box, Container, Typography} from "@mui/material";
import TopDashHeading from "../common/TopDashHeading";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import {TimelineOppositeContent} from "@mui/lab";
import Image from 'next/image';
import RoadmapHeadingWithDescription from "../common/RoadmapHeadingWithDescription";
import useMediaQuery from '@mui/material/useMediaQuery';


const RoadmapSection = () => {

    const isLargerThan800px = useMediaQuery('(min-width:800px)');

    console.log(isLargerThan800px, 'is larger than 800 px')

    return (
        <Box sx={{
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

                    <TopDashHeading>
                        Roadmap
                    </TopDashHeading>

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
                                <RoadmapHeadingWithDescription
                                    heading={'10%'}
                                    description={`The first 10 percent of NFTs holders will automatically be enrolled in the chance to win Airdrops of NFTs `}
                                />
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
                                <RoadmapHeadingWithDescription heading={'30%'}
                                                               description={`The exclusive discord opens only for CryptoNerd holders`}/>
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
                                <RoadmapHeadingWithDescription heading={'50%'}
                                                               description={`The first 10 percent of NFTs holders will automatically be enrolled in the chance to win Airdrops of NFTs `}
                                />
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
                                <RoadmapHeadingWithDescription heading={'80%'}
                                                               description={`Massive giveaways on the exclusive discord including prizes up to 10 eth in value. Such as MAYC, Cool Cats and more.`}
                                />
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
                                <RoadmapHeadingWithDescription heading={'100%'}
                                                               description={`Massive giveaways on the exclusive discord including prizes up to 10 eth in value. Such as MAYC, Cool Cats and more.`}
                                />
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