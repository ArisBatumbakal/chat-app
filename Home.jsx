import {Link} from 'react-router-dom';
import {Container, Box, Divider, Typography,Button, Grid} from '@mui/material';
import {Groups, Login, PersonAddAlt1Outlined, Diversity3, Person} from '@mui/icons-material'

const Home = () => {
    return (
        <>
            <Container
                className='inconsolata-font'
                sx={{
                    margin:'auto',
                    width: '100vW',
                    backgroundColor: '#BDCDBB',
                    p:'2vH', pt:'10vh',
                    color:'#154017',
                    textAlign:'center',
                }}>
                <Box sx={{
                    fontSize: '2rem',
                    fontWeight: '500',
                    p:'0.5rem',my:'2rem'
                }}>
                    Hello User/Stranger/Spectator!! <br/>
                    Welcome to ChatApp!!!
                </Box>
                <Box sx={{
                    fontSize: '2.5rem',
                    fontWeight: '300',
                    p:'0.5rem',my:'5rem'
                }}>
                    Join the growing community inside this ChatApp
                </Box>
                <Grid container spacing={2}>
                    <Grid item md={3} xs={1}></Grid>
                    <Grid item md={2.5} xs={4}>
                        <Typography variant='body2' sx={{fontSize:"1.5rem", fontWeight:"200", pb:'1rem'}}>Already a User?</Typography>
                        <Link to="/login"><Button variant='contained' color="success" sx={{px:'2rem',py:'0.5rem'}} startIcon={<Login/>}>
                            Login
                        </Button></Link>
                    </Grid>
                    <Grid item md={1} xs={2}>
                        <Typography variant='body2' sx={{fontSize:"1.5rem", fontWeight:"200"}}>or</Typography>
                    </Grid>
                    <Grid item md={2.5} xs={4}>
                        <Typography variant='body2' sx={{fontSize:"1.5rem", fontWeight:"200", pb:'1rem'}}>Haven't joined yet?</Typography>
                        <Link to="/register"><Button variant='contained' color="success" sx={{px:'2rem',py:'0.5rem'}} startIcon={<PersonAddAlt1Outlined/>}>
                            Register
                        </Button></Link>
                    </Grid>
                    <Grid item md={3} xs={1}></Grid>
                </Grid>
                <Divider variant='middle' sx={{my:'50px'}}/>
                <Grid container columnGap={3} rowGap={{xs:5}} sx={{mb:'5vH'}}>
                    <Grid item md={1} xs={0}></Grid>
                    <Grid item md={3} xs={12} sx={{
                        borderBottom:2,
                        borderColor:"#154017",
                        px:'1rem', py:'1rem'
                    }}>
                        <Typography className="inconsolata-font" variant='h5' sx={{pb:'20px'}}>ALL USERS</Typography>
                        <Divider variant='middle'><Groups/></Divider>
                        <Typography variant='h3' sx={{py:'20px'}}>12</Typography>
                    </Grid>
                    <Grid item md={3} xs={12} sx={{
                        borderBottom:2,
                        borderColor:"#154017",
                        px:'1rem', py:'1rem'
                    }}>
                        <Typography className="inconsolata-font" variant='h5' sx={{pb:'20px'}}>ACTIVE USERS</Typography>
                        <Divider variant='middle'><Person/></Divider>
                        <Typography variant='h3' sx={{py:'20px'}}>12</Typography>
                    </Grid>
                    <Grid item md={3} xs={12} sx={{
                        borderBottom:2,
                        borderColor:"#154017",
                        px:'1rem', py:'1rem'
                    }}>
                        <Typography className="inconsolata-font" variant='h5' sx={{pb:'20px'}}>ALL PUBLIC ROOMS</Typography>
                        <Divider variant='middle'><Diversity3/></Divider>
                        <Typography variant='h3' sx={{py:'20px'}}>12</Typography>
                    </Grid>
                    <Grid item md={1} xs={0}></Grid>
                </Grid>
            </Container>
        </>
    )
}

export default Home;
