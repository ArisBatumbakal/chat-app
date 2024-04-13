import * as React from 'react';
import {Link} from 'react-router-dom';
import {Container, Box, Divider, Typography, Button} from '@mui/material';
import {Dangerous } from '@mui/icons-material';


function UnknownPage(){
    const urltxt = window.location.search;
    const urlGoBack = new URLSearchParams(urltxt).get('from');

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
                <Dangerous color='error' sx={{fontSize:'100px'}}></Dangerous>
                <br/><br/><br/>
                <Typography variant='h5'>You don't have the authorization to enter this page or the Link is broken</Typography>
                <br/><br/>
                <Divider></Divider>
                <br/><br/>
                <Box sx={{
                    textAlign:'center'
                }}>
                    <Button
                        variant='outlined'
                        color='success'
                        sx={{px:5}}>
                        <Link to={`/${urlGoBack.toString()}`}
                            style={{textDecoration:'none', color:'black'}}>
                            Go Back
                        </Link>
                    </Button>
                    <Button
                        variant='outlined'
                        color='success'
                        sx={{px:5, ml:2}}>
                        <Link to='/'
                            style={{textDecoration:'none', color:'black'}}>
                            Go to HomePage
                        </Link>
                    </Button>
                </Box>

            </Container>
        </>
    )
}

export default UnknownPage
