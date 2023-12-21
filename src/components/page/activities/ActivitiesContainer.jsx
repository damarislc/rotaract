import { useState } from "react";
import Activities from "./Activities";
import { useMediaQuery } from "react-responsive";

const ActivitiesContainer = () => {
  const [currentPage, setCurrentPage] = useState("page1");
  const [currentSection, setCurrentSection] = useState("actividades");
  const isLargeScreen = useMediaQuery({ query: "(min-width: 1025px)" });

  /*
  const loadOrgDesc = (event) => {
    const clickedElementId = event.target.id;
    setShowhide(clickedElementId);
  };
  */
  const changePage = (event) => {
    const clickedElement = event.target.id;
    console.log(clickedElement);

    if (clickedElement === "next") {
      switch (currentPage) {
        case "page1":
          setCurrentPage("page2");
          break;
        case "page2":
          isLargeScreen ? "" : setCurrentPage("page3");
          break;
        default:
          break;
      }
    } else if (clickedElement === "prev") {
      switch (currentPage) {
        case "page2":
          setCurrentPage("page1");
          break;
        case "page3":
          setCurrentPage("page2");
          break;
        default:
          break;
      }
    }
  };

  const changeSection = (event) => {
    const clickedElement = event.target.id;
    console.log(clickedElement);
    if (clickedElement === "encuentros" && currentSection === "actividades") {
      setCurrentPage("page1");
      setCurrentSection("encuentros");
    } else if (
      clickedElement === "actividades" &&
      currentSection === "encuentros"
    ) {
      setCurrentPage("page1");
      setCurrentSection("actividades");
    }
  };

  const properties = {
    changePage,
    changeSection,
    currentPage,
    currentSection,
  };
  return <Activities {...properties} />;
};

export default ActivitiesContainer;
