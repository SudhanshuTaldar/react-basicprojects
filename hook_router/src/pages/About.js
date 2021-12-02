import React from 'react';
import {useHistory} from 'react-router';

//display location URL info
//display History to go back
function About()
{
    const history = useHistory(); 
   

    function goBackHandle(){
        history.goBack();
    }
   
    function onclickHandle(firstname,lastname){
       // history.push(`/${firstname  }`);
        //or
        history.push(`home/${firstname} ${lastname}`);
        //or
       // history.push(`contact/${lastname  }`);
    }

    return (
    <>
    <div>About</div>
   
    <button onClick={goBackHandle}>Go Back</button>
    &nbsp;
    <button onClick={()=>onclickHandle("hello world","bye bye")}>Push method</button>
   </>
    );
}

export default About;