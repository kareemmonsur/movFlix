import { Avatar, Grid, Paper, TextField, Typography } from '@mui/material'
import React from 'react'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import {Link as Linked} from 'react-router-dom';




const Login = () => {

const paperStyle = {padding:20,height:'70vh',width:280,margin:'20px auto'}
const avaterStyle = {backgroundColor:'orange'}
const buttonStyle = {margin: '10px 0'}
const buttonStyly = {margin: '35px 0'}
  return (
    <Grid>
        <Paper elevation= {10} style= {paperStyle}>
          <Grid align='center'>
              <Avatar style={avaterStyle}><LockOutlinedIcon/></Avatar>
              <h2>Sign In</h2>
          </Grid>
          {/* <TextField label='Username' placeholder='Enter username' fullWidth required/>
          <TextField label='Password' placeholder='Enter password' type='password' fullWidth required/> */}
          <TextField id="filled-basic" label="Enter username" variant="filled" style = {buttonStyle} fullWidth required />
          <TextField id="filled-basic" label="Enter password" variant="filled" type='password' fullWidth required />
          <FormGroup>
              <FormControlLabel control={<Checkbox defaultChecked />} label="Remember me" />
          </FormGroup>
          <Button variant="contained" style = {buttonStyly} fullWidth required> Sign In</Button>
           <Typography>
              <Link href="#" underline="hover">
                Forget Password
              </Link>

           </Typography>
           <Typography> Do you have account ?
              <Linked to="/sign-up" underline="hover">
                 sign up 
                  
              </Linked>

           </Typography>
          
          
         
        </Paper>
      
    </Grid>
  )
}

export default Login