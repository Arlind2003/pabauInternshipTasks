import logo from './logo.svg';
import './App.css';
import OptionContainer from "./Components/OptionContainer";
import {useState} from "react";
import SelectedOption from "./Components/SelectedOption";
function App() {
  const [step, setStep] = useState(0);
  const [selectedStep, setSelectedStep] = useState(null);
  const steps = [<>
      <OptionContainer nextPage={nextPage}/>
      <div className="additional-information">
          <h5>Not sure about consultation type? Please, call <span style={{color:"blue"}}>0203 7959063</span></h5>
      </div>
  </>, selectedStep]

    function previousPage(){
      setStep(0);
    }
  function nextPage(name){
      setStep(1);
      setSelectedStep(<SelectedOption name={name} previousPage={previousPage}/>);
  }
    return (
    <div className="container-all">
      <div className="title-main-container">
         <h2>Choose Service</h2>
         <h4 style={{color:"rgba(0,0,0,0.6)"}}>Step {step+1}/2</h4>
      </div>
      <div className="main-container">
          {steps[step]}
      </div>
        <div className="footer-container">
            <p>Powered by</p>
            <img className="company-logo" src="https://camo.githubusercontent.com/ac89bf09db8ab8f4f5da843612540495d14b5b8209cb74231eea580c06eb9eb1/68747470733a2f2f7777772e70616261752e636f6d2f77702d636f6e74656e742f75706c6f6164732f656c656d656e746f722f7468756d62732f646f776e6c6f61642d70713366736e6169746779796c7572626672797a6967686d34367939626535386c6f796d747334656f6b2e706e67"/>
            <p>Pabau</p>
        </div>
    </div>
  );
}

export default App;
