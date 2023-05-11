"use client"
import React, {useState} from "react";
import VideoCard from "@/app/components/video-card/video-card";
import {getContent} from "@/app/services/cms-service";


export default function Page(){
    const [content, setContent] = useState( [{title: '', url: ''}]);
    React.useEffect(() => {
        getContent().then(c => {
            setContent(c[0].videos);
        })
    },[]);

    const theVideos = []
    for (const video of content) {
        theVideos.push(
            <VideoCard key={video.url}  url={video.url} title={video.title} />
        )
    }
    return(
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
                        {theVideos}
                    </div>
                </div>
            </div>
        </div>
    )

}
