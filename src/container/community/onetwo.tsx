const Onetwo = () => {
  return (
    <section className="section-container bg-primary-maroon text-gray-100 flex flex-col md:flex-row gap-xl lg:gap-3xl">
      <div className="w-full md:w-1/2">
        <div className="flex gap-2 mb-large">
          <div className="text-heading-5">1.</div>
          <h3 className="text-heading-5">BE THE CHANGE</h3>
        </div>
        <p className="text-body">
          Be the change you want to see in the world and start locally. We make
          our students understand about our community and it’s people and there
          by able to showcase their best interest in their well-being.
        </p>
      </div>
      <div className="w-full md:w-1/2">
       <div className="flex gap-2 mb-large">
          <div className="text-heading-5">2.</div>
          <h3 className="text-heading-5">ACKNOWLEDGE AND RESPECT</h3>
        </div>
        <p className="text-body">
          Acknowledge and respect the individuality of each. Every community is
          different and these differences must be understood and honoured in
          order to feel a sense of peace and belongingness.
        </p>
      </div>
    </section>
  );
};

export default Onetwo;
