"use client"
import React, {useState} from "react";
import {getContent, updateContent} from "@/app/services/cms-service";
import TogglePanel from "@/app/components/togglePanel";
import VideoEdit from "@/app/components/video-edit/video-edit";
import {SECTIONS} from "@/app/types/cms-types";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useRouter} from "next/navigation";
import {LocalStorageKeys} from "@/app/constants";

export default function Page(){
    const router = useRouter();
    const auth = typeof window !== "undefined" ? localStorage.getItem(LocalStorageKeys.AUTH): false;

    if( typeof window !== "undefined" && !auth) {
        router.push('/');
    }

    // @ts-ignore
    const onChangeWorkReel = (d) => {
        content.workReel =d
        setContent(content)
        updateContent(content).then(() => {
        })
    };

    const trackUpdate = (items:{url:string,title:string}[],section: SECTIONS) => {
        if(section === SECTIONS.FEATURED) {
            content.featured = items
        }
        if(section === SECTIONS.VIDEOS) {
            content.videos = items
        }
        setContent(content)
    }

    const makeUpdate = () => {
        updateContent(content).then((c) => {
            setContent(c);
            setAddVideo(false)
            toast('Content updated!', {
                position: "top-right",
                autoClose: 10000,
                type:'success',
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        })
    }

    const onUpdateVideo = (item: {url:string,title:string}, section: SECTIONS, index:number) => {
        content[section][index] = item
        trackUpdate(content[section], section)
        makeUpdate()
    };

    const onDeleteVideo = (item: {url:string,title:string}, section: SECTIONS) => {
        const filteredItems = content[section].filter((e) => e.url !== item.url)
        // trackUpdate(filteredItems, section)
        if(section === SECTIONS.FEATURED) {
            content.featured = filteredItems
        }
        if(section === SECTIONS.VIDEOS) {
            content.videos = filteredItems
            console.log('alvaro')
        }
        makeUpdate()
    }

    const onAddNewVideo = (item: {url:string,title:string}, section: SECTIONS) => {
        const filteredItem = content[section].filter(e => e.url === item.url) [0];
        if(filteredItem) {
            throw new Error('video url already exists');
            return
        }

        if(section === SECTIONS.FEATURED) {
            content.featured.push(item)

        }
        if(section === SECTIONS.VIDEOS) {
            content.videos.push(item)
        }
        setContent(content);
        makeUpdate()

    }

    const OnUpdateAbout =() => {
        const item = document.getElementById('about') as HTMLInputElement;
        content.about = item.value
        setContent(content);
        makeUpdate()
    }
    const OnUpdateContact =() => {
        const itemPhone = document.getElementById('c-phone') as HTMLInputElement;
        const itemEmail = document.getElementById('c-email') as HTMLInputElement;
        content.email = itemEmail.value;
        content.phone = itemPhone.value;
        setContent(content);
        makeUpdate()
    }



    const [addVideo, setAddVideo] = useState(false);
    const [content, setContent] = useState({
        workReel: {
            title: '',
            url: '',
        },
        featured:  [{
            title: '',
            url: '',
        }],
        videos:  [{
            title: '',
            url: '',
        }],
        about: '',
        phone: '',
        email:'',
        _id:''
    });

    React.useEffect(() => {
        getContent().then(c => {
            setContent(c[0]);
        })
    },[]);


    return <>
        <div className="min-h-screen flex flex-col items-center justify-center dark:bg-[#333333]">
                <div className="w-full px-20">
                    <div className="flex gap-16 items-center justify-center ">
                        <div className="w-2/3 my-20">
                            <div className={"py-8 bg-blend-lighten"}>
                                <h1 className="cursor-pointer text-2xl font-bold text-left text-white flex flex-row justify-between uppercase">CMS wierzbianski</h1>
                            </div>
                            <ul className="rounded-md divide-y divide-[#333333] bg-black my-10">
                                <li className="rounded-t-md ">
                                    <TogglePanel title={'WORK REEL'}>
                                        <VideoEdit url={content.workReel?.url} title={content.workReel?.title} onChangeValue={onChangeWorkReel}/>
                                    </TogglePanel>
                                </li>
                                <li className="">
                                    <TogglePanel title={'FEATURED ' + '('+content.featured.length+')'} >
                                        {content.featured.map((v,i) =>
                                            <VideoEdit key={i} url={v?.url} title={v?.title}
                                                       onChangeValue={(e)=>onUpdateVideo(e,SECTIONS.FEATURED, i)}
                                                       onDelete={(e)=> onDeleteVideo(e,SECTIONS.FEATURED)}/>
                                        )}
                                        {addVideo &&
                                            <VideoEdit isNew={true} url={''} title={''} onChangeValue={(e)=> onAddNewVideo(e,SECTIONS.FEATURED)}/>}
                                        <button onClick={()=>{ setAddVideo(!addVideo) }}
                                                className="bg-white px-12 text-black font-bold rounded-full mt-6 py-4 md:px-8 shadow-lg tracking-wider hover:border-red hover:text-white hover:bg-red-600">
                                            Add New Video
                                        </button>
                                    </TogglePanel>
                                </li>
                                <li className="">
                                    <TogglePanel title={'VIDEOS ' + '('+content.videos.length+')'} >

                                        {content.videos.map((v,i) =>
                                            <VideoEdit key={i} url={v?.url} title={v?.title}
                                                       onChangeValue={(e)=>onUpdateVideo(e,SECTIONS.VIDEOS, i)}
                                                       onDelete={(e)=> onDeleteVideo(e,SECTIONS.VIDEOS)}
                                            />
                                        )}
                                        {addVideo &&
                                            <VideoEdit isNew={true} url={''} title={''} onChangeValue={(e)=> onAddNewVideo(e,SECTIONS.VIDEOS)}/>}
                                        <button onClick={()=>{ setAddVideo(!addVideo) }}
                                                className="bg-white px-12 text-black font-bold rounded-full mt-6 py-4 md:px-8 shadow-lg tracking-wider hover:border-red hover:text-white hover:bg-red-600">
                                            Add New Video
                                        </button>

                                    </TogglePanel>
                                </li>
                                <li className="">
                                    <TogglePanel title={'ABOUT'} >
                                        <div className="rounded-md shadow-md w-full dark:bg-[#000]  p-10">
                                            <label htmlFor="about" className="text-md font-medium text-white block">About</label>
                                            <textarea id="about"  rows={16} defaultValue={content.about}
                                                      className="block mt-1 p-2 w-full text-sm text-gray-900  rounded-lg border border-gray-800 focus:ring-blue-500 focus:border-blue-500 shadow-md dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                                            <div className={"flex flex-col md:flex-row gap-6"}>
                                                <button onClick={()=>OnUpdateAbout()}
                                                        className="bg-green-500 mr-6 px-12 text-white font-bold rounded-full mt-6 py-4 md:px-8 shadow-lg tracking-wider hover:border-red hover:text-white hover:bg-red-600">
                                                    update
                                                </button>
                                            </div>
                                        </div>
                                    </TogglePanel>
                                </li>
                                <li className="rounded-b-md">
                                    <TogglePanel title={'CONTACT'}>
                                        <div className="rounded-md shadow-md w-full dark:bg-[#000]  p-10">
                                            <label htmlFor="email" className="text-md font-medium text-white block">Email</label>
                                            <input id="c-email"  type="text" defaultValue={content.email}
                                                   className="mt-1 p-2 block w-full rounded-md border-gray-800 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"/>
                                            <label htmlFor="phone" className="pt-10 text-md font-medium text-white block">Phone</label>
                                            <input id="c-phone"  type="text" defaultValue={content.phone}
                                                   className="mt-1 p-2 block w-full rounded-md border-gray-800 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"/>
                                            <div className={"flex flex-col md:flex-row gap-6"}>
                                                <button onClick={()=>OnUpdateContact()}
                                                        className="bg-green-500 mr-6 px-12 text-white font-bold rounded-full mt-6 py-4 md:px-8 shadow-lg tracking-wider hover:border-red hover:text-white hover:bg-red-600">
                                                    update
                                                </button>
                                            </div>
                                        </div>
                                    </TogglePanel>
                                </li>
                            </ul>
                         </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>

}
