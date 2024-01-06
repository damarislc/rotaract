import "./Organization.css";
import { orgData } from "../../../data";
import Org from "./Org";
import Carousel from "react-material-ui-carousel";
import { useMediaQuery } from "react-responsive";

// eslint-disable-next-line react/prop-types
const Organization = ({ loadOrgDesc, showhide }) => {
  /**
   * Media queries para cambiar la estructura según el tamaño de la pantalla
   */
  const isMobileScreen = useMediaQuery({ query: "(max-width: 450px)" });
  const isSmallScreen = useMediaQuery({ query: "(max-width: 560px)" });
  const isMediumScreen = useMediaQuery({ query: "(max-width: 1024px)" });
  const isLargeScreen = useMediaQuery({ query: "(min-width: 1025px)" });

  /**
   * Crear elementos Org a partir del archivo de datos
   */
  const org = orgData.map((item) => (
    <Org
      key={item.id}
      title={item.title}
      url={item.imageUrl}
      description={item.description}
    />
  ));
  /**
   * Variable para decidir la cantidad de elementos que se verán en el carousel
   */
  let sliderItems = org.length > 3 ? 3 : org.length;
  const items = [];
  /**
   * Si la pantalla es de tamaño pequeño, solo ver 2 elementos (para mobile será 1 solo)
   */
  sliderItems = isSmallScreen ? 2 : sliderItems;
  for (let i = 0; i < org.length; i += sliderItems) {
    if (i % sliderItems === 0) {
      items.push(
        org.slice(i, i + sliderItems).map((data, index) => {
          return (
            <div className="slice" key={index}>
              {data}
            </div>
          );
        })
      );
    }
  }
  return (
    <div className="organization">
      <h1>Nos organizamos de esta forma</h1>
      <p className="description proyects">
        Para implementar con éxito sus proyectos, el club Rotaract necesita un
        sólido equipo de líderes que facilitará sus tareas.
      </p>

      {isLargeScreen && (
        <>
          <div className="services">
            <div className="organization-service">
              <img
                id="junta-directiva"
                src="/Junta-Directiva.svg"
                alt="Junta directiva"
                onClick={loadOrgDesc}
              />
              <p className="title">Junta directiva</p>
              {showhide == "junta-directiva" && <div className="vl"></div>}
            </div>
            <div className="organization-service">
              <img
                id="desarrollo-profesional"
                src="/Desarrollo-Profesional.svg"
                alt="Desarrollo Profesional"
                onClick={loadOrgDesc}
              />
              <p className="title">
                Desarrollo <br />
                Profesional
              </p>
              {showhide == "desarrollo-profesional" && (
                <div className="vl two-lines"></div>
              )}
            </div>
            <div className="organization-service">
              <img
                id="servicio-comunidad"
                src="/Servicio-a-la-comunidad.svg"
                alt="Servicio a la comunidad"
                onClick={loadOrgDesc}
              />
              <p className="title">
                Servicio a la <br />
                comunidad
              </p>
              {showhide == "servicio-comunidad" && (
                <div className="vl two-lines"></div>
              )}
            </div>
            <div className="organization-service">
              <img
                id="servicio-club"
                src="/Servicios-al-club.svg"
                alt="Servicio al club"
                onClick={loadOrgDesc}
              />
              <p className="title">
                Servicio <br />
                al club
              </p>
              {showhide == "servicio-club" && (
                <div className="vl two-lines"></div>
              )}
            </div>
            <div className="organization-service">
              <img
                id="servicio-internacional"
                src="/Servicios-internacionales.svg"
                alt="Servicio Internacional"
                onClick={loadOrgDesc}
              />
              <p className="title">
                Servicio <br />
                Internacional
              </p>
              {showhide == "servicio-internacional" && (
                <div className="vl two-lines"></div>
              )}
            </div>
            <div className="organization-service">
              <img
                id="comunicaciones"
                src="/Comunicaciones.svg"
                alt="Comunicaciones"
                onClick={loadOrgDesc}
              />
              <p className="title">Comunicaciones</p>
              {showhide == "comunicaciones" && <div className="vl"></div>}
            </div>
            <div className="organization-service">
              <img
                id="finanzas"
                src="/Finanzas.svg"
                alt="Finanzas"
                onClick={loadOrgDesc}
              />
              <p className="title">Finanzas</p>
              {showhide == "finanzas" && <div className="vl "></div>}
            </div>
          </div>
          <hr className="services-line" />
          {showhide == "junta-directiva" && (
            <div className="org-desc">
              <h1>Junta directiva</h1>
              <p className="description">
                La junta directiva es el órgano rector del club y está integrada
                por el presidente, ex presidente inmediato, vicepresidente,
                secretario, tesorero.
              </p>
            </div>
          )}
          {showhide == "desarrollo-profesional" && (
            <div className="org-desc">
              <h1>Desarrollo Profesional</h1>
              <p className="description">
                Se encarga de brindar las herramientas para que se cumplan los
                objetivos de cada proyecto. Y también trata en mejorar las
                habilidades personales de cada miembro (liderazgo, comunicación
                efectiva, trabajo en equipo, etc.)
              </p>
            </div>
          )}

          {showhide == "servicio-comunidad" && (
            <div className="org-desc">
              <h1>Servicio a la comunidad</h1>
              <p className="description">
                Llevan a cabo proyectos de servicio según las necesidades de las
                comunidades con las que tomamos contacto y genera un plan de
                acción.
              </p>
            </div>
          )}

          {showhide == "servicio-club" && (
            <div className="org-desc">
              <h1>Servicio al club</h1>
              <p className="description">
                Se ocupa del bienestar de los miembros. Para que el equipo sea
                eficiente se debe fortalecer el lazo de amistad de los
                integrantes. También crear un clima agradable para que estén
                cómodos y se sientan parte del club. Hacemos campamentos,
                reuniones temáticas, festejamos cumples, etc.
              </p>
            </div>
          )}

          {showhide == "servicio-internacional" && (
            <div className="org-desc">
              <h1>Servicio Internacional</h1>
              <p className="description">
                En el mundo hay 10,698 clubes Rotaract, distribuidos en 180
                países. Por eso la importancia de este comité, ya que crea y
                fortalece los lazos con clubes de todo el mundo, a través de
                intercambios, hermanamientos y fluida comunicación.
              </p>
            </div>
          )}

          {showhide == "comunicaciones" && (
            <div className="org-desc">
              <h1>Comunicaciones</h1>
              <p className="description">
                Se ocupa del correcto manejo de la información en club, de la
                difusión del ideal y actividades de Rotaract. Además, se
                encargan de generar, mantener y fortalecer vínculos con alianzas
                y colaboradores.
              </p>
            </div>
          )}

          {showhide == "finanzas" && (
            <div className="org-desc">
              <h1>Finanzas</h1>
              <p className="description">
                Buscamos la autonomía y autofinanciación de las actividades y
                proyectos. Aquí se piensan ideas para obtener fondos y cubrir lo
                que demande el servicio en la comunidad.
              </p>
            </div>
          )}
        </>
      )}
      {isMediumScreen && (
        <Carousel className="org-carousel">
          {isMobileScreen ? org : items}
        </Carousel>
      )}
    </div>
  );
};

export default Organization;
