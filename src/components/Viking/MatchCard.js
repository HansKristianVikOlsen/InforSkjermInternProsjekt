import React from 'react'
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from "@material-ui/styles"
import TeamLogo from "./TeamLogo"
import { rgbToHex, hexToRgb } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    box: {
        display: "flex",
        alignItems: "center",
        backgroundColor: "black",
    },
    text: {
        color: "#FF6400"
    }
}))

const MatchCard = ({ event }) => {
    const classes = useStyles();

    return (
        <Box className={classes.box} border={1} borderColor="white" >
            <Typography className={classes.text} component="h5" variant="h5" style={{ marginLeft: 50 }}>
                {event}
            </Typography>
            <TeamLogo justifyContent="flex-end" />
            <Typography className={classes.text} component="h5" variant="h5">
                -
                </Typography>
            <TeamLogo justifyContent="flex-start" />
        </Box >

    )
}

export default MatchCard
