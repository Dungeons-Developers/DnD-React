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
  },
});

export function CharacterCard(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  let charactersHTML = [];

  for (let i = 0; i < props.characters.length; i++) {
    charactersHTML.push(<Grid item xs={6} md={4} lg={3} key={i}>
      <Card className={classes.root} key={i}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="D&D Avatar"
          height="180"
          image=''
          title={props.characters[i].name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.characters[i].name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {/* Lvl {props.characters[i].level}  */}
            {props.characters[i].race} {props.characters[i].class} ... In Campaign
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
      <CharacterShowEdit Character={props.characters[i]} />
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

const mapStateToProps = state => ({
  user: state.users.user,
  characters: state.users.characters,
})

export default connect(mapStateToProps)(CharacterCard);