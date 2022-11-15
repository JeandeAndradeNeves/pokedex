import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { color } from '@mui/system';

export default function PokemonCard({name,image}) {
  return (
    <Card sx={{ maxWidth:800,margin:1,maxHeight:500,backgroundColor:'rgb(68, 216, 172)'}}>
      <CardMedia
        component="img"
        height="200"
        image={image}
        alt="Pokemon"
      />
      <CardContent sx={{ textAlign:'center'}}>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Descrição do Pokemon
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" sx={{ backgroundColor:'rgb(19, 109, 104)', color:'black',margin:1}}>FAVORITO</Button>
        <Button size="small" sx={{ backgroundColor:'rgb(255, 66, 66)', color:'black'}}>EXCLUIR</Button>
      </CardActions>
    </Card>
  );
}
