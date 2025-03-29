
import { SidebarItems } from "./SidebarItems"
import { TwitterIcon } from "../Icons/TwitterIcon"
import { VideoIcon } from "../Icons/VideosIcon"
import { NoteBookIcon } from "../Icons/NoteBookIcon"
import { TagsIcon } from "../Icons/TagsIcon"
import { LinkIcon } from "../Icons/LinkIcon"
import { BrainIcon } from "../Icons/BrainIcon"
export function Sidebar(){
    return ( 
        <div  className="h-screen fixed left-0 border-r w-72 bg-white border-r-2 flex flex-col gap-10">
        <div className="px-20">
        
        <h1> {<BrainIcon/>}Second Brain</h1>
        </div>
        <div className="px-20">
        <div className="flex flex-col gap-5">
            <div className="hover:bg-gray-200  p-2 rounded-md cursor-pointer">
            <SidebarItems Text={"Tweets"} Icon={<TwitterIcon/>}/>
            </div>
            <div className="hover:bg-gray-200  p-2 rounded-md cursor-pointer">
            <SidebarItems Text={"Videos"} Icon={<VideoIcon/>}/>
            </div>
            <div className="hover:bg-gray-200  p-2 rounded-md cursor-pointer">
            <SidebarItems Text={"Tags"} Icon={<TagsIcon/>}/>
            </div>
            <div className="hover:bg-gray-200  p-2 rounded-md cursor-pointer">
            <SidebarItems Text={"Links"} Icon={<LinkIcon/>}/>
            </div>
            
            <div className="hover:bg-gray-200 rounded-md text-center cursor-pointer text-lg">
            <SidebarItems Text={"Documents"} Icon={<NoteBookIcon/>}/>
            </div>
        </div>
        </div>
        </div>
    )
}