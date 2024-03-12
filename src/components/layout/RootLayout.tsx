'use client'

import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import ScrollTop from "../ScrollTop";


const RootLayout = ({ children }: { children: React.ReactNode }) => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
        })
    }

    useEffect(() => {
        scrollToTop()
    }, [])

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