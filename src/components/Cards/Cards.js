import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './Cards.css';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    margin: "3% 3%",
  },
});

export default function Cards(props) {
  const classes = useStyles();

  const homesPriceAverage = () => {
    let totalPrice = 0
    let total = 0
    props.homes.forEach(home => {
      if (home.communityId === props.community.id) {
        total += 1
        totalPrice += home.price
      }
    }
    )
    const average = totalPrice / total
    const roundedAverage = Math.floor(average).toLocaleString("en")
    return roundedAverage
  }

  return (
    <Card className={classes.card}>
      <CardActionArea>
        {props.community.imgUrl !== '' ? (<CardMedia
          className="cardImage"
          component="img"
          alt='image'
          height="140"
          image={props.community.imgUrl}
          title="Contemplative Reptile"
        />) :
          (<CardMedia
            className="cardImage"
            component="img"
            alt='image'
            height="140"
            image='/images/altImage.jpeg'
            title="Contemplative Reptile"
          />)}
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.community.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Quadrant: {props.community.group}
            <br />
            Average Price: {homesPriceAverage() === "-NaN" ? 'Information Not Available' : '$ ' + homesPriceAverage()}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          See Homes
        </Button>
      </CardActions>
    </Card>
  );
}