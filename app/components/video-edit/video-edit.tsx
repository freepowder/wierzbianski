"use client"
import Video from "@/app/components/video/video";
import React, {useState} from "react";
import {VideoCardProps} from "@/app/components/video-card/video-card";

export type VideoEditProps ={
    url: string;
    title: string;
    isNew?:boolean,

    onChangeValue?(e: {url:string, title:string}): void;
    onDelete?(e:{url:string, title:string}): void;
}

export default function VideoEdit({url, title, onChangeValue, onDelete, isNew}:VideoEditProps) {

    const [theUrl, setTheUrl] = useState(url);
    const [theTitle, setTheTitle] = useState(title);

    const deleteVideo = () => {
        if(onDelete) {
            let change = {url: theUrl, title: theTitle}
            onDelete(change)
        }
    }

    const updateVideo = () => {
        if(onChangeValue) {
            let change = {url: theUrl, title: theTitle}
            onChangeValue(change)
        }
    }


    return (
        <div className="flex flex-row gap-20 dark:bg-[#000] mb-8 p-10">
            <div className={"w-3/6 rounded-md shadow-md"}>
                <Video url={url}></Video>
            </div>
            <div className={"w-3/6"}>
                <div className="rounded-md shadow-md w-full dark:bg-[#000]">
                    <label htmlFor="url" className="text-md font-medium text-white block">Url</label>
                    <input id="url"  type="text" defaultValue={url} onChange={(e) => setTheUrl(e.currentTarget.value)}
                           className="mt-1 p-2 block w-full rounded-md border-gray-800 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"/>
                    <label htmlFor="title" className="pt-4 text-md font-medium text-white block">Title</label>
                    <input id="title"  type="text" defaultValue={title} onChange={(e) => setTheTitle(e.currentTarget.value)}
                           className="mt-1 p-2 block w-full rounded-md border-gray-800 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"/>
                </div>
                <div className={"flex flex-col md:flex-row gap-6"}>
                    <div >
                        {isNew
                            ?
                            <button onClick={updateVideo}
                                    className="bg-green-500 px-12 text-black font-bold rounded-full mt-6 py-4 md:px-8 shadow-lg tracking-wider hover:border-red hover:text-white hover:bg-red-600">
                                add
                            </button>
                            :
                            <>
                                <button onClick={updateVideo}
                                        className="bg-green-500 mr-6 px-12 text-white font-bold rounded-full mt-6 py-4 md:px-8 shadow-lg tracking-wider hover:border-red hover:text-white hover:bg-red-600">
                                    update
                                </button>
                                <button onClick={deleteVideo}
                                        className="bg-white px-12 text-black font-bold rounded-full mt-6 py-4 md:px-8 shadow-lg tracking-wider hover:border-red hover:text-white hover:bg-red-600">
                                    delete
                                </button>
                            </>
                        }

                    </div>
                </div>

            </div>
        </div>
    )
}
