import { Avatar, Grid, Paper, TextField, Typography } from '@mui/material'
import React from 'react'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

const Signup = () => {

const paperStyle = {padding:20,height:'70vh',width:280,margin:'20px auto'}
const avaterStyle = {backgroundColor:'orange'}
const buttonStyle = {margin: '5px 0'}
const buttonStyly = {margin: '20px 0'}
  return (
    <Grid>
        <Paper elevation= {10} style= {paperStyle}>
          <Grid align='center'>
              <Avatar style={avaterStyle}><LockOutlinedIcon/></Avatar>
              <h2>Sign Up</h2>
          </Grid>
          {/* <TextField label='Username' placeholder='Enter username' fullWidth required/>
          <TextField label='Password' placeholder='Enter password' type='password' fullWidth required/> */}
          <TextField id="filled-basic" label="Enter First Name" variant="filled" style = {buttonStyle} fullWidth required />
          <TextField id="filled-basic" label="Enter Last Name" variant="filled" style = {buttonStyle} fullWidth required />
          <TextField id="filled-basic" label="Enter Email" variant="filled" type='email' style = {buttonStyle} fullWidth required />
          <TextField id="filled-basic" label="Enter Password" variant="filled" type='password' style = {buttonStyle} fullWidth required />
          
           <Typography> Already a member ?
              <Link href="#" underline="hover">
                 sign in   
              </Link>

           </Typography>
           <Button variant="contained" style = {buttonStyly} fullWidth required> Sign Up </Button>
          
        </Paper>
    </Grid>
  )
}

export default Signup