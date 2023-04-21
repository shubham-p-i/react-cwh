import React,{useState} from 'react'

export default function TextForm(prop) {
    const [text, setText] = useState('');

    const handleTextChange = (e) =>{
        setText(e.target.value);
    }

    const handleUpperCase = () =>{
        setText(text.toUpperCase())
    }

  return (
    <>
          <h3>{prop.heading}</h3>
          <div className="mb-3">
              <textarea className="form-control" value={text} placeholder='Enter text here...' name='textarea' id="myForm" rows="3" onChange={handleTextChange}></textarea>
          </div>
          <button className='btn btn-primary' onClick={handleUpperCase}>Upper Case</button>
    </>
  )
}
