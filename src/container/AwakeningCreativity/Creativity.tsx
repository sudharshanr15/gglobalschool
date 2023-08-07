import Image from "next/image";

const Creativity = () => (
  <div className="div  grid  grid-cols-1 md:grid-cols-2">
    <div className="  mt-10  md:ml-5  p-large ">
      <h1 className="md:text-heading-4 text-heading-4  font-bold  text-[#790000]">
        AWAKENING CREATIVITY
      </h1>

      <p className="sm:mr-28 mt-4  md:mt-10 md:text-xl body">
        GGS motivated the children to create a tendency of viewing things in new
        ways or from a different perspectives. .<br></br>
        <br></br>
        Our children always has the habit of appreciating the aesthetic and
        connecting their learning with nature and reflect their understanding
        creatively.
        <br></br>
        <br></br>
        We hope to provide an insight of vibrant and creative work of our
        students in various occasions
      </p>
    </div>

    <div className="mx-auto w-full ">
      <Image
        src="/image/creativity.png"
        alt="Background"
        className="w-full h-full mt-38 md:p-3xl p-large"
        width={500}
        height={500}
      />
      {/* Rest of your content */}
    </div>
  </div>
);

export default Creativity;
