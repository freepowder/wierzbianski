import React, {Suspense} from "react";
import VideoCard from "@/app/components/video-card/video-card";
import {CONFIG} from "@/app/config/config";
import {JSON_HEADERS, PATHS} from "@/app/constants";
import Spinner from "@/app/components/spinner/spinner";
import {Video} from "@/app/types/cms-types";

// @ts-ignore
export default async function FeaturedVideos () {
    const URL= CONFIG.API_URL + PATHS.FP.CMS;
    const res = await fetch(URL,{
        method: 'GET',
        cache: 'no-store' });
    const data = await res.json();
    const videos: Video[] = data[0].videos

    return(
        <Suspense fallback={<Spinner />}>
        <div className="max-w-screen-xl mx-auto py-20 px-6">
            <div className="flex flex-col pb-20">
                <div className="w-full">
                    <h2 className="text-6xl font-bold  py-20 text-white">FEATURED</h2>
                    <div className="w-full  flex flex-col justify-around  py-10">
                        <p className="text-gray-200 mb-8">Tomasz Wierzbianski is a documentary filmmaker
                            and director of photography. Originally from Poland.Tomasz Wierzbianski is a documentary filmmaker
                            and director of photography. Originally from Poland.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-24">
                        {videos?.map((video) =>
                            <VideoCard key={video.url}  url={video.url} title={video.title} />
                        )}
                    </div>
                </div>
            </div>
        </div>
        </Suspense>
    );
}
