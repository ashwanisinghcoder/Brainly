import { Button } from "../components/Button"
import { InputField } from "../components/Input"
import { BACKEND_URL } from "../config";
import { useRef } from "react";
import axios from "axios";
export function Signup(){
    const usernameRef = useRef<HTMLInputElement>();
    const passwordRef = useRef<HTMLInputElement>();
    async function signup(){
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;
        console.log(username , password)
        await axios.post(`${BACKEND_URL}/api/v1/signup`,{
            username,
            password
        })
        window.location.href = "/signin";
        alert("you have signed up");
    }
    return (
        <div  className=" flex flex-col  justify-center items-center 
        gap-10 py-40 border bg-gray-200 w-screen ">
            <div className="flex flex-col border-2 bg-yellow-200 p-8 rounded-md gap-5">
            <InputField reference={usernameRef}  placeholder="Username"/>
            <InputField reference={passwordRef}  placeholder="Password"/> 
             <Button onClick={signup} variant={"primary"} text={"Signup"}/>
        </div>
        </div>
    
    )
}