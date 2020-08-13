import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import Grid from '@material-ui/core/Grid';
import Modal from '@material-ui/core/Modal';
import CharacterShowEdit from './CharacterShowEdit';
import Box from '@material-ui/core/Box';


import '../../styles/components/characterCards.scss';


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

  front: {
    border: '1px solid red',
  },
}));


//card styles
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function CharacterCard() {
  const classes = useStyles();
  //below is bringing in modal stuff to see if i can get modal functionality in charcard
  const modalClasses = useModalStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleFlip = (e) => {
    e.target.closest(".note-side").classList.toggle("turn");
  }

  const modalTab = (
    <Box my="1rem">
      <CharacterShowEdit />
    </Box>
  );

  const modalBody = (
  <div className="note">
    <div style={modalStyle} className={modalClasses.paper}>
      <div className="note-side front">
      <h2 id="simple-modal-title">Char Name</h2>
      <p className="charStats">Level: </p>
      <p className="charStats">Race: </p>
      <p className="charStats">Class: </p>
      <p className="charStats">Alignment: </p>
      <p className="charStats">Deity: </p>
      <p className="charStats">Proficiencies: </p>
      <p className="charStats">Ability Scores: </p>
      <p className="charStats">Equipment: </p>
      <p id="simple-modal-description">
      BIO COPY: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      </div>
      <Button size="small" color="primary" onClick={handleFlip}>
        Flip Card
      </Button>
    </div>
    <div style={modalStyle} className={modalClasses.paper}>
      <div className="note-side back">
    <h2 id="simple-modal-title">Backside Char Name</h2>
      <p className="charStats">Level: </p>
      <p className="charStats">Race: </p>
      <p className="charStats">Class: </p>
      <p className="charStats">Alignment: </p>
      <p className="charStats">Deity: </p>
      <p className="charStats">Proficiencies: </p>
      <p className="charStats">Ability Scores: </p>
      <p className="charStats">Equipment: </p>
      <p id="simple-modal-description">
      BIO COPY: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      </p>
    </div>
    <Button size="small" color="primary" onClick={handleFlip}>
        Flip Card
      </Button>
    </div>
  </div>

  );

  //end modal stuff


  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="D&D Avatar"
          height="180"
          image="https://www.seekpng.com/png/detail/156-1568612_dwarf-paladin-dnd-dwarf-dnd-characters-fantasy-characters.png"
          title="Char Name"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Char Name
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lvl 20 Dwarf Fighter // In Campaign
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
        {modalTab}
      </Modal>
      </CardActions>
    </Card>
  );
}
