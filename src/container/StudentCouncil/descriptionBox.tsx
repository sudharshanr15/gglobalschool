import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const DescriptionBox = () => {
  return (
    <section className="relative section-container bg-primary-maroon-1 ">
        <div className="absolute top-0 left-0 z-0">
            <FormatQuoteIcon sx={{ fontSize: 150, opacity: 0.2, color: "#F05A22"}} />
        </div>
        <p className="text-heading-4 uppercase text-white z-10">
          “Ethical leaders recognise the talent of their followers.”
        </p>
    </section>
  )
}

export default DescriptionBox
