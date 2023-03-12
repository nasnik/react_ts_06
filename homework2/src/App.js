import './App.css';
import {useState} from "react";
import Display from "./Display";
import Button from "./Button";


function App() {

  const [number, setNumber] = useState(0);
  const handleIncrease = () =>setNumber(number + 1);
  const handleDecrease = () =>setNumber(number - 1);
  const resetNumber = () =>setNumber(0);

  return (
      <div className="App">
        <Display number={number} setNumber={setNumber}/>
        <Button onClickHandler={handleDecrease} text="-1" />
        <Button onClickHandler={resetNumber} text="Reset" />
        <Button onClickHandler={handleIncrease} text="+1" />
      </div>
  );
}
export default App;
