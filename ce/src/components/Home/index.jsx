import { Link } from "react-router-dom"

const home=({userData})=>{
    const users = Array(userData.users)
    const objUsers = Object.keys(users[0] || {})
    return (
        <>
            
            {objUsers.map((user)=><Link key={user} to={`/customer/${user}`}>{user}</Link>)}
            {/* {objUsers.map((user)=><li key={user}>{user}</li>)} */}
        </>
    )
}
export default home