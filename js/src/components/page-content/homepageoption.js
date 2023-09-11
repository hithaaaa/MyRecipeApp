import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


export default function OutlinedCard({title,description}) {
  function hey(){
    console.log("nana")
  }
  return (
    <CardActionArea>
    <Box sx={{ minWidth: 180, maxWidth: 240 }} onClick={hey}>
    <br /><br /><br /><br /><br />
      <Card variant="outlined">
      <CardContent>
          
        
          <Typography variant="h5" component="div">
          {title}
          </Typography>
          
          <Typography variant="body2">
            {description}
          </Typography>
        </CardContent>
      </Card>
      

    </Box>
    </CardActionArea>
  );
}