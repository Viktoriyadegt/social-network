type ActionsTypes =
    ReturnType<typeof followAC>
    | ReturnType<typeof unFollowAC>
    | ReturnType<typeof setUsersAC>

type PhotosType = {
    small: string
    large:string
}

export type UsersPropsType = {
    id: number
    name: string
    photos: PhotosType
    followed:boolean
    status: string
    //location: LocationPropsType
}

export type LocationPropsType = {
    city: string
    country: string
}



export type InitialStateType = {
    users: Array<UsersPropsType>
}
const initialState:InitialStateType = {
    users: []
}
const UsersReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case "FOLLOW": {
            return {
                ...state,
                users: state.users.map(m => m.id === action.payload.userId ? {...m, followed: true} : m)
            }
        }
        case "UNFOLLOW": {
            return {
                ...state,
                users: state.users.map(m => m.id === action.payload.userId ? {...m, followed: false} : m)
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

export const setUsersAC = (users: Array<UsersPropsType>) => ({
    type: 'SET_USERS',
    payload:{users}
}as const)


export default UsersReducer;