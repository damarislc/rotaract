import { NavLink } from "react-router-dom";
import "./Index.css";
import Img1 from "/Imagen1.png";
import Star from "/Star.png";
import vector1 from "/vector1.png";

const Index = () => {
  return (
    <>
      <div className="banner-index">
        <div className="leftSide">
          <img className="star" src={Star} alt="" />
          <img className="img1" src={Img1} alt="" />
        </div>
        <div className="rightSide">
          <h1>Agentes de cambio que</h1>
          <div className="tittleRustic">
            <h2>IMPULSAN UN</h2>
            <h2>IMPACTO SOCIAL</h2>
          </div>

          <img className="vector1" src={vector1} alt="" />
          <p>
            {" "}
            Los clubes Rotaract ofrecen a personas de 18 a 30 años de edad la
            oportunidad de intercambiar ideas con los líderes de la comunidad,
            adquirir habilidades profesionales y de liderazgo y, sobre todo,
            servir y divertirse a la vez.
          </p>

          <NavLink to="/contact">
            <button className="buttonSumate">Sumate</button>
          </NavLink>
        </div>
      </div>
      <div className="container-mision">
        <div className="mision">
          <h2>Mision</h2>
          <p>
            Ser líderes que trabajan en equipo para transformar y potenciar el
            desarrollo de las comunidades.
          </p>
        </div>
        <div className="proposito">
          <h2>Proposito</h2>
          <p>
            El propósito de Rotaract es ofrecer una oportunidad a hombre y
            mujeres jóvenes para aumentar los conocimientos y condiciones que
            les ayuden en su desarrollo personal y los impulsen a buscar una
            solución para las necesidades físicas y sociales de sus comunidades
          </p>
        </div>
        <div className="vision">
          <h2>Vision</h2>
          <p>Agentes de cambio que impulsan un impacto social</p>
        </div>
      </div>
    </>
  );
};

export default Index;
