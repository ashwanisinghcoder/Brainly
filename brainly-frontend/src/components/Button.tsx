import { ReactElement } from "react";
import { HtmlTagDescriptor } from "vite";
interface ButtonProps{
    variant: "primary" | "secondary";
    text: String;
    startIcon?: ReactElement;
    onClick?:(() => void);
    px?: HtmlTagDescriptor;
    py?: HtmlTagDescriptor;
}
const  variantClasses = {
    "primary": "bg-purple-600 text-yellow-100",
    "secondary":"bg-purple-200 text-purple-700 bg-purple-200 text-purple-700" 
}
const defaultStyles = "p-1 m-1 rounded-md  font-light flex flex-row items-center justify-center "
export function Button({ variant, text, startIcon , onClick , px , py }: ButtonProps){
    return (
        <>
        <button className={variantClasses[variant] + " " + defaultStyles +" "+ px +" " + py } onClick={onClick}>
            {startIcon}
            {text}
        </button>
        </>
    )
}