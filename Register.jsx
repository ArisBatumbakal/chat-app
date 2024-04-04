import * as React from 'react';
import {Link} from 'react-router-dom';
import {Container, Avatar, Badge, Box, Divider, FormControl, InputLabel, OutlinedInput, IconButton, InputAdornment, Typography,Button, Grid, TextField} from '@mui/material';
import {Groups, CheckCircleOutline, EmailOutlined, Login, CameraAltRounded, PersonAddAlt1Outlined, Diversity3, Person, Visibility, VisibilityOff } from '@mui/icons-material';


function Register(){
    const [showPassword, setShowPassword] = React.useState(false);
    const [showCPassword, setShowCPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleClickShowCPassword = () => setShowCPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleMouseDownCPassword = (event) => {
        event.preventDefault();
    };

    const info1Style = {
        textAlign:'left'
    }

    return (
        <>
            <Container
                className='inconsolata-font'
                sx={{
                    margin:'auto',
                    width: '98vW',
                    height: '100vH',
                    backgroundColor: '#BDCDBB',
                    p:'2vH', pt:'10vh',
                    color:'#154017',
                    textAlign:'center',
                }}>
                <Box
                    sx={(theme) => ({
                        backgroundColor:'white',
                        mx:'auto', p:'5%', pt:'10%', pb:'5%',
                        border:'1px grey',
                        boxShadow:'0px 2px 3px grey',
                        borderRadius:'3px', width:'90%',
                        [theme.breakpoints.up('xs')] : {
                            width:'90%', pt:'5%'
                        },[theme.breakpoints.up('md')] : {
                            width:'50%'
                        }
                    })}>
                        <Typography
                            sx={(theme) => ({
                                fontSize:'26px',
                                pb:'5vh', width:'100%',
                                [theme.breakpoints.up('xs')] : {
                                    fontSize:'18px',
                                },
                                [theme.breakpoints.up('md')] : {
                                    fontSize:'26px',
                                }
                            })}
                        >Join us and enjoy the environment within this ChatApp</Typography>

                        <TextField
                            fullWidth
                            label="Register an Email"
                            id="outlined-start-adornment"
                            InputProps={{
                                startAdornment: <InputAdornment position="start"><EmailOutlined/></InputAdornment>,
                            }}
                        /><br/>
                        <FormControl sx={{my:2, width: '47%', mr:'3%'}} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            sx={{fontSize:'14px'}}
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
                        
                        <FormControl sx={{my:2, width: '47%', ml:'3%'}} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={showCPassword ? 'text' : 'password'}
                            sx={{fontSize:'14px'}}
                            endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowCPassword}
                                onMouseDown={handleMouseDownCPassword}
                                edge="end"
                                >
                                {showCPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                            }
                            label="Confirm Password"
                        />
                        </FormControl>
                        <br/><br/>
                        <Typography variant='body1' sx={{textAlign:'left',fontSize:'20px'}}>Let us know more of you...</Typography>
                        <br/>
                        <Grid container>
                            <Grid item xs={6} md={6} sx={info1Style}>
                            <TextField
                                fullWidth
                                label="First Name"
                                id="outlined-start-adornment"
                                sx={{mb:'3vh'}}
                                /><br/>
                            <TextField
                                fullWidth
                                label="Last Name"
                                id="outlined-start-adornment"
                                />
                            </Grid>
                            <Grid item xs={6} md={6} sx={{...info1Style, pl:'20%',pt:'1%'}} >
                            <Badge
                                overlap="circular"
                                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                badgeContent={
                                    <Button type='file'>
                                        <CameraAltRounded fontSize='large' sx={{cursor:'pointer'}}/>
                                    </Button>
                                }
                                >
                                    <Avatar alt='User Profile' src='' sx={{width:'110px', height:'110px'}}></Avatar>
                                </Badge>
                                

                            </Grid>
                        </Grid>
                </Box>
            </Container>
        </>
    )
}

export default Register
