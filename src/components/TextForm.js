import React, {useState} from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
 const  handleUpClick = ()=>{
  // console.log("Uppercase was clicked" + text);
  let newText = text.toUpperCase();
  setText(newText);
 }
 const  handleLoClick = ()=>{
  // console.log("Uppercase was clicked" + text);
  let newText = text.toLowerCase();
  setText(newText);
 }
 const  handleOnChange = (event)=>{
  // console.log("on change");
  setText(event.target.value);
 }

  const [text,setText] = useState('');

  return (
    <>
    <div className="container" style={{color: props.mode === 'dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
  <div className="mb-3">
    <textarea
      className="form-control"
      value={text}
      onChange={handleOnChange}
      style={{backgroundColor: props.mode === 'dark'?'rgb(87 102 134)':'white' , color: props.mode === 'dark'?'white':'black'}}
      placeholder='Enter the text'
      id="myBox"
      rows={8}
    />
  </div>
<button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCae</button>
<button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>

    </div>
    <div className="container my-3" style={{color: props.mode === 'dark'?'white':'black'}}>
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
