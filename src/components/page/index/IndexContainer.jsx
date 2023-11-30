import ExtraContainer from "../extra/ExtraContainer";
import OrganizationContainer from "../organization/OrganizationContainer";
import Index from "./Index";

const IndexContainer = () => {
  return (
    <>
      <Index />
      <OrganizationContainer />
      <ExtraContainer />
    </>
  );
};

export default IndexContainer;
