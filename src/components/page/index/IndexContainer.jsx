import Mision from "../mision/Mision";
import Banner from "../banner/Banner";
import ExtraContainer from "../extra/ExtraContainer";
import OrganizationContainer from "../organization/OrganizationContainer";
import Index from "./Index";

const IndexContainer = () => {
  return (
    <>
      <Index />
      <Banner/>
      <Mision />
      <OrganizationContainer />
      <ExtraContainer />
    </>
  );
};

export default IndexContainer;
