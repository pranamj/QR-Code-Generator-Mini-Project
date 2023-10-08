import { useState } from 'react';

function App() {
  const [qr, setQRcode] = useState(0);
  const [source, setSource] = useState(`./assets/QR-0.png`);

  function changeQRcode() {
    const newQR = Math.floor(Math.random() *3); // Generate a random number between 0 and 9
    setQRcode(newQR);
    setSource(`./assets/QR-0${newQR}.png`);
  }

  return (
    <div className="App">
      <h1>QR Code</h1>
      <img src={source} alt={`QR Code -0${qr}`} />

      <button onClick={changeQRcode}>Generate New</button>
    </div>
  );
}

export default App;

