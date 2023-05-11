"use client"
import {Auth} from "@/app/types";
import {CONFIG} from "@/app/config/config";
import {JSON_HEADERS, LocalStorageKeys, PATHS} from "@/app/constants";
import {Content} from "@/app/types/cms-types";

export async function getContent(): Promise<Content[]> {
    const URL= CONFIG.API_URL + PATHS.FP.CMS;
    // @ts-ignore
    //TODO check auth.token is valid!
    const response = await fetch(URL, {
        method: 'GET',
        headers: { ...JSON_HEADERS }
    })

    if (!response.ok) {
        throw new Error("Network response was not OK");
    }
    const data = await response.json()
    return data;
}

export async function updateContent(content:Content): Promise<Content> {
    const URL= CONFIG.API_URL + PATHS.FP.CMS+'/'+ content._id;
    // @ts-ignore
    const auth = JSON.parse(localStorage.getItem(LocalStorageKeys.AUTH));
    //TODO check auth.token is valid!
    const response = await fetch(URL, {
        body:JSON.stringify(content),
        method: 'PUT',
        headers: { ...JSON_HEADERS, ...{ 'Authorization': `Bearer ${auth.token}` } }
    })

    if (!response.ok) {
        throw new Error("Network response was not OK");
    }
    const data = await response.json()
    return data;
}
