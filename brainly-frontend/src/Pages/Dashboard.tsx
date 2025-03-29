
import { useState } from 'react';
import { Button } from '../components/Button';
import{ PlushIcon } from '../Icons/PlushIcon';
import { ShareIcon } from '../Icons/ShareIcon';
import { Card } from '../components/Card';
import { CreateContentModal } from '../components/CreateContentModal';
import { Sidebar } from '../components/Sidebar';
export  function   Dashboard() {
  const [modalOpen, setOpen] = useState(true);
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
      <div className="flex gap-10 flex-wrap">
      <Card title={"Project Idea"} link={"https://www.youtube.com/watch?v=dQw4w9WgXcQ"} type={"youtube"}/>
      <Card title={"Project Idea"} link={"https://x.com/v_tarang25424/status/1905455815047454782".replace("x.com", "twitter.com")} type={"twitter"}/>
      <Card title={"Project Idea"} link={"https://x.com/v_tarang25424/status/1905455815047454782".replace("x.com", "twitter.com")} type={"twitter"}/>
      <Card title={"Project Idea"} link={"https://www.youtube.com/watch?v=dQw4w9WgXcQ"} type={"youtube"}/>
      <Card title={"Project Idea"} link={"https://www.youtube.com/watch?v=dQw4w9WgXcQ"} type={"youtube"}/>
      <Card title={"Project Idea"} link={"https://www.youtube.com/watch?v=dQw4w9WgXcQ"} type={"youtube"}/>
      </div>
    </div>
    </div>
  )
}

