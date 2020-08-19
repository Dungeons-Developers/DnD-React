import React, {useEffect} from 'react';
import {connect} from 'react-redux';


function Logo(props) {

  const {pageTheme} = props;

  return (
    <img src={`/assets/logo${pageTheme}mode.svg`} alt="logo" height={props.height ? props.height : 100}/>
  )
}

const mapStateToProps = state => {
  return {
    pageTheme: state.theme.theme
  }
}

export default connect(mapStateToProps)(Logo);