import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("uppercase was clicked" + text)
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleDownClick = ()=>{
        let newtext = text.toLowerCase();
        setText(newtext);
    }

    const handleOnChange = (event)=>{
        console.log('on change');
        setText(event.target.value);
    }

    

    const [text, setText] = useState(''); 

    return (
       <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
           <div className = 'mb-3'>
               <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
           </div>
           <button className="btn btn-primary" onClick={handleUpClick}>convert to uppercase</button>
           <button className="btn btn-success" onClick={handleDownClick}>convert to lowercase</button>
           <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
               <h1>Your Text Summery</h1>
               <p>{text.split(" ").length} words and {text.length} characters</p>
               <h2>Preview</h2>
               <p>{text}</p>
           </div>

       </div>
       
    )
}