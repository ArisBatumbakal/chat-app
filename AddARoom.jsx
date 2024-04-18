import * as React from 'react';
import {Box, Switch, Typography, Grid, 
        TextField, Avatar, Divider, FormControl, 
        Select, MenuItem, Accordion, AccordionActions, 
        AccordionSummary, AccordionDetails, Radio,
        RadioGroup, FormControlLabel}  from '@mui/material';
import {Edit, CameraAltRounded} from '@mui/icons-material';
import { alpha, styled } from '@mui/material/styles';
import { green } from '@mui/material/colors';

const CustomSwitch = styled(Switch)(({ theme }) => ({
    '& .MuiSwitch-switchBase.Mui-checked': {
      color: green[800],
      '&:hover': {
        backgroundColor: alpha(green[800], theme.palette.action.hoverOpacity),
      },
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
      backgroundColor: green[800],
    },
}));

function AddARoom(){
    const [imgSRC, setImgSRC] = React.useState();
    const refInputTypeFile = React.useRef(null);
    const handleImgChange = (e) => {
        setImgSRC(e.target.files[0]);
    }
    const [limitNum, setLimitNum] = React.useState(5);

    const handleLimit = (e) => setLimitNum(e.target.value);
    const [allowSendMsg, setAllowSendMsg] = React.useState(true);
    const [allowAddMem, setAllowAddMem] = React.useState(false);

    const handleAllowSendMSG = (e) => setAllowSendMsg(e.target.checked);
    const handleAllowAddMem = (e) => setAllowAddMem(e.target.checked);

    const fstyle = {
        display:'flex',
        flexDirection:'column',
        alignItems:'center'
    }

    const [roomType, setRoomType] = React.useState('Public');
    const [openPublic, setOpenPublic] = React.useState(true);
    const [openPrivate, setOpenPrivate] = React.useState(false);
    const handleChangeRoomType = (e) => {
        setRoomType(e.target.value);
        if(e.target.value == 'Public'){
            setOpenPublic(true);
            setOpenPrivate(false);
        }else if(e.target.value == 'Private'){
            setOpenPublic(false);
            setOpenPrivate(true);
        }
    };

    return (
        <>
            <Box className='inconsolata-font'>
                <Typography variant='h5'>
                    Add a Room
                </Typography>
                <Grid container sx={{mt:2,width:'100%'}}>
                    <Grid item xs={3} sx={{...fstyle, justifyContent:'center'}}>
                        <Avatar alt='User Profile' 
                            src={imgSRC} sx={{
                                width:'6rem', 
                                height:'6rem',
                                cursor:'pointer'}}
                            onClick={() => refInputTypeFile.current.click()}>
                            <CameraAltRounded sx={{fontSize:'35px'}}/>
                        </Avatar>
                        <input type='file'
                            name='imgSource'
                            onChange={handleImgChange}
                            ref={refInputTypeFile} hidden></input>
                    </Grid>
                    <Grid item xs={9} sx={{...fstyle,alignItems:'start',pl:2}}>
                        <TextField fullWidth size='small'
                            label='Room Name' variant='standard'
                            inputProps={{style: {fontSize:'12px'}}}
                            InputLabelProps={{style: {fontSize:'12px',fontWeight:'500'}}}
                            sx={{mb:1}}/>
                        <TextField fullWidth size='small' label='Room Description'
                            variant='standard' multiline rows={2}
                            inputProps={{style: {fontSize:'12px', lineHeight:'1.5'}}}
                            InputLabelProps={{style: {fontSize:'12px',fontWeight:'500'}}}
                            />
                    </Grid>
                </Grid>
                <Divider sx={{my:2}}/>
                <Grid container>
                    <Grid item xs={8}>
                        <Typography variant='body2' sx={{fontSize:'12px',fontWeight:'500',my:1}}>Limit Members to Join:</Typography>
                        <Typography variant='body2' sx={{fontSize:'12px',fontWeight:'500',my:2.2}}>Allow Members to send Messages:</Typography>
                        <Typography variant='body2' sx={{fontSize:'12px',fontWeight:'500'}}>Allow Members to Add Members:</Typography>
                    </Grid>
                    <Grid item xs={4} sx={{textAlign:'right'}}>
                        <Box>
                            <FormControl >
                                <Select
                                    size='small'
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={limitNum}
                                    onChange={handleLimit}
                                    sx={{fontSize:'12px',height:'30px',width:'80px', textAlign:'center'}}>
                                    <MenuItem value={5} sx={{fontSize:'12px'}} selected>5</MenuItem>
                                    <MenuItem value={10} sx={{fontSize:'12px'}}>10</MenuItem>
                                    <MenuItem value={20} sx={{fontSize:'12px'}}>20</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                        <Box>
                            <CustomSwitch
                                size='small'
                                checked={allowSendMsg}
                                onChange={handleAllowSendMSG}
                                sx={{my:1.2}}
                                inputProps={{ 'aria-label': 'controlled' }}/>
                        </Box>
                        <Box>
                            <CustomSwitch
                                size='small'
                                checked={allowAddMem}
                                onChange={handleAllowAddMem}
                                inputProps={{ 'aria-label': 'controlled' }}/>
                        </Box>
                    </Grid>
                </Grid>
                <Divider sx={{my:2}}/>
                <FormControl fullWidth>
                    <RadioGroup
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="controlled-radio-buttons-group"
                        value={roomType}
                        onChange={handleChangeRoomType}>
                        <Accordion sx={{boxShadow:'0 0 0'}} expanded={openPublic}>
                            <AccordionSummary
                                aria-controls="panel1-content"
                                id="panel1-header">
                            <FormControlLabel value="Public" control={
                                <Radio sx={{color: green[900],'&.Mui-checked': {color: green[900]}}}/>} label="Public Room" />
                            </AccordionSummary>
                            <AccordionDetails sx={{}}>
                            <Typography sx={{width:'100%', fontSize:'12px'}}>Anyone can find the room in Search bar and everybody can join the room using the link</Typography>

                            </AccordionDetails>
                        </Accordion>
                        
                        <Accordion sx={{boxShadow:'0 0 0'}} expanded={openPrivate}>
                            <AccordionSummary
                                aria-controls="panel1-content"
                                id="panel1-header">
                            <FormControlLabel value="Private" control={
                                <Radio sx={{color: green[900],'&.Mui-checked': {color: green[900]}}}/>} label="Private Room" />
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography sx={{width:'100%', fontSize:'12px'}}>Anyone can find the room in Search bar and everybody can join the room using the link</Typography>

                            </AccordionDetails>
                        </Accordion>
                    </RadioGroup>
                </FormControl>
                <Divider sx={{my:0}}/>
            </Box>
        </>
    )
}

export default AddARoom;