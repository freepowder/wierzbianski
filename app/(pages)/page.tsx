import About from "@/app/components/sections/about";
import Hero from "@/app/components/sections/hero";
import Services from "@/app/components/sections/services";
import Contact from "@/app/components/sections/contact";
import React from "react";
import {CONFIG} from "@/app/config/config";
import {PATHS} from "@/app/constants";


async function getData() {
    const URL= CONFIG.API_URL + PATHS.FP.CMS;
    const res = await fetch(URL,{ cache: 'no-store' });
    const data = await res.json();
    return  data[0] ;
}

// @ts-ignore
export default( async function Home() {
    const content = await getData();

    return (
        <>
            <Hero featured={content?.featured} reelVideo={content?.workReel}/>
            <Services/>
            <About about={content?.about}/>
            <Contact email={content?.email} phone={content?.phone}/>
        </>
    )
} as unknown as () => JSX.Element)
