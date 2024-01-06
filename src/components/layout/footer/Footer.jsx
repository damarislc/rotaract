import "./Footer.css";
import { NavLink } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import { useMediaQuery } from "react-responsive";

const Footer = () => {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 768px)" });
  const isMediumScreen = useMediaQuery({
    query: "(min-width: 769px) and (max-width: 1024px)",
  });
  const isLargeScreen = useMediaQuery({ query: "(min-width: 1025px)" });
  return (
    <div className="div-footer">
      {isLargeScreen && (
        <>
          <div className="whatsapp">
            <a href="https://chat.whatsapp.com/Kiy7QqXPLDF9fCLmDnV0DT">
              <svg
                width="103"
                height="103"
                viewBox="0 0 103 103"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="51.5" cy="51.5" r="51.5" fill="#009999" />
                <path
                  d="M70.0063 32.8888C67.5997 30.4578 64.7332 28.5304 61.5739 27.2189C58.4146 25.9074 55.0258 25.2381 51.6051 25.25C37.2726 25.25 25.5913 36.9313 25.5913 51.2638C25.5913 55.8575 26.7988 60.32 29.0563 64.2575L25.3813 77.75L39.1626 74.1275C42.9688 76.2013 47.2476 77.3037 51.6051 77.3037C65.9376 77.3037 77.6188 65.6225 77.6188 51.29C77.6188 44.3338 74.9151 37.7975 70.0063 32.8888ZM51.6051 72.8937C47.7201 72.8937 43.9138 71.8438 40.5801 69.875L39.7926 69.4025L31.6026 71.555L33.7813 63.575L33.2563 62.7613C31.0979 59.3145 29.9518 55.3305 29.9488 51.2638C29.9488 39.3463 39.6613 29.6338 51.5788 29.6338C57.3538 29.6338 62.7876 31.8913 66.8563 35.9863C68.871 37.9917 70.4676 40.377 71.5535 43.004C72.6395 45.631 73.1932 48.4474 73.1826 51.29C73.2351 63.2075 63.5226 72.8937 51.6051 72.8937ZM63.4701 56.7237C62.8138 56.4087 59.6113 54.8338 59.0338 54.5975C58.4301 54.3875 58.0101 54.2825 57.5638 54.9125C57.1176 55.5688 55.8838 57.0388 55.5163 57.4588C55.1488 57.905 54.7551 57.9575 54.0988 57.6162C53.4426 57.3013 51.3426 56.5925 48.8751 54.3875C46.9326 52.655 45.6463 50.5288 45.2526 49.8725C44.8851 49.2163 45.2001 48.875 45.5413 48.5338C45.8301 48.245 46.1976 47.7725 46.5126 47.405C46.8276 47.0375 46.9588 46.7488 47.1688 46.3288C47.3788 45.8825 47.2738 45.515 47.1163 45.2C46.9588 44.885 45.6463 41.6825 45.1213 40.37C44.5963 39.11 44.0451 39.2675 43.6513 39.2413H42.3913C41.9451 39.2413 41.2626 39.3988 40.6588 40.055C40.0813 40.7113 38.4013 42.2863 38.4013 45.4888C38.4013 48.6913 40.7376 51.7888 41.0526 52.2088C41.3676 52.655 45.6463 59.2175 52.1563 62.0262C53.7051 62.7088 54.9126 63.1025 55.8576 63.3913C57.4063 63.89 58.8238 63.8112 59.9526 63.6537C61.2126 63.47 63.8113 62.0788 64.3363 60.5562C64.8876 59.0337 64.8876 57.7475 64.7038 57.4588C64.5201 57.17 64.1263 57.0387 63.4701 56.7237Z"
                  fill="white"
                />
              </svg>
            </a>
          </div>
          <div className="div-content">
            <div className="div-logo">
              <img src="/rotaract-blanco.svg" alt="Logo Rotaract" />
            </div>
            <div className="div-links">
              <ul>
                <li>
                  <NavLink to="/">Quienes somos?</NavLink>
                </li>
                <li>
                  <NavLink to="/activities">Actividades y encuentros</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contacto</NavLink>
                </li>
                <li>
                  <NavLink to="/donate">Dona</NavLink>
                </li>
              </ul>
            </div>
            <div className="div-social">
              <h3>Social</h3>
              <a href="https://www.instagram.com/rotaractlariojacapital/">
                <InstagramIcon sx={{ width: "46px", height: "46px" }} />
              </a>
              <a href="mailto:lariojacapital@rotaract4851.org">
                <MailOutlineIcon sx={{ width: "46px", height: "46px" }} />
              </a>
            </div>
            <div className="div-register">
              <p>
                ¿Quieres recibir más información?
                <br />
                ¡Registrate ya mismo y conocé más Rotaract!
              </p>
              <div className="div-email">
                <input type="email" alt="Email" placeholder="Email" />
                <a href="mailto:lariojacapital@rotaract4851.org">
                  <div className="div-enviar">Enviar</div>
                </a>
              </div>
            </div>
          </div>

          <div className="div-copyright">
            <svg
              id="line-copyright"
              xmlns="http://www.w3.org/2000/svg"
              width="1188"
              height="2"
              viewBox="0 0 1188 2"
              fill="none"
            >
              <path d="M0 1H1188" stroke="white" />
            </svg>
            <div className="copyright-content">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                className="copyright"
              >
                <path
                  d="M20.0007 36.6667C29.2057 36.6667 36.6673 29.205 36.6673 20C36.6673 10.795 29.2057 3.33337 20.0007 3.33337C10.7957 3.33337 3.33398 10.795 3.33398 20C3.33398 29.205 10.7957 36.6667 20.0007 36.6667Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M22.5014 15.2834C21.7474 15.0178 20.9407 14.9368 20.1489 15.0472C19.3571 15.1577 18.6034 15.4564 17.9509 15.9183C17.2984 16.3803 16.7662 16.9919 16.3989 17.702C16.0315 18.412 15.8398 19.1998 15.8398 19.9993C15.8398 20.7987 16.0315 21.5865 16.3989 22.2966C16.7662 23.0066 17.2984 23.6183 17.9509 24.0802C18.6034 24.5421 19.3571 24.8408 20.1489 24.9513C20.9407 25.0618 21.7474 24.9808 22.5014 24.7151"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p>
                2023 Rotaract Club La Rioja Capital. Todos los derechos
                reservados
              </p>
            </div>
          </div>
        </>
      )}
      {isMediumScreen && (
        <>
          <div className="div-content">
            <div className="div-logo">
              <img src="/rotaract-blanco.svg" alt="Logo Rotaract" />
            </div>
            <div className="div-links">
              <ul>
                <li>
                  <NavLink to="/">Quienes somos?</NavLink>
                </li>
                <li>
                  <NavLink to="/activities">Actividades y encuentros</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contacto</NavLink>
                </li>
                <li>
                  <NavLink to="/donate">Dona</NavLink>
                </li>
              </ul>
            </div>
            <div className="col3">
              <div className="div-social">
                <h3>Social</h3>
                <a href="https://www.instagram.com/rotaractlariojacapital/">
                  <InstagramIcon sx={{ width: "30px", height: "30px" }} />
                </a>
                <a href="mailto:lariojacapital@rotaract4851.org">
                  <MailOutlineIcon sx={{ width: "30px", height: "30px" }} />
                </a>
                <a href="https://chat.whatsapp.com/Kiy7QqXPLDF9fCLmDnV0DT">
                  <PhoneAndroidIcon sx={{ width: "30px", height: "30px" }} />
                </a>
              </div>
              <div className="div-register">
                <p>
                  ¿Quieres recibir más información?
                  <br />
                  ¡Registrate ya mismo y conocé más Rotaract!
                </p>
                <div className="div-email">
                  <input type="email" alt="Email" placeholder="Email" />
                  <a href="mailto:lariojacapital@rotaract4851.org">
                    <div className="div-enviar">Enviar</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {isSmallScreen && (
        <>
          <div className="div-content">
            <div className="div-logo">
              <img src="/rotaract-blanco.svg" alt="Logo Rotaract" />
            </div>
            <div className="div-links">
              <NavLink to="/">Quienes somos?</NavLink>
              <NavLink to="/activities">Actividades y encuentros</NavLink>
              <NavLink to="/contact">Contacto</NavLink>
              <NavLink to="/donate">Dona</NavLink>
            </div>
            <div className="col3">
              <div className="div-social">
                <a href="https://www.instagram.com/rotaractlariojacapital/">
                  <InstagramIcon sx={{ width: "30px", height: "30px" }} />
                </a>
                <a href="mailto:lariojacapital@rotaract4851.org">
                  <MailOutlineIcon sx={{ width: "30px", height: "30px" }} />
                </a>
                <a href="https://chat.whatsapp.com/Kiy7QqXPLDF9fCLmDnV0DT">
                  <PhoneAndroidIcon sx={{ width: "30px", height: "30px" }} />
                </a>
              </div>
              <div className="div-register">
                <p>¡Registrate ya mismo y conocé más Rotaract!</p>
                <div className="div-email">
                  <input type="email" alt="Email" placeholder="Email" />
                  <a href="mailto:lariojacapital@rotaract4851.org">
                    <div className="div-enviar">Enviar</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Footer;
