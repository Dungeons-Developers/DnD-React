import React from 'react';

//this page is a component that wraps body content of the page such that we can style the css and get the content to not overlap with header/footer


export default function Main(props) {

  return (
    <div className="main">
      {props.children}
    </div>
  )
}