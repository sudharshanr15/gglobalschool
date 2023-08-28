import DietPlan from "@/container/awakening-creativity/DietPlan";
import Health_Well from "@/container/awakening-creativity/Health_Well";
import Others from "@/container/awakening-creativity/Others";
import Hero from "../../component/hero/Hero"
import { Cards, Curriculum } from "@/container/awakening-creativity";
import ExploreTopics from "@/component/ExploreTopics";

const AwakeningCreativity = () => {

  return (
    <>
      <Hero title={"Health & WELL BEING"}/>
      <Cards />
      <Curriculum />
      <ExploreTopics />
    </>
  );
};

export default AwakeningCreativity;
