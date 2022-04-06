import {AppStateType} from "../redux/redux-store";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import Users from "./Users";
import {followAC, InitialStateType, setUsersAC, unFollowAC, usersPropsType} from "../redux/users-reducer";

export type UsersPageType = {
    users: Array<usersPropsType>
}
type MapStatePropsType = {
    usersPage: InitialStateType
}
type MapDispatchPropsType = {
    followAC : (usersId:number)=>void
    unFollowAC: (usersId:number)=>void
    setUsersAC: (users:Array<usersPropsType>)=>void
}

export type UsersPropsType = MapDispatchPropsType & MapStatePropsType

const mapStateToProps = (state:AppStateType):MapStatePropsType => {
    return {
        usersPage: state.usersPage
    }
}

const mapDispatchToProps = (dispatch:Dispatch) => {
    return {
        followAC:(usersId:number)=>{
            dispatch(followAC(usersId))
        },
        unFollowAC:(usersId:number)=>{
            dispatch(unFollowAC(usersId))
        },
         setUsersAC: (users:Array<usersPropsType>)=>{
           dispatch(setUsersAC(users))
         }
    }

}
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)