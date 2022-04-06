import React from "react";
import ProfileReducer, {addPostAC, onChangeNewPostAC} from "./profile-reducer";
import DialogsReducer, {sendMessageAC, updateNewMessageBodyAC} from "./dialogs-reducer";
import SideBareReducer from "./sideBare-reducer";



let rerenderEntireTree = () => {
    console.log('State changed')
}
 type messagePropsType = {
    id: number
    message: string
}
type dialogPropsType = {
    id: number
    name: string
}
 type postPropsType = {
    id: number
    message: string
    likesCount: number
}

type dialogsPageType = {
    dialogs: Array<dialogPropsType>
    messages: Array<messagePropsType>
    newMessageBody: string


}
 type profilePageType = {
    posts: Array<postPropsType>
    newChangePost: string


}

 export type sideBarePageType = {}
 type rootStateType = {
    profilePage: profilePageType
    dialogsPage: dialogsPageType
    sideBare: sideBarePageType

}


 export type StorePropsType = {
    _state: rootStateType
    addPost: () => void
    onChangeNewPost: (newChangePost: string) => void
    subscribe: (observer: () => void) => void
    getState: () => rootStateType
    dispatch: (action: ActionsTypes) => void


}
 type ActionsTypes =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof onChangeNewPostAC>
    | ReturnType<typeof updateNewMessageBodyAC>
    | ReturnType<typeof sendMessageAC>


 export const store: StorePropsType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi, how are you?", likesCount: 5},
                {id: 2, message: "It's my first post", likesCount: 65},
                {id: 3, message: "Blablabla", likesCount: 78},
                {id: 4, message: "Hi, my friend!", likesCount: 56},
                {id: 5, message: "YoYoYo", likesCount: 98}
            ],
            newChangePost: 'naruto'
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: "Dasha"},
                {id: 2, name: "Katya"},
                {id: 3, name: "Lena"},
                {id: 4, name: "Galia"},
                {id: 5, name: "Sweta"}
            ],
            messages: [
                {id: 1, message: "Hi"},
                {id: 2, message: "How is your it-kamasutra?"},
                {id: 3, message: "Yu"},
                {id: 4, message: "Yu"},
                {id: 5, message: "Yu"},
            ],
            newMessageBody: ''
        },
        sideBare: {}
    },
    subscribe(observer: () => void) {
        rerenderEntireTree = observer

    },
    onChangeNewPost(newChangePost: string) {
        this._state.profilePage.newChangePost = newChangePost
        rerenderEntireTree()

    },
    addPost() {
        const newPost: postPropsType = {
            id: 6,
            message: this._state.profilePage.newChangePost,
            likesCount: 0
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newChangePost = ''
        rerenderEntireTree()
    },
    getState() {
        return this._state
    },
    dispatch(action) {
        this._state.profilePage = ProfileReducer(this._state.profilePage, action)
        this._state.dialogsPage = DialogsReducer(this._state.dialogsPage, action)
        this._state.sideBare = SideBareReducer(this._state.sideBare, action)
        rerenderEntireTree()
    }
}