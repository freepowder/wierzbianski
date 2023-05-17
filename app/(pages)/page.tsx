import About from "@/app/components/sections/about";
import Hero from "@/app/components/sections/hero";
import Services from "@/app/components/sections/services";
import Contact from "@/app/components/sections/contact";
import React, {Suspense} from "react";
import {CONFIG} from "@/app/config/config";
import {JSON_HEADERS, PATHS} from "@/app/constants";
import Spinner from "@/app/components/spinner/spinner";

// @ts-ignore
export default async function Home () {
    const URL= CONFIG.API_URL + PATHS.FP.CMS;
    const res = await fetch(URL,{
        method: 'GET',
        headers: { ...JSON_HEADERS },
        cache: 'no-store' });
    const content = await res.json();

    return (
        <Suspense fallback={<Spinner />}>
            <Hero featured={content?.featured} reelVideo={content?.workReel}/>
            <Services/>
            <About about={content?.about}/>
            <Contact email={content?.email} phone={content?.phone}/>
        </Suspense>
    )
}
