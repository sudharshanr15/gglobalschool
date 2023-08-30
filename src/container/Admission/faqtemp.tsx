"use client";
import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const Faqtemp = ({ data }: any) => {
    const [opened, setopened] = useState(false);
    return (
        <div className="my-large">
            <div className="lg:bg-gray-100 py-md lg:p-md font-bold flex items-center justify-between cursor-pointer" onClick={() => setopened(!opened)}>
                <p className="text-subheading">{data.qn}</p>
                <p
                    className="hidden lg:block w-fit p-2 bg-primary-maroon text-gray-100"
                >
                    {!opened && <KeyboardArrowDownIcon />}
                    {opened && <KeyboardArrowUpIcon />}
                </p>
            </div>
            {opened && <div className="text-body p-md">{data.ans}</div>}
            <div className="text-body lg:hidden">{data.ans}</div>
        </div>
    );
};

export default Faqtemp;
