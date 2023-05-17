import About from "@/app/components/sections/about";
import Hero from "@/app/components/sections/hero";
import Services from "@/app/components/sections/services";
import Contact from "@/app/components/sections/contact";
import React, {Suspense} from "react";
import {CONFIG} from "@/app/config/config";
import {JSON_HEADERS, PATHS} from "@/app/constants";
import Spinner from "@/app/components/spinner/spinner";

// @ts-ignore
export default async function Home() {
    const content = await getData();
    return (
        <Suspense fallback={<Spinner />}>
            <Hero featured={content[0]?.featured} reelVideo={content[0]?.workReel}/>
            <Services/>
            <About about={content[0]?.about}/>
            <Contact email={content[0]?.email} phone={content[0]?.phone}/>
        </Suspense>
    )
}

async function getData() {
    const URL= CONFIG.API_URL + PATHS.FP.CMS;
    const res = await fetch(URL,{
        method: 'GET',
        cache: 'no-store' });
    return res.json();

}
