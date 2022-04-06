import {sendMessageAC, updateNewMessageBodyAC} from "./dialogs-reducer";

type ActionsTypes =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof onChangeNewPostAC>
    | ReturnType<typeof updateNewMessageBodyAC>
    | ReturnType<typeof sendMessageAC>

type postPropsType = {
    id: number
    message: string
    likesCount: number
}

export type profilePageType = {
    posts: Array<postPropsType>
    newChangePost: string
}
export type PostPropsType = {
    id: number
    message: string
    likesCount: number
}
export type InitialStateType = typeof initialState
let initialState = {
        posts: [
            {id: 1, message: "Hi, how are you?", likesCount: 5},
            {id: 2, message: "It's my first post", likesCount: 65},
            {id: 3, message: "Blablabla", likesCount: 78},
            {id: 4, message: "Hi, my friend!", likesCount: 56},
            {id: 5, message: "YoYoYo", likesCount: 98}
        ] as Array<PostPropsType>,
        newChangePost: 'naruto'
    }


const ProfileReducer = (state:InitialStateType = initialState, action:ActionsTypes):InitialStateType => {
    switch (action.type) {
        case "ADD-POST": {
            const newPost: postPropsType = {
                id: 6,
                message: state.newChangePost,
                likesCount: 0
            }
            return  {
                ...state,
                posts: [...state.posts, newPost],
                newChangePost: ''
            }

        }
        case "ON-CHANGE-NEW-POST":
            return {
                ...state,
                newChangePost: action.newChangePost
            }
        default:
            return state
    }
}

export type AddPostACType = {
    type: 'ADD-POST'
}

export type OnChangeNewPostACType = {
    type: 'ON-CHANGE-NEW-POST'
    newChangePost: string
}
export const addPostAC = ():AddPostACType => ({type: 'ADD-POST'} as const)

export const onChangeNewPostAC = (newChangePost:string):OnChangeNewPostACType => ({
    type: 'ON-CHANGE-NEW-POST',
    newChangePost: newChangePost
} as const)



export default ProfileReducer