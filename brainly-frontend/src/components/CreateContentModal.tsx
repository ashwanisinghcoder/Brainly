import { ReactElement } from "react";
import { CrossIcon } from "../Icons/CrossIcon";
import { Button } from "./Button";
import { PlushIcon } from "../Icons/PlushIcon";
import { InputField } from "./Input";
import { BACKEND_URL } from "../config";
import  { useState, useRef } from "react";
import axios from "axios";

enum ContentType {
    YOUTUBE = "youtube",
    TWITTER = "twitter"
}
export function CreateContentModal({open ,onClose}: {open: boolean, onClose: ()=>void}): ReactElement{
    const [type , setType] = useState(ContentType.YOUTUBE);
    const titileRef = useRef<HTMLInputElement>();
    const linkRef = useRef<HTMLInputElement>();
    async function addContent() {
        const title = titileRef.current?.value;
        const link = linkRef.current?.value;
        const token = localStorage.getItem("Authorization");
        if (!token) {
            console.log("No token found in localStorage");
            return;  // Stop if there's no token
        }
    
        try {
            // Send the POST request with the Authorization header
            await axios.post(
                `${BACKEND_URL}/api/v1/content`,
                {
                    title,
                    link,
                    type,
                },
                {
                    headers: {
                        "Authorization" : localStorage.getItem("Authorization")
                    },
                }
            );
            console.log("Content added successfully");
            onClose(); // Close modal after success
        } catch (e) {
            console.log("Axios Error:", e);
        }
    }
    

    return (
        <div>
        {open && <div className="w-screen h-screen fixed top-0 left-0 bg-gray-700 bg-opacity-90 flex justify-center items-center">
            <div>
                <div className="flex   bg-white rounded-md ">
                    <div className="bg-white opacity-90 rounded  w-full h-full flex flex-col justify-center p-4 gap-4">
                        <div className="flex flex-end justify-end ">
                            <div onClick={onClose}>
                            <CrossIcon/>
                            </div>
                        </div> 
                        <div className="flex flex-col  border-gray-300 ">
                        <div className="flex flex-col  border-gray-300">
                            <InputField reference={titileRef} placeholder={"Title"}/>
                            <InputField reference={linkRef} placeholder={"Link"}/>
                            <h1>Type</h1>
                            <div className="flex justify-center">
                                <div className="flex flex-row  px-6 py-1 gap-5">
                                <Button px={"px-6"} py={"py-1"} text="Youtube" variant={type ===ContentType.YOUTUBE ?"primary" : "secondary"} onClick={()=>setType(ContentType.YOUTUBE)}></Button>
                                <Button px={"px-10"} py={"py-2"} text="Twitter" variant={type ===ContentType.TWITTER ?"primary" : "secondary"} onClick={()=>setType(ContentType.TWITTER)}></Button>
                                </div>
                            </div>
                        </div>
                        <Button onClick={addContent} variant={"primary"} text={"Add"} startIcon={<PlushIcon/> }></Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>}
        </div>
    )
}
