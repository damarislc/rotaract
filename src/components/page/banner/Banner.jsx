import './Banner.css';
import Img1 from '../../../../public/Imagen1.png'
import Group from '../../../../public/Group.png'
import vector1 from '../../../../public/vector1.png'

const Banner = () => {
  return (
    <div className="banner">
      <div className='leftSide'>
        <img className="group" src={Group} alt="" />
        <img className="img1" src={Img1} alt="" />
      </div>
      <div className='rightSide'>
        <h1>Agentes de cambio que</h1>
        <div className='tittleRustic'>
          <h2>IMPULSAN UN</h2>
          <h2>IMPACTO SOCIAL</h2>
        </div>

        <img className="vector1" src={vector1} alt="" />
        <p> Los clubes Rotaract ofrecen a personas de 18 a 30 años de edad la oportunidad de intercambiar ideas con los líderes de la comunidad, adquirir habilidades profesionales y de liderazgo y, sobre todo, servir y divertirse a la vez.
        </p>
        <button className='buttonSumate'>Sumate</button>

      </div>

    </div>
  );
};

export default Banner;