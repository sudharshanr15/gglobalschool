import Image from "next/image";

const DietPlan = () => (
  <div className="div  grid  grid-cols-1 md:grid-cols-2">
    <div className="  mt-10  md:ml-5  p-large ">
      <h1 className="md:text-heading-4 text-heading-4  font-bold  text-[#790000]">
        DIET PLAN
      </h1>

      <p className="sm:mr-28 mt-4  md:mt-10 md:text-xl body">
        A healthy diet is essential for good health and well being. Our GGS
        ensure that our students get all the necessary nutrients through their
        food. We motivate students to have healthy food inside and outside
        school.
        <br></br>
        <br></br>
        We believe that being healthy should be a part of our overall lifestyle
        and we incorporate the same to our students.
        <br></br>
        <br></br>
        Our In-house chefs bring to our table the most nutritious meals that our
        students thoroughly seems to enjoy. We use the most sophisticated
        equipment’s and cook as per the weekly plan and make sure to full-fill
        the needs of children.
        <br></br>
        <br></br>
        Our teachers spend their time to ensure that all the children gets their
        daily nourishment without fail, Because a happy tummy gives us a curios
        mind!
      </p>
    </div>

    <div className="mx-auto w-full ">
      <Image
        src="/image/dietplan.png"
        alt="Background"
        className="w-full h-full mt-38 md:p-3xl p-large"
        width={500}
        height={500}
      />
      {/* Rest of your content */}
    </div>
  </div>
);

export default DietPlan;
