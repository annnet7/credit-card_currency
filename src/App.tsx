import React, {useState} from 'react';
import Card from './components/Card';


function App() {
  const [rotateCard, setRotateCard]=useState(false);
  return (
    <div className="App">
      <button onClick={() => setRotateCard(!rotateCard)}>Turn!</button>
      <Card rotateCard={rotateCard}/>
    </div>
  );
}

export default App;
