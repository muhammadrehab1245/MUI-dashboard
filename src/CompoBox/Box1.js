import { Box } from "@mui/material";
import styled from "@emotion/styled";


export const BasicBox = styled(Box)(({ theme })=>({

    flexWrap: 'wrap',
    border:'1px solid grey',
      width:  427,
      height: 197,

          [theme.breakpoints.down('xl')]: {
            width:  367,
        
           // Adjust width for screens wider than 960px
          },
          [theme.breakpoints.down('lg')]: {
            width:  284,
           // Adjust width for screens wider than 960px
          },
       
     
        
  }))

