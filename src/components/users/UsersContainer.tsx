import {AppStateType} from "../redux/redux-store";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import Users from "./Users";
import {
    followAC,
    InitialStateType,
    setCurrentPageAC, setTotalUserCountAC,
    setUsersAC,
    unFollowAC,
    UsersPropsType
} from "../redux/users-reducer";

export type UsersPageType = {
    users: Array<UsersType>
}
type MapStatePropsType = {
    usersPage: InitialStateType
}
type MapDispatchPropsType = {
    followAC : (usersId:number)=>void
    unFollowAC: (usersId:number)=>void
    setUsersAC: (users:Array<UsersPropsType>)=>void
    setCurrentPageAC: (currentPage:number)=>void
    setTotalUserCountAC:(userCount:number)=>void
}

export type UsersType = MapDispatchPropsType & MapStatePropsType

const mapStateToProps = (state:AppStateType ):MapStatePropsType => {
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
         setUsersAC: (users:Array<UsersPropsType>)=>{
           dispatch(setUsersAC(users))
         },
        setCurrentPageAC: (currentPage: number) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUserCountAC: (userCount:number) => {
            dispatch(setTotalUserCountAC(userCount))
        }
    }

}
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)