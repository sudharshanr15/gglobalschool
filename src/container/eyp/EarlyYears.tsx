function EarlyYears() {
    const list = [
        {
            title: "PLAY GROUP",
            text: "2.5 TO 3 YEARS",
        },
        {
            title: "KINDER GARDEN 1",
            text: "3 YEARS",
        },
        {
            title: "KINDER GARDEN 2",
            text: "4 YEARS",
        },
        {
            title: "KINDER GARDEN 3",
            text: "5 YEARS",
        },
    ]

    const list2 = [
        {
            title: "YEAR 1",
            text: "6 YEARS",
        },
        {
            title: "YEAR 2",
            text: "7 YEARS",
        },
        {
            title: "YEAR 3",
            text: "8 YEARS",
        },
        {
            title: "YEAR 5",
            text: "9 YEARS",
        },
        {
            title: "YEAR 6",
            text: "10 YEARS",
        },
    ]
    return (
        <>
            <section className="section-container">
                <h2 className="text-heading-4 md:text-heading-3 uppercase lg:w-[90%] text-primary-maroon-1 mb-large">
                    early years @ g global school programmes
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-xl">
                    {list.map((item, index): any => (
                        <div className="border text-primary-maroon-1 border-primary-maroon-1 flex flex-col justify-between rounded-2xl p-xl group hover:bg-primary-maroon-1 transition-colors" key={index}>
                            <h3 className="text-heading-4 mb-large uppercase group-hover:text-primary-yellow-1">
                                {item.title}
                            </h3>
                            <p className="text-primary-orange text-heading-6 uppercase group-hover:text-white">
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
            <section className="section-container">
                <h2 className="text-heading-4 md:text-heading-3 uppercase lg:w-[90%] text-primary-maroon-1 mb-large">
                    primary years @ g global school programmes
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-xl">
                    {list2.map((item, index): any => (
                        <div className="border text-primary-maroon-1 border-primary-maroon-1 flex flex-col justify-between rounded-2xl p-xl group hover:bg-primary-maroon-1 transition-colors" key={index}>
                            <h3 className="text-heading-4 mb-large uppercase group-hover:text-primary-yellow-1">
                                {item.title}
                            </h3>
                            <p className="text-primary-orange text-heading-6 uppercase group-hover:text-white">
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}

export default EarlyYears;
