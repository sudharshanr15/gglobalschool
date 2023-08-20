import Creativity from "@/container/AwakeningCreativity/Creativity";
import DietPlan from "@/container/AwakeningCreativity/DietPlan";
import Health_Well from "@/container/AwakeningCreativity/Health_Well";
import Others from "@/container/AwakeningCreativity/Others";
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
