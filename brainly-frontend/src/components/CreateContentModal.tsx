import { ReactElement } from "react";
import { CrossIcon } from "../Icons/CrossIcon";
import { Button } from "./Button";
import { PlushIcon } from "../Icons/PlushIcon";
import { InputField } from "./Input";
export function CreateContentModal({open ,onClose}: {open: boolean, onClose: ()=>void}): ReactElement{
    return (
        <div>
        {open && <div className="w-screen h-screen fixed top-0 left-0 bg-gray-700 bg-opacity-90 flex justify-center items-center">
            <div>
                <div className="flex   bg-white rounded-md  ">
                    <div className="bg-white opacity-90 rounded  w-full h-full flex flex-col justify-center p-4 gap-4">
                        <div className="flex flex-end justify-end ">
                            <div onClick={onClose}>
                            <CrossIcon/>
                            </div>
                        </div> 
                        <div className="flex flex-col gap-5">
                        <div className="flex flex-col gap-5  border-gray-300">
                            <InputField   placeholder={"Title"}/>
                            <InputField placeholder={"Link"}/>
                            Type 
                            <div>
                                
                            </div>
                        </div>
                        <Button  variant={"primary"} text={"Add"} startIcon={<PlushIcon/>}></Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>}
        </div>
    )
}
