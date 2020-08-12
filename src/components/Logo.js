import React from 'react';

export default function Logo(props) {

  return (
    <img src="/assets/lightmode.svg" alt="logo" height={props.height ? props.height : 100}/>
  )
}