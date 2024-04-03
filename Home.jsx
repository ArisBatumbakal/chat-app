import {Container, Box, Divider, Typography,Button} from '@mui/material';
import {Groups, Login, PersonAddAlt1Outlined} from '@mui/icons-material'

function Home(){
    return (
        <>
            <Container 
                className='inconsolata-font' 
                sx={{
                    width: '100vW',
                    height: '100vH',
                    backgroundColor: '#BDCDBB',
                    p:'2vH',
                    color:'#154017',
                    textAlign:'center',
                }}
                fixed>
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
                    p:'0.5rem',mb:'2rem'
                }}>
                    Join the growing community inside this ChatApp
                </Box>
                <Box sx={{
                    display:'grid',
                    alignItems:'center',
                    justifyContent:'center',
                    
                }}>
                    <Box>
                        <Typography variant='body2'>Already a User?</Typography>
                        <Button>
                            <Login/>Login
                        </Button>
                    </Box>
                    <Box>
                        <Typography variant='body2'>or</Typography>
                    </Box>
                    <Box>
                        <Typography variant='body2'>Haven't joined yet?</Typography>
                        <Button>
                            <Login/>Login
                        </Button>
                    </Box>
                </Box>
            </Container>
        </>
    )
}

export default Home