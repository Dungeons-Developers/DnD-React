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
import Modal from '@material-ui/core/Modal';
import CharacterShowEdit from './CharacterShowEdit';
import Box from '@material-ui/core/Box';

import theme from '../../theme/theme'


//card styles
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    maxHeight: 300,
    minHeight: 300,
  },
});

function CharacterCard(props) {

  const { pageTheme } = props;

  const style = {
    theme: pageTheme === 'dark' ? theme.dark : theme.light,
    color: {
      color: 'inherit'
    }
  }

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
      <div className="CharacterCard" style={{ ...props.style }}>
        <Card className={classes.root} style={{ ...style.theme.accent, ...style.color }}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="D&D Avatar"
              height="130"
              image={`https://source.unsplash.com/300x300/?${props.character.class}`}
              title={props.character.name}
            />
            <CardContent >
              <Typography gutterBottom variant="h6" component="h3">
                {props.character.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p" style={style.color}>
                Lvl {props.character.level}&nbsp;
            {props.character.race}&nbsp;
            {props.character.class}<br />
                {/* {props.character.isInCampaign ? "In Campaign" : "Not in Campaign"} */}

              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>

            <Button size="small" color="primary" onClick={handleOpen} style={style.color}>
              Character Details
      </Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
            >
              <Box my="1rem">
                <CharacterShowEdit Character={props.character} edit={props.edit} delete={props.delete} />
              </Box>
            </Modal>
          </CardActions>
        </Card>
      </div>
    </>
  );
}

const mapStateToProps = state => {
  return {
    pageTheme: state.theme.theme
  }
}

export default connect(mapStateToProps)(CharacterCard);