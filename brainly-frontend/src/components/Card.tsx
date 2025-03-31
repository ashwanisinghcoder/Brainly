import { NoteBookIcon } from "../Icons/NoteBookIcon";
import { ShareIcon } from "../Icons/ShareIcon";
import { DeleteIcon } from "../Icons/DeleteIcon";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useEffect, useState } from "react";

interface CardProps {
    title: string;
    link: string;
    type: "twitter" | "youtube";
    }

    export function Card({ title, link, type }: CardProps) {
    const [contents, setContents] = useState<any[]>([]); // Ensure contents is an array
    console.log(contents.map((content: any) => content._id));
    console.log(contents.length);
    console.log(contents[0]);
    console.log(typeof contents);
    console.log(contents.map((content: any) => content._id));
    useEffect(() => {
        // Fetch content list on component mount
        axios
        .get(`${BACKEND_URL}/api/v1/content`, {
            headers: {
            Authorization: localStorage.getItem("Authorization"),
            },
        })
        .then((res) => {
            console.log(res.data); // Check if the data is an array
            //@ts-ignore
            setContents(res.data.content);
        })
        .catch((error) => {
            console.error("Error fetching content:", error);
        });
    }, []);

    // Delete content function
    const deleteContent = (contentId: string) => {
        axios
        .delete(`${BACKEND_URL}/api/v1/content/${contentId}`, {
            headers: {
            Authorization: localStorage.getItem("Authorization"),
            },
        })
        .then((response) => {
            console.log("Content deleted:", response.data);
            // Optionally, update the UI to remove the deleted content from the list
            setContents(contents.filter((content: any) => content._id !== contentId));
        })
        .catch((error) => {
            console.error("Error deleting content:", error);
        });
    };

    return (
        <div>
            {contents.map((content) => (
            <div key={content._id} className="rounded-md flex flex-col border-slate-300 border">
                <div className="flex w-full gap-20 flex-row items-end justify-space-between text-black rounded-md">
                <div className="flex flex-row items-center justify-space-between text-black w-40 h-10 rounded-md">
                    <NoteBookIcon />
                    {title}
                </div>
                <div className="flex flex-row items-center justify-space-between w-10 h-10 rounded-md">
                    <a href={link} target="_blank">
                    <ShareIcon />
                    </a>
                    <div
                    onClick={() => deleteContent(content._id)} // Pass the specific content's _id
                    className="cursor-pointer"
                    >
                    <DeleteIcon />
                    </div>
                </div>
                </div>
                <div className="flex flex-col gap-10">
                {type === "youtube" && (
                    <iframe
                    src={link.replace("watch", "embed").replace("?v=", "/")}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share "
                    allowFullScreen
                    />
                )}
                </div>
                <div className="flex rounded-md p-2 gap-10">
                {type === "twitter" && (
                    <blockquote className="twitter-tweet">
                    <a href={link.replace("x.com", "twitter.com")} target="_blank"></a>
                    </blockquote>
                )}
                </div>
            </div>
            ))}
        </div>
    );
}