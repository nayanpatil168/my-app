import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("uppercase was clicked" + text)
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("converted to uppercase!", "success")
    }
    const handleLoClick = () => {
        // console.log("Lowercase was clicked" + text)
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("converted to lowercase!", "success")
    }
    const handleClearClick= () => {
        // console.log("uppercase was clicked" + text)
        let newText = ''
        setText(newText)
        props.showAlert("converted to clearText", "success")
    }

    const handleCopy= () => {
        navigator.clipboard.writeText(text)
        props.showAlert("converted to CopyText", "success")
    }

    const handleExtraSpaces= () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("converted to Extraspaces", "success")
    }
    const handleOnChange = (event) => {
        // console.log("onChange")
        setText(event.target.value);
    }
    const [text, setText] = useState('Enter text here2');
    return (
        <>
            <div className="container" style={{color: props.mode ==='dark'?'white':'#042743'}}>
                <h1 className='mb-2'>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode ==='dark'?'#13466e':'white', 
                    color: props.mode==='dark'?'white':'#042753'}} id="Mybox" rows="8" ></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to uppercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert to Lowercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>copyText</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>RemoveSpaces</button>
            </div>
            <div className="container my-3" style={{color: props.mode ==='dark'?'white':'#042743'}}>
                <h1>Your Text Summary</h1>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} charcters</p>
                <p>{0.008 * text.split(" ").length}Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Nothing to Preview"}</p>
            </div>
        </>
    )
}
