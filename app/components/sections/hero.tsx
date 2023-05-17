import Video from "@/app/components/video/video";
import React from "react";
export type HeroProps ={
  reelVideo:{  url: string;
      title: string; }
  featured: {  url: string;
      title: string; }[]
}

export default function Hero({reelVideo,featured}:HeroProps){
    return(
    <div className="py-20  bg-cover bg-no-repeat bg-fixed" style={{backgroundImage: "url(/img/bg-tw.jpeg)"}}>
        <div className="w-full m-auto text-center opacity-100 mb-20">
            <h2 className="text-6xl font-bold my-20 py-20 text-white">WORK REEL</h2>
            <Video url={reelVideo? reelVideo.url :'https://player.vimeo.com/video/189345383'}/>
            <div className="text-6xl font-bold my-20 py-20 text-white">FEATURED</div>
            <div className="text-6xl font-bold my-20  text-white">
                <div className="mx-auto max-w-screen-lg flex flex-col md:flex-row gap-6 p-6">
                    {featured?.map((it) =>
                        <div key={it.url} className="py-6 px-6 max-w-xs mx-auto bg-black rounded-xl shadow-md space-y-2">
                            <iframe className="w-full aspect-video block mx-auto min-h-72 rounded-md rounded-bl-none rounded-br-none"
                                    src={it.url || 'https://www.youtube.com/embed/-YjpTv3uRpk'}></iframe>
                            <div className="text-center space-y-3 md:text-left flex flex-col">
                                <p className="text-lg text-white font-semibold">
                                    <a href="/featured-videos" title="Visite site">
                                        <span className="capitalize">{it.title}</span>
                                    </a>
                                </p>
                            </div>
                        </div>
                    )}
                </div>
                <div className="py-6 px-6  mx-auto space-y-2">
                    <a href="/featured-videos" target="_blank"
                          className="bg-white text-black font-bold rounded-full mt-6 py-4 px-8 shadow-lg text-xl  tracking-wider hover:border-red hover:text-white hover:bg-red-600">
                        View all featured videos</a>
                </div>
            </div>
        </div>
    </div>
)
}
