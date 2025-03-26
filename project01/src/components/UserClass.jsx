import React from "react";

class UserClass extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            userInfo: {
                name: 'Virat',
                location: 'Delhi',
                // avatar_url: 'https/dummy.com',
            },
        };
        console.log(this.props.name + "Child Constructor");
        

        // console.log(props);
        
    }

    async componentDidMount() {
        // console.log(this.props.name + "Child Component Did Mount");
        // Api Call

        const data = await fetch('https://api.github.com/users/akshaymarch7');
        const json = await data.json();

        this.setState({
            userInfo: json,
        });

        console.log(json);
        
        
    }

    componentDidUpdate(){
        console.log("Component Did Update");
        
    }

    componentWillUnmount () {
        console.log("Component Will Unmount");
        
    }

    render(){
        // const {name, location} = this.props;
        // const {count} = this.state

        console.log(this.props.name + "Child Render");
        const {name, location, avatar_url, bio} = this.state.userInfo;
        return(
            <div className="user-card">
                <img src={avatar_url} alt="" />
                <h1>Name: {name}</h1>
                <h2>Location: {location}</h2>
                <h2>Bio: {bio}</h2>
                <h3>Contact: @akshaymarch7</h3>
            </div>
        );
    }
}

export default UserClass;

//first constructor is called then
// render is called then
//componentDidMount is called