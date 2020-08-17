import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Modal from '@material-ui/core/Modal';
import CharacterShowEdit from './CharacterShowEdit';
import Box from '@material-ui/core/Box';

//card styles
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    maxHeight: 300,
  },
});

export default function CharacterCard(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  return (
    <>
    <div className="CharacterCard" style={props.style}>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="D&D Avatar"
          height="130"
          image='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/1200px-SNice.svg.png'
          title={props.character.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.character.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lvl {props.character.level} 
            &nbsp;{props.character.race} &nbsp;{props.character.class}&nbsp; <br/>
         In Campaign = {props.character.isInCampaign}
            
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
       
      <Button size="small" color="primary" onClick={handleOpen}>
        Character Details
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
         <Box my="1rem">
      <CharacterShowEdit Character={props.character} edit={props.edit} delete={props.delete}/>
        </Box>
      </Modal>
      </CardActions>
    </Card>
    </div>
    </>
  );
}
