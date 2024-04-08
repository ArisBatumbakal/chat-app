import * as React from 'react';
import {Link} from 'react-router-dom';
import {Container, Avatar, Badge, Box, Divider, FormControl, InputLabel, OutlinedInput, IconButton, InputAdornment, Typography,Button, Grid, TextField} from '@mui/material';
import {HowToRegOutlined, EmailOutlined, CameraAltRounded, Visibility, VisibilityOff } from '@mui/icons-material';



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
    const [imgSRC, setImgSRC] = React.useState();
    const [countUChar, setCountUChar] = React.useState('');
    const refInputTypeFile = React.useRef(null);
    const handleImgChange = (e) => {
        setImgSRC(e.target.files[0]);
    }
    const [errorStateU, setErrorStateU] = React.useState(false);
    const [usernameTxt, setUsernameTxt] = React.useState('');
    const handleUsername = (e) => {
        let count = e.target.value.length;
        let uval = e.target.value;
        if(count <= 31){
            setUsernameTxt('');
            setCountUChar(uval);
            setErrorStateU(false);
            if(count == 31){
                setErrorStateU(true);
                setUsernameTxt("Maximum of 30 characters only!");
            }
            
        }
    }

    return (
        <>
            <Container
                className='inconsolata-font'
                sx={(theme) => ({
                    margin:'auto',
                    width: '98vW',
                    height: '100vH',
                    backgroundColor: '#BDCDBB',
                    p:'2vH', pt:'10vh',
                    color:'#154017',
                    textAlign:'center'
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
                            width:'90%', pt:'5%'
                        },[theme.breakpoints.up('md')] : {
                            width:'50%'
                        }
                    })}>
                        <Typography
                            sx={{
                                fontSize:'24px',
                                textAlign:'center',
                                pb:'5vh', width:'100%'
                            }}
                        >Join us and enjoy the environment within this ChatApp</Typography>

                        <TextField
                            fullWidth
                            size='small'
                            label="Register an Email"
                            id="outlined-start-adornment"
                            InputProps={{
                                startAdornment: <InputAdornment position="start"><EmailOutlined/></InputAdornment>,
                                style: {color:'#154017', fontWeight:500}
                            }}
                        /><br/>
                        <FormControl sx={{my:2, width: '47%', mr:'3%'}} variant="outlined">
                        <InputLabel sx={{fontSize:'14px', mt:'2px'}} size='small' htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                            size='small'
                            id="outlined-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                           
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
                        <InputLabel sx={{fontSize:'14px', mt:'2px'}} size='small' htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
                        <OutlinedInput
                            size='small'
                            id="outlined-adornment-password"
                            type={showCPassword ? 'text' : 'password'}
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
                        <Typography variant='body1' sx={{fontSize:'20px'}}>Let us know more of you...</Typography>
                        <br/>
                        <Grid container>
                            <Grid item xs={6} md={6} sx={info1Style}>
                            <TextField
                                size='small'
                                fullWidth
                                label="First Name"
                                id="outlined-start-adornment"
                                sx={{mb:'3vh'}}
                                InputLabelProps={{style: {fontSize: '14px',marginTop:'4px'}}}
                                inputProps={{style: {fontSize: '14px',margin:'5px'}}}
                                /><br/>
                            <TextField
                                size='small'
                                fullWidth
                                label="Last Name"
                                id="outlined-start-adornment"
                                InputLabelProps={{style: {fontSize: '14px',marginTop:'4px'}}}
                                inputProps={{style: {fontSize: '14px',margin:'5px'}}}
                                />
                            </Grid>
                            <Grid item xs={6} md={6} sx={{...info1Style, pl:'15%',pt:'1%'}} >
                            <Badge
                                overlap="circular"
                                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                badgeContent={
                                    <Button>
                                        <CameraAltRounded color='success' fontSize='medium'/>
                                    </Button>
                                }
                                onClick={() => refInputTypeFile.current.click()}
                                sx={{cursor:'pointer'}}
                                >
                                <Avatar alt='User Profile' src='' sx={{width:'6rem', height:'6rem'}}></Avatar>
                            </Badge>
                            <input type='file'
                                name='imgSource'
                                onchange={handleImgChange}
                                ref={refInputTypeFile} hidden></input>
                            </Grid>
                        </Grid>
                        
                        <br/><br/>
                            <Typography 
                                sx={{
                                    textAlign:'left',
                                    width:'80%',
                                    fontSize:'0.6rem',
                                    color:'grey'
                                }}>
                                You can use a username so that other 
                                people will be able to search you publicly
                                without adding your email address.<br/><br/>
                                letters and numbers only. 
                                5-30 characters only. 
                            </Typography>
                            <TextField
                                label="Username"
                                id="outlined-start-adornment"
                                value={countUChar}
                                error={errorStateU}
                                helperText={usernameTxt}
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">@</InputAdornment>,
                                    endAdornment: <InputAdornment position='end'>{countUChar.length}</InputAdornment>,
                                    style:{
                                        fontSize:14, 
                                        fontWeight:600,
                                        color:'#154017'
                                    }
                                }}
                                sx={{
                                    mt:1, width:'70%',
                                    fontSize:'14px',
                                }}
                                onChange={handleUsername}/>
                            <br/><br/>
                            <Divider/>
                            <br/>
                            <Button
                                variant='contained'
                                color='success'
                                startIcon={<HowToRegOutlined/>}
                                size='large'
                                sx={{px:5}}
                                >
                                Join Us
                            </Button>
                            <br/><br/><br/>
                            <Typography
                                sx={{
                                    textAlign:'center',
                                    fontSize:'12px',
                                    mb:3
                                }}>
                                Already Joined? You can <Link to='/login' style={{fontWeight:700, color:'#63b356'}}>Login here</Link> instead
                            </Typography>
                </Box>  
            </Container>
        </>
    )
}

export default Register
