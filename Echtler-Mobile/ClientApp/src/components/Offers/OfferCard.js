import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    root: {
        width: 'auto',
        margin: 'auto'
    },
    media: {
        minWidth: 250,
        height: 300,
    },
});

const OfferCard = props => {
    const classes = useStyles();

    const { title, caption, image, link } = props;
    return (

        <Card className={classes.root} variant="outlined"  >
            <CardActionArea href={link}>
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
            </CardActionArea>
        </Card>
    );
};
export default OfferCard;