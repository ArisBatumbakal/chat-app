import * as React from 'react';
import {Box, IconButton, Modal, Typography} from '@mui/material';
import {AccountCircleRounded, GroupsRounded, ContactsRounded, Settings, LogoutRounded, Close} from '@mui/icons-material';
import AccountModal from './sub-components/AccountModal';

function SideBar(){
    const [openAccount, setOpenAccount] = React.useState(false);
    const handleAccModalOpen = () => setOpenAccount(true);
    const handleAccModalClose = () => setOpenAccount(false);
    return (
        <>
            <Box sx={{
                backgroundColor:'#4B6A4C',
                py:'5px', 
                position:'relative',
                display:'flex',
                flexDirection:'column'
                }}>
                <IconButton aria-label='account' sx={{
                    color:'white',
                    display:'flex',
                    flexDirection:'column'
                    }}
                    onClick={handleAccModalOpen}>
                    <AccountCircleRounded sx={{fontSize:'30px'}}/>
                    <span style={{fontSize:'8px'}}>Account</span>
                </IconButton>
                
                <IconButton aria-label='account' sx={{
                    color:'white',
                    display:'flex',
                    flexDirection:'column'
                    }} >
                    <GroupsRounded sx={{fontSize:'30px'}}/>
                    <span style={{fontSize:'8px'}}> Rooms</span>
                </IconButton>
                
                <IconButton aria-label='account' sx={{
                    color:'white',
                    display:'flex',
                    flexDirection:'column',
                    mt:1
                    }} >
                    <ContactsRounded sx={{fontSize:'30px'}}/>
                    <span style={{fontSize:'8px',marginTop:'5px'}}>Contacts</span>
                </IconButton>

                <IconButton aria-label='account' sx={{
                    color:'white',
                    display:'flex',
                    flexDirection:'column'
                    }} >
                    <Settings sx={{fontSize:'30px'}}/>
                    <span style={{fontSize:'8px'}}>Settings</span>
                </IconButton>

                <IconButton aria-label='account' sx={{
                    color:'white',
                    display:'flex',
                    flexDirection:'column',
                    position:'absolute',
                    bottom:'0',left:'7px'
                    }} >
                    <LogoutRounded sx={{fontSize:'30px'}}/>
                    <span style={{fontSize:'8px'}}>Logout</span>
                </IconButton>
            </Box>
            <Modal
                open={openAccount}
                /*onClose={handleAccModalClose}*/
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                sx={{
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'center'
                }}>
                <Box sx={{
                    width:'400px',
                    p:3,borderRadius:'10px', pt:3,
                    backgroundColor:'#ffffff',
                    position:'relative'
                }}>
                    <AccountModal/>
                    <IconButton aria-label='account' sx={{
                        color:'#4c7d48',
                        position:'absolute',
                        top:'12px',right:'5px'
                        }} 
                        onClick={handleAccModalClose}>
                        <Close sx={{fontSize:'25px'}}/>
                    </IconButton>
                </Box>
            </Modal>
        </>
    )
}

export default SideBar;