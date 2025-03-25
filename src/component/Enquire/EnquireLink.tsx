import Link from "next/link";
import React from "react";

function EnquireLink({ children }: { children: React.ReactNode }){
    return (
        <Link href="https://gglobal.brainstem.in/admission/index.php/enquiryForm">
            {children}
        </Link>
    )
}

export default EnquireLink;