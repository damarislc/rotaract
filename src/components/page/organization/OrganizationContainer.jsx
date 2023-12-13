import { useState } from "react";
import Organization from "./Organization";

const OrganizationContainer = () => {
  const [showhide, setShowhide] = useState("junta-directiva");
  const loadOrgDesc = (event) => {
    const clickedElementId = event.target.id;
    setShowhide(clickedElementId);
  };
  return <Organization loadOrgDesc={loadOrgDesc} showhide={showhide} />;
};

export default OrganizationContainer;
