import ExtraContainer from "../extra/ExtraContainer";
import OrganizationContainer from "../organization/OrganizationContainer";
import TestimoniosContainer from "../testimonios/TestimoniosContainer";
import Index from "./Index";

const IndexContainer = () => {
  return (
    <>
      <Index />
      <TestimoniosContainer />
      <OrganizationContainer />
      <ExtraContainer />
    </>
  );
};

export default IndexContainer;
