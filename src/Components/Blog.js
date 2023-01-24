import { Box, Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => {
    return {
        Blogs_heading: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingLeft: '15vh',
            paddingRight: '35vh',
            paddingTop: '15vh',
            [theme.breakpoints.down('lg')]:{
                display:'flex',
                flexDirection:'column'
            },
            [theme.breakpoints.down('md')]: {
                display: 'flex',
                flexDirection: 'column'
            }
        },
        Blogs_content: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingLeft: '10vh',
            paddingRight: '10vh',
            paddingTop: '10vh',
            paddingBottom: '5vh',
            [theme.breakpoints.down('lg')]:{
                display:'flex',
                flexDirection:'column'
            },
            [theme.breakpoints.down('md')]: {
                display: 'flex',
                flexDirection: 'column'
            }
        }
    }
})


const Blog = () => {
    const {
        Blogs_heading,
        Blogs_content
    } = useStyles();
    return (
        <Box>
            <Box className={Blogs_heading}>
                <Box >
                    <Typography sx={{ fontSize: '30px', fontWeight: 'bold', paddingBottom: '10px' }}>Read Our Blogs</Typography>
                    <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor </Typography>
                </Box>
                <Box>
                    <Button sx={{ backgroundColor: '#181817', color: '#F6D88C', padding: '10px', borderRadius: '10px' }}>READ ALL BLOGS</Button>
                </Box>
            </Box>
            <Box className={Blogs_content}>
                <Box>
                    <img src="./Image/Rectangle 590.png" />
                    <Typography sx={{ color: '#F29764', paddingTop: '5px' }}>April 30, 2020</Typography>
                    <Typography sx={{ paddingTop: '5px', paddingBottom: '5px', fontSize: '23px', fontWeight: 'bold' }}>How to collaborate with companies</Typography>
                    <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem<br /> ipsum dolor sit amet consectetur adipiscing elit</Typography>
                    <Typography sx={{ paddingTop: '5px' }}>Read More</Typography>
                </Box>
                <Box>
                    <img src="./Image/Rectangle 591.png" />
                    <Typography sx={{ color: '#F29764', paddingTop: '5px' }}>April 30, 2020</Typography>
                    <Typography sx={{ paddingTop: '5px', paddingBottom: '5px', fontSize: '23px', fontWeight: 'bold' }}>About social media advertising</Typography>
                    <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem<br /> ipsum dolor sit amet consectetur adipiscing elit</Typography>
                    <Typography sx={{ paddingTop: '5px' }}>Read More</Typography>
                </Box>
            </Box>
        </Box>
    );
}

export default Blog;