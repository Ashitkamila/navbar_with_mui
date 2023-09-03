import { AcUnit, Mail, Notifications } from '@mui/icons-material'
import SearchIcon from '@mui/icons-material/Search';
import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import { padding, shape, styled, width } from '@mui/system'
import React, { useState } from 'react'



const NavBar = () => {
const[open,setOpen] = useState(false);

  const StyleToolBar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between'
  })

  const Search = styled('div')(({ theme }) => ({
    backgroundColor: 'white',
    padding: '0px 10px',
    borderRadius: theme.shape.borderRadius,
    width: "40%"
  }))

  const Icon = styled(Box)(({ theme }) => ({
    display: 'none',
    gap: '20px',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]:{
      display:'flex'
    }
  }))

  const UserBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    gap: '10px',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]:{
      display:'none'
    }
  }))


  return (
    <AppBar position='sticky' sx={{ backgroundColor: 'black' }}>
      <StyleToolBar>
        <Typography variant='h4' sx={{ display: { xs: 'none', sm: 'block' } }}>ASHIT</Typography>
        < AcUnit sx={{ display: { xs: 'block', sm: 'none' } }} />
        <Search sx={{ display: { xs: 'none', sm: 'block' } }}><InputBase placeholder='...search anything' /><SearchIcon /></Search>
        <Icon>
          <Badge badgeContent={4} color="error">
            <Mail/> 
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications />
          </Badge>
          <Avatar sx={{ width: '30', height: '30' }} src='https://www.whatsappimages.in/wp-content/uploads/2022/03/Free-Best-Joker-WhatsApp-DP-Wallpaper-1.jpg' onClick={e=>setOpen(true)}/>
        </Icon>
        <UserBox onClick={e=>setOpen(true)}>
          <Avatar sx={{ width: '30', height: '30' }} src='https://www.whatsappimages.in/wp-content/uploads/2022/03/Free-Best-Joker-WhatsApp-DP-Wallpaper-1.jpg' />
          <Typography variant='span'>Ashit</Typography>
        </UserBox>
      </StyleToolBar>

      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e)=>setOpen(false)}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem>Logout</MenuItem>
        
      </Menu>

    </AppBar>
  )
}

export default NavBar