"use client";

import React from "react";
import { useState } from "react";
import Form from "../../component/Admission-Form/Form";

function Enquire() {
  const [isFormOpen, setFormOpen] = useState(false);

    return (
        <>
            <section className="section-container bg-primary-orange-1 enquire-section">
                <h2 className="text-center text-heading-5 md:text-heading-4 text-white">
                    JOIN G GLOBAL
                </h2>
                <h3 className="text-center text-heading-4 md:text-heading-3 text-white mt-md">
                    TO SHAPE YOUR KIDS FUTURE
                </h3>
                <div className="flex justify-center items-center mt-md">
                    <button className="btn-slide" onClick={() => setFormOpen(true)}>
                        Enquire Today
                    </button>
                </div>
            </section>
            {isFormOpen && (
                <Form onClose={setFormOpen} />
            )}
        </>
    );
}

export default Enquire;
