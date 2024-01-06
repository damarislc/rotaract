import ExtraContainer from "../extra/ExtraContainer";
import Mision from "../mision/Mision";
import OrganizationContainer from "../organization/OrganizationContainer";
import Index from "./Index";

const IndexContainer = () => {
  return (
    <>
      <Index />
      {/* <Mision /> */}
      <OrganizationContainer />
      <ExtraContainer />
    </>
  );
};

export default IndexContainer;
