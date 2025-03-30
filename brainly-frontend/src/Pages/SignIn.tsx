import { Button } from "../components/Button"
import { InputField } from "../components/Input"
import { BACKEND_URL } from "../config";
import { useRef } from "react";
import axios from "axios";
export function SignIn(){
    const usernameRef = useRef<HTMLInputElement>();
    const passwordRef = useRef<HTMLInputElement>();
    async function signin(){
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;
        const response = await axios.post(`${BACKEND_URL}/api/v1/signin`,{
            username,
            password
        })
        const token = response.data.token as string;
         
        localStorage.setItem("Authorization" , `${token}`);
        window.location.href = "/dashboard";
    
    }
    return (
        <div  className=" flex flex-col  justify-center items-center 
        gap-10 py-40 border bg-gray-200 w-screen ">
            <div className="flex flex-col border-2 bg-yellow-200 p-8 rounded-md gap-5">
            <InputField reference={usernameRef}  placeholder="Username"/>
            <InputField reference={passwordRef}  placeholder="Password"/> 
             <Button onClick={signin} variant={"primary"} text={"Signin"}/>
        </div>
        </div>
    
    )
}