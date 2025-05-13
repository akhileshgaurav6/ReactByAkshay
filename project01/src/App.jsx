import { Outlet } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import UserContext from "./utils/UserContext";

function App() {
  const [username, setUserName] = useState();

  //authentication
  useEffect(() => {
    // Make an API call and send username and password
    const data = {
      name: "Akhilesh Gaurav",
    };
    setUserName(data.name);
  }, []);

  return (
    <UserContext.Provider value={{ loggeedInUser: username, setUserName }}>
      <div className="app">
        <Header />

        <Outlet />
      </div>
    </UserContext.Provider>
  );
}

export default App;
