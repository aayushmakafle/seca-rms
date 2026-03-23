import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router"

const UserDetails = () => {
    let { id } = useParams()
    let navigator = useNavigate()
    let handleGoToHome = () => {
        //navigate and send data to other page
        navigator("/", { state: id })
    }
    const [users, setUsers] = useState([])
    const fetchUsers = async () => {
        try {
            let response = await fetch("https://jsonplaceholder.typicode.com/users")
            let users = await response.json()
            console.log("users:", users)
            setUsers(users)
        } catch (e) {
            console.log("catch:", e)
            alert("Something went wrong")
        } finally {
            console.log("finally called")
        }
    }
    //     fetch("https://jsonplaceholder.typicode.com/users").then(
    //         (response)=>{
    //             return response.json()
    //         }
    //     ).then(
    //         (users)=>{
    //             console.log(users)
    //         }
    //     ).catch(
    //         (e)=>{
    //             console.log("error:",e)
    //         }
    //     )
    // }
    useEffect(
        () => {
            fetchUsers()
        },
        []
    )
    let options = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    }
    const AddNewPost = async () => {
        let myPost = {
            title: 'foo foo',
            body: 'bar',
            userId: 1,
        };
        let res = await fetch('https://jsonplaceholder.typicode.com/posts', {
            ...options,
            body: JSON.stringify(myPost),
        })
        let data = await res.json()
        console.log("after new post:", data)
    }
    let putOptions={
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }, 
    }
       const UpdateNewPost = async () => {
        let myPost = {
            id:3,
            title: 'updated foo foo',
            body: 'updated bar',
            userId: 1,
        };
        let res = await fetch('https://jsonplaceholder.typicode.com/posts', {
            ...putOptions,
            body: JSON.stringify(myPost),
        })
        let data = await res.json()
        console.log("after new post:", data)
    }
    return (
        <div>
            <h3>User details</h3>
            <button onClick={AddNewPost}>Add Post</button>
            <button onClick={UpdateNewPost}>Update Post</button>
            <p>Params Id.:{id}</p>
            <button onClick={handleGoToHome}>Go to home</button>
            <h4>All Users:</h4>
            {users.length > 0 || <p>User not found</p>
            }
            {
                users && users.map(
                    (u) => {
                        return (
                            <p key={u.id}>{u.name},{u.email}</p>
                        )
                    }
                )
            }
        </div>
    )
}
export default UserDetails