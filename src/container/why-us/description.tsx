import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

const Description = () => {
  return (
    <section className="relative section-container bg-primary-maroon-1 ">
      <div className="absolute top-0 left-0 z-0">
        <FormatQuoteIcon
          sx={{ fontSize: 150, opacity: 0.2, color: "#F05A22" }}
        />
      </div>
      <p className="text-heading-6 uppercase text-white z-10">
        Early and primary year education is the foremost and basic right of every child. It sets a strong foundation for learning and early development of skills. GGS ensures this through inquiry based learning and conceptual understanding. We also have a remarkable set of educator team to implement this in our curriculum
      </p>
    </section>
  );
};

export default Description;
