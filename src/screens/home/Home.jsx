import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Stack } from '@mui/material';

export default function Home() {
  return (
    <Stack direction='row' sx={{ overflow: 'scroll', width: 'fit-content' }}>
      {
        media_data.map((data) => (

          <Card sx={{ width: 220, margin: 1 }}>
            <Box sx={{ position: 'relative' }}>
              <CardMedia
                sx={{ height: 300 }}
                image={data.url}
              />
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '100%',
                  bgcolor: 'rgba(0, 0, 0, 0.54)',
                  color: 'white',
                  padding: '10px',
                }}
              >
                <Typography variant="h6" component="div">
                  {data.text}
                </Typography>
              </Box>
            </Box>

          </Card>
        ))
      }
    </Stack>
  );
}


const media_data = [
  {
    id: 1,
    text: 'picture- 1',
    url: 'https://picsum.photos/300/200'
  },
  {
    id: 2,
    text: 'picture- 2',
    url: 'https://picsum.photos/300/200'
  },
  {
    id: 3,
    text: 'picture- 3',
    url: 'https://picsum.photos/300/200'
  },
  {
    id: 4,
    text: 'picture- 4',
    url: 'https://picsum.photos/300/200'
  },
  {
    id: 5,
    text: 'picture- 5',
    url: 'https://picsum.photos/300/200'
  },
  {
    id: 6,
    text: 'picture- 6',
    url: 'https://picsum.photos/300/200'
  },
  {
    id: 7,
    text: 'picture- 8',
    url: 'https://picsum.photos/300/200'
  },
  {
    id: 8,
    text: 'picture- 8',
    url: 'https://picsum.photos/300/200'
  },
  {
    id: 9,
    text: 'picture- 9',
    url: 'https://picsum.photos/300/200'
  },
  {
    id: 10,
    text: 'picture- 10',
    url: 'https://picsum.photos/300/200'
  }
]
