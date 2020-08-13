import React from 'react';
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
import '../../styles/components/characterCards.scss';
import Player from './testChar.json';

//modal styles
function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useModalStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));


//card styles
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function CharacterCard(props) {
  const classes = useStyles();
  //below is bringing in modal stuff to see if i can get modal functionality in charcard
  // const modalClasses = useModalStyles();
  // const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const modalTab = (
    <Box my="1rem">
      <CharacterShowEdit />
    </Box>
  );
  //end modal stuff

  let charactersHTML = [];

  for (let i = 0; i < Player.UserName.Characters.length; i++) {
    charactersHTML.push(<Grid item xs={6} md={4} lg={3} key={i}>
      <Card className={classes.root} key={i}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="D&D Avatar"
          height="180"
          image={Player.UserName.Characters[i].Avatar}
          title={Player.UserName.Characters[i].CharacterName}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {Player.UserName.Characters[i].CharacterName}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lvl {Player.UserName.Characters[i].Level} {Player.UserName.Characters[i].Race} {Player.UserName.Characters[i].Class} ... In Campaign
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
      <CharacterShowEdit Character={Player.UserName.Characters[i]} />
        </Box>
      </Modal>
      </CardActions>
    </Card>


    </Grid>);
  }


  return (

    <>
    <div className="CharactersGrid">
      <Grid container spacing={3} direction='row'>
        {charactersHTML}
      </Grid>
    </div>
    </>
  );
}
