import "./Organization.css";
import Media from "react-media";
import { Fragment } from "react";
import { orgData, responsive } from "../../../data";
import Org from "./Org";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// eslint-disable-next-line react/prop-types
const Organization = ({ loadOrgDesc, showhide }) => {
  const org = orgData.map((item) => (
    <Org
      key={item.id}
      title={item.title}
      url={item.imageUrl}
      description={item.description}
    />
  ));
  return (
    <div className="organization">
      <h1>Nos organizamos de esta forma</h1>
      <p className="description">
        Para implementar con éxito sus proyectos, el club Rotaract necesita un
        sólido equipo de líderes que facilitará sus tareas.
      </p>

      <Media
        queries={{
          medium: "(max-width: 1024px)",
          large: "(min-width: 1025px)",
        }}
      >
        {(matches) => (
          <Fragment>
            {matches.large && (
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
                    {showhide == "junta-directiva" && (
                      <div className="vl"></div>
                    )}
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
                      La junta directiva es el órgano rector del club y está
                      integrada por el presidente, ex presidente inmediato,
                      vicepresidente, secretario, tesorero.
                    </p>
                  </div>
                )}
                {showhide == "desarrollo-profesional" && (
                  <div className="org-desc">
                    <h1>Desarrollo Profesional</h1>
                    <p className="description">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quae pariatur odit eum voluptate dolores iure.
                    </p>
                  </div>
                )}

                {showhide == "servicio-comunidad" && (
                  <div className="org-desc">
                    <h1>Servicio a la comunidad</h1>
                    <p className="description">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quae pariatur odit eum voluptate dolores iure.
                    </p>
                  </div>
                )}

                {showhide == "servicio-club" && (
                  <div className="org-desc">
                    <h1>Servicio al club</h1>
                    <p className="description">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quae pariatur odit eum voluptate dolores iure.
                    </p>
                  </div>
                )}

                {showhide == "servicio-internacional" && (
                  <div className="org-desc">
                    <h1>Servicio Internacional</h1>
                    <p className="description">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quae pariatur odit eum voluptate dolores iure.
                    </p>
                  </div>
                )}

                {showhide == "comunicaciones" && (
                  <div className="org-desc">
                    <h1>Comunicaciones</h1>
                    <p className="description">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quae pariatur odit eum voluptate dolores iure.
                    </p>
                  </div>
                )}

                {showhide == "finanzas" && (
                  <div className="org-desc">
                    <h1>Finanzas</h1>
                    <p className="description">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quae pariatur odit eum voluptate dolores iure.
                    </p>
                  </div>
                )}
              </>
            )}
            {matches.medium && (
              <Carousel responsive={responsive} className="org-carousel">
                {org}
              </Carousel>
            )}
          </Fragment>
        )}
      </Media>
    </div>
  );
};

export default Organization;
