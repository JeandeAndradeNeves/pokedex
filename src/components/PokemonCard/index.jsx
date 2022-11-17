import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { color } from '@mui/system';

export default function PokemonCard({name,image,types}) {
//Função para retornar um tipo do pokemon ou dois tipos.
  const typeHandler = () => {
    if(types[1]){
      return types[0].type.name + " | " + types[1].type.name
    }else{
      return types[0].type.name 
    }
    
  }
  return (
    <Card sx={{ margin:1,padding:1,backgroundColor:'rgb(68, 216, 172)',height:400}}>
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
        <Typography variant="h6" color="text.secondary">
          {typeHandler()}
        </Typography>
      </CardContent>
      <CardActions sx={{ }}>
        <Button size="small" sx={{ backgroundColor:'rgb(14, 89, 124)', color:'black',margin:3,marginBottom:10}}>ADD AOS FAVORITOS</Button>
      </CardActions>
    </Card>
  );
}
