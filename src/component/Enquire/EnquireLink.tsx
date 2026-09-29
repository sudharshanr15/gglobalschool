import Link from "next/link";
import React from "react";

function EnquireLink({ children }: { children: React.ReactNode }){
    return (
        // <Link href="https://gglobal.brainstem.in/admission/index.php/enquiryForm">
        <Link href="https://corp48.myclassboard.com/EnquiryQRCodeForm/9A3C02F9-BEEA-4178-814B-D9BFDC4DF0F4/A46B5A07-94BA-4F7B-9375-BF6CE944FA44">
            {children}
        </Link>
    )
}

export default EnquireLink;
