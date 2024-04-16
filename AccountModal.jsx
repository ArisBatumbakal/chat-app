import * as React from 'react';
import {Box, IconButton, Modal, Button, InputAdornment, Typography, Grid, Avatar, Badge, Divider, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from '@mui/material';
import {Edit, Email, ToggleOnRounded, ToggleOffOutlined, EmailOutlined, AccountCircleRounded, CameraAltRounded, GroupsRounded, ContactsRounded, Settings, LogoutRounded, Close} from '@mui/icons-material';

const modalStyle = {
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
}
const modalBoxStyle = {
    width:'300px',
    px:3,pb:2,pt:3,borderRadius:'5px',
    backgroundColor:'#ffffff',
    position:'relative',
    textAlign:'right'
}

function AccountModal(){
    const [imgSRC, setImgSRC] = React.useState();
    const refInputTypeFile = React.useRef(null);
    const handleImgChange = (e) => {
        setImgSRC(e.target.files[0]);
    }

    const fstyle = {
        display:'flex',
        flexDirection:'column',
        alignItems:'center'
    }
    return (
        <>
            <Box className='inconsolata-font'>
                <Typography variant='h5'>
                    My Account
                </Typography>
                <Grid container spacing={1} sx={{mt:2,width:'95%'}}>
                    <Grid item xs={3} sx={{...fstyle}}>
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
                        <Avatar alt='User Profile' src={imgSRC} sx={{width:'4.5rem', height:'4.5rem'}}></Avatar>
                    </Badge>
                    <input type='file'
                        name='imgSource'
                        onchange={handleImgChange}
                        ref={refInputTypeFile} hidden></input>
                    </Grid>
                    <Grid item xs={8} sx={{...fstyle,alignItems:'start'}}>
                        <Typography variant='h6'>Meixie Messy</Typography>
                        <Typography variant='body' sx={{fontSize:'14px',color:'#698a66',fontStyle:'italic'}}>messsiii000222@gmail.com</Typography>
                        <Typography variant='caption' sx={{mt:'5px', fontWeight:'800',color:'#154017'}}>@dfssdfsd</Typography>
                    </Grid>
                    <Grid item xs={1} sx={{...fstyle}}>
                        <Box><EditName/></Box>
                        <Box><EditEmail/></Box>
                        <Box><EditUsername/></Box>
                    </Grid>
                </Grid>
                <br/>
                <Divider sx={{my:2}}/>
                <Grid container>
                    <Grid item xs={3} sx={{...fstyle}}><Email sx={{fontSize:'30px',color:'#154017', my:'-6px'}}/></Grid>
                    <Grid item xs={7}>Hide my email address</Grid>
                    <Grid item xs={2}><HideEmail/></Grid>
                </Grid>
                <Divider sx={{my:2}}/>
                <Typography variant='body1' sx={{fontSize:'12px',fontWeight:'700',color:'#154017'}}>DEACTIVATE MY ACCOUNT</Typography>
                <Typography variant='body2' sx={{fontSize:'11px',fontWeight:'400',color:'#154017'}}>Deactivated account will not receive messages from your contacts or even from 
                    strangers. You will not be able to use your account unless you activate it again.</Typography>
                <DeactivateAcc/>
                <Divider sx={{my:'10px',width:'80%'}}/>
                <Typography variant='body1' sx={{fontSize:'12px',fontWeight:'700',color:'red'}}>PERMANENTLY DELETE MY ACCOUNT</Typography>
                <Typography variant='body2' sx={{fontSize:'11px',fontWeight:'400',color:'red'}}>Once you have agreed, all your data will be lost, conversation from your contacts 
                    and from stranger will not be deleted, but your account will be flagged as deleted. 
                    You won't be able to login again</Typography>
                <Button
                    size='small'
                    variant='outlined'
                    color='error'
                    sx={{
                        px:'20px',my:'10px'
                    }}>Delete my Account</Button>
            </Box>
        </>
)}

function EditName(){
    const [modalBox, setModalBox] = React.useState(false);
    const handleModalOpen = () => setModalBox(true);
    const handleModalClose = () => setModalBox(false);
    return(
        <>
            <Box>
            <IconButton aria-label='Edit' sx={{
                p:0, m:0, mt:'5px'
                }} onClick={handleModalOpen}>
                <Edit sx={{fontSize:'18px', color:'#154017'}}/>
            </IconButton>
            <Modal
                open={modalBox}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                sx={modalStyle}>
                <Box sx={modalBoxStyle}>
                    <TextField 
                        fullWidth
                        size='small'
                        variant='outlined'
                        label='First Name'
                        id="outlined-start-adornment"
                        defaultValue='Meidxie'/>
                    <TextField 
                        fullWidth
                        size='small'
                        variant='outlined'
                        label='Last Name'
                        id="outlined-start-adornment"
                        defaultValue='Messy'
                        sx={{my:3}}/>  
                    <Button
                        size='small'
                        color='success'
                        variant='outlined'
                        onClick={handleModalClose}>Cancel</Button> 
                    <Button
                        size='small'
                        color='success'
                        variant='contained'
                        sx={{ml:2,px:3}}
                    >Save</Button> 
                </Box>
            </Modal>
            </Box>
        </>
    )
}

function EditEmail(){
    const [modalBox, setModalBox] = React.useState(false);
    const handleModalOpen = () => setModalBox(true);
    const handleModalClose = () => setModalBox(false);
    return(
        <>
            <Box>
            <IconButton aria-label='Edit' sx={{
                p:0, m:0, mt:'5px'
                }} onClick={handleModalOpen}>
                <Edit sx={{fontSize:'18px', color:'#154017'}}/>
            </IconButton>
            <Modal
                open={modalBox}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                sx={modalStyle}>
                <Box sx={modalBoxStyle}>
                   <Typography variant='body1' sx={{fontSize:'12px', textAlign:'center'}}>
                        <span style={{fontWeight:'500'}}>Please Note:</span> you can only change email after 5 days
                    </Typography>
                    <TextField 
                        fullWidth
                        size='small'
                        variant='outlined'
                        id="outlined-start-adornment"
                        defaultValue='messsiii000222@gmail.com'
                        sx={{my:2}}
                        InputProps={{
                            startAdornment: <InputAdornment position="start"><EmailOutlined/></InputAdornment>,
                            style: {fontSize:'12px', fontWeight:'500'}
                        }}/>

                    <Button
                        size='small'
                        color='success'
                        variant='outlined'
                        onClick={handleModalClose}>Cancel</Button> 
                    <Button
                        size='small'
                        color='success'
                        variant='contained'
                        sx={{ml:2,px:3}}
                    >Save</Button>
                </Box>
            </Modal>
            </Box>
        </>
    )
}

function EditUsername(){
    const [modalBox, setModalBox] = React.useState(false);
    const handleModalOpen = () => setModalBox(true);
    const handleModalClose = () => setModalBox(false);
    return(
        <>
            <Box>
            <IconButton aria-label='Edit' sx={{
                p:0, m:0, mt:'5px'
                }} onClick={handleModalOpen}>
                <Edit sx={{fontSize:'18px', color:'#154017'}}/>
            </IconButton>
            <Modal
                open={modalBox}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                sx={modalStyle}>
                <Box sx={modalBoxStyle}>
                   <Typography variant='body1' sx={{fontSize:'12px', textAlign:'left'}}>
                        You can use a username so that other 
                        people will be able to search you publicly
                        without adding your email address.<br/><br/>letters and numbers only. 
                        5-30 characters. 
                    </Typography>
                    <TextField 
                        fullWidth
                        size='small'
                        variant='outlined'
                        id="outlined-start-adornment"
                        defaultValue='dfssdfsd'
                        sx={{my:2}}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">@</InputAdornment>,
                            style: {fontSize:'12px', fontWeight:'500'}
                        }}/>

                    <Button
                        size='small'
                        color='success'
                        variant='outlined'
                        onClick={handleModalClose}>Cancel</Button> 
                    <Button
                        size='small'
                        color='success'
                        variant='contained'
                        sx={{ml:2,px:3}}
                    >Save</Button>
                </Box>
            </Modal>
            </Box>
        </>
    )
}

