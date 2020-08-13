import React, {useEffect} from 'react';

import io from 'socket.io-client';

function CampaignPage() {
  
  useEffect(() => {
    const socket = io.connect('http://localhost:4000');
    // const socket = io.connect('https://dnd-api-server.herokuapp.com/');

    // socket.emit('join', props.campaign._id);

    socket.emit('join', 'special-room');

  }, []);


  return (
    <>
    <h1>Campaign Page</h1>
    </>
  )
}

export default CampaignPage;