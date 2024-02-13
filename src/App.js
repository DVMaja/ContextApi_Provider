import './App.css';
import Kategoriak from './komponensek/Kategoriak';
import { adatok } from "./adatok/adatok.js";
import Kivalasztott from './komponensek/Kivalasztott';
import { KivalasztProvider } from "./context/KivalasztContext.js";

function App() {

  return (
    <div className="App">
      <header className="App-header">React Context Api</header>

      <KivalasztProvider>
        <section>
          <h5 className="pt-5">Kiválasztott virágok</h5>
          <Kivalasztott />
        </section>
        <article>
          <Kategoriak lista={adatok} />
        </article>
      </KivalasztProvider>
    </div>
  );
}

export default App;
