import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function BasicPagination() {
  return (
    <Stack spacing={2} sx={{mt: 10}}>
      
      <Pagination count={3} color="secondary" />
     
    </Stack>
  );
}