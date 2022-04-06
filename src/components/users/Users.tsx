import {UsersType} from "./UsersContainer"
import styles from "./Users.module.css";
import axios from 'axios'
import {UsersPropsType} from "../redux/users-reducer";
import userPhoto from '../../images/images.png'

type PropsType = {
    users: Array<UsersType>
    follow: (userId:number)=>void
    unfollow: (userId:number)=>void
    setUsers:(users:Array<UsersType>)=>void
}
type ResponseType = {
    items: Array<UsersPropsType>
    totalCount: number
    error:string
}

const Users = (props: UsersType) => {
    const getUsers =() =>{
        if (props.usersPage.users.length === 0) {
            axios.get<ResponseType>("https://social-network.samuraijs.com/api/1.0/users")
                .then(response => {
                    return props.setUsersAC(response.data.items);
                })
        }
    }


    return (
        <div>
            <button onClick={getUsers}>Get Users</button>
            {props.usersPage.users.map(m => <div key={m.id}>
                <span>
                    <div >
                        <img src={m.photos.small !== null ? m.photos.small : userPhoto} className={styles.photo}/>
                    </div>
                    <div>{
                        m.followed
                            ? <button onClick={() => {props.unFollowAC(m.id)}}>Unfollow</button>
                            : <button onClick={() => {props.followAC(m.id)}}>Follow</button>
                    }</div>
                </span>
                <span>
                    <span>
                        <div>{m.name}</div>
                        <div>{m.status}</div>
                    </span>
                    <span>
                        <div>{'m.location.country'}</div>
                        <div>{'m.location.city'}</div>
                    </span>
                </span>
            </div>)}
        </div>
    )


};

export default Users;