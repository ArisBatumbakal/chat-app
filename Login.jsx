import * as React from 'react';
import {Link} from 'react-router-dom';
import {Container, Avatar, Badge, Box, Divider, FormControl, InputLabel, OutlinedInput, IconButton, InputAdornment, Typography,Button, Grid, TextField} from '@mui/material';
import {HowToRegOutlined, EmailOutlined, CameraAltRounded, Visibility, VisibilityOff } from '@mui/icons-material';


function Login(){
    return (
        <>
         <Container
                className='inconsolata-font'
                sx={(theme) => ({
                    margin:'auto',
                    width: '98vW',
                    height: '100vH',
                    backgroundColor: '#BDCDBB',
                    p:'2vH', 
                    color:'#154017',
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center'
                })}>
                <Box
                    sx={(theme) => ({
                        backgroundColor:'white',
                        mx:'auto', p:'5%', pt:'10%', pb:'5%',
                        border:'1px grey',
                        boxShadow:'0px 2px 3px grey',
                        borderRadius:'3px', width:'90%',
                        textAlign:'left',
                        [theme.breakpoints.up('xs')] : {
                            width:'90%',
                        },[theme.breakpoints.up('sm')] : {
                            width:'60%',
                        },[theme.breakpoints.up('md')] : {
                            width:'40%'
                        }
                    })}>
                    
                    dfg
                </Box>
        </Container>
        </>
    )
}

export default Login
