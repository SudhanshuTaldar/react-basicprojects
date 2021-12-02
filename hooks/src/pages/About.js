import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';

//display location URL info
//display History to go back
function About()
{
    const location = useLocation();
    const history = useHistory(); 
    console.log(location);

    function goBackHandle(){
        history.goBack();
    }
   
    function onclickHandle(firstname,lastname){
       // history.push(`/${firstname  }`);
        //or
        history.push(`contact/${firstname} ${lastname}`);
        //or
       // history.push(`contact/${lastname  }`);
    }

    return (
    <>
    <div>About</div>
    <div>Location = {location.pathname}  </div>
    <div>From= {location.state.from} </div>
    <button onClick={goBackHandle}>Go Back</button>
    &nbsp;
    <button onClick={()=>onclickHandle("hello world","bye bye")}>Push method</button>
   </>
    );
}

export default About;
