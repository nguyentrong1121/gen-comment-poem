import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";

function App() {
    const [lucky, setLucky] = useState(9)
    const [tag, setTag] = useState('')
    const [poemText, setPoemText] = useState('')
    const [finalText, setFinalText] = useState('')

    const handleChangeLucky = (e) => {
        setLucky(e.target.value)
    }
    const handleChangePoem = (e) => {
        setPoemText(e.target.value)
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(finalText)
    }

    useEffect(()=>{
        const firstPart = poemText.substring(0,  poemText.indexOf('Bài Thơ:'))
        const secondPart = poemText.substring(poemText.indexOf('Bài Thơ:'))
        setFinalText( '(1) ' + firstPart + '(2) '+ secondPart + '\n' + '(3) SMM: '+ lucky + '. ' + tag)
    },[poemText, lucky, tag])

  return (
    <div className="App">
        <label htmlFor="fname">Số may mắn:</label>
        <input value={lucky} onChange={handleChangeLucky}/>
        <br/>
        <label htmlFor="fname">Tag:</label>
        <input value={tag} onChange={(e)=>setTag(e.target.value)}/>
        <br/>
        <div style={{display: "flex", justifyContent: 'center', alignItems: 'center'}}>
            <textarea style={{marginTop: 20, height: 500, width: 400}}  value={poemText} onChange={handleChangePoem}/>
            <textarea style={{marginTop: 20, height: 500, width: 400}} disabled value={finalText}/>
            <button onClick={handleCopy}>
                copy
            </button>
        </div>
    </div>
  );
}

export default App;
