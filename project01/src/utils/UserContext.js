import { createContext } from "react";

const UserContext = createContext({
    loggeedInUser: "Default User",
});

export default UserContext;