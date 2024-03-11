import React from "react";
import ScrollTop from "../ScrollTop";



const NestedLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            {children}
            <ScrollTop />
        </>
    )
};

export default NestedLayout;