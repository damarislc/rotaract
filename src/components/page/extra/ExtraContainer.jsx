import { useState } from "react";
import Extra from "./Extra";

const ExtraContainer = () => {
  const [showhide, setShowhide] = useState("icon1");
  const loadExtraInfo = (event) => {
    const extraId = event.target.id;
    console.log("id:" + extraId);
    setShowhide(extraId);
  };
  return <Extra loadExtraInfo={loadExtraInfo} showhide={showhide} />;
};

export default ExtraContainer;
