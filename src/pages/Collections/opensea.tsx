import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



export async function getStaticProps() {
    const options = {
        method: 'GET',
        headers: {Accept: 'application/json', 'X-API_KEY': process.env.API_KEY}
    }

    const res = await fetch('https://api.opensea.io/api/v1/collection/doodles-official', options)
    const data = await res.json()
    return {
        props: {
            data
        }
    }
}

function MediaCard({ data }) {
    console.log(data)
    return (
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image={data.collection.banner_image_url}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.collection.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.collection.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">View</Button>
          <Button size="small">Current floor price: {data.collection.stats.floor_price}</Button>
        </CardActions>
      </Card>
    );
  }

export default MediaCard;