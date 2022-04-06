import {UsersType} from "./UsersContainer"
import styles from "./Users.module.css";
import axios from 'axios'
import {UsersPropsType} from "../redux/users-reducer";
import userPhoto from '../../images/images.png'
import React from "react";

type PropsType = {
    users: Array<UsersType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UsersType>) => void
}
type ResponseType = {
    items: Array<UsersPropsType>
    totalCount: number
    error: string
}

class Users extends React.Component<UsersType> {
    componentDidMount() {
        axios.get<ResponseType>("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                return this.props.setUsersAC(response.data.items);
            })
    }

    render() {
        return <div>

            {this.props.usersPage.users.map(m => <div key={m.id}>
                <span>
                    <div>
                        <img src={m.photos.small !== null ? m.photos.small : userPhoto} className={styles.photo}/>
                    </div>
                    <div>{
                        m.followed
                            ? <button onClick={() => {
                                this.props.unFollowAC(m.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                this.props.followAC(m.id)
                            }}>Follow</button>
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
    }


};

export default Users;