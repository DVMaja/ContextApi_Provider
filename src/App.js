import logo from './logo.svg';
import './App.css';
import Kategoriak from './komponensek/Kategoriak';
import { adatok } from "./adatok/adatok.js";
import { useState } from 'react';
import Kivalasztott from './komponensek/Kivalasztott';

function App() {
  const [kivalasztottLista, setKivalasztottLista] = useState([]);

  function kivalaszt(ertek) {
    const a = kivalasztottLista;
    a.push(ertek);
    setKivalasztottLista([...a]);

  }

  return (
    <div className="App">
      <header className="App-header">React Context Api</header>

      <section><h5 className='pt-5'>Kiválasztott virágok</h5>
        <Kivalasztott kivalasztottLista={kivalasztottLista} />

      </section>
      <article>
        <Kategoriak lista={adatok} kivalaszt={kivalaszt} />
      </article>
    </div>
  );
}

export default App;
