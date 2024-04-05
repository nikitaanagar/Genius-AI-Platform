"use client"

import { useEffect } from "react"
import {Crisp} from "crisp-sdk-web"

export const CrispChat = () =>{
    useEffect(()=>{
        Crisp.configure("9fd67f97-74f4-43d5-a9fe-d1619848d77c");
    }, []);
    return null;
}