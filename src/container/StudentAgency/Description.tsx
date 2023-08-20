import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const Description = () => {
  return (
    <section className="relative section-container bg-primary-maroon-1 ">
        <div className="absolute top-0 left-0 z-0">
            <FormatQuoteIcon sx={{ fontSize: 150, opacity: 0.2, color: "#F05A22"}} />
        </div>
        <p className="text-heading-4 uppercase text-white z-10">
          G Global School nurtures sparkling imaginations, fertile minds, and willingness to take on risks with students’ agency.
        </p>
    </section>

  );
};

export default Description;
