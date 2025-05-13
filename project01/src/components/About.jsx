import React from 'react'
import User from './User';
import UserClass from './UserClass';
import UserContext from '../utils/UserContext' 

class About extends React.Component {
    constructor(props){
        super(props);

        // console.log("Parent Constructor");
        
    }

    componentDidMount() {
        // console.log("Parent Component Did Mount");
        
    }
    render(){
        // console.log("Parent Render");
        
        return (
            <div>
                <h1>About Class Component</h1>
                <div>
                    LoggedIn User
                    <UserContext.Consumer>
                        {({loggeedInUser}) =><h1 className='text-xl font-bold'>{loggeedInUser}</h1>}
                    </UserContext.Consumer>
                </div>
                <h2>This is React App</h2>
                {/* <User name={"Akshay Saini (function)"}/> */}
                <UserClass name={"Akshay First (class)"} location={"Samastipur"}/>
                {/* <UserClass name={"Virat Second (class)"} location={"Delhi"}/> */}
            </div>
          )
    }
}

// paarent constructor
// pparent render
// child constructor
// child render
// child componentDidMount
// parent componentDidMount

// const About = () => {
//   return (
//     <div>
//         <h1>About</h1>
//         <h2>This is React App</h2>
//         {/* <User name={"Akshay Saini (function)"}/> */}
//         <UserClass name={"Akshay (class)"} location={"Samastipur"}/>
//     </div>
//   )
// }

export default About;
