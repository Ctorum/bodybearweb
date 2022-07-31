import { FiInstagram } from 'react-icons/fi';
import BodyBearLogo from './assets/bodybear-logo.svg';
import './App.css';

function App() {
  return (
    <section className="App">
      <h2>SUA NOVA LOJA DE SUPLEMENTOS</h2>
      <img
        src={BodyBearLogo}
        alt="BodyBear - Sua nova loja de suplementos"
        id="logo"
      />
      <h3>Site em desenvolvimento...</h3>
      <p>Nos siga no Instagram.</p>
      <form>
        <button type="button" className="instagram-button">
          <FiInstagram className="instagram-icon" />
          @bodybearsuplementos
        </button>
      </form>
    </section>
  );
}

export default App;
