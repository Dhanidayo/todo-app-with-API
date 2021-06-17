
import { useState } from "react";

//a hook that allows us to get the value the user inputs in the email and password fields
const UseInput = (initialValue) => {
    const [value, setValue] = useState(initialValue);

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    return {
        value,
        onChange: handleChange
    };
};

export default UseInput;