import "./App.css";
import { useState } from "react";

function App() {
  const [blitzOn, setBlitzOn] = useState("blitz is on");
  const [date, setDate] = useState(new Date());
  const [selectedStyle, setSelectedStyle] = useState("");
  const [isAdultSelected, setIsAdultSelected] = useState(true);
  const [isJuniorSelected, setIsJuniorSelected] = useState(false);
  const [isKidSelected, setIsKidSelected] = useState(false);
  const [isSenjorSelected, setIsSenjorSelected] = useState(false);
  const [isStudentSelected, setIsstudentSelected] = useState(false);

  const [isBlitzToggled, setIsBlitztoggled] = useState(true);
  const [isFirstclassToggled, setIsFirstclassToggled] = useState(true);
  const [isSecondclassToggled, setIsSecondclassToggled] = useState(false);
  const [isLandscapeToggled, setIsLandscapeToggled] = useState(true);
  const [isPortraitToggled, setIsPortraitToggled] = useState(false);
  const [isMonthlyToggled, setIsMonthlyToggled] = useState(true);
  const [isYearlyToggled, setIsYearlyToggled] = useState(false);

  const priceObjectsGA = [
    {label: "Erwachsene 25-64/65 Jahre",        priceMntCls1: 545, priceMntCls2: 340, priceYearCls1: 6300, priceYearCls2: 2860},
    {label: "Senior ab 64/65 Jahre",            priceMntCls1: 430, priceMntCls2: 240, priceYearCls1: 4840, priceYearCls2: 2880},
    {label: "Junior 16-25 Jahre",               priceMntCls1: 405, priceMntCls2: 245, priceYearCls1: 4520, priceYearCls2: 2650},
    {label: "Junior Studierende 25-30 Jahre",   priceMntCls1: 405, priceMntCls2: 245, priceYearCls1: 4520, priceYearCls2: 2650},
    {label: "Reisende mit Behinderung",         priceMntCls1: 355, priceMntCls2: 225, priceYearCls1: 4050, priceYearCls2: 2480},
    {label: "Kind 6-16 Jahre",                  priceMntCls1: 250, priceMntCls2: 160, priceYearCls1: 2760, priceYearCls2: 1645},
    {label: "Duo Partner",                      priceMntCls1: 380, priceMntCls2: 245, priceYearCls1: 4340, priceYearCls2: 2700},
    {label: "Familia Kind 6-16 Jahre",          priceMntCls1: 250, priceMntCls2: 75,  priceYearCls1: 2760, priceYearCls2: 680},
    {label: "Familia Jugend 16-25 Jahre",       priceMntCls1: 255, priceMntCls2: 95,  priceYearCls1: 2790, priceYearCls2: 925},
    {label: "Familia Partner",                  priceMntCls1: 310, priceMntCls2: 200, priceYearCls1: 3520, priceYearCls2: 2180},
];

  const blitzOnOrOff = () => {
    setIsBlitztoggled(!isBlitzToggled);
    isBlitzToggled ? setBlitzOn("blitz is off") : setBlitzOn("blitz is on");
  };
  const onLandscapeClick = () => {
    if (!isLandscapeToggled){
      setIsLandscapeToggled(!isLandscapeToggled);
      setIsPortraitToggled(!isPortraitToggled);
    }
  };
  const onPortraitClick = () => {
    if (!isPortraitToggled){
      setIsPortraitToggled(!isPortraitToggled);
      setIsLandscapeToggled(!isLandscapeToggled)
    }
  };
  const onMonthlyClick = () => {
    if(!isMonthlyToggled){
      setIsYearlyToggled(!isYearlyToggled);
      setIsMonthlyToggled(!isMonthlyToggled);
    }
  };

  const onYearlyClick = () => {
    if(!isYearlyToggled){
      setIsYearlyToggled(!isYearlyToggled);
      setIsMonthlyToggled(!isMonthlyToggled);
    }
  };
  const onFirstclassClick = () => {
    if(!isFirstclassToggled){
      setIsFirstclassToggled(!isFirstclassToggled);
      setIsSecondclassToggled(!isSecondclassToggled);
    }
  };
  const onSecondclassClick = () => {
    if(!isSecondclassToggled){
      setIsFirstclassToggled(!isFirstclassToggled);
      setIsSecondclassToggled(!isSecondclassToggled);
    }
  };
  
  
  return (
    <>
      <div className="App">
        <header className="App-header">
          <div className="container">
            <h1>Aufgaben</h1>
            <div className="form-div">
              <p>Aufgabe 1</p>
              <label
                htmlFor="flash"
                className="radio-group "
              >
                {blitzOn}
                <input
                  type="radio"
                  id="flash"
                  onClick={() => blitzOnOrOff()}
                  checked={isBlitzToggled}
                />
              </label>
            </div>
            <div className="form-div">
              <p>Aufgabe 2</p>
              <label
                htmlFor="landscape"
                className="radio-group"
              >
                Landscape
                <input
                  type="radio"
                  id="landscape"
                  onClick={() => onLandscapeClick()}
                  checked={isLandscapeToggled}
                />
              </label>
              <label
                htmlFor="portrait"
                className="radio-group"
              >
                Portrait
                <input
                  type="radio"
                  id="portrait"
                  onClick={() => onPortraitClick()}
                  checked={isPortraitToggled}
                />
              </label>
            </div>
            <div className="container">
              <h2>Abos</h2>
              <div className="form-div">
                <label htmlFor="date">Date</label>
                <input
                  type="date"
                  name="date"
                  id="date"
                  value={date}
                  onInput={(e) => setDate(e.target.value)}
                />
                <label htmlFor="month" className="radio-group">
                  Monatliche Bezahlung
                  <input
                    type="radio"
                    name="month"
                    id="month"
                    checked={isMonthlyToggled}
                    onClick={() => onMonthlyClick()}
                  />
                </label>
                <label htmlFor="year" className="radio-group">
                  Jährliche Bezahlung
                  <input
                    type="radio"
                    name="year"
                    id="year"
                    checked={isYearlyToggled}
                    onClick={() => onYearlyClick()}
                  />
                </label>
                <label htmlFor="firstclass" className="radio-group">
                  Erste Klasse
                  <input type="radio" name="firstclass" id="firstclass" checked={isFirstclassToggled} onClick={()=>onFirstclassClick()} />
                </label>
                <label htmlFor="secondclass" className="radio-group">
                  Erste Klasse
                  <input type="radio" name="secondclass" id="secondclass" checked={isSecondclassToggled} onClick={()=>onSecondclassClick()} />
                </label>
                <select name="category" id="category">
                  
                </select>
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
}

export default App;
