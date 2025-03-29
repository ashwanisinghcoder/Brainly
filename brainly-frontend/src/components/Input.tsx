interface InputFieldProps{
    placeholder: string;
    reference?:any;
}

export function InputField({ placeholder ,reference}:InputFieldProps)
    {
    return (<>
    <input type="text" className="bg-white rounded-md px-4 py-2 border " placeholder={placeholder} ref={reference}/>
    </>
    )
}