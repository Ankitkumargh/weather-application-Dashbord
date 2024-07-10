import { Typography, Box } from '@mui/material';
import React from 'react';
import { getUTCDatetime } from '../../utilities/DatetimeUtils';

const UTCDatetime = () => {
  const utcFullDate = getUTCDatetime();

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
      }}
    >
      <Typography
        variant="h3"
        component="h3"
        sx={{
          fontWeight: '400',
          fontSize: { xs: '16px', sm: '20px' },
          color: 'rgba(255, 255, 255, .7)',
          lineHeight: 1,
          paddingRight: '2px',
          fontFamily: 'Poppins',
          margin: '0 auto',
        }}
      >
        Weather Dashboard
      </Typography>
      <Typography
        variant="h3"
        component="h3"
        sx={{
          fontWeight: '400',
          fontSize: { xs: '10px', sm: '12px' },
          color: 'rgba(255, 255, 255, .7)',
          lineHeight: 1,
          paddingRight: '2px',
          fontFamily: 'Poppins',
        }}
      >
        {utcFullDate} GMT
      </Typography>
    </Box>
  );
};

export default UTCDatetime;
