import React ,{Component} from 'react'
class Profile extends Component {

    componentDidMount() {
        let token = localStorage.getItem("token")
        token ? (
        fetch(`http://localhost:3000/profile`,{
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(res => res.json())
        .then(data => {
            this.setState({
                tweets: data.tweets,
                comments: data.comments,
                user: data.user.username
            })
        })
    ) : this.props.history.push("/") 
    }
    
     render(){
        return (
            <div className="Profile">
            <h1>Hello {`${this.state.user}}`}</h1>
            </div>
        )
        }
}

export default Profile