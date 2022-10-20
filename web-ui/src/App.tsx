import './App.css';
import { Button, Container, Paper, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Box, Stack } from '@mui/system';

function App() {
  const [itemList, setItemList] = useState<Array<number>>(new Array<number>(1,5,3,2,4))

  return <Container>
    <Stack>
      <Typography textAlign='center' variant='h1'>Sorting Algorithms</Typography>
      <Typography textAlign='center' variant='h3'>Bubble Sort</Typography>
      <Paper sx={{ width: '100%', height: '70vh', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignContent: 'space-between' }}>
         <Box sx={{ outline: '1px solid black', height: '500px' }}>
          <Stack spacing={2} height='100%' direction='row' justifyContent='space-around' alignItems='flex-end'>
            {itemList.map((item: number, index: number) => {
              return <Box key={index} sx={{ height: `calc(100% * (${item} / ${itemList.length}))`, width: '25px', backgroundColor: 'red' }} />
            })}
          </Stack>
         </Box>
        <Button variant='contained' sx={{ height: '40px' }}>Start</Button>
      </Paper>
    </Stack>
  </Container>
}

export default App;
