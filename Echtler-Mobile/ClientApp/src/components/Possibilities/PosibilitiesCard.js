import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    root: {
        width: 'auto',
        margin: 'auto',
        backgroundColor: '#fafafa'
    },
    media: {
        width: '80%',
        paddingTop: '81.25%',
        borderRadius: '50%',
        marginTop: 20,
        margin:'auto',
    },
});

const PosibilitiesCard = props => {
    const classes = useStyles();

    const { title, caption, image } = props;
    return (

        <Card className={classes.root} variant="elevation"  elevation={0} >
       
                <CardMedia
                    className={classes.media}
                    image={image}
                    title={title}
                />
                <CardContent>
                    <Typography align="center" gutterBottom variant="h5" component="h2">
                        {title}
                    </Typography>
                    <Typography align="center" variant="body2" color="textSecondary" component="p">
                        {caption}
                    </Typography>
                </CardContent>
          
        </Card>
    );
};
export default PosibilitiesCard;