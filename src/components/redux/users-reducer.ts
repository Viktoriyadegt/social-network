type ActionsTypes =
    ReturnType<typeof followAC>
    | ReturnType<typeof unFollowAC>
    | ReturnType<typeof setUsersAC>


export type usersPropsType = {
    id: number
    follow: boolean
    fullName: string
    photo: string
    status: string
    location: LocationPropsType
}

export type LocationPropsType = {
    city: string
    country: string
}



export type InitialStateType = {
    users: Array<usersPropsType>
}
const initialState:InitialStateType = {
    users: []
}
const UsersReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case "FOLLOW": {
            return {
                ...state,
                users: state.users.map(m => m.id === action.payload.userId ? {...m, follow: true} : m)
            }
        }
        case "UNFOLLOW": {
            return {
                ...state,
                users: state.users.map(m => m.id === action.payload.userId ? {...m, follow: false} : m)
            }
        }
        case "SET_USERS":{
            return {
                ...state,
                users:[...state.users, ...action.payload.users]

            }
        }

        default :
            return state;
    }

}


export const followAC = (userId: number) => ({
    type: 'FOLLOW',
    payload: {userId}

} as const)

export const unFollowAC = (userId: number) => ({
    type: 'UNFOLLOW',
    payload: {userId}
} as const)

export const setUsersAC = (users: Array<usersPropsType>) => ({
    type: 'SET_USERS',
    payload:{users}
}as const)


export default UsersReducer;