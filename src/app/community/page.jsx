import {Onetwo, Threetofive, Wellness} from "@/container/community"
import {Others} from "@/container/workwithus"
import {Footer} from "@/component"
import Hero from "../../component/hero/Hero";

const Community = () => {
  return (
      <div>
          <Hero title={"Community Wellness"} />
          <Wellness />
          <Onetwo />
          <Threetofive />
          <Others />
      </div>
  );
}

export default Community
