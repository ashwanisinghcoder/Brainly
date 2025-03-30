import { NoteBookIcon } from "../Icons/NoteBookIcon";
import { ShareIcon } from "../Icons/shareIcon";
import { DeleteIcon } from "../Icons/DeleteIcon";
interface CardProps{
    title: string;
    link: string;
    type: "twitter" | "youtube";
}
export function Card({title , link, type }: CardProps){
    return(
        <div className=" rounded-md p-2 m-3 w-72 h-72 flex  flex-col  border-slate-300 border  gap-10 ">
                <div className="flex w-full gap-20 flex-row items-end justify-space-between  text-black w-40 h-10  rounded-md  ">
                <div className="flex  flex-row items-center justify-space-between  text-black w-40 h-10  rounded-md ">
                    <NoteBookIcon/>
                    {title} 
                </div>
                <div  className="flex  flex-row items-center justify-space-between   w-10 h-10 rounded-md 
                ">
                    <a href={link} target="_blank">
                        <ShareIcon/>
                    </a>
                    
                    <DeleteIcon/>
                </div>
                </div>
                <div className="flex flex-col gap-10">
                {type === "youtube" &&  <iframe src={link.replace("watch","embed")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    }
                    </div>
                    <div className="flex flex-col bg-red-200 rounded-md p-2 gap-10">
                    {type ==="twitter" && <blockquote className="twitter-tweet">
                    <a href={link.replace("x.com","twitter.com")} target="_blank"></a>
                </blockquote>
                }
                </div>
        </div>
    )
}