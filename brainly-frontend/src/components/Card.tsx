import { NoteBookIcon } from "../Icons/NoteBookIcon";

import { DeleteIcon } from "../Icons/DeleteIcon";
interface CardProps{
    title: string;
    link: string;
    type: "twitter" | "youtube";
}
export function Card({title , link, type }: CardProps){
    return(
        <span className=" rounded-md p-2 mb-3 w-72 h-full flex  flex-col  border-slate-300 border  gap-5 ">
                <div className="flex w-full  flex-row items-end justify-space-between  text-black gap-20 w-40 h-10  rounded-md bg-gray-200 ">
                <div className="flex  flex-row items-center justify-space-between  text-black w-40 h-10  rounded-md ">
                <NoteBookIcon/>
                {title} 
                </div>
                <div  className="flex  flex-row items-center justify-space-between   w-10 h-10 rounded-md 
                ">
                    <a href={link} target="_blank">
                    </a>
                    <DeleteIcon/>
                </div>
                </div>
                    {type === "youtube" &&  <iframe src={link} title={title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    }
                    {type ==="twitter" && <blockquote className="twitter-tweet">
                        <a href={link}></a> 
                    </blockquote>
                    
                    }
        </span>
    )
}