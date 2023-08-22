import Creativity from "@/container/awakening-creativity/Creativity";
import DietPlan from "@/container/awakening-creativity/DietPlan";
import Health_Well from "@/container/awakening-creativity/Health_Well";
import Others from "@/container/awakening-creativity/Others";
import Hero from "../../component/hero/Hero"

const AwakeningCreativity = () => {
  return (
    <>
      <Hero title={"Health & WELL BEING"}/>
      <Creativity />
      <Health_Well />
      <DietPlan />
      <Others />
    </>
  );
};

export default AwakeningCreativity;
