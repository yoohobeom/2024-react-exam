import React, { useState } from 'react';


function App() {
  const [num, setNum] = useState(0);
  
  const onBtnIncreaseClicked = () => {
    setNum(num + 1);
  }

  const onBtnDownClicked = () => {
    setNum(num - 1);
  }

  return (
    <>
      NUM :{num}
      <br/>
      <button onClick={onBtnIncreaseClicked}>+1</button> 
      <button onClick={onBtnDownClicked}>-1</button>
      <button onClick={() => setNum(num + 10)}>+10</button>
      <button onClick={() => setNum(num - 10)}>-10</button>
    </>
  );
}

export default App;
