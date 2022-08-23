import { FiInstagram } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import BodyBearLogo from '../../assets/bodybear-logo.svg';
import './styles.css';

function Development() {
  return (
    <section className="App">
      <h2>
        SUA <strong style={{ color: '#FDD14C' }}>NOVA</strong> LOJA DE
        SUPLEMENTOS!
      </h2>
      <img
        src={BodyBearLogo}
        alt="BodyBear - Sua nova loja de suplementos"
        id="logo"
      />
      <section className="info">
        <h3>
          Site em desenvolvimento
          <span>.</span>
          <span>.</span>
          <span>.</span>
        </h3>
        <p>Nos siga no Instagram.</p>
        <p className="button-legend">Entre em contato:</p>
        <form>
          <button
            type="button"
            className="instagram-button"
            onClick={() =>
              (window.location.href =
                'https://instagram.com/bodybearsuplementos')
            }
          >
            <FiInstagram className="instagram-icon" />
            bodybearsuplementos
          </button>
        </form>
        <p className="button-legend">ou</p>
        <form>
          <button
            type="button"
            className="whatsapp-button"
            onClick={() =>
              (window.location.href =
                'https://instagram.com/bodybearsuplementos')
            }
          >
            <FaWhatsapp className="whatsapp-icon" />
            Chame no whatsapp!
          </button>
        </form>
      </section>
    </section>
  );
}

export default Development;
