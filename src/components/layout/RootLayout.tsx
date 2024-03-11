'use client'

import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import ScrollTop from "../ScrollTop";


const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
            <ScrollTop />
        </>
    );
};

export default RootLayout;