import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function Layout({ children }: Props) {
    
    return <>
        <Header />
        <div>
            {children}
        </div>
        <Footer />
    </>
}