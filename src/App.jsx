import { useState } from 'react';
import reactLogo from './assets/react.svg';
import Navbar from './components/Navbar';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar />
      <h1 className="text-orange-700">Blessed pillars foundation</h1>
    </div>
  );
}

export default App;
