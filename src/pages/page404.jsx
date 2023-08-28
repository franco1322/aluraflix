
import React from 'react';
import { Typography } from '@mui/material';



const estilos = {
    nopage: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        with: '100%',
        height: '100vh'
        },
};

const Page404 = ()=>{
    return (
      <>
      <div style={ estilos.nopage }>
      <Typography variant="h6" style={{ color: 'white' }}>
        404 page no found
      </Typography>
      </div>
      </>
    
    )
}

export default Page404