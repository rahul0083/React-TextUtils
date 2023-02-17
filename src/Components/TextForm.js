import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick= () =>{
       // console.log("Upper Case was clicked" + text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase","success")
    }
    const handleOnChange=(event) =>{
        setText(event.target.value);
       
    }
const [text, setText] = useState('');

  return (
   <>
<div className="container" style={{color:props.mode==='dark'?'white':'black'}}> 
    <h2 >{props.heading}</h2>
    <div className="mb-3"> 
  <textarea className="form-control" id="myBox" value={text}  onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} rows="8" > </textarea>
  </div>
  <button className="btn btn-primary" onClick={handleUpClick}>CONVERT TO UPPERCASE</button>
</div>
<div className="container my-3 " style={{color:props.mode==='dark'?'white':'black'}}>
    <h1>Your text summary.</h1>
    <p>
        {text.split(" ").length} words & {text.length} characters
    </p>
    <h3>Preview</h3>
    <p>{text.length>0?text :"Enter something in the textbox Above"}</p>
</div>
  </>  
  )
}
