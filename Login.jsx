import * as React from 'react';
import {Link} from 'react-router-dom';
import {Container, Box, Divider, FormControl, InputLabel, OutlinedInput, IconButton, InputAdornment, Typography,Button, TextField} from '@mui/material';
import { EmailOutlined, Visibility, VisibilityOff, Lock, Login } from '@mui/icons-material';

function LoginUser(){
    const [showPassword, setShowPassword] = React.useState(false);
    
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

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
                    <Typography variant='h5' className='inconsolata-font' sx={{textAlign:'center', mb:'3rem'}}>
                        <span style={{fontSize:'2rem'}}>WELCOME!!!</span> Login Here to Enter
                    </Typography>
                    
                    <Box sx={{
                        textAlign:'center'
                    }}>
                    <TextField 
                        variant='outlined'
                        label='Email'
                        sx={{width:'80%'}}
                        id="outlined-start-adornment"
                        InputProps={{
                            startAdornment: <InputAdornment position="start"><EmailOutlined/></InputAdornment>
                        }}
                        />

                    <FormControl sx={{mt:4, mb:'10px', width: '80%'}} variant="outlined">
                        <InputLabel sx={{mt:'2px'}} htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            startAdornment={
                                <InputAdornment position='start'>
                                    <Lock></Lock>
                                </InputAdornment>
                            }
                            endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                                >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                            }
                            label="Password"
                        />
                    </FormControl>
                    </Box>
                    <Typography variant='button'>
                        <Link to='/forgotPassword?from=login' style={{
                            marginLeft:'10%',
                            textDecoration:'none',
                            color:'blue',
                            textTransform:'capitalize'
                        }}>Forgot Password?</Link>
                    </Typography>
                    <br/><br/><Divider/><br/>
                    <Box sx={{textAlign:'center'}}>
                        <Button
                            variant='contained'
                            color='success'
                            size='large'
                            sx={{px:3}}
                            startIcon={<Login/>}
                            >
                            Login
                        </Button>
                        <br/><br/><br/>
                        <Typography
                            sx={{
                                textAlign:'center',
                                fontSize:'12px',
                                mb:3
                            }}>
                            Haven't Joined yet? You can <Link to='/register' style={{fontWeight:700, color:'#63b356'}}>Register here</Link> to Join us!
                        </Typography>
                    </Box>
                </Box>
        </Container>
        </>
    )
}

export default LoginUser
