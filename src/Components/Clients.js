import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => {
    return {
        details: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "30px",
            gap: "60px",
            [theme.breakpoints.down('md')]:{
                gap: "20px",
            },
            [theme.breakpoints.down('md')]:{
                display: "flex",
                flexDirection: "column",
                justifyContent:"center",
                alignItems:"center"
            }
        },
        title:{
fontSize:"35px",
[theme.breakpoints.down('md')]:{
    fontSize:"28px",
},
[theme.breakpoints.down('sm')]:{
    fontSize:"25px",
},
lineHeight:"40px"
        },
        para:{

        },
        img: {
            border: "1px solid #bbbdbc",
            height: "40px",
            width: "180px"
            , padding: "30px",
            margin: "10px",
            backgroundColor:"white",
            [theme.breakpoints.down('lg')]:{
                height: "40px",
                width: "120px"
                , padding: "20px",
                margin: "10px", 
            },
            [theme.breakpoints.down('md')]:{
                height: "40px",
                width: "180px"
                , padding: "30px",
                margin: "10px",
            },

        },
        side_color: {
            backgroundColor: "#F6D88C",
            width: "20px",
            height: "150px",
            marginRight: "10px",
            
        },
        img_first: {
            display: "flex",
            [theme.breakpoints.down('md')]:{
                display:"flex",
                flexDirection:"column"
            }
        },
        img_second: {
            display: "flex", 
             [theme.breakpoints.down('md')]:{
                display:"flex",
                flexDirection:"column"
            }
        },
        Client_text: {
            textAlign: "start",
            lineHeight: "30px",
            display: "flex",
            width: "340px",
            [theme.breakpoints.down('md')]: {
                textAlign: "start",
                alignItems:"center",
                marginLeft:"55px",
                lineHeight: "30px",
                display: "flex",
                width: "300px",
            },
            [theme.breakpoints.down('sm')]: {
                textAlign: "start",
                alignItems:"center",
                marginLeft:"55px",
                lineHeight: "30px",
                display: "flex",
                width: "300px",
            }
        }
    }
})
const Clients = () => {
    const { details,
        side_color,
        para,
        title,
        img,
        img_second,
        img_first,
        Client_text
    } = useStyles();
    return (
        <Box className={details}>
            <Box className={Client_text}>
                <Box className={side_color}></Box>
                <Box>
                    <Box className={title}>
                        Trusted by over 10k Clients & brands
                    </Box>
                    <Box className={para}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor.
                    </Box>
                </Box>
            </Box>
            <Box >
                <Box container className={img_first}>
                    <Box ><img src="./Image/Bitmap.png" className={img} /></Box>
                    <Box ><img src="./Image/Bitmap-1.png" className={img} /></Box>
                    <Box ><img src="./Image/Bitmap-2.png" className={img} /></Box>
                </Box>
                <Box container className={img_second}>
                    <Box ><img src="./Image/Bitmap-3.png" className={img} /></Box>
                    <Box ><img src="./Image/Group 5985.png" className={img} /></Box>
                    <Box ><img src="./Image/Vector.png" className={img} /></Box>
                </Box>
            </Box>

        </Box>
    );
}

export default Clients;