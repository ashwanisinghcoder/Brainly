import { BACKEND_URL } from "../config";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

export function useContent(){
    const [content, setContent] = useState<any>([]);
    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/content`, {
            headers: {
                "Authorization" : localStorage.getItem("Authorization")
            }
        })
        .then((response: any) => {
            setContent(response.data.content)
        })
        console.log(content)
    },[])
    return content
}