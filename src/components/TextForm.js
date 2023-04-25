import React,{useState} from 'react'

export default function TextForm(prop) {
    const [text, setText] = useState('');
    const [url, setUrl] = useState('');

    const handleTextChange = (e) =>{
        setText(e.target.value);
        let q = e.target.value;
        setUrl('http://google.com/search?q='+q);
    }

    const handleUpperCase = () =>{
        setText(text.toUpperCase())
        prop.showToast("Text has been changed to Upper case !","success");
      }
      
      const handleLowerCase = () => {
        setText(text.toLowerCase())
        prop.showToast("Text has been changed to Lower case !","warn");
      }
      
      const handleClear = () => {
        setText('');
        prop.showToast("Text has been Cleared !","error");
      }

    const handleCopyClipboard = () => {
      navigator.clipboard.writeText(text);
      prop.showToast("Text has been copied to clipboard !","success");
    }
    
    const handleRemoveSpaces = () => {
      setText(text.split(/[ ]+/).join(" "));
      prop.showToast("Spaces between text has been removed !","success");
    }

    

  return (
    <>
      <div className='container'>
          <h3 style={{color : prop.mode === "light" ? "black" : "white"}}>{prop.heading}</h3>
          <div className="mb-3">
              <textarea className="form-control" value={text} style={{backgroundColor : prop.mode === "light" ? "white" : "grey",color : prop.mode === "dark" ? "white" : "black"}} placeholder='Enter text here...' name='textarea' id="myForm" rows="3" onChange={handleTextChange}></textarea>
          </div>
          <button className='btn btn-primary mx-2' onClick={handleUpperCase}>Upper Case</button>
          <button className='btn btn-primary mx-2' onClick={handleLowerCase}>Lower Case</button>
          <button className='btn btn-primary mx-2' onClick={handleClear}>Clear</button>
          <button className='btn btn-primary mx-2' onClick={handleCopyClipboard}>Copy</button>
          <button className='btn btn-primary mx-2' onClick={handleRemoveSpaces}>Remove Spaces</button>
          <a href={url} target='_blank'><button className='btn btn-primary mx-2'>Search on Google</button></a>
      </div>
      <div className="container my-4" style={{color : prop.mode === "light" ? "black" : "white"}}>
          <h5>Summary of Text</h5>
          <p>Your text has {text.length} characters and {text.split(" ").length} words</p>
          <p>{0.008 * text.split(" ").length} Min to read text</p>
      </div>
    </>
  )
}
