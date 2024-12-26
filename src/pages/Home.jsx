import HeroSlider from "../components/HeroSlider";
import Trending from "../components/Trending";
import ForYou from "../components/ForYou";
import TopDiscounts from "../components/TopDiscounts";
import BenefitsBar from "../components/BenefitsBar";
import RecentlyAddedBooks from "../components/RecentlyAddedBooks";

const Home = () => {
  return (
    <>
      <HeroSlider />

      <ForYou />
      <BenefitsBar />
      <Trending />
      <TopDiscounts />
      <RecentlyAddedBooks />
    </>
  );
};

export default Home;
