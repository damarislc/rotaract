/* eslint-disable react/prop-types */
import "./Activities.css";
import { activitiesData, encuentrosData } from "../../../data";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
} from "@mui/material";
import { useMediaQuery } from "react-responsive";
import Carousel from "react-material-ui-carousel";
import Swal from "sweetalert2";

const Activities = ({
  changePage,
  changeSection,
  currentPage,
  currentSection,
}) => {
  /**
   * Media queries para cambiar la estructura según el tamaño de la pantalla
   */
  const isMediumScreen = useMediaQuery({ query: "(max-width: 1024px)" });
  const isLargeScreen = useMediaQuery({ query: "(min-width: 1025px)" });

  /**
   * Crear elementos Card a partir del archivo de datos
   */
  const activities = activitiesData.map((item) => (
    <Card
      className={`activity-card card${item.id}`}
      key={item.id}
      onClick={() => {
        Swal.fire({
          title: item.title,
          text: item.description,
        });
      }}
    >
      <CardActionArea>
        <CardMedia component="img" image={item.imageUrl} alt={item.title} />
        <CardContent>
          <p className="card-title">{item.title}</p>
          <p className="date">{item.date}</p>
        </CardContent>
      </CardActionArea>
    </Card>
  ));

  const lastActivity = (
    <Container
      className="last-activity"
      maxWidth="false"
      onClick={() => {
        Swal.fire({
          title: "Día de las infancias",
          text: "Rotaract Club La Rioja Capital tiene como uno de sus proyectos más importantes la celebración del “Día de las infancias”, donde cada año le acercamos a niños, niñas y adolescentes de los parajes “El Minero”, “Recreo” y “Verde Olivo” un festejo; con regalos, sorpresas y muchas actividades para realizar con ellos y sus familias, todo esto acompañado de una rica merienda.",
        });
      }}
    >
      <CardMedia
        component="img"
        image="/actividades/dias-infancias/_DSC4426-copia.JPG"
        alt="Ultima actividad"
      />
      <div className="last-header">
        <h1>Ultima actividad</h1>
        <h2>Día de las infancias</h2>
      </div>
    </Container>
  );

  activities.unshift(lastActivity);

  const encuentros = encuentrosData.map((item) => (
    <Card
      className={`activity-card card${item.id}-e`}
      key={item.id}
      onClick={() => {
        Swal.fire({
          title: item.title,
          text: item.description,
        });
      }}
    >
      <CardActionArea>
        <CardMedia component="img" image={item.imageUrl} alt={item.title} />
        <CardContent>
          <p className="card-title">{item.title}</p>
          <p className="date">{item.date}</p>
        </CardContent>
      </CardActionArea>
    </Card>
  ));

  return (
    <>
      <div id="activities-header" className="header-container ">
        <div className="star-left">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="78"
            height="98"
            viewBox="0 0 78 98"
            fill="none"
          >
            <path
              d="M30.0724 58.6413C21.6704 58.1584 13.8196 57.8738 6.01111 57.1581C3.95089 56.9683 2.00087 55.4678 0 54.5709C1.98391 53.5878 3.90849 51.9493 5.9687 51.7337C13.3957 50.9489 20.882 50.6644 28.3428 50.147C29.267 50.0866 30.1741 49.7934 32.1835 49.3794C26.0028 40.5056 20.1952 32.1924 14.3961 23.8705L16.2528 22.3872C21.3144 28.1133 26.3674 33.8481 32.0224 40.2469C32.6668 35.4176 33.345 31.1661 33.7859 26.8974C34.5235 19.7656 35.1085 12.6165 35.7698 5.47607C35.8461 4.62232 35.7952 3.66509 36.1598 2.94069C36.6855 1.87997 37.5333 0.974481 38.237 0C38.9746 1.03485 40.2548 2.01795 40.3565 3.12178C41.0009 9.83104 41.357 16.5662 41.8487 23.2841C42.3828 30.528 42.9678 37.7719 43.502 44.6623C49.8946 38.962 56.2787 33.2617 61.9507 28.2082C57.5844 34.5811 52.5907 41.8768 47.19 49.7675C57.7878 51.8631 68.7417 50.6213 78 56.8735C68.038 60.5127 57.7454 58.7879 47.2663 59.4347C50.2337 67.4202 56.2957 73.5172 57.4911 82.0288C51.3613 77.8722 48.1311 71.1975 42.5185 64.8677C41.6368 73.6984 40.8228 81.5545 40.0852 89.4108C39.8987 91.4028 40.1276 93.4553 39.797 95.4215C39.6359 96.3615 38.6185 97.1462 37.9826 98C37.2196 97.2584 35.9563 96.6116 35.7868 95.7492C34.9983 91.6788 34.32 87.5653 33.9724 83.4345C33.4552 77.3548 33.2602 71.2406 32.8702 64.1346C27.8426 69.6021 23.4424 74.3882 19.0422 79.1744L17.3804 77.8808C19.322 70.3782 25.6807 65.4972 30.0554 58.6499L30.0724 58.6413ZM36.9822 30.0623C34.8683 38.7148 34.7439 43.9379 36.6091 45.7316C36.7448 45.309 36.9652 44.9382 36.9652 44.5674C36.9907 39.7295 36.9822 34.9002 36.9822 30.0623Z"
              fill="white"
            />
          </svg>
        </div>
        <div className="title">
          <img
            src="/ActividadesyEncuentros.svg"
            alt="Actividades y Encuentros"
            id="img-actividades-encuentros"
          />
          <h1>Actividades y encuentros</h1>
        </div>
        <div className="star-right">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="78"
            height="98"
            viewBox="0 0 78 98"
            fill="none"
          >
            <path
              d="M30.0724 58.6413C21.6704 58.1584 13.8196 57.8738 6.01111 57.1581C3.95089 56.9683 2.00087 55.4678 0 54.5709C1.98391 53.5878 3.90849 51.9493 5.9687 51.7337C13.3957 50.9489 20.882 50.6644 28.3428 50.147C29.267 50.0866 30.1741 49.7934 32.1835 49.3794C26.0028 40.5056 20.1952 32.1924 14.3961 23.8705L16.2528 22.3872C21.3144 28.1133 26.3674 33.8481 32.0224 40.2469C32.6668 35.4176 33.345 31.1661 33.7859 26.8974C34.5235 19.7656 35.1085 12.6165 35.7698 5.47607C35.8461 4.62232 35.7952 3.66509 36.1598 2.94069C36.6855 1.87997 37.5333 0.974481 38.237 0C38.9746 1.03485 40.2548 2.01795 40.3565 3.12178C41.0009 9.83104 41.357 16.5662 41.8487 23.2841C42.3828 30.528 42.9678 37.7719 43.502 44.6623C49.8946 38.962 56.2787 33.2617 61.9507 28.2082C57.5844 34.5811 52.5907 41.8768 47.19 49.7675C57.7878 51.8631 68.7417 50.6213 78 56.8735C68.038 60.5127 57.7454 58.7879 47.2663 59.4347C50.2337 67.4202 56.2957 73.5172 57.4911 82.0288C51.3613 77.8722 48.1311 71.1975 42.5185 64.8677C41.6368 73.6984 40.8228 81.5545 40.0852 89.4108C39.8987 91.4028 40.1276 93.4553 39.797 95.4215C39.6359 96.3615 38.6185 97.1462 37.9826 98C37.2196 97.2584 35.9563 96.6116 35.7868 95.7492C34.9983 91.6788 34.32 87.5653 33.9724 83.4345C33.4552 77.3548 33.2602 71.2406 32.8702 64.1346C27.8426 69.6021 23.4424 74.3882 19.0422 79.1744L17.3804 77.8808C19.322 70.3782 25.6807 65.4972 30.0554 58.6499L30.0724 58.6413ZM36.9822 30.0623C34.8683 38.7148 34.7439 43.9379 36.6091 45.7316C36.7448 45.309 36.9652 44.9382 36.9652 44.5674C36.9907 39.7295 36.9822 34.9002 36.9822 30.0623Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
      <div className="actividades-encuentros">
        <div className="options">
          <button
            id="actividades"
            className={
              currentSection === "actividades"
                ? "option-actividades activated"
                : "option-actividades"
            }
            onClick={changeSection}
          >
            Actividades
          </button>
          <button
            id="encuentros"
            className={
              currentSection === "encuentros"
                ? "option-encuentros activated"
                : "option-encuentros"
            }
            onClick={changeSection}
          >
            Encuentros
          </button>
          {console.log(currentSection)}
          {console.log(currentSection === "actividades")}
          {console.log(currentSection === "encuentros")}
          {console.log(currentSection)}
        </div>
        {currentSection === "actividades" && (
          <div id="actividades">
            {currentPage === "page1" && isLargeScreen && (
              <Container
                className="page1 p1-container"
                sx={{ display: "grid" }}
                maxWidth="xl"
              >
                {activities.slice(0, 5)}
              </Container>
            )}
            {currentPage === "page2" && isLargeScreen && (
              <Container
                className="page2 p2-container"
                sx={{
                  display: "grid",
                }}
              >
                {activities.slice(5, 8)}
              </Container>
            )}
            {isMediumScreen && (
              <Carousel
                className="actividades-carousel"
                autoPlay={false}
                indicators={false}
                navButtonsAlwaysVisible={true}
              >
                {activities}
              </Carousel>
            )}
          </div>
        )}
        {currentSection === "encuentros" && isLargeScreen && (
          <Container
            id="encuentros"
            className="encuentros-container"
            sx={{ display: "grid" }}
          >
            {encuentros}
          </Container>
        )}
        {currentSection === "encuentros" && isMediumScreen && (
          <Carousel
            className="encuentros-carousel"
            autoPlay={false}
            indicators={false}
            navButtonsAlwaysVisible={true}
          >
            {encuentros}
          </Carousel>
        )}

        {isLargeScreen && (
          <div className="activities-buttons">
            <svg
              width="72"
              height="72"
              viewBox="0 0 72 72"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="btn-prev"
              id="prev"
              onClick={changePage}
            >
              <path
                d="M 36.01 63.708 C 53.324 63.708 67.359 49.672 67.359 32.359 C 67.359 15.046 53.324 1.011 36.01 1.011 C 18.697 1.011 4.661 15.046 4.661 32.359 C 4.661 49.672 18.697 63.708 36.01 63.708 Z"
                stroke="black"
                strokeWidth=".1"
                strokeLinecap="round"
                strokeLinejoin="round"
                id="prev"
              />
              <path
                d="M 39.697 21.091 C 39.817 20.964 39.911 20.814 39.974 20.65 C 40.036 20.487 40.066 20.312 40.061 20.137 C 40.056 19.962 40.016 19.79 39.945 19.63 C 39.873 19.47 39.771 19.326 39.644 19.206 C 39.516 19.085 39.367 18.991 39.203 18.929 C 39.039 18.866 38.865 18.837 38.69 18.842 C 38.515 18.847 38.342 18.886 38.183 18.958 C 38.023 19.029 37.879 19.132 37.758 19.259 L 26.425 31.259 C 26.191 31.506 26.06 31.834 26.06 32.175 C 26.06 32.516 26.191 32.843 26.425 33.091 L 37.758 45.092 C 37.878 45.222 38.022 45.327 38.182 45.401 C 38.343 45.475 38.516 45.516 38.693 45.523 C 38.869 45.529 39.045 45.5 39.211 45.438 C 39.376 45.375 39.527 45.281 39.656 45.16 C 39.784 45.038 39.887 44.893 39.959 44.731 C 40.03 44.57 40.069 44.396 40.073 44.219 C 40.077 44.043 40.046 43.867 39.981 43.703 C 39.917 43.538 39.82 43.388 39.697 43.262 L 29.228 32.175 L 39.697 21.091 Z"
                fill="black"
                id="prev"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="72"
              height="72"
              viewBox="0 0 72 72"
              fill="none"
              id="next"
              className="btn-next"
              onClick={changePage}
            >
              <path
                d="M 36.01 63.708 C 53.324 63.708 67.359 49.672 67.359 32.359 C 67.359 15.046 53.324 1.011 36.01 1.011 C 18.697 1.011 4.661 15.046 4.661 32.359 C 4.661 49.672 18.697 63.708 36.01 63.708 Z"
                stroke="black"
                strokeWidth=".1"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="#0078B0"
                id="next"
              />
              <path
                d="M15.0315 27.0841C14.9112 27.2114 14.8172 27.3611 14.7548 27.5247C14.6923 27.6884 14.6628 27.8627 14.6677 28.0378C14.6727 28.2129 14.7121 28.3852 14.7836 28.5451C14.8552 28.7049 14.9575 28.8491 15.0848 28.9694C15.2121 29.0897 15.3619 29.1837 15.5255 29.2462C15.6892 29.3086 15.8635 29.3382 16.0386 29.3332C16.2136 29.3283 16.386 29.2889 16.5459 29.2173C16.7057 29.1457 16.8499 29.0434 16.9702 28.9161L28.3035 16.9161C28.5376 16.6685 28.668 16.3408 28.668 16.0001C28.668 15.6594 28.5376 15.3316 28.3035 15.0841L16.9702 3.08274C16.8507 2.95266 16.7065 2.84762 16.5461 2.77372C16.3857 2.69982 16.2121 2.65853 16.0356 2.65226C15.8591 2.64599 15.6831 2.67486 15.5178 2.73719C15.3525 2.79951 15.2013 2.89406 15.0728 3.01533C14.9444 3.1366 14.8414 3.28219 14.7697 3.44362C14.698 3.60506 14.6591 3.77913 14.6553 3.95572C14.6514 4.13232 14.6827 4.30792 14.7473 4.47232C14.8119 4.63673 14.9085 4.78666 15.0315 4.91341L25.5008 16.0001L15.0315 27.0841Z"
                fill="white"
                transform="translate(17,17)"
                id="next"
              />
            </svg>
          </div>
        )}
      </div>
    </>
  );
};

export default Activities;
