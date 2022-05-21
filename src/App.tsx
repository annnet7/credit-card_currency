import React, {useState} from 'react';
import Card from './components/Card';


function App() {
  const [rotateCard, setRotateCard]=useState(false);
  return (
    <div className="App">
      
      <Card rotateCard={rotateCard}
      cardSum = {50000.01}
      currency = {'USD'}
      cardNumString = {'xxxx xxxx xxxx xxxx'}
      cardPeriod = {'03/22'}
      paySysLogo = {'https://logos-world.net/wp-content/uploads/2020/09/Mastercard-Logo.png'}
      paySysName = {'MasterCard'}
      />

    <button onClick={() => setRotateCard(!rotateCard)}>Turn!</button>
    </div>
  );
}

export default App;
