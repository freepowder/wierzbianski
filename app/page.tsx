"use client"
import About from "@/app/components/sections/about";
import Hero from "@/app/components/sections/hero";
import Services from "@/app/components/sections/services";
import Contact from "@/app/components/sections/contact";
import React, {useState} from "react";
import {getContent} from "@/app/services/cms-service";

export default function Home() {

    const [content, setContent] = useState( {
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

  return (
      <>
       <Hero featured={content.featured} reelVideo={content.workReel} />
       <Services/>
       <About about={content.about}/>
       <Contact email={content.email} phone={content.phone}/>
      </>
  )
}
