import { Box } from '@mui/material'
import React from 'react'

const SideBar = () => {
  return (
    <Box bgcolor="yellowgreen" flex={1} p={2} sx={{display:{xs:'none',sm:'block'}}}>
      sidebar
    </Box>
  )
}

export default SideBar
