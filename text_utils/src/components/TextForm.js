import React, {useState} from 'react'


export default function TextForm(props) {

  const [text, setText] = useState('Enter Text Here');

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      console.log('Text copied to clipboard');
    }).catch(err => {
      console.error('Failed to copy text: ', err);
    });
  };

  const handleOnChange = (event) => {
    console.log("On Change called");
    setText(event.target.value)
  }

  const handleUpClick = () => {
    console.log("Upper Case button was clicked");
    setText(text.toUpperCase());
    props.showAlert("Converted to Upper Case!", "success");
  }

  const handleLowClick = () => {
    console.log("Lower Case button Clicked");
    setText(text.toLowerCase());
    props.showAlert("Converted to Lower Case!", "success");
  }

  const handleCopy = () => {
    console.log("Copy button Clicked");
    copyToClipboard(text);
    props.showAlert("Copied to clipboard!", "success");
  };

  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  const reverseText = () => {
    console.log("Reverse Text Clicked");
    setText(text.split(' ').reverse().join(' '));
  }

  const deleteText = () => {
    console.log("Delete Text Clicked");
    setText("Enter Text Here")
  }


  // text = "new text updated" WRONG WAY TO CHANGE THE STATE
  // setText("new text updated"); Correct WAY TO CHANGE THE STATE

  return (
    <>
      <div className='container'>
        <h1>{props.heading}</h1>
          <div className="my-3">
            <textarea className="form-control" value = {text} onChange = {handleOnChange} id="myBox" rows="10"></textarea>
          </div>
        <button className="btn btn-primary my-2 mx-2" onClick={handleUpClick}>UpperCase</button>
        <button className="btn btn-primary my-2 mx-2" onClick={handleLowClick}>LowerCase</button>
        <button className="btn btn-primary my-2 mx-2" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary my-2 mx-2" onClick={handleExtraSpace}>Remove Extra Space</button>
        <button className="btn btn-primary my-2 mx-2" onClick={reverseText}>Reverse Text</button>
        <button className="btn btn-primary my-2 mx-2" onClick={deleteText}>Delete Text</button>
        
      </div>

      <div className="container my-3">
        <h2>Your Text Summary</h2>
        <p>Words : {text.split(" ").length}, Characters: {text.length} </p>
        <p>Time to read : {0.008 * text.split(" ").length} minutes</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter your text to preview here"}</p>
      </div>
    </>
  )
}
