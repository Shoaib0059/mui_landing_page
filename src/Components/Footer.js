import { Box, Divider, InputBase, Paper, Typography } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import PublicIcon from '@mui/icons-material/Public';
import InstagramIcon from '@mui/icons-material/Instagram';
import IconButton from '@mui/material/IconButton';
import { makeStyles } from "@mui/styles";


const useStyles = makeStyles((theme) => {
    return {
        details_box: {
            textAlign: 'center',
            backgroundColor: 'black',
            color: 'white'
        },
        footer_head: {
            //  width:'80vh'
            padding: '10px'
        },
        subscribe_content: {
            padding: '30px',
        },
        icons: {
            border: '1px solid #6F6F6F',
            borderRadius: '50%',
            padding: '8px',
            margin: '10px'
        },
        Contact_info: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingLeft: '40vh',
            paddingRight: '40vh',
            paddingTop: '10vh',
            paddingBottom: '5vh',
            [theme.breakpoints.down('lg')]: {
                display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
                paddingLeft: '20vh',
                paddingRight: '20vh',
                paddingTop: '10vh',
                paddingBottom: '5vh',
            },
            [theme.breakpoints.down('md')]: {
                display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
                flexDirection: 'column',

            },
            [theme.breakpoints.down('sm')]: {
                display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
                flexDirection: 'column'
            }
        },
        Term_policy: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingLeft: '20vh',
            paddingRight: '20vh',
            paddingTop: '5vh',
            paddingBottom: '5vh',
            color: '#6F6F6F'
        },


    }
})


const Footer = () => {
    const {
        details_box,
        footer_head,
        icons,
        Contact_info,
        Term_policy,
        subscribe_content,
    } = useStyles();
    return (
        <Box className={details_box}>
            <Box className={footer_head}>
                <Typography sx={{ padding: '20px', paddingTop: '60px', fontSize: '50px' }}>Martf</Typography>
                <Typography sx={{ color: '#6F6F6F', paddingBottom: '2vh' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<br /> Lorem ipsum dolor sit amet</Typography>
                <Box>
                    <FacebookIcon className={icons} />
                    <PublicIcon className={icons} />
                    <InstagramIcon className={icons} />
                </Box>
            </Box>

            <Box>
                <Box className={subscribe_content}>
                    <Typography sx={{ fontSize: '40px' }}>Subscribe to our Newsletter</Typography>
                    <Typography sx={{ color: '#6F6F6F' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '10px' }}>

                    <Paper
                        component="form"
                        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 350 }}
                    >
                        <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            placeholder="Enter your mail"
                            inputProps={{ 'aria-Box': 'search google maps' }}
                        />
                        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                        <IconButton type="button" sx={{ p: '10px' }} aria-Box="search">
                            Subscribe
                        </IconButton>

                    </Paper>
                </Box>
                <Box className={Contact_info}>
                    <Box >
                        <Box sx={{ color: '#6F6F6F', paddingBottom: '2vh' }}>DM us on:</Box>
                        <Typography>info@marft.com</Typography>
                    </Box>
                    <Box >
                        <Box sx={{ color: '#6F6F6F', paddingBottom: '2vh' }}>Call us on:</Box>
                        <Typography>(+1)0938654789</Typography>
                        <Typography>(+1)8574789632</Typography>
                    </Box>
                    <Box >
                        <Box sx={{ color: '#6F6F6F', paddingBottom: '2vh' }}>Find us:</Box>
                        <Typography>765 5th Street<br />,21st floor New York,USA</Typography>
                    </Box>
                </Box>
            </Box>
            {/* <Divider sx={{ height: 28, m: 0.5 }} orientation="Horizontal" />
            <Box className={Term_policy}>
                <Box>
                    Marft2021 All rights reserved.
                </Box>
                <Box>
                    Privacy Policy &nbsp; Terms of Conditions
                </Box>
            </Box> */}
        </Box>
    );
}

export default Footer;