function HideEmail(){
    const [hidemyemail, sethidemyemail] = React.useState(false);
    const [modalBox, setModalBox] = React.useState(false);
    const handleModalOpen = () => {
        if(!hidemyemail){
            setModalBox(true);
        }else{
            sethidemyemail(false);
        }
    }
    const handleModalClose = () => setModalBox(false);
    const handleHideE = () => {
        sethidemyemail(true);
        setModalBox(false);
    }

    return(
        <>
            <Box>
                <IconButton aria-label='Edit' sx={{p:0}} onClick={handleModalOpen}>
                    {hidemyemail ? <ToggleOnRounded sx={{fontSize:'35px',my:'-8px', mt:'-10px',color:'#154017'}}/> : <ToggleOffOutlined sx={{fontSize:'35px',my:'-8px', mt:'-10px',color:'#154017'}}/>}
                </IconButton>
                <Modal
                    open={modalBox}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    sx={modalStyle}>
                    <Box sx={{...modalBoxStyle, textAlign:'center'}}>
                        <Typography variant='body2' sx={{fontSize:'11px', fontWeight:'500', color:'#154017',mb:3}}>
                            Once you hide your Email, everyone will not see your email address on your account, but they can still add you on their contacts using your email.
                        </Typography>
                        <Button
                            size='small'
                            color='success'
                            variant='outlined'
                            onClick={handleModalClose}>Disagree</Button> 
                        <Button
                            size='small'
                            color='success'
                            variant='outlined'
                            sx={{ml:2,px:3}}
                            onClick={handleHideE}>Agree</Button>
                    </Box>
                </Modal>
            </Box>
        </>
    )
};

function DeactivateAcc(){
    const [modalBox, setModalBox] = React.useState(false);
    const handleModalOpen = () => setModalBox(true);
    const handleModalClose = () => setModalBox(false);
    return(
        <>
            <Box>
                <Button
                    size='small'
                    variant='outlined'
                    color='success'
                    sx={{px:'20px',my:'10px'}}
                    onClick={handleModalOpen}>Deactivate my Account</Button>
                <Dialog
                    open={modalBox}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    sx={modalStyle}>
                    <DialogTitle id="alert-dialog-title">
                        {"Use Google's location service?"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Let Google help apps determine location. This means sending anonymous
                            location data to Google, even when no apps are running.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleModalClose}>Disagree</Button>
                        <Button onClick={handleModalClose} autoFocus>
                            Agree
                        </Button>
                    </DialogActions>
                </Dialog>
            </Box>
        </>
    )
}

export default AccountModal;