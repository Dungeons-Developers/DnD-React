import React, { useEffect } from 'react';
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
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';
import CharacterCard from '../Characters/CharacterCard';

import { getCharacters } from '../../store/slices/character-slice';

import theme from '../../theme/theme';

//card styles
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export function CharacterDisplay(props) {
  const { getCharacters, user, pageTheme } = props;

  const style = {
    theme: pageTheme === 'dark' ? theme.dark : theme.light,
    color: {
      color: 'inherit',
      underlineNone: 'none',
    },
    createCard: {
      height: 300,
    }
  }

  useEffect(() => {
    getCharacters(user);
  }, [getCharacters, user]);

  const classes = useStyles();

  let charactersHTML = [];

  //push character create form as card
  charactersHTML.push(<Grid item xs={4} md={3} lg={2} key="characterCreateFormGrid">
    <Card className={classes.root} key="characterCreateFormCard" style={{ ...style.theme.accent, ...style.color, ...style.createCard }} height="300">
      <CardActionArea>
        <CardMedia
          component="img"
          alt="D&D Avatar"
          height="130"
          image='https://d3n8a8pro7vhmx.cloudfront.net/sdleadership/pages/259/attachments/original/1404272641/NEW-2.gif?1404272641'
          title=''
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            +
        </Typography>
          <Typography variant="body2" color="textSecondary" component="p" style={style.color}>
            Start here!
         <br />

          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>

        <Link to="/create-character" style={style.color} className="MuiLink-underlineNone" underline="none" text-decoration="none">
          <Button size="small" color="primary" style={style.color}>
            Create Character
          </Button>
        </Link>

      </CardActions>
    </Card>
  </Grid>
  );

  //populate existing character cards
  for (let i = 0; i < props.characters.length; i++) {
    charactersHTML.push(<Grid item xs={4} md={3} lg={2} key={i}>
      <CharacterCard character={props.characters[i]} edit={true} delete={true} />
    </Grid>);
  }

  return (
    <>
      <div className="CharactersGrid">
        <Box mt="1rem">
          <Grid container spacing={3} direction='row'>
            {charactersHTML}
          </Grid>
        </Box>
      </div>
    </>
  );
}

const mapDispatchToProps = { getCharacters };

const mapStateToProps = state => ({
  user: state.users.username,
  characters: state.characters.allCharacters,
  pageTheme: state.theme.theme
})

export default connect(mapStateToProps, mapDispatchToProps)(CharacterDisplay);