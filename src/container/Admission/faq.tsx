import Faqtemp from "./faqtemp"


const Faq = () => {
    const faqs=[
        {
            qn:"What is the maximum number of students in a classroom?",
            ans:"This can vary across classrooms and grade levels but generally there are no more than 20 students in a classroom, with the typical number of students ranging from 12 to 20."
        },
        {
            qn:"What is the maximum number of students in a classroom?",
            ans:"This can vary across classrooms and grade levels but generally there are no more than 20 students in a classroom, with the typical number of students ranging from 12 to 20."
        },
        {
            qn:"What is the maximum number of students in a classroom?",
            ans:"This can vary across classrooms and grade levels but generally there are no more than 20 students in a classroom, with the typical number of students ranging from 12 to 20."
        },
    ]
    const content=faqs.map((val,pos)=>{
        return <Faqtemp data={val} key={pos}/>
    })

  return (
    <section className="section-container">
        <h2 className="text-heading-3 md:text-heading-2 text-primary-maroon">FAQ</h2>
        {content}
    </section>
  )
}

export default Faq
