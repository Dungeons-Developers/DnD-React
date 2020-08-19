import React, {useEffect} from 'react';
import {connect} from 'react-redux';

//this page is a component that wraps body content of the page such that we can style the css and get the content to not overlap with header/footer
import theme from '../theme/theme';

function Main(props) {

  const {pageTheme} = props;

  const styles = {
    main: {
      display: 'flex',
      flex: 1,
    },
    theme: pageTheme === 'dark' ? theme.dark: theme.light
  }

  useEffect(() => {
    styles.theme = pageTheme === 'dark' ? theme.dark: theme.light;
  }, [pageTheme])


  return (
    <div className="main" style={{...styles.main, ...styles.theme.main}}>
      {props.children}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    pageTheme: state.theme.theme
  }
}

export default connect(mapStateToProps)(Main);