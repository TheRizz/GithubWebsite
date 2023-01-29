import './App.css';
import { Button, Container, Paper, Typography, Box } from '@mui/material';
import React, { useState } from 'react';
import { Stack } from '@mui/system';
import { convertHexToRGB, findMoreSimilarColor } from './helper';

function App() {
  // Scientific article link https://www.compuphase.com/cmetric.htm
  // const [itemList, setItemList] = useState<Array<number>>(new Array<number>(1,5,3,2,4))
  const [boxWidth] = useState('20vw')
  const [boxHeight] = useState('20vh')
  const [color1, setColor1] = useState('#ffffff')
  const [color2, setColor2] = useState('#ffffff')
  const [compareColor, setCompareColor] = useState('#ffffff')
  const [compareText, setCompareText] = useState('')

  return <Container>
    <Stack spacing={4} alignItems={'center'}>
      <Typography textAlign='center' variant='h1'>Color Comparison</Typography>
      <Stack direction={'row'} spacing={4} justifyContent={'center'}>
        {/* <Box background={'black'}></Box> */}
        <Stack direction={'column'}>
          <Typography>Color 1</Typography>
          <Box sx={{ background: color1, height: boxHeight, width: boxWidth }}/>
          <input type="color" value={color1} onChange={(change) => { 
            setColor1(change.target.value)
            setCompareText('')
          }}/>
        </Stack>
        <Stack direction={'column'}>
          <Typography>Color 2</Typography>
          <Box sx={{ background: color2, height: boxHeight, width: boxWidth }}/>
          <input type="color" value={color2} onChange={(change) => {
            setColor2(change.target.value)
            setCompareText('')
          }}/>
        </Stack>
      </Stack>
      <Stack direction={'column'}>
          <Typography>Comparison Color</Typography>
          <Box sx={{ background: compareColor, height: boxHeight, width: boxWidth }}/>
          <input type="color" value={compareColor} onChange={(change) => {
            setCompareColor(change.target.value)
            setCompareText('')
          }}/>
      </Stack>
      <Typography>{compareText}</Typography>
      <Button variant={'contained'} sx={{ background: 'black' }} onClick={() => {setCompareText(findMoreSimilarColor(convertHexToRGB(color1), convertHexToRGB(color2), convertHexToRGB(compareColor)))}}>{'Compare'}</Button>
    </Stack>
  </Container>
}

export default App;
