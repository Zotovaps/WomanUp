import {useState} from "react";

export const useFormInput = (init) => {
    const [value, setValue] = useState(init)

    const onChange = (e) => {
        setValue(e.target.value)
    }

    return{
        value,
        setValue,
        onChange
    }
}

