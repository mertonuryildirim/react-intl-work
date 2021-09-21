import React , {useState} from "react"
import logo from './logo.svg';
import './App.css';
import {I18nProvider,LOCALES} from "./i18n"
import translate from "./i18n/translate"
import Report from "./Report";

function App() {
  const [locale,setLocale] = useState(LOCALES.TURKISH)
  return (
    <I18nProvider locale={locale}>
      <div className="App">
      <header className="App-header">
        {translate("hello")}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {translate("edit",{path : <u><i>src/App.js</i></u> })}
          <hr />
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {translate("learn",{degisken : <span style={{color:"red"}} >Mert</span>})}
          <hr />
          Learn React with <span style={{color :"red"}} >Mert</span>
        </a>
        <br />
        <Report />
        <br />
        <button onClick={()=> setLocale(LOCALES.ENGLISH)} >English</button>
        <button onClick={()=> setLocale(LOCALES.TURKISH)} >Turkish</button>
      </header>
    </div>
    </I18nProvider>
    
  );
}

export default App;
