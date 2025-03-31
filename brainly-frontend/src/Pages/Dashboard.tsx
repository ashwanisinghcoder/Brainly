
import { useState } from 'react';
import { Button } from '../components/Button';
import{ PlushIcon } from '../Icons/PlushIcon';
import { ShareIcon } from '../Icons/ShareIcon';
import { Card } from '../components/Card';
import { CreateContentModal } from '../components/CreateContentModal';
import { useContent } from '../hooks/useContent';
import { Sidebar } from '../components/Sidebar';
export  function   Dashboard() {
    const [modalOpen, setOpen] = useState(true);
    const contents = useContent();
    return (
        <div>
        <Sidebar/>
        <div className="ml-72  flex-wrap color-black">
        <CreateContentModal  open={modalOpen} onClose={() => {
            setOpen(false)
        }}/>
            <div className='flex justify-end align-end'>
            <div onClick={() => {
                setOpen(true)
            }}>
            <Button variant={"primary"} text={"Add Content"} startIcon={<PlushIcon />}></Button>
            </div>
            <Button variant={"secondary"} text={"hi there"} startIcon={<ShareIcon/>}/>
    </div>
    <div className="flex gap-10 flex-wrap p-10">
            {contents.map((contents: any)=>{
                return <Card title={contents.title} link={contents.link} type={contents.type}/>
            })}
    </div>                  
            </div>
            </div>
    )   
}

