import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent, { timelineContentClasses } from '@mui/lab/TimelineContent';
import TimelineOppositeContent, { timelineOppositeContentClasses } from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import ContentItem from './contentItem';
import { List, ListItem } from '@mui/material';


interface TimelineContentItemsProps {
  content: ContentItem[];
}

export default function TimelineContentItems({ content }: TimelineContentItemsProps) {
  const timeline_content = content.map((element, index) => {
    // const [startDate, endDate] = element.date.split('-');
    const items = element.items.item.map((item, index) => {
      return (
        <ListItem sx={{ display: 'list-item' }}>
          {item}
        </ListItem>
      )
    })
    return (
      <TimelineItem key={index}>
        <TimelineOppositeContent
          sx={{
            // m: 'auto 0',
            fontSize: '15px'
          }}
          align="left"
          variant="body2"
          color="text.secondary"
        >
          {/* {startDate} - {endDate} */}
          {element.date}
        </TimelineOppositeContent>

        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>

        <TimelineContent
          sx={{ py: '12px', px: 2 }}
        >
          <Typography
            variant="h6"
            component="span"
          >
            {element.title}
          </Typography>
          <Typography>
            {element.subtitle}
          </Typography>
          <Typography>
            {element.items.description}
          </Typography>
          <List sx={{
            listStyleType: 'disc',
            marginLeft: '40px',

          }}>
            {items}
          </List>
        </TimelineContent>
      </TimelineItem>
    );
  });

  return (
    <Timeline
      sx={{
        [`& .${timelineOppositeContentClasses.root}`]: {
          flex: 0.1,
        },
      }}
    // position='right'
    >
      {timeline_content}
    </Timeline>
  );
}
