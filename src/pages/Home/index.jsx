import React from "react";
import { FaUser, FaShoppingCart } from "react-icons/fa";

import BodyBearLogo from "../../assets/bodybear-logo.svg";
import Banner from "../../assets/banner.jpg";
import Creatina from "../../assets/creatina-bodybear.jpg";
import HiperCaloricos from "../../assets/hipercaloricos-bodybear.jpg";
import PreTreino from "../../assets/pre-treino-bodybear.jpg";
import Whey from "../../assets/whey-nutraforce.png";
import PaymentType from "../../assets/forma-pagamento.png";
import "../../utils/reset.css";
import "./styles.css";
import Product from "../../components/Product";

function Home() {
  return (
    <div className="container">
      <section className="header">
        <div className="logo">
          <img src={BodyBearLogo} alt="bodybear-logo" id="logo" />
          <h2>BodyBear Suplementos</h2>
        </div>
        <form>
          <button type="button" className="button">
            <FaUser id="user" />
            <span>Entrar</span>
          </button>
          <button type="button" className="button">
            <FaShoppingCart id="cart" />
            <span>Carrinho</span>
          </button>
        </form>
      </section>
      <section className="image-ad">
        <img src={Banner} alt="banner" id="banner" />
      </section>
      <section className="info">
        <div>
          <p className="title">FRETE GRÁTIS</p>
          <p className="text">PARA SÃO PAULO ACIMA DE R$160</p>
        </div>
        <div>
          <p className="title">COMPRE EM ATÉ</p>
          <p className="text">6X SEM JUROS</p>
        </div>
        <div>
          <p className="title">ENVIANDO</p>
          <p className="text">ENTREGA RÁPIDA</p>
        </div>
      </section>
      <section className="sale-off">
        <div>
          <img src={Creatina} alt="Creatina Bodybear" />
        </div>
        <div className="margin">
          <img src={HiperCaloricos} alt="Creatina Bodybear" />
        </div>
        <div>
          <img src={PreTreino} alt="Creatina Bodybear" />
        </div>
      </section>
      <section className="products">
        <p id="title">CONFIRA ABAIXO NOSSOS PRODUTOS</p>
        <div className="products-sale">
          {Array(8)
            .fill()
            .map((_i, i) => {
              return (
                <Product
                  img={Whey}
                  alt="Whey nutraforce"
                  title="100% WHEY PROTEIN CONCENTRADO 1KG"
                  realValue="100,00"
                  description="2X DE R$50,00 SEM JUROS"
                  value="95,00"
                  key={i}
                />
              );
            })}
        </div>
      </section>
      {/* <section className="newsletter"></section> */}
      <section className="footer">
        <div className="left">
          <p className="title">Formas de Pagamento</p>
          <img src={PaymentType} alt="Formas de Pagamento" />
        </div>
        <div className="right">
          <p className="title">Fale Conosco</p>
          <p>Televendas: (11) 3031-2274</p>
          <p>SAC: sac@lojanutrifit.com.br</p>
        </div>
      </section>
    </div>
  );
}

export default Home;
