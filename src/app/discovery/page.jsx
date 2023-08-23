"use client";
import React from "react";
import Hero from "../../component/hero/Hero";
import { useState } from "react";
import { EventList  } from "../../container/discovery";

function page() {
    const [student, setStudent] = useState(true);

    return (
        <div>
            <Hero title="DISCOVERY OUTSIDE THE WALL" />
            <section className="section-container ">
                <div className="flex justify-between">
                    <p
                        onClick={() => setStudent(true)}
                        className={`text-primary-maroon-1 text-heading-3 font-bold ${
                            student
                                ? " underline decoration-8 underline-offset-[16px] decoration-primary-yellow-1 "
                                : ""
                        }`}
                    >
                        Student Gallery
                    </p>
                    <p
                        onClick={() => setStudent(false)}
                        className={`text-primary-maroon-1 text-heading-3 font-bold ${
                            !student
                                ? " underline decoration-8 underline-offset-[16px]  decoration-primary-yellow-1"
                                : ""
                        }`}
                    >
                        Teacher Gallery
                    </p>
                </div>
                <div className="mt-10">
                    <p>
                        Field trips provide opportunities for learner’s to
                        understand the real life challenges and it’s solutions.
                        It helps them to reflect their conceptual understandings
                        and broaden their thinking.
                        <br />
                        <br />
                        It provides hands-on experiential learning opportunity
                        in a real world context. Field trips develop empathy,
                        tolerance, critical thinking skills and perceiving
                        things in different ways.
                        <br />
                        <br />
                        They are able to engage with content in a variety of
                        ways. Each experience solidifies the learning and
                        support important academic concepts.
                    </p>
                </div>
            </section>
            {student ? <EventList /> : <EventList />}
        </div>
    );
}

export default page;
