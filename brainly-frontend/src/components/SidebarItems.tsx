import { ReactElement } from "react"
export function SidebarItems({Text, Icon}:{
    Text: string;
    Icon: ReactElement;
}){
    return (
        <div className="flex  gap-5 w-full">
            {Icon}{Text}
        </div>
    )
}