import './App.css';
import { useState } from 'react';

function App() {
  const [blitzOn, setBlitzOn] = useState('blitz is on');
  const [viewMode, setViewMode] = useState('Landscape');
  const [isBlitzToggled, setIsBlitztoggled] = useState(false);
  const [isViewChangeToggled, setIsViewChangeToggled] = useState(false);

  const blitzOnOrOff = ()=>{
    setIsBlitztoggled(!isBlitzToggled);
    isBlitzToggled ? setBlitzOn('blitz is on') : setBlitzOn('blitz is off')
  }
  const landscapeOrPortrait = ()=>{
    setIsViewChangeToggled(!isViewChangeToggled);
    isViewChangeToggled ? setViewMode('Landscape') : setViewMode('Portrait')
  }
  
  return (
    <>
    <div className="App">
      <header className="App-header">
        <div className='form-div'>
          <label htmlFor='radio' >{blitzOn}</label>
          <input type='radio' id='radio' onClick={()=>blitzOnOrOff()} checked={isBlitzToggled} />
          <label htmlFor='radio' >change viewmode</label>
          <input type='checkbox' id='radio' onClick={()=>landscapeOrPortrait()} checked={isViewChangeToggled} />
          <p>current viewMode {viewMode}</p>
        </div>
      </header>
    </div>
    </>
  );
}

export default App;
