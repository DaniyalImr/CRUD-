import React from 'react'
//import AppBar from '@mui/material/AppBar'
//import Toolbar from '@mui/material/Toolbar'
import {AppBar,Toolbar,styled} from '@mui/material'
import {Link} from "react-router-dom"

const Header =styled(AppBar)`
   background: #111111
`

const Tab =styled(Link)`
    font-size : 20px ;
    margin-right:20px;
    color:inherit;
    text-decoration:none
    `
export default function Navbar() {
  return (
        <Header position='static'>
            <Toolbar>
                <Tab to="/">Athletes</Tab>
                <Tab to="/all">All User</Tab>
                <Tab to="/add">Add User</Tab>
            </Toolbar>
        </Header>
         )
}
