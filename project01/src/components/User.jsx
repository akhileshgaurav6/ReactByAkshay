import { useEffect, useState } from "react";

const User = ({name}) => {
    const [count] = useState(0);
    const [count2] = useState(1);

    useEffect(() => {

    }, [])


    return(
        <div className="user-card">
            <h1>Count = {count}</h1>
            <h1>Count2 = {count2}</h1>
            <h1>Name: {name}</h1>
            <h2>Location: Samastipur</h2>
            <h3>Contact: @akshaymarch7</h3>
        </div>
    );
};

export default User;