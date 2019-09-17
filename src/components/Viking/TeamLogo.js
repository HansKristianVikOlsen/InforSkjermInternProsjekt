import React from 'react'
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import Box from '@material-ui/core/Box';
import bryneLogo from "../../static/bryne.jpg"
import { makeStyles, useTheme } from "@material-ui/styles"

const useStyles = makeStyles(theme => ({
    content: {
        display: "flex",
        alignItems: "center",
        flex: "auto",
        marginRight: 50,
        marginLeft: 50
    },
    icon: {
        height: 50,
        width: 50,
        padding: 20,
    },
    text: {
        color: "white"
    }
}))


const TeamLogo = ({ justifyContent }) => {
    const classes = useStyles();
    const theme = useTheme();
    return (
        <Box className={classes.content} justifyContent={justifyContent}>
            <img
                className={classes.icon}
                src={bryneLogo}
            />
            <Typography className={classes.text} variant="subtitle1" >
                BRYNE
            </Typography>
        </Box>
    )
}

export default TeamLogo
