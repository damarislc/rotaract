import "./Footer.css";
import { NavLink } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import FacebookIcon from "@mui/icons-material/Facebook";
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
              <InstagramIcon sx={{ width: "46px", height: "46px" }} />
              <MailOutlineIcon sx={{ width: "46px", height: "46px" }} />
              <FacebookIcon sx={{ width: "46px", height: "46px" }} />
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
                <InstagramIcon sx={{ width: "30px", height: "30px" }} />
                <MailOutlineIcon sx={{ width: "30px", height: "30px" }} />
                <FacebookIcon sx={{ width: "30px", height: "30px" }} />
                <PhoneAndroidIcon sx={{ width: "30px", height: "30px" }} />
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
                <InstagramIcon sx={{ width: "30px", height: "30px" }} />
                <MailOutlineIcon sx={{ width: "30px", height: "30px" }} />
                <FacebookIcon sx={{ width: "30px", height: "30px" }} />
                <PhoneAndroidIcon sx={{ width: "30px", height: "30px" }} />
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
