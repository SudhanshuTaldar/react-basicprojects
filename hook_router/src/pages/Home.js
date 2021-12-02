import React from 'react';
import {useLocation} from 'react-router';
function Home()
{
    const location=useLocation();
        
    console.log(location);
    
    return (
      <>
        <div>Home</div>
        <div>Location = {location.pathname}  </div>
        <div>From= {location.state.from} </div>
        </>
        );
}

export default Home;