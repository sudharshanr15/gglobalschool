import {Onetwo, Threetofive, Wellness} from "@/container/community"
import {Others} from "@/container/work-with-us"
import {Footer} from "@/component"
import ExploreTopics from "@/component/ExploreTopics";
import Hero from "../../component/hero/Hero";

const Community = () => {
  return (
      <div>
          <Hero title={"Community Wellness"} />
          <Wellness />
          <Onetwo />
          <Threetofive />
          <ExploreTopics />
      </div>
  );
}

export default Community
