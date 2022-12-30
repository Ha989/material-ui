import React from 'react';
import NavBar from "./components/NavBar";
import JobCards from "./components/JobCards";
import jobs from "./jobs.json";
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material';
import './App.css';
import BasicPagination from './components/BasicPagination';

const theme = createTheme({
    palette: {
          primary: {
          main: '#482880',
          light: 'rgba(238,244,240,0.6)',
          dark: '#fff'
        },
        secondary: {
          main: '#e3f2fd',
          light: '#e09926'
        },
      },
    })

function App() {

    


  return (
    <div>
        <ThemeProvider theme={theme}>
        <NavBar />
        <div className='container'>
        <Grid container spacing={2} sx={{ mt: 5}}>
        {jobs.slice(0,5).map(job => (
        <Grid key={job.id} item xs={12} md={6} lg={4}>
          <JobCards job={job}/>
          </Grid>
        ))
        }
        </Grid>
        <BasicPagination />
        </div>
        </ThemeProvider>
    </div>
    
  )
}

export default App