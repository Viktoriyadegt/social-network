import {UsersPropsType} from "./UsersContainer"
import styles from "./Users.module.css";


const Users = (props: UsersPropsType) => {
    if (props.usersPage.users.length === 0) {
        props.setUsersAC
        ([
            {
                id: 1,
                follow: true,
                fullName: "Dasha",
                photo: 'https://cdn.dribbble.com/users/93815/screenshots/16078083/media/5563e9e1c843d2c013bf29e486073ca2.png?compress=1&resize=400x300&vertical=top',
                status: 'I am a boss',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: 2,
                follow: true,
                fullName: "Katya",
                photo:'https://img.freepik.com/free-vector/samurai-warrior_157713-74.jpg' ,
                status: 'I am a boss',
                location: {city: 'Kiev', country: 'Ukraine'}
            },
            {
                id: 3,
                follow: true,
                fullName: "Lena",
                photo: 'https://www.dictionary.com/e/wp-content/uploads/2019/02/1000x700-ninja.jpg',
                status: 'I am a boss',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: 4,
                follow: true,
                fullName: "Galia",
                photo: 'https://thumbs.dreamstime.com/b/concept-illustration-samurai-red-sun-background-vector-concept-illustration-samurai-122066379.jpg',
                status: 'I am a boss',
                location: {city: 'Gomel', country: 'Belarus'}
            }
        ])
    }

    return (
        <div>
            {props.usersPage.users.map(m => <div key={m.id}>
                <span>
                    <div >
                        <img src={m.photo} className={styles.photo}/>
                    </div>
                    <div>{
                        m.follow
                            ? <button onClick={() => {props.unFollowAC(m.id)}}>Unfollow</button>
                            : <button onClick={() => {props.followAC(m.id)}}>Follow</button>
                    }</div>
                </span>
                <span>
                    <span>
                        <div>{m.fullName}</div>
                        <div>{m.status}</div>
                    </span>
                    <span>
                        <div>{m.location.country}</div>
                        <div>{m.location.city}</div>
                    </span>
                </span>
            </div>)}
        </div>
    )


};

export default Users;