import ActivitiesContainer from "../components/page/activities/ActivitiesContainer";
import ContactContainer from "../components/page/contact/ContactContainer";
import DonateContainer from "../components/page/donate/DonateContainer";
import IndexContainer from "../components/page/index/IndexContainer";

export const routes = [
  { id: "home", path: "/", Element: IndexContainer },
  { id: "activities", path: "/activities", Element: ActivitiesContainer },
  { id: "contact", path: "/contact", Element: ContactContainer },
  { id: "donate", path: "/donate", Element: DonateContainer },
];
