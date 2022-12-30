import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Button } from '@mui/material';

import Typography from '@mui/material/Typography';


// const bull = (
//   <Box
//     component="span"
//     sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//   >
//     •
//   </Box>
// );
export default function OutlinedCard({ job }) {
    const card = (
        <React.Fragment>
          <CardContent >
            <Typography variant="h5" component="div">
              {job.title}
              <hr/>
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary" >
              {job.skills.slice(0,4).map( (skill, index) => (
               <Button variant="outlined"key={index} size='small' sx={{ mr: 1, backgroundColor: 'secondary.main'}}>
              {skill}
             </Button>
              )
              )}            
            </Typography>
            <Typography variant="body2" >
              {job.description}
              <br />
            </Typography>
            <Typography variant="h6" color="text.primary.dark">
              <br />
              Salary: ${job.salaryHigh}
            </Typography>
            <Typography variant="h6" color="text.primary.dark">
          
              Location: {job.city}
            </Typography>
          </CardContent>
          <CardActions sx={{ display: 'flex', justifyContent: 'center'}} >
            <Button variant="outlined" size="small" sx={{backgroundColor: 'secondary.light'}}>Learn More</Button>
          </CardActions>
        </React.Fragment>
      );
    return (
      <Box sx={{}}>
        <Card variant="outlined" sx={{backgroundColor: 'primary.light', textAlign: 'center', height: 350 }}  >{card}</Card>
      </Box>
    );
  }



