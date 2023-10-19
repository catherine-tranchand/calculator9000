import React, { useState } from 'react';
import Wrapper from './components/Wrapper.jsx';
import Screen from './components/Screen.jsx';
import ButtonBox from './components/ButtonBox.jsx';
import Button from './components/Button.jsx';

import './App.css';

const btnValues = [
  ["C", "+", "%","/"],
  [7, 8, 9, "*"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];

function App() {
  const [displayValue, setDisplayValue] = useState(''); // Define and manage the display value

  return (
    <Wrapper>
      <Screen displayValue={displayValue} />
      <ButtonBox>
        {btnValues.flat().map((btn, i) => (
          <Button
            key={i}
            className={btn === "=" ? "equals" : ""}
            value={btn}
            onClick={() => {
              // Update the display value based on the button clicked
              if (btn === "=") {
                // Handle the equal button logic
                try {
                  const result = eval(displayValue);
                  setDisplayValue(result.toString());
                } catch (error) {
                  setDisplayValue('Error');
                }
              } else if (btn === "C") {
                // Handle clear button logic
                setDisplayValue('');
              } else {
                // Update the display value with the clicked button
                setDisplayValue(displayValue + btn);
              }
            }}
          />
        ))}
      </ButtonBox>
    </Wrapper>
  );
}

export default App;